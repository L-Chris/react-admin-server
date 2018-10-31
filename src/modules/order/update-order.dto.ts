import { IsOptional } from "class-validator";
import { CreateOrderDto } from "./create-order.dto";
import { Dish } from "modules/dish/dish.entity";
import { Shop } from "modules/shop/shop.entity";
import { User } from "modules/user/user.entity";

export class UpdateOrderDto extends CreateOrderDto {
  @IsOptional()
  type: string;

  @IsOptional()
  user: User;

  @IsOptional()
  shop: Shop;

  @IsOptional()
  dishes: Dish[];
}