import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dish])],
  providers: [DishService],
  controllers: [DishController]
})
export class DishModule {}
