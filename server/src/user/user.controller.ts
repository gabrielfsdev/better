import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.user({ id: parseInt(id) });
    console.log('id: ', user);
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }

}
