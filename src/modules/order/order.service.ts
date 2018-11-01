import { Injectable, HttpException } from '@nestjs/common';
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

  async find({ type }): Promise<Order[]> {
    let queryBuilder = await this.orderRepository.createQueryBuilder('order')
    if (type !== undefined) {
      queryBuilder = queryBuilder.where('type = :type', { type })
    }
    return queryBuilder
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.shop', 'shop')
      .leftJoinAndSelect('order.dishes', 'dish')
      .getMany()
  }

  async findByTypeAndUserId ({ user, type }) {
    return await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .where('user.id = :id', { id: user.id })
      .where('type = :type', { type })
      .getMany()
  }

  async checkOrderTypeCount (body) {
    const { user, type } = body
    const orders = await this.findByTypeAndUserId({user, type})
    if (type !== '0' && orders.length) throw new HttpException('已申请订单！', 204)
  }

  async add(body): Promise<Order> {
    this.checkOrderTypeCount(body)
    const { dishes: dishIds } = body
    const dishes = await this.dishRepository.findByIds(dishIds)
    body.dishes = dishes
    body.price = dishes.reduce((pre, _) => {
      pre += _.price
      return pre
    }, 0)
    body.createTime = Date.now().toString()
    return await this.orderRepository.save(body)
  }

  async update (body): Promise<Order> {
    const { dishes: dishIds } = body
    const dishes = await this.dishRepository.findByIds(dishIds)
    body.dishes = dishes
    delete body.type
    return await this.orderRepository.save(body)
  }
}
