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
            <label className="grid gap-2" htmlFor="email">
              <span className="text-white">Correo Electrónico *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                type="email"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="username">
              <span className="text-white">Nombre de usuario *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="username"
                name="username"
                placeholder="Defina su nombre de usuario"
                type="text"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="password">
              <span className="text-white">Contraseña *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="password"
                name="password"
                placeholder="Establezca una contraseña segura"
                type="password"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="confirm-password">
              <span className="text-white">Confirmar Contraseña *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Repita la contraseña para continuar"
                type="password"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="photo">
              <span className="text-white">Foto de perfil</span>
              <div className="relative">
                <input
                  className="invisible absolute h-5 appearance-none rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                  id="photo"
                  name="photo"
                  placeholder="Repita la contraseña para continuar"
                  type="file"
                  onChange={(e) => handleChange(e.currentTarget.value)}
                />
                <div className="max-md:gap- flex items-center justify-start gap-3 rounded-md bg-[#333] px-3 py-5 text-white/40">
                  <UserIcon className="w-10 justify-start max-md:w-8" />
                  <span className="w-full text-pretty text-start text-lg font-semibold text-white/60 max-md:text-lg max-sm:text-sm">
                    Sube o arrastra tu imagen de perfil
                  </span>
                </div>
              </div>
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
