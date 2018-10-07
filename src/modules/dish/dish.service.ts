import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './dish.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>
  ) {}

  async findAll(): Promise<Dish[]> {
    return await this.dishRepository.find();
  }
}
