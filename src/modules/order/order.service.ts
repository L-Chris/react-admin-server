import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import * as moment from 'dayjs';
import { Order } from './order.entity';
import { Dish } from 'modules/dish/dish.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>
  ) {}

  async find({ type, date }): Promise<Order[]> {

    const params: any = {}

    if (type) params.type = type;

    if (date) {
      const formatDate = moment(date).format('YYYY-MM-DD')
      const start = moment(formatDate)
      const end = start.add(1, 'day')

      params.createTime = Between(start.toDate().valueOf(), end.toDate().valueOf())
    }

    params.relations = ['user', 'shop', 'dishes']

    return await this.orderRepository.find(params)
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
    return type !== '1' && orders.length
  }

  async add(body): Promise<Order> {
    const isOver = this.checkOrderTypeCount(body)
    if (isOver) throw new HttpException('已申请订单！', 204)

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
