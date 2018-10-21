import { CreateMenuDto } from "./create-menu.dto";
import { IsOptional } from "class-validator";

export class UpdateMenuDto extends CreateMenuDto {
  @IsOptional()
  name: string;
}