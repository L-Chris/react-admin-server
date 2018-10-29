import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dish.entity';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>
  ) {}

  async findAll(@Query() query): Promise<Dish[]> {
    return await this.dishRepository.find();
  }

  async save(body): Promise<Dish> {
    return await this.dishRepository.save(body)
  }
}
