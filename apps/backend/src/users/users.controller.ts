import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

/**
 * Users Controller
 *
 * This controller handles the CRUD operations for users, including creating, reading, updating, and deleting users.
 * @module UsersController
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Creates a new user.
   * @param {CreateUserDto} user - The data transfer object containing new user data.
   * @returns {Promise<User>} - The created user document.
   */
  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  /**
   * Retrieves all users.
   * @returns {Promise<User[]>} - An array of user documents.
   */
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /**
   * Retrieves a user by ID
   * @param {string} id - The user ID.
   * @returns {Promise<User>} - The user document if found, otherwise null.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  /**
   *  Update a user by ID
   * @param {string} id - The user ID
   * @returns {string} - A message indicating that the user has been updated
   */
  @Patch(':id')
  update(@Param('id') id: string): string {
    return this.usersService.update(+id);
  }

  /**
   * Delete a user by ID
   * @param {string} id - The user ID
   * @returns {string} - A message indicating that the user has been deleted
   */
  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.usersService.remove(+id);
  }
}
