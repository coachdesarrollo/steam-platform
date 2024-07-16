import { FC } from "react";
import { SubcriptionProps } from "./propTypes";
import { Button } from "../../components/Button";
import { ButtonSize, ButtonTheme } from "../../config/themes/button";
import giftBox from "../../assets/gift-box-party.png";
import giftBox2 from "../../assets/gift-box-party-2.png";
import Faq from "../../components/Faq/Faq";
import planDuo from "../../assets/plan-duo.png";
import planMono from "../../assets/plan-mono.png";
import planFamiliar from "../../assets/plan-familiar.png";
import { CheckIcon } from "../../components/Icons/CheckIcon";
import { Link, useNavigate } from "react-router-dom";

const subcriptions = [
  {
    name: "Duo",
    price: 78000,
    icon: planDuo,
    description:
      "Disfruta de contenido ilimitado con otra persona. Comparte y accede a tus series y películas favoritas juntos, desde cualquier dispositivo.",
    features: [
      "Access to all features",
      "1k lookups / per month",
      "10 Monitoring Quota",
      "30K API Credits / month",
      "60 minutes Monitoring intervel",
      "20% discount on backorders",
    ],
    morePopular: false,
  },
  {
    name: "Mono",
    price: 49000,
    icon: planMono,
    description:
      "Disfruta de contenido ilimitado con otra persona. Comparte y accede a tus series y películas favoritas juntos, desde cualquier dispositivo.",
    features: [
      "Access to all features",
      "1k lookups / per month",
      "10 Monitoring Quota",
      "30K API Credits / month",
      "60 minutes Monitoring intervel",
      "20% discount on backorders",
    ],
    morePopular: true,
  },
  {
    name: "Familiar",
    price: 99000,
    icon: planFamiliar,
    description:
      "Disfruta de contenido premium con toda la familia. Este plan permite que hasta cuatro personas accedan simultáneamente a sus series y películas favoritas desde cualquier dispositivo.",
    features: [
      "Access to all features",
      "1k lookups / per month",
      "10 Monitoring Quota",
      "30K API Credits / month",
      "60 minutes Monitoring intervel",
      "20% discount on backorders",
    ],
    morePopular: false,
  },
];

const goals = [
  {
    statistics: "+100",
    description:
      "Cursos de Tecnología, Programación, Diseño, Marketing, Robotica...",
  },
  {
    statistics: "+60",
    description:
      "Profesionales Dedicados están Aquí para Impulsar tu Éxito Educativo.",
  },
  {
    statistics: "90%",
    description: "De Nuestros Estudiantes Alcanzan sus Metas Educativas.",
  },
];

const Subcription: FC<SubcriptionProps> = () => {
  const navigate = useNavigate();

  return (
    <main className="px-32 py-16 max-lg:px-12 text-white grid gap-44">
      <header className=" grid gap-12">
        <h2 className="text-5xl font-bold text-center">Seleccionar Plan</h2>

        <section className="flex flex-wrap gap-4">
          {subcriptions.map((subcription) => (
            <article
              className={`bg-[#1D1D1D] flex flex-col gap-3 p-4 rounded-md cursor-pointer hover:scale-105 transition-transform border-transparent border-2 hover:border-2 hover:border-white flex-1 basis-[300px] relative group`}
            >
              <div className="text-center grid gap-1 flex-1">
                {subcription.morePopular && (
                  <h2 className="w-full bg-white text-black absolute -top-4 left-0 rounded-t-md group-hover:opacity-0 transition-all duration-200 [transform-origin:top] py-0.5 font-semibold">
                    Mas popular
                  </h2>
                )}
                <h3 className="font-semibold text-lg">
                  Plan {subcription.name}
                </h3>
                <img
                  src={subcription.icon}
                  alt="plan icon"
                  className="justify-self-center w-40 h-40"
                />
                <p className="font-bold text-2xl">
                  {Intl.NumberFormat("es", {
                    currency: "COP",
                    style: "currency",
                    minimumSignificantDigits: 2,
                  }).format(subcription.price)}
                </p>
                <p className="">{subcription.description}</p>
              </div>

              <div>
                {subcription.features.map((feature) => (
                  <h4 className="odd:bg-[#333333aa] px-3 py-2 rounded-sm flex gap-2">
                    <CheckIcon />
                    <span>{feature}</span>
                  </h4>
                ))}
              </div>
            </article>
          ))}
        </section>

        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu..
        </p>

        <Button
          theme={ButtonTheme.Gold}
          size={ButtonSize.Medium}
          onClick={() => navigate("/register")}
          className="w-max justify-self-center"
        >
          Registrarme ahora
        </Button>
      </header>

      <section className="grid gap-16">
        <hgroup className="grid gap-6">
          <h2 className="text-5xl font-bold text-center">
            Alcanza tus objetivos
          </h2>
          <p className="text-center w-[70%] justify-self-center text-xl">
            Embárcate en un viaje de aprendizaje sin límites con nuestros planes
            mensuales, diseñados para impulsar tu crecimiento académico y
            profesional. ¡No esperes más para iniciar tu camino hacia el éxito!
          </p>
        </hgroup>

        <article className="grid gap-12 lg:grid-flow-col">
          {goals.map((goal) => (
            <hgroup className="grid gap-2 text-center">
              <h3 className="text-[#F7DF1E] font-bold text-6xl text-pretty">
                {goal.statistics}
              </h3>
              <p>{goal.description}</p>
            </hgroup>
          ))}
        </article>
      </section>

      <section className="grid gap-14 place-content-center relative z-20 p-8">
        <div className="absolute bottom-0 right-0 -z-10">
          <img src={giftBox} alt="gift box party" className="w-60" />
        </div>
        <div className="absolute top-10 left-4 -z-10">
          <img src={giftBox2} alt="gift box party" className="w-80" />
        </div>
        <hgroup className="grid gap-6 text-center text-pretty">
          <h2 className="text-5xl font-bold">
            Regala un Año de Aprendizaje con Nuestros Planes
          </h2>
          <p className="w-[70%] justify-self-center text-xl">
            ¡Haz un regalo que inspire! Regala un año completo de acceso
            ilimitado a nuestros cursos con nuestro Plan Mono. Perfecto para
            amigos, familiares o colegas que buscan crecer y aprender. ¡Impulsa
            su éxito educativo hoy mismo!
          </p>
        </hgroup>

        <div className="grid gap-2 place-content-center">
          <button className="bg-[#3D3D3D] border-2 border-white font-semibold py-3 px-16 rounded-md">
            Regala plan Duo
          </button>
          <button className="border-2 border-white font-semibold py-3 rounded-md">
            Regala plan familiar
          </button>
        </div>
      </section>

      <Faq />
    </main>
  );
};

export default Subcription;
