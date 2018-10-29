import { IsOptional } from 'class-validator'
import { CreateShopDto } from './create-shop.dto'
import { Dish } from "modules/dish/dish.entity";

export class UpdateShopDto extends CreateShopDto {
  readonly id: string | number

  @IsOptional()
  readonly name: string

  dishes: Dish[];
}