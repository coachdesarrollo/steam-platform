import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import z from "zod";

export const Route = createFileRoute("/register/_layout/personal-info/")({
  component: PersonalInfo,
});

export interface PersonalInfo {
  name: string;
  lastname: string;
  phone: string;
  province: string;
  town: string;
  birthday: string;
  address: string;
}

const UsernameSchema = z
  .string({ message: "debe ser un string" })
  .min(3, "Username must be at least 3 characters")
  .max(12, "Username cannot be longer than 15 characters");

const LastnameSchema = z
  .string({ message: "debe ser un string" })
  .min(3, "Lastname must be at least 3 characters")
  .max(10, "Lastname cannot be longer than 15 characters");

const PhoneSchema = z
  .string({ required_error: "Phone is required" })
  .regex(/^3(?!(\d)\1{3})[0-9]{9}$/, "Phone number is not valid");

const ProvinceSchema = z.string().min(3, "Este campo es requerido");

const TownSchema = z.string().min(3, "Este campo es requerido");

const BirhtdaySchema = z.string().date("Esta fecha no es valida");

const AddressSchema = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(12, "Username cannot be longer than 15 characters");

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
      console.log(value);
      // navigate({ to: "/register/access-credential"})
    },
  });

  return (
    <form
      autoCapitalize="sentences"
      autoComplete="off"
      className="relative grid h-screen w-[480px] gap-5 bg-[#000000cd] px-10 py-8 pt-5 max-md:w-screen max-md:bg-[#0000007c]"
      onSubmit={async (e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="grid w-full place-content-center">
        <span className="text-center text-sm text-white/50">1 de 5</span>
        <h2 className="text-center text-4xl font-bold text-white max-md:text-3xl">Registrarse</h2>
      </div>

      <main className="grid gap-5 max-md:text-sm">
        <Field
          name="name"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: UsernameSchema,
          }}
        >
          {({ handleChange, state }) => (
            <label className="grid gap-2" htmlFor="name">
              <span className="text-white">Nombre *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="name"
                placeholder="Ingrese su primer nombre"
                type="text"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="last-name">
              <span className="text-white">Apellido *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="last-name"
                placeholder="Ingrese su primer apellido"
                type="text"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="phone">
              <span className="text-white">Celular *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none marker:hidden"
                id="phone"
                name="phone"
                placeholder="Digite su numero de celular"
                size={10}
                type="tel"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="birthday">
              <span className="text-white">Fecha de nacimiento *</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="birthday"
                name="birthday"
                placeholder="DD / MM / AA"
                type="date"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
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
            <label className="grid gap-2" htmlFor="address">
              <span className="text-white">Dirección</span>
              <input
                className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
                id="address"
                name="address"
                placeholder="Ingrese su dirección de residencia"
                type="text"
                onChange={(e) => handleChange(e.currentTarget.value)}
              />
              {state.meta.errors && <p className="text-sm text-red-500">{state.meta.errors}</p>}
            </label>
          )}
        </Field>
      </main>

      {/* <Button
        className="mt-5 h-16"
        size={ButtonSize.Small}
        theme={ButtonTheme.Gold}
        variant={ButtonStyle.Outline}
        onClick={() => navigate({ to: "/register/access-credential" })}
      >
        Continuar
      </Button> */}
      <button>Continuar</button>
    </form>
  );
}
