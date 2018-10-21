import { IsString, Length, IsEmail, IsOptional } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @Length(1, 20)
  readonly name: string

  @IsString()
  @Length(10, 30)
  readonly account: string

  @IsString()
  @Length(10, 30)
  readonly password: string

  @IsOptional()
  @IsEmail()
  readonly email: string
}