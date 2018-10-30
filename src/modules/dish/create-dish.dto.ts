import { IsString, Length, IsOptional, IsNumber, MaxLength } from "class-validator";

export class CreateDishDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  extra: string;
}