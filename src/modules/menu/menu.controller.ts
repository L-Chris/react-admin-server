import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('list')
  async findAll(): Promise<Menu[]> {
    return await this.menuService.findAll();
  }
}
