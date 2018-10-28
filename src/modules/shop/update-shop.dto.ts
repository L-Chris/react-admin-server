import { IsOptional } from 'class-validator'
import { CreateShopDto } from './create-shop.dto'
import { Menu } from 'modules/menu/menu.entity';

export class UpdateShopDto extends CreateShopDto {
  readonly id: string | number

  @IsOptional()
  readonly name: string

  readonly menu: Menu
}