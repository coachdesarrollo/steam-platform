import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

/**
 * Service that handles authentication logic.
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Logs in a user and generates a JWT token.
   * @param {LoginDto} loginDto - Object containing user's email and password.
   * @returns {Promise<{ user: any, token: string }>} - Returns an object containing the user and the JWT token.
   * @throws {UnauthorizedException} - Throws if the password is invalid.
   */
  async login(loginDto: LoginDto): Promise<{ user: any; token: string }> {
    const user = await this.usersService.findByEmail(loginDto.email);

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      email: user.email,
      user: user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return { user, token };
  }

  /**
   * Registers a new user with encrypted password.
   * @param {CreateUserDto} registerUser - Object containing user registration data.
   * @returns {Promise<{ email: string }>} - An object containing the registered user's email address.
   * @throws {BadRequestException} - If the user not already exists.
   */
  async register(registerUser: CreateUserDto): Promise<{ email: string }> {
    const user = this.usersService.findByEmail(registerUser.email);

    if (!user) {
      throw new BadRequestException('El usuario no fue encontrado');
    }

    const newUser = await this.usersService.create({
      ...registerUser,
      password: await bcrypt.hash(registerUser.password, 10),
    });

    return { email: newUser.email };
  }
}
