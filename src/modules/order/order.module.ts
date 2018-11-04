import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Dish } from 'modules/dish/dish.entity';
import { OrderSchedule } from './order.schedule';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Dish])],
  controllers: [OrderController],
  providers: [OrderService, OrderSchedule]
})
export class OrderModule {}
