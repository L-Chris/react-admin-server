import * as jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

  get options () {
    return {
      algorithm: 'HS256',
      expiresIn: '2 days',
      jwtid: '39935681'
    }
  }

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async sign(credentials: { account: string, password: string }): Promise<string> {
    const user = await this.userRepository.findOne({
      where: {
        account: credentials.account,
        password: credentials.password
      }
    })
    if (!user) return ''
    return await jwt.sign({ id: user.id, account: user.account }, 'react_admin', this.options)
  }
}
