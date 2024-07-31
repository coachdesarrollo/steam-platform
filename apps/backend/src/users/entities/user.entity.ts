import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

@Schema({ timestamps: true, _id: true })
export class User {
  @Prop({
    required: true,
    trim: true,
  })
  @IsString({
    message: 'Nombre no es correcto',
  })
  @MaxLength(40)
  @MinLength(3)
  name: string;

  @Prop({
    required: true,
    trim: true,
  })
  @IsString({
    message: 'Apellido no es correcto',
  })
  @MaxLength(40)
  @MinLength(3)
  lastname: string;

  @Prop({
    required: true,
    trim: true,
  })
  @IsPhoneNumber('CO', {
    message: 'Numero de celular no es correcto',
  })
  phone: string;

  @Prop({
    required: true,
    default: 'Colombia',
  })
  @IsString()
  country: string;

  @Prop({
    required: true,
    default: 'Barranquilla',
  })
  @IsString()
  state: string;

  @Prop({
    required: true,
  })
  @IsDateString()
  birthday: Date;

  @Prop({
    required: true,
  })
  @IsString()
  address: string;

  @Prop({
    required: true,
    trim: true,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Prop({
    required: true,
    trim: true,
    unique: true,
  })
  @IsString()
  @Length(3, 16, { message: 'Username debe de tener entre 3 y 16 caracterers' })
  username: string;

  @Prop({
    required: true,
  })
  @IsStrongPassword()
  password: string;

  @Prop({
    enum: { user: 'user', teacher: 'teacher', student: 'student' },
  })
  @IsEnum({ user: 'user', teacher: 'teacher', student: 'student' })
  role: string;

  @Prop()
  @IsString()
  @IsOptional()
  photo: string;

  @Prop()
  @IsOptional()
  @IsNumber()
  @Length(4, 4)
  pin: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
