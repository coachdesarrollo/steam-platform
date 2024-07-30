import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/common/components/buttons";
import { ButtonColor, ButtonSize, ButtonVariant } from "@/common/components/buttons/button";

export function Hero() {
  const navigate = useNavigate();

  return (
    <article
      className={`text-white flex h-full animate-fade-out flex-col items-center justify-end px-8 pb-20 text-center font-montserrat [animation-range:exit_-200px] [animation-timeline:view()]`}
    >
      <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
        Cursos y recursos educativos variados para todos
      </h1>
      <p className="mb-2 text-2xl font-medium sm:text-3xl">
        Disfruta donde quieras. Cancela cuando quieras
      </p>
      <p className="mb-10 text-lg sm:text-2xl">
        ¿Quieres empezar a aprender? Regístrate con tu email para crear una cuenta e iniciar <br />
        tu membresía de <b>STEAM</b>.
      </p>
      <Button
        color={ButtonColor.Light}
        size={ButtonSize.Large}
        variant={ButtonVariant.Outline}
        onClick={() => navigate({ to: "/register/personal-info" })}
      >
        Registrarme
      </Button>
    </article>
  );
}
