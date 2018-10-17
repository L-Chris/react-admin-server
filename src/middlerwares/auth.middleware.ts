import * as jwt from 'jsonwebtoken'
import * as cookieParser from 'cookie'
import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
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
      if (!token) return this.handleBadRequest(req, res)
      const userInfo: any = jwt.verify(token, 'react_admin')
      const user = await this.userRepository.findOne({
        where: {
          id: userInfo.id,
          account: userInfo.account
        }
      })
      if (!user) return this.handleBadRequest(req, res)
      await next()
    }
  }

  handleBadRequest (req, res) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      data: {},
      status: 401,
      message: 'UNAUTHORIZED'
    })
  }
}