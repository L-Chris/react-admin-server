import { Get, Post, Controller, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Cookie } from 'nest-decorators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('get')
  async findOne(@Query() query): Promise<User> {
    return await this.userService.findOne({ id: query.id });
  }

  @Get('current')
  async findCurrent(@Cookie() cookie): Promise<User> {
    const { token } = cookie;

    return await this.userService.findCurrent(token);
  }

  @Post('save')
  async save(@Body() body) {
    return await this.userService.save(body);
  }
}
