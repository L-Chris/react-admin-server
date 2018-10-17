import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from 'interceptors/transform.interceptor';
import { GlobalExceptionFilter } from './filters/globalException.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new GlobalExceptionFilter())

  await app.listen(3001);
}
bootstrap();
