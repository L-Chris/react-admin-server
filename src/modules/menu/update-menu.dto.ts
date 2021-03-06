import { IsOptional } from "class-validator";
import { CreateMenuDto } from "./create-menu.dto";
import { Dish } from "modules/dish/dish.entity";

export class UpdateMenuDto extends CreateMenuDto {
  @IsOptional()
  name: string;

  @IsOptional()
  dishes: Dish[];
}