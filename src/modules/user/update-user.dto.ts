import { IsOptional } from 'class-validator'
import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto extends CreateUserDto {
  readonly id: string | number

  @IsOptional()
  readonly name: string

  @IsOptional()
  readonly account: string

  @IsOptional()
  readonly password: string

  @IsOptional()
  readonly phone: string

  @IsOptional()
  readonly email: string
}