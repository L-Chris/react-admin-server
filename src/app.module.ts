import { Module, MiddlewareConsumer, CacheModule, CacheInterceptor } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core'
import { Connection } from 'typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrderModule } from './modules/order/order.module';
import { DishModule } from './modules/dish/dish.module';
import { ShopModule } from 'modules/shop/shop.module';
import { AuthMiddleware } from 'middlerwares/auth.middleware';
import { UserController } from 'modules/user/user.controller';
import { DishController } from 'modules/dish/dish.controller';
import { OrderController } from 'modules/order/order.controller';
import { ShopController } from 'modules/shop/shop.controller';
import { RolesGuard } from 'modules/role/roles.decorator';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
    OrderModule,
    DishModule,
    ShopModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(UserController, DishController, OrderController, ShopController)
  }
}
