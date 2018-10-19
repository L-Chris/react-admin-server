import { Get, Post, Controller, Query, Body } from '@nestjs/common';
import { Cookie } from 'nest-decorators';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ValidationPipe } from 'pipes/validation.pipe';
import { UpdateUserDto } from './update-user.dto';
import { CreateUserDto } from './create-user.dto';

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

  @Post('update')
  async update(@Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
    return await this.userService.save(updateUserDto)
  }

  @Post('add')
  async add(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return await this.userService.save(createUserDto)
  }
}
