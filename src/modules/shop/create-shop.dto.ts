import { IsString, Length, IsOptional } from 'class-validator'
import { Menu } from 'modules/menu/menu.entity';

export class CreateShopDto {
  @IsString()
  @Length(1, 20)
  readonly name: string

  @IsOptional()
  readonly menu: Menu
}