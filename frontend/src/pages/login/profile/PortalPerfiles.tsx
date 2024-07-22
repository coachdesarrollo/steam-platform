import { Button } from "@/common/components/buttons";
import {
  ButtonSize,
  ButtonStyle,
  ButtonTheme,
} from "@/common/config/themes/button";


export function Login() {
  return (
    <main className="grid place-content-center h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply">
      <form className="bg-black/60 grid gap-12 px-12 py-8">
        <h1 className="text-white font-bold text-4xl text-center mb-8">
          Quien eres? Elige tu perfil
        </h1>

        <div className="grid gap-5 mb-8">
          <div className="carousel">
            <div className="carousel-item">
              <div className="card text-white bg-transparent border-[1px] border-white px-4 py-3 rounded-md">Mauro</div>
            </div>
            <div className="carousel-item">
              <div className="card text-white bg-transparent border-[1px] border-white px-4 py-3 rounded-md">Stiven</div>
            </div>
            <div className="carousel-item">
              <div className="card text-white bg-transparent border-[1px] border-white px-4 py-3 rounded-md">Angel</div>
            </div>
            <div className="carousel-item">
              <div className="card text-white bg-transparent border-[1px] border-white px-4 py-3 rounded-md">Victor</div>
            </div>
            <div className="carousel-item">
              <div className="card text-white bg-transparent border-[1px] border-white px-4 py-3 rounded-md">Samuel</div>
            </div>
          </div>
        </div>

        <Button
          variant={ButtonStyle.Standard}
          theme={ButtonTheme.Gold}
          size={ButtonSize.Small}
        >
          Administrar perfiles
        </Button>
      </form>
    </main>
  );
}
