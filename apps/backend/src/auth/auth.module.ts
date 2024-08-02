import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

/**
 * Authentication Module
 *
 * This module handles authentication-related functionality including JWT configuration, and provides the authentication service and controller.
 * @module AuthModule
 */
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'estoeslaclavemassecretaquetuvasaver',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    UsersModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
