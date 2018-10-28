import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { ValidationPipe } from 'pipes/validation.pipe';
import { UpdateOrderDto } from './update-order.dto';
import { CreateOrderDto } from './create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('list')
  async findAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }

  @Post('update')
  async update(@Body(new ValidationPipe()) updateOrderDto: UpdateOrderDto) {
    return await this.orderService.save(updateOrderDto)
  }

  @Post('add')
  async add(@Body(new ValidationPipe()) createOrderDto: CreateOrderDto) {
    return await this.orderService.save(createOrderDto)
  }
}
