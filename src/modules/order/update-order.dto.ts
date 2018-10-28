import { IsOptional } from "class-validator";
import { CreateOrderDto } from "./create-order.dto";
import { Dish } from "modules/dish/dish.entity";

export class UpdateOrderDto extends CreateOrderDto {
  @IsOptional()
  name: string;

  @IsOptional()
  dishes: Dish[];
}