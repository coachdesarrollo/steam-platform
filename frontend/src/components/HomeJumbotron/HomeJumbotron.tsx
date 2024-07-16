import { Link } from "react-router-dom";
import { ButtonSize, ButtonStyle } from "../../config/themes/button";
import { Button } from "../Button";

const HomeJumbotron: React.FC = () => {
  return (
    <article
      className={`flex flex-col justify-end items-center text-center text-white px-8 pb-20 h-full [animation-range:exit_-200px]  [animation-timeline:view()] animate-fade-out`}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Cursos y recursos educativos variados para todos
      </h1>
      <p className="text-2xl sm:text-3xl font-medium mb-2">
        Disfruta donde quieras. Cancela cuando quieras
      </p>
      <p className="text-lg sm:text-2xl mb-10">
        ¿Quieres empezar a aprender? Regístrate con tu email para crear una
        cuenta e iniciar <br />
        tu membresía de <b>STEAM</b>.
      </p>
      <Link to="subcription">
        <Button
          variant={ButtonStyle.Standard}
          size={ButtonSize.Large}
          isLink={true}
        >
          Registrarme
        </Button>
      </Link>
    </article>
  );
};

export default HomeJumbotron;
