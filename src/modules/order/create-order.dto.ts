import { IsArray, IsOptional, IsEnum } from "class-validator";
import { Dish } from "modules/dish/dish.entity";
import { Shop } from "modules/shop/shop.entity";
import { User } from "modules/user/user.entity";
import { OrderType } from "./order.enum";

export class CreateOrderDto {
  @IsEnum(OrderType)
  type: string;

  user: User;

  shop: Shop;

  @IsArray()
  dishes: Dish[];

  @IsOptional()
  createTime: string;
}