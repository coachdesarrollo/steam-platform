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

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(loginDto: LoginDto) {
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

  async register(registerUser: CreateUserDto) {
    const user = this.usersService.findByEmail(registerUser.email);

    if (!user) {
      return new BadRequestException('El usuario no fue encontrado');
    }

    const newUser = await this.usersService.create({
      ...registerUser,
      password: await bcrypt.hash(registerUser.password, 10),
    });

    return { email: newUser.email };
  }
}
