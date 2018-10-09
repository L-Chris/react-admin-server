import { Get, Controller } from '@nestjs/common';
import { Cookie } from 'nest-decorators'
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async findAll(@Cookie() cookie): Promise<User[]> {
    console.log(cookie)
    return await this.userService.findAll();
  }
}
