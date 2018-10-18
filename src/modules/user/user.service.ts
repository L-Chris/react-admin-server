import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne({ id }): Promise<User> {
    return await this.userRepository.findOne({
      where: { id }
    })
  }

  async findCurrent(token: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { token }
    })
  }

  async save (body): Promise<User> {
    return await this.userRepository.save(body)
  }
}
