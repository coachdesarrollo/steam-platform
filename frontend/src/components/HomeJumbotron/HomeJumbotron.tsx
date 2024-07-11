import { ButtonSize, ButtonStyle } from "../../config/themes/button";
import { Button } from "../Button";

const HomeJumbotron: React.FC = () => {
    return (
        <article className="flex flex-col justify-end items-center text-center text-white px-8 pb-20 h-full">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                Cursos y recursos educativos variados para todos
            </h1>
            <p className="text-2xl sm:text-3xl font-medium mb-2">
                Disfruta donde quieras. Cancela cuando quieras
            </p>
            <p className="text-lg sm:text-2xl mb-10">
                ¿Quieres empezar a aprender? Registrate con tu email para crear una cuenta e iniciar <br />
                tu membresía de <b>STEAM</b>.
            </p>
            <Button variant={ButtonStyle.Outline} size={ButtonSize.Large} isLink={true}>
                Registrarme
            </Button>
        </article>
    );
};

export default HomeJumbotron;
