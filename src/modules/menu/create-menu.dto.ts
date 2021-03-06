import { IsString, Length, IsArray } from "class-validator";
import { Dish } from "modules/dish/dish.entity";

export class CreateMenuDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsArray()
  dishes: Dish[];
}