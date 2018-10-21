import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';
import { ValidationPipe } from 'pipes/validation.pipe';
import { UpdateMenuDto } from './update-menu.dto';
import { CreateMenuDto } from './create-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('list')
  async findAll(): Promise<Menu[]> {
    return await this.menuService.findAll();
  }

  @Post('update')
  async update(@Body(new ValidationPipe()) updateMenuDto: UpdateMenuDto) {
    return await this.menuService.save(updateMenuDto)
  }

  @Post('add')
  async add(@Body(new ValidationPipe()) createMenuDto: CreateMenuDto) {
    return await this.menuService.save(createMenuDto)
  }
}
