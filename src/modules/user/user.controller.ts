import { Get, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
