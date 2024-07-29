import { z } from "zod";

export const UsernameSchema = z
  .string({ message: "Este campo es requerido" })
  .min(3, "Minimo 3 caracteres")
  .max(12, "Maximo 15 caracteres");

export const LastnameSchema = z
  .string({ message: "Este campo es requerido" })
  .min(3, "Minimo 3 caracteres")
  .max(10, "Maximo 15 caracteres");

export const PhoneSchema = z
  .string({ required_error: "Este campo es requerido" })
  .regex(/^3(?!(\d)\1{3})[0-9]{9}$/, "Numero no valido");

export const ProvinceSchema = z.string().min(3, "Provincia es requerido");

export const TownSchema = z
  .string({ message: "Este campo es requerido" })
  .min(3, "Minimo 3 caracteres");

export const BirhtdaySchema = z
  .string({ message: "Este campo es requerido" })
  .date("Fecha invalida");

export const AddressSchema = z
  .string({ message: "Este campo es requerido" })
  .min(3, "Minimo 3 caracteres")
  .max(12, "Maximo 12 caracteres");

export const PersonalInfoSchema = z.object({
  name: UsernameSchema,
  lastname: LastnameSchema,
  birthday: BirhtdaySchema,
  town: TownSchema,
  province: ProvinceSchema,
  phone: PhoneSchema,
  address: AddressSchema,
});
