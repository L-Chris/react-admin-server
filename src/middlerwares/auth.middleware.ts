import * as jwt from 'jsonwebtoken'
import { Injectable, NestMiddleware } from '@nestjs/common';
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
      // const { token } = req.cookies
      // if (!token) return res.redirect('/login');
      // const userInfo = jwt.verify(token, 'react_admin')
      // const user = await this.userRepository.findOne({
      //   where: {
      //     id: userInfo.id,
      //     account: userInfo.account
      //   }
      // })
      await next()
    }
  }
}