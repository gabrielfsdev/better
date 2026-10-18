import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: { username: string; password: string }){
    console.log('body: ', body);
    const { username, password } = body;
    const authResult = await this.authService.authenticateUser({ username, password });
    if (!authResult) {
      return { message: 'Invalid credentials' };
    }
    return authResult;
  }
}
