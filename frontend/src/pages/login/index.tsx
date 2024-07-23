import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import { Button } from "@/common/components/buttons";
import { ButtonSize, ButtonStyle, ButtonTheme } from "@/common/config/themes/button";

export const Route = createFileRoute("/login/")({
  component: Login,
});

export function Login() {
  const navigate = useNavigate();

  return (
    <main className="grid h-screen place-content-center bg-black/70 bg-banner-hero bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <form className="grid gap-12 bg-black/60 px-12 py-8">
        <h2 className="text-center text-4xl font-bold text-white">Iniciar Sesión</h2>

        <main className="grid gap-5">
          <input
            className="rounded-md border-[1px] border-white bg-transparent px-4 py-3 text-white outline-none"
            placeholder="Usuario"
            type="text"
          />
          <input
            className="rounded-md border-[1px] border-white bg-transparent px-4 py-3 text-white outline-none"
            placeholder="Contraseña"
            type="password"
          />

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
            size={ButtonSize.Small}
            theme={ButtonTheme.Gold}
            variant={ButtonStyle.Standard}
            onClick={() =>
              navigate({
                to: "/login/profile",
              })
            }
          >
            Iniciar Sesión
          </Button>
        </main>

        <Link className="font-ligh text-center text-sm text-[#928F8F] underline">
          Aun no estoy registrado
        </Link>
      </form>
    </main>
  );
}
