import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from 'interceptors/transform.interceptor';
const cookieParser = require('cookie-parser')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())

  app.useGlobalInterceptors(new TransformInterceptor())

  await app.listen(3001);
}
bootstrap();
