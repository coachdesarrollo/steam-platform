import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";

import { PasswordSchema } from "../register/_layout/access-credential/schemas";
import { UsernameSchema } from "../register/_layout/personal-info/schemas";

import { LoginFieldsSchema } from "./schemas";
import { LoginFields } from "./types";

import { Button, ButtonColor, ButtonSize, ButtonVariant } from "@/common/components/buttons/button";
import { BasicInput } from "@/common/components/inputs";

export const Route = createFileRoute("/login/")({
  component: Login,
});

export function Login() {
  const navigate = useNavigate();

  const { Field, handleSubmit } = useForm({
    defaultValues: {} as LoginFields,

    onSubmit: ({ value }) => {
      const { success } = LoginFieldsSchema.safeParse(value);

      if (success) return navigate({ to: "/login/profile" });
    },
  });

  return (
    <main className="grid h-screen place-content-center bg-black/70 bg-banner-hero bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <section className="grid w-[450px] gap-12 bg-black/60 px-12 py-8 max-sm:flex max-sm:min-h-screen max-sm:w-screen max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <h2 className="text-center text-4xl font-bold text-white max-sm:text-3xl">
          Iniciar Sesión
        </h2>

        <form
          className="grid gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Field
            name="username"
            validatorAdapter={zodValidator()}
            validators={{
              onChange: UsernameSchema,
            }}
          >
            {({ state, handleChange }) => (
              <BasicInput
                handleChange={handleChange}
                name="username"
                placeholder="Usuario"
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
                handleChange={handleChange}
                name="password"
                placeholder="*********"
                state={state}
                type="password"
              />
            )}
          </Field>

          <div className="grid gap-4 font-light text-[#928F8F]">
            <div className="flex items-center gap-16">
              <label className="flex items-center gap-1.5 text-sm" htmlFor="reminder">
                <input
                  className="grid h-5 w-5 appearance-none place-content-center rounded-sm border-2 border-white font-extrabold text-white transition-colors ease-in-out checked:bg-white checked:after:content-['✔']"
                  id="reminder"
                  type="checkbox"
                />
                Recordarme
              </label>
              <Link className="text-sm underline" to={`/`}>
                Olvide mi contraseña
              </Link>
            </div>
          </div>

          <Button
            color={ButtonColor.Gold}
            size={ButtonSize.Small}
            type="submit"
            variant={ButtonVariant.Standard}
          >
            Iniciar Sesión
          </Button>
        </form>
        <Link className="font-ligh text-center text-sm text-[#928F8F] underline">
          Aun no estoy registrado
        </Link>
      </section>
    </main>
  );
}
