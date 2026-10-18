import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';

interface AuthInput {
  username: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async authenticateUser(input: AuthInput): Promise<any> {
    const user = await this.validateUser(input);
    if (user) {
      // Generate an access token (for simplicity, using a dummy token here)
      const accessToken = 'dummy-access-token'; // Replace with actual token generation logic
      return { ...user, accessToken };
    }
    return null;
  }

  async validateUser(input: AuthInput): Promise<any> {
    const { username, password } = input;
    const user = await this.userService.user({ username });

    if (user && user.password === password) {
      return { id: user.id, username: user.username };
    }
    return null;
  }
}
