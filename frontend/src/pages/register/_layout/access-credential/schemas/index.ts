import { z } from "zod";

export const EmailSchema = z.string().email({ message: "Debe ser un correo electrónico válido" });

export const UsernameSchema = z
  .string()
  .min(3, { message: "El nombre de usuario debe tener al menos 3 caracteres" })
  .max(12, { message: "El nombre de usuario no puede tener más de 12 caracteres" });

export const PasswordSchema = z
  .string()
  .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial",
  });

export const ProfileSchema = z
  .string()
  .max(255, { message: "El perfil no puede superar los 255 caracteres" })
  .optional();

export const AccessCredentialSchema = z.object({
  email: EmailSchema,
  username: UsernameSchema,
  password: PasswordSchema,
  confirmPassword: PasswordSchema,
  profilePhoto: ProfileSchema,
});
