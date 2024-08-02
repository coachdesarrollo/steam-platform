import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

/**
 * Authentication Controller
 *
 * This controller handles authentication-related endpoints such as login and registration.
 * @module AuthController
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Handles user login
   * @param {LoginDto} loginData - The login data transfer object containing user credentials.
   * @returns {Promise<{ user: any, token: string }>} - An object containing the logged-in user data and JWT token.
   */
  @Post('login')
  login(@Body() loginData: LoginDto): Promise<{ user: any; token: string }> {
    return this.authService.login(loginData);
  }

  /**
   * Handles user registration
   * @param {CreateUserDto} registerDto - The registration data transfer object containing user data.
   * @returns {Promise<{ email: string }>} - An object containing the registered user's email address.
   */
  @Post('register')
  register(@Body() registerDto: CreateUserDto): Promise<{ email: string }> {
    return this.authService.register(registerDto);
  }
}
