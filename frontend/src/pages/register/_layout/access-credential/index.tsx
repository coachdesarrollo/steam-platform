import { Button } from "@/common/components/buttons";
import { UserIcon } from "@/common/components/icons";
import {
  ButtonSize,
  ButtonStyle,
  ButtonTheme,
} from "@/common/config/themes/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/register/_layout/access-credential/")({
  component: AccessCredential,
});

function AccessCredential() {
  const navigate = useNavigate({ from: "/register" });

  return (
    <form
      className="bg-[#000000cd] grid gap-6 px-12 py-8 w-[480px] relative max-md:w-screen max-md:bg-[#0000007c] h-screen pt-5 "
      autoComplete="off"
      autoCapitalize="sentences"
    >
      <div className=" w-full grid place-content-center">
        <span className="text-white/50 text-center text-sm">2 de 5</span>
        <h2 className="text-white font-bold text-4xl text-center max-md:text-3xl">
          Registrarse
        </h2>
      </div>

      <main className="grid gap-5 max-md:text-sm ">
        <label htmlFor="email" className="grid gap-2">
          <span className="text-white">Correo Electrónico *</span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
        <label htmlFor="username" className="grid gap-2">
          <span className="text-white">Nombre de usuario *</span>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Defina su nombre de usuario"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
        <label htmlFor="password" className="grid gap-2">
          <span className="text-white">Contraseña *</span>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Establezca una contraseña segura"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
        <label htmlFor="confirm-password" className="grid gap-2">
          <span className="text-white">Confirmar Contraseña *</span>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Repita la contraseña para continuar"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
        <label htmlFor="photo" className="grid gap-2">
          <span className="text-white">Foto de perfil</span>
          <div className="relative">
            <input
              type="file"
              id="photo"
              name="photo"
              placeholder="Repita la contraseña para continuar"
              className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white appearance-none h-5 invisible absolute"
            />
            <div className="flex justify-start items-center gap-3 text-white/40 bg-[#333] rounded-md px-3 py-5 max-md:gap-">
              <UserIcon className="max-md:w-8 w-10 justify-start"/>
              <span className="font-semibold text-start text-pretty w-full text-lg text-white/60 max-md:text-lg max-sm:text-sm">
                Sube o arrastra tu imagen de perfil
              </span>
            </div>
          </div>
        </label>
      </main>
      <Button
        variant={ButtonStyle.Outline}
        theme={ButtonTheme.Gold}
        size={ButtonSize.Small}
        className="h-16 mt-6"
        onClick={() =>
          navigate({
            to: "/register/account-verification",
          })
        }
      >
        Continuar
      </Button>
    </form>
  );
}
