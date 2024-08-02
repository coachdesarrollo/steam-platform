import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

/**
 * Main Application.
 *
 * This module imports and configures the main application modules including
 * database connection using Mongoose
 */
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://coachsdesarrollo:4uTszOVbgpEzLztq@steam-platform-dev.7yqy3qk.mongodb.net/',
    ),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
