import { FC } from "react";
import { LoginProps } from "./propTypes";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import {
  ButtonSize,
  ButtonStyle,
  ButtonTheme,
} from "../../config/themes/button";

const Login: FC<LoginProps> = () => {
  return (
    <main className="grid place-content-center h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply">
      <form className="bg-black/60 grid gap-12 px-12 py-8">
        <h2 className="text-white font-bold text-4xl text-center">
          Iniciar Sesión
        </h2>

        <main className="grid gap-5">
          <input
            type="text"
            placeholder="Usuario"
            className="px-4 py-3 rounded-md outline-none bg-transparent border-[1px] border-white text-white "
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="px-4 py-3 rounded-md outline-none bg-transparent border-[1px] border-white text-white"
          />

          <div className="grid gap-4 text-[#928F8F] font-light">
            <div className="flex gap-16 items-center">
              <label
                htmlFor="reminder"
                className="flex items-center gap-1.5 text-sm"
              >
                <input
                  type="checkbox"
                  id="reminder"
                  className="appearance-none border-2 border-white checked:bg-white rounded-sm w-5 h-5 transition-colors checked:after:content-['✔'] grid place-content-center text-white font-extrabold ease-in-out"
                />
                Recordarme
              </label>
              <Link to={""} className="text-sm underline">
                Olvide mi contraseña
              </Link>
            </div>
          </div>

          <Button
            variant={ButtonStyle.Standard}
            theme={ButtonTheme.Gold}
            size={ButtonSize.Small}
          >
            Iniciar Sesión
          </Button>
        </main>

        <Link
          to={"register/personal-data"}
          className="text-center text-[#928F8F] text-sm font-ligh underline"
        >
          Aun no estoy registrado
        </Link>
      </form>
    </main>
  );
};

export default Login;
