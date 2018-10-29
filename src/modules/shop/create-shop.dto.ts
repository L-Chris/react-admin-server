import { IsString, Length, IsArray, IsOptional } from 'class-validator'
import { Dish } from "modules/dish/dish.entity";

export class CreateShopDto {
  @IsString()
  @Length(1, 20)
  readonly name: string

  @IsOptional()
  @IsArray()
  dishes: Dish[];
}