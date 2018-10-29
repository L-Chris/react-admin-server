import { Get, Post, Controller, Body, Query } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from './shop.entity';
import { ValidationPipe } from 'pipes/validation.pipe';
import { UpdateShopDto } from './update-shop.dto';
import { CreateShopDto } from './create-shop.dto';

@Controller('Shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('list')
  async findAll(): Promise<Shop[]> {
    return await this.shopService.findAll();
  }

  @Get('get')
  async findOne(@Query() query): Promise<Shop> {
    return await this.shopService.findOne(query);
  }

  @Post('update')
  async update(@Body(new ValidationPipe()) updateShopDto: UpdateShopDto) {
    return await this.shopService.save(updateShopDto)
  }

  @Post('add')
  async add(@Body(new ValidationPipe()) createShopDto: CreateShopDto) {
    return await this.shopService.save(createShopDto)
  }
}
