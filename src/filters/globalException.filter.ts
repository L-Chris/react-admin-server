import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { isString } from 'util';

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    response
      .json({
        data: null,
        status: exception.getStatus(),
        message: isString(exception.message) ? exception.message : exception.message.message,
        timestamp: Date.now()
      })
  }
}