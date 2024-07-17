import { FC } from "react";
import { Button } from "@/components/Button";
import { ButtonSize, ButtonStyle, ButtonTheme } from "@/config/themes/button";
import { UserIcon } from "@/components/Icons";
import { useNavigate } from "react-router-dom";
import { Step } from "@/components/Register/propTypes.d";

const AccessCredentials: FC = () => {
  const navigate = useNavigate();

  return (
    <form
      className="bg-black grid gap-6 px-12 py-8 w-[480px] relative"
      autoComplete="off"
      autoCapitalize="sentences"
    >
      <div className=" w-full grid place-content-center">
        <span className="text-white/50 text-center text-sm">2 de 5</span>
        <h2 className="text-white font-bold text-4xl text-center">
          Registrarse
        </h2>
      </div>

      <main className="grid gap-5">
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
            <div className="flex justify-center items-center gap-6 text-white/40 bg-[#333] rounded-md py-5">
              <div className="p-1.5 rounded-md border-[#fff6] border-[4px]">
                <UserIcon />
              </div>
              <span className="font-semibold text-center text-pretty w-40 text-lg text-white/60">
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
        onClick={() => navigate(`/register/${Step.STEP_3}`)}
      >
        Continuar
      </Button>
    </form>
  );
};

export default AccessCredentials;
