import { Get, Controller, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async findAll(): Promise<User[]> {
    throw new HttpException('Forbiden', 403)
    return await this.userService.findAll();
  }
}
