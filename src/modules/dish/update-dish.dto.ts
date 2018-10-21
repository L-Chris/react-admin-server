import { CreateDishDto } from "./create-dish.dto";
import { IsOptional } from "class-validator";

export class UpdateDishDto extends CreateDishDto {
  @IsOptional()
  name: string;

  @IsOptional()
  price: string;

  @IsOptional()
  extra: string;
}