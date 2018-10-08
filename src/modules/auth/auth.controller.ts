import { Controller, Body, Post, Res, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body, @Res() res): Promise<string> {
    if (!body) return
    const token = await this.authService.sign(body);
    res.cookie('token', token)
    res.status(HttpStatus.OK).json({
      data: token,
      status: 200,
      message: 'success',
      timeStamp: Date.now()
    });
  }
}