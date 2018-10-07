import * as jwt from 'jsonwebtoken'
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  resolve () {
    return async (req, res, next) => {
      console.log(req.cookies)
      await next()
    }
  }
}