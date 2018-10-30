import { IsArray, IsOptional } from "class-validator";
import { Dish } from "modules/dish/dish.entity";
import { Shop } from "modules/shop/shop.entity";
import { User } from "modules/user/user.entity";

export class CreateOrderDto {
  user: User;

  shop: Shop;

  @IsArray()
  dishes: Dish[];

  @IsOptional()
  createTime: string;
}