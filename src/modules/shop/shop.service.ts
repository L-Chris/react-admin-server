import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>
  ) {}

  async findAll(): Promise<Shop[]> {
    return await this.shopRepository.find();
  }

  async save (body): Promise<Shop> {
    return await this.shopRepository.save(body)
  }
}
