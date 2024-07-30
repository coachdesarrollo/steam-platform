import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";

import {
  AddressSchema,
  BirhtdaySchema,
  LastnameSchema,
  PersonalInfoSchema,
  PhoneSchema,
  ProvinceSchema,
  TownSchema,
  UsernameSchema,
} from "./schemas";
import { PersonalInfo } from "./types";

import { Button } from "@/common/components/buttons";
import { BasicInput } from "@/common/components/inputs";

export const Route = createFileRoute("/register/_layout/personal-info/")({
  component: PersonalInfo,
});

function PersonalInfo() {
  const navigate = useNavigate();

  const { Field, handleSubmit } = useForm<PersonalInfo>({
    defaultValues: {
      name: "",
      lastname: "",
      phone: "",
      province: "",
      town: "",
      birthday: "",
      address: "",
    },

    onSubmit: async ({ value }) => {
      const { success } = PersonalInfoSchema.safeParse(value);

      if (success) {
        return navigate({ to: "/register/access-credential", viewTransition: true });
      }
    },
  });

  return (
    <main className="grid w-[480px] gap-5 bg-[#000000cd] px-10 py-8 max-md:h-screen max-md:w-screen max-md:bg-[#0000007c]">
      <header className="grid w-full place-content-center">
        <span className="text-center text-sm text-white/50">1 de 5</span>
        <h2 className="text-center text-4xl font-bold text-white max-md:text-3xl">Registrarse</h2>
      </header>

      <form
        autoCapitalize="sentences"
        autoComplete="off"
        className="grid gap-5 max-md:text-sm"
        onSubmit={async (e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Field
          name="name"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: UsernameSchema,
          }}
        >
          {({ handleChange, state }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Nombre"
              name="name"
              placeholder="Ingrese su primer nombre"
              state={state}
            />
          )}
        </Field>
        <Field
          name="lastname"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: LastnameSchema,
          }}
        >
          {({ handleChange, state }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Apellido"
              name="lastName"
              placeholder="Ingrese su primer apellido"
              state={state}
            />
          )}
        </Field>

        <Field
          name="phone"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: PhoneSchema,
          }}
        >
          {({ handleChange, state }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Celular"
              name="phone"
              placeholder="Digite su numero de celular"
              size={10}
              state={state}
              type="tel"
            />
          )}
        </Field>

        <div className="flex gap-4">
          <Field
            name="province"
            validatorAdapter={zodValidator()}
            validators={{
              onChange: ProvinceSchema,
            }}
          >
            {({ state, handleChange }) => (
              <label className="grid flex-1 gap-2" htmlFor="province">
                <span className="text-white">Region *</span>
                <select
                  className="appearance-none rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                  id="province"
                  name="province"
                  onChange={(e) => handleChange(e.currentTarget.value)}
                >
                  <option value="null">--------</option>

                  <option value="atlántico">Atlántico</option>
                </select>
                {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
              </label>
            )}
          </Field>
          <Field
            name="town"
            validatorAdapter={zodValidator()}
            validators={{
              onChange: TownSchema,
            }}
          >
            {({ state, handleChange }) => (
              <label className="grid flex-1 gap-2" htmlFor="town">
                <span className="text-white">Municipio *</span>
                <select
                  className="appearance-none rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                  id="town"
                  name="town"
                  onChange={(e) => handleChange(e.currentTarget.value)}
                >
                  <option value="null">--------</option>
                  <option value="Barranquilla">B/quilla</option>
                </select>
                {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
              </label>
            )}
          </Field>
        </div>

        <Field
          name="birthday"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: BirhtdaySchema,
          }}
        >
          {({ handleChange, state }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Fecha de nacimiento"
              name="birthday"
              placeholder="DD / MM / AA"
              state={state}
              type="date"
            />
          )}
        </Field>
        <Field
          name="address"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: AddressSchema,
          }}
        >
          {({ handleChange, state }) => (
            <BasicInput
              isRequired
              handleChange={handleChange}
              label="Dirección"
              name="address"
              placeholder="Ingrese su dirección de residencia"
              state={state}
            />
          )}
        </Field>
        <Button className="h-fit w-fit justify-self-center" type="submit">
          Continuar
        </Button>
      </form>
    </main>
  );
}
