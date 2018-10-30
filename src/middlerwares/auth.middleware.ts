import * as jwt from 'jsonwebtoken'
import * as cookieParser from 'cookie'
import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '../modules/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  resolve () {
    return async (req, res, next) => {
      const { token } = cookieParser.parse(req.headers.cookie || '')

      if (!token) throw new HttpException('Forbiden', 403)
      const { id, account }: any = jwt.verify(token, 'react_admin')
      if (!id || !account) return new HttpException('Forbiden', 403)
      const user = await this.userRepository.findOne({
        where: {
          id,
          account
        }
      })

      if (!user) throw new HttpException('Forbiden', 403)
      req.user = user

      await next()
    }
  }
}