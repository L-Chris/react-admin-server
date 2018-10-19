import { IsString, Length, IsEmail, IsMobilePhone } from 'class-validator'

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

  @IsMobilePhone('zh-CN')
  readonly phone: string

  @IsEmail()
  readonly email: string
}