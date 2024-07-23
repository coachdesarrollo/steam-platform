import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Button } from "@/common/components/buttons";
import { ButtonSize, ButtonStyle, ButtonTheme } from "@/common/config/themes/button";

export const Route = createFileRoute("/register/_layout/personal-info/")({
  component: PersonalInfo,
});

function PersonalInfo() {
  const navigate = useNavigate();

  return (
    <form
      autoCapitalize="sentences"
      autoComplete="off"
      className="relative grid h-screen w-[480px] gap-5 bg-[#000000cd] px-10 py-8 pt-5 max-md:w-screen max-md:bg-[#0000007c]"
    >
      <div className="grid w-full place-content-center">
        <span className="text-center text-sm text-white/50">1 de 5</span>
        <h2 className="text-center text-4xl font-bold text-white max-md:text-3xl">Registrarse</h2>
      </div>

      <main className="grid gap-5 max-md:text-sm">
        <label className="grid gap-2" htmlFor="name">
          <span className="text-white">Nombre *</span>
          <input
            className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
            id="name"
            placeholder="Ingrese su primer nombre"
            type="text"
          />
        </label>
        <label className="grid gap-2" htmlFor="last-name">
          <span className="text-white">Apellido *</span>
          <input
            className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
            id="last-name"
            name="lastName"
            placeholder="Ingrese su primer apellido"
            type="text"
          />
        </label>
        <label className="grid gap-2" htmlFor="phone">
          <span className="text-white">Celular *</span>
          <input
            className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none marker:hidden"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
            placeholder="Digite su numero de celular"
            size={10}
            type="tel"
          />
        </label>
        <div className="flex gap-4">
          <label className="grid flex-1 gap-2" htmlFor="province">
            <span className="text-white">País *</span>
            <select
              className="appearance-none rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
              id="province"
              name="province"
            >
              <option value="atlántico">Atlántico</option>
            </select>
          </label>
          <label className="grid flex-1 gap-2" htmlFor="town">
            <span className="text-white">Municipio *</span>
            <select
              className="appearance-none rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
              id="town"
              name="town"
            >
              <option value="Barranquilla">B/quilla</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2" htmlFor="birthday">
          <span className="text-white">Fecha de nacimiento *</span>
          <input
            className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
            id="birthday"
            name="birthday"
            placeholder="DD / MM / AA"
            type="date"
          />
        </label>
        <label className="grid gap-2" htmlFor="address">
          <span className="text-white">Dirección</span>
          <input
            className="rounded-md bg-[#333333] px-4 py-3 text-white outline-none"
            id="address"
            name="address"
            placeholder="Ingrese su dirección de residencia"
            type="text"
          />
        </label>
      </main>

      <Button
        className="mt-5 h-16"
        size={ButtonSize.Small}
        theme={ButtonTheme.Gold}
        variant={ButtonStyle.Outline}
        onClick={() => navigate({ to: "/register/access-credential" })}
      >
        Continuar
      </Button>
    </form>
  );
}
