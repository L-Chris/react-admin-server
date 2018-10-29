import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Dish } from 'modules/dish/dish.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.dishes', 'dish')
      .getMany()
  }

  async save(body): Promise<Order> {
    const { dishes: dishIds } = body
    const dishes = await this.dishRepository.findByIds(dishIds)
    body.dishes = dishes
    return await this.orderRepository.save(body)
  }
}
