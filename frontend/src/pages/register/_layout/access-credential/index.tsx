import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";

import {
  AccessCredentialSchema,
  EmailSchema,
  PasswordSchema,
  ProfileSchema,
  UsernameSchema,
} from "./schemas";
import { AccessCredential } from "./types";

import { UserIcon } from "@/common/components/icons";
import { BasicInput } from "@/common/components/inputs/basic";

export const Route = createFileRoute("/register/_layout/access-credential/")({
  component: AccessCredential,
});

function AccessCredential() {
  const navigate = useNavigate({ from: "/register" });

  const { Field, handleSubmit } = useForm<AccessCredential>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      profilePhoto: "",
    },

    onSubmit: async ({ value }) => {
      const { success } = AccessCredentialSchema.safeParse(value);

      if (success) {
        return navigate({ to: "/register/account-verification" });
      }
    },
  });

  return (
    <form
      autoCapitalize="sentences"
      autoComplete="off"
      className="relative grid h-screen w-[480px] gap-6 bg-[#000000cd] px-12 py-8 pt-5 max-md:w-screen max-md:bg-[#0000007c]"
      onSubmit={async (e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="grid w-full place-content-center">
        <span className="text-center text-sm text-white/50">2 de 5</span>
        <h2 className="text-center text-4xl font-bold text-white max-md:text-3xl">Registrarse</h2>
      </div>

      <main className="grid gap-5 max-md:text-sm">
        <Field
          name="email"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: EmailSchema,
          }}
        >
          {({ state, handleChange }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Correo Electrónico"
              name="email"
              placeholder="Ingrese su correo electrónico"
              state={state}
              type="email"
            />
          )}
        </Field>
        <Field
          name="username"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: UsernameSchema,
          }}
        >
          {({ state, handleChange }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Nombre de usuario"
              name="username"
              placeholder="Defina su nombre de usuario"
              state={state}
            />
          )}
        </Field>
        <Field
          name="password"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: PasswordSchema,
          }}
        >
          {({ state, handleChange }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Contraseña"
              name="password"
              placeholder="Establezca una contraseña segura"
              state={state}
              type="password"
            />
          )}
        </Field>
        <Field
          name="confirmPassword"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: PasswordSchema,
          }}
        >
          {({ state, handleChange }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Confirmar Contraseña"
              name="confirmPassword"
              placeholder="Repita la contraseña para continuar"
              state={state}
              type="password"
            />
          )}
        </Field>
        <Field
          name="profilePhoto"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: ProfileSchema,
          }}
        >
          {({ state, handleChange }) => (
            <BasicInput
              className="invisible absolute h-5 appearance-none"
              handleChange={handleChange}
              label="Foto de perfil"
              name="photo"
              state={state}
              type="file"
            >
              <div className="max-md:gap- flex items-center justify-start gap-3 rounded-md bg-[#333] px-3 py-5 text-white/40">
                <UserIcon className="w-10 justify-start max-md:w-8" />

                <span className="w-full text-pretty text-start text-lg font-semibold text-white/60 max-md:text-lg max-sm:text-sm">
                  Sube o arrastra tu imagen de perfil
                </span>
              </div>
            </BasicInput>
          )}
        </Field>
      </main>
      <button>Continuar</button>
      {/* <Button
        className="mt-6 h-16"
        size={ButtonSize.Small}
        theme={ButtonTheme.Gold}
        variant={ButtonStyle.Outline}
        onClick={() =>
          navigate({
            to: "/register/account-verification",
          })
        }
      >
        Continuar
      </Button> */}
    </form>
  );
}
