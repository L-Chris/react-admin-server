import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    response
      .json({
        data: null,
        status: exception.getStatus(),
        message: exception.message,
        timestamp: Date.now()
      })
  }
}