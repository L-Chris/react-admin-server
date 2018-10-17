import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrderModule } from './modules/order/order.module';
import { MenuModule } from './modules/menu/menu.module';
import { DishModule } from './modules/dish/dish.module';

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
}
