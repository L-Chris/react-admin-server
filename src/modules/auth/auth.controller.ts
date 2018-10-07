import { Controller, Body, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body): Promise<string> {
    if (!body) return
    const token = await this.authService.sign(body)
    return `Bearer ${token}`
  }
}