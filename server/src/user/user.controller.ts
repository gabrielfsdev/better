import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!this.userService.user({ id: parseInt(id) })) {
      return { message: 'User not found' };
    }
    return this.userService.user({ id: parseInt(id) });
  }

}
