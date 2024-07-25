import { z } from "zod";

export const UsernameSchema = z
  .string({ message: "debe ser un string" })
  .min(3, "Username must be at least 3 characters")
  .max(12, "Username cannot be longer than 15 characters");

export const LastnameSchema = z
  .string({ message: "debe ser un string" })
  .min(3, "Lastname must be at least 3 characters")
  .max(10, "Lastname cannot be longer than 15 characters");

export const PhoneSchema = z
  .string({ required_error: "Phone is required" })
  .regex(/^3(?!(\d)\1{3})[0-9]{9}$/, "Phone number is not valid");

export const ProvinceSchema = z.string().min(3, "Este campo es requerido");

export const TownSchema = z.string().min(3, "Este campo es requerido");

export const BirhtdaySchema = z.string().date("Esta fecha no es valida");

export const AddressSchema = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(12, "Username cannot be longer than 15 characters");

export const PersonalInfoSchema = z.object({
  name: UsernameSchema,
  lastname: LastnameSchema,
  birthday: BirhtdaySchema,
  town: TownSchema,
  province: ProvinceSchema,
  phone: PhoneSchema,
  address: AddressSchema,
});
