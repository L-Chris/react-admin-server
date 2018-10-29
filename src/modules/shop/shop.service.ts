import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './shop.entity';
import { Dish } from 'modules/dish/dish.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop) private readonly shopRepository: Repository<Shop>,
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>
  ) {}

  async findAll(): Promise<Shop[]> {
    return await this.shopRepository
      .createQueryBuilder('shop')
      .leftJoinAndSelect('shop.dishes', 'dish')
      .getMany()
  }

  async findOne({ id }): Promise<Shop> {
    return await this.shopRepository.findOne({
      where: { id },
      relations: ['dishes']
    })
  }

  async save (body): Promise<Shop> {
    const { dishes: dishIds } = body
    const dishes = await this.dishRepository.findByIds(dishIds)
    body.dishes = dishes
    return await this.shopRepository.save(body)
  }
}
