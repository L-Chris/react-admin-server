import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { User } from 'decorators/user.decorator';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { User as UserEntity } from 'modules/user/user.entity';
import { ValidationPipe } from 'pipes/validation.pipe';
import { UpdateOrderDto } from './update-order.dto';
import { CreateOrderDto } from './create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('list')
  async find(@Query() query): Promise<Order[]> {
    return await this.orderService.find(query);
  }

  @Post('update')
  async update(@Body(new ValidationPipe()) updateOrderDto: UpdateOrderDto) {
    return await this.orderService.update(updateOrderDto)
  }

  @Post('add')
  async add(@Body(new ValidationPipe()) createOrderDto: CreateOrderDto, @User() user: UserEntity) {
    createOrderDto.user = user
    return await this.orderService.add(createOrderDto)
  }
}
