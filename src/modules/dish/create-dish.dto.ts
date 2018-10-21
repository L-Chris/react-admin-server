import { IsString, Length, IsOptional, IsNumberString, MaxLength } from "class-validator";

export class CreateDishDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNumberString()
  price: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  extra: string;
}