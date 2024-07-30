import { z } from "zod";

import {
  PasswordSchema,
  UsernameSchema,
} from "@/pages/@register/@_layout/@access-credential/schemas";

export const LoginFieldsSchema = z.object({
  username: UsernameSchema,
  password: PasswordSchema,
});
