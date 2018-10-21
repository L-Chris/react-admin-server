import { IsString, Length } from "class-validator";

export class CreateMenuDto {
  @IsString()
  @Length(3, 20)
  name: string;
}