import { Controller, Get, Post, Body } from '@nestjs/common';
import { ValidationPipe } from 'pipes/validation.pipe';
import { DishService } from './dish.service';
import { Dish } from './dish.entity';
import { UpdateDishDto } from './update-dish.dto';
import { CreateDishDto } from './create-dish.dto';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get('list')
  async findAll(): Promise<Dish[]> {
    return await this.dishService.findAll();
  }

  @Post('update')
  async update(@Body(new ValidationPipe()) updateDishDto: UpdateDishDto) {
    return await this.dishService.save(updateDishDto)
  }

  @Post('add')
  async add(@Body(new ValidationPipe()) createDishDto: CreateDishDto) {
    return await this.dishService.save(createDishDto)
  }
}
