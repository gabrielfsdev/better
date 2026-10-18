import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(dto: { name: string; email: string; password: string }) {
    const existing = await this.userService.user({ email: dto.email });
    if (existing) {
      throw new BadRequestException('Email already in use');
    }
    const hashedPassword = await argon2.hash(dto.password);
    const user = await this.userService.createUser({
      username: dto.name,
      email: dto.email,
      password: hashedPassword,
    });
    return { id: user.id, name: user.username, email: user.email };
  }

  async login(dto: { email: string; password: string }) {
    const user = await this.userService.user({ email: dto.email });
    if (!user || !(await argon2.verify(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      accessToken,
      user: { id: user.id, name: user.username, email: user.email },
    };
  }
}
