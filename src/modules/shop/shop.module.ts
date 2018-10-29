import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { Shop } from './shop.entity';
import { Dish } from 'modules/dish/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop, Dish])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
