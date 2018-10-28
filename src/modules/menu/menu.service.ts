import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { Dish } from 'modules/dish/dish.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private readonly menuRepository: Repository<Menu>,
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>
  ) {}

  async findAll(): Promise<Menu[]> {
    return await this.menuRepository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.dishes', 'dish')
      .getMany()
  }

  async save(body): Promise<Menu> {
    const { dishes: dishIds } = body
    const dishes = await this.dishRepository.findByIds(dishIds)
    body.dishes = dishes
    return await this.menuRepository.save(body)
  }
}
