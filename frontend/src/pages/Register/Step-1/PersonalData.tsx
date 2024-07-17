import { FC } from "react";
import { PersonalDataProps } from "./propTypes";
import { Button } from "@/components/Button";
import { ButtonSize, ButtonStyle, ButtonTheme } from "@/config/themes/button";
import { useNavigate } from "react-router-dom";
import { Step } from "@/components/Register/propTypes.d";

const PersonalData: FC<PersonalDataProps> = () => {
  const navigate = useNavigate();

  return (
    <form
      className="bg-black gap-6 px-12 py-8 relative w-[480px] grid "
      autoComplete="off"
      autoCapitalize="sentences"
    >
      <div className="w-full grid place-content-center">
        <span className="text-white/50 text-center text-sm">1 de 5</span>
        <h2 className="text-white font-bold text-4xl text-center">
          Registrarse
        </h2>
      </div>

      <main className="grid gap-5">
        <label htmlFor="name" className="grid gap-2">
          <span className="text-white">Nombre *</span>
          <input
            type="text"
            id="name"
            placeholder="Ingrese su primer nombre"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
        <label htmlFor="last-name" className="grid gap-2">
          <span className="text-white">Apellido *</span>
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder="Ingrese su primer apellido"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
        <label htmlFor="phone" className="grid gap-2">
          <span className="text-white">Celular *</span>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
            size={10}
            placeholder="Digite su numero de celular"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white marker:hidden"
          />
        </label>
        <div className="flex gap-4">
          <label htmlFor="province" className="grid gap-2 flex-1">
            <span className="text-white">País *</span>
            <select
              name="province"
              id="province"
              className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white appearance-none"
            >
              <option value="atlantico">atlantico</option>
            </select>
          </label>
          <label htmlFor="town" className="grid gap-2 flex-1">
            <span className="text-white">Municipio *</span>
            <select
              name="town"
              id="town"
              className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white appearance-none"
            >
              <option value="barranquilla">B/quilla</option>
            </select>
          </label>
        </div>

        <label htmlFor="birthday" className="grid gap-2">
          <span className="text-white">Fecha de nacimiento *</span>
          <input
            type="date"
            id="birthday"
            name="birthday"
            placeholder="DD / MM / AA"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
        <label htmlFor="address" className="grid gap-2">
          <span className="text-white">Dirección</span>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Ingrese su dirección de residencia"
            className="px-4 py-3 rounded-md outline-none bg-[#333333] text-white"
          />
        </label>
      </main>

      <Button
        variant={ButtonStyle.Outline}
        theme={ButtonTheme.Gold}
        size={ButtonSize.Small}
        onClick={() => navigate(`/register/${Step.STEP_2}`)}
      >
        Continuar
      </Button>
    </form>
  );
};

export default PersonalData;
