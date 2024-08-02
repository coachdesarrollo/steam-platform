import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

/**
 * Users Service
 *
 * This service handles operations related to users, such as creating, finding, updating, and deleting users.
 * @module UsersService
 */
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * Creates a new user.
   * @param {CreateUserDto} newUser - The data transfer object containing new user data.
   * @returns {Promise<User>} - The created user document.
   */
  create(newUser: CreateUserDto): Promise<User> {
    return this.userModel.create(newUser);
  }

  /**
   * Finds all users.
   * @returns {Promise<User[]>} - An array of user documents.
   */
  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  /**
   * Finds a user by ID.
   * @param {string} id - The user ID.
   * @returns {Promise<User | null>} - The user document if found, otherwise null.
   */
  findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  /**
   * Finds a user by email.
   * @param {string} email - The user email.
   * @returns {Promise<User | null>} - The user document if found, otherwise null.
   */
  findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * Updates a user by ID.
   * @param {number} id - The user ID.
   * @returns {string} - A message indicating that the user has been updated.
   */
  update(id: number): string {
    return `This action updates a #${id} user`;
  }

  /**
   * Removes a user by ID.
   * @param {number} id - The user ID.
   * @returns {string} - A message indicating that the user has been removed.
   */
  remove(id: number): string {
    return `This action removes a #${id} user`;
  }
}
