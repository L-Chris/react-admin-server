import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrderModule } from './modules/order/order.module';
import { MenuModule } from './modules/menu/menu.module';
import { DishModule } from './modules/dish/dish.module';
import { AuthMiddleware } from 'middlerwares/auth.middleware';
import { UserController } from 'modules/user/user.controller';
import { DishController } from 'modules/dish/dish.controller';
import { MenuController } from 'modules/menu/menu.controller';
import { OrderController } from 'modules/order/order.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
    OrderModule,
    MenuModule,
    DishModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(UserController, DishController, MenuController, OrderController)
  }
}
