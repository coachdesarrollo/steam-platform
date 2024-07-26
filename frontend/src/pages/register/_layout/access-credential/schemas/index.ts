import { z } from "zod";

export const EmailSchema = z
  .string({ required_error: "Este campo es requerido" })
  .email({ message: "No es un correo válido" });

export const UsernameSchema = z
  .string()
  .min(3, { message: "Minimo 3 caracteres" })
  .max(12, { message: "Maximo 12 caracteres" });

export const PasswordSchema = z
  .string({ required_error: "Este campo es requerido" })
  .min(8, { message: "Minimo 8 caracteres" })
  .regex(/^(?=.*[a-z])/, { message: "Minimo una letra en minúscula" })
  .regex(/^(?=.*[A-Z])/, { message: "Minimo una letra en mayúscula" })
  .regex(/^(?=.*\d)/, { message: "Minimo un numero" })
  .regex(/^(?=.*[!#$%&'()*+\,\-\./:;<=>?@[\]^_`{|}~@$!%*?&_-])/, {
    message: "Minimo un caracter especial",
  });

export const ProfileSchema = z.string().max(255).optional();

export const AccessCredentialSchema = z.object({
  email: EmailSchema,
  username: UsernameSchema,
  password: PasswordSchema,
  confirmPassword: PasswordSchema,
  profilePhoto: ProfileSchema,
});
