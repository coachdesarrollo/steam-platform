import { Button } from "@/common/components/buttons";
import { CheckIcon } from "@/common/components/icons";
import { ButtonSize, ButtonTheme } from "@/common/config/themes/button";
import { goals, subcriptions } from "@/common/services/data";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Faq } from "../components/faq";

import giftBox2 from "/assets/gift-box-party-2.png";
import giftBox from "/assets/gift-box-party.png";

export const Route = createFileRoute("/subcription/")({
  component: Subcription,
});

function Subcription() {
  const navigate = useNavigate();

  return (
    <main className="text-white grid gap-0">
      <header className=" grid gap-12 bg-black py-16 lg:px-32 max-lg:px-12">
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

        <p className="text-center text-lg px-0 md:px-5 text-[#C8C8C8]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu..
        </p>

        <Button
          theme={ButtonTheme.Gold}
          size={ButtonSize.Medium}
          className="w-max justify-self-center"
          onClick={() => navigate({ to: "/register/personal-info" })}
        >
          Registrarme ahora
        </Button>
      </header>

      <hr className="border-[#333333] border-2" />

      <section className="grid gap-16 w-full py-32 lg:px-32 max-lg:px-12 bg-[#0E0E0E]">
        <hgroup className="grid gap-6">
          <h2 className="text-5xl font-bold text-center ">
            Alcanza tus objetivos
          </h2>
          <p className="text-center w-[70%] justify-self-center text-xl max-md:w-full">
            Embárcate en un viaje de aprendizaje sin límites con nuestros planes
            mensuales, diseñados para impulsar tu crecimiento académico y
            profesional. ¡No esperes más para iniciar tu camino hacia el éxito!
          </p>
        </hgroup>

        <article className="grid gap-12 lg:grid-flow-col md:px-6 max-sm:px-4">
          {goals.map((goal) => (
            <hgroup className="grid gap-2 text-center max-lg:px-20 max-sm:px-0">
              <h3 className="text-[#F7DF1E] font-bold text-6xl text-pretty">
                {goal.statistics}
              </h3>
              <p>{goal.description}</p>
            </hgroup>
          ))}
        </article>
      </section>

      <hr className="border-[#333333] border-2" />

      <section className="grid gap-14 place-content-center relative z-20 p-8 w-full py-32 max-sm:bg-[#070707]">
        <div className="absolute bottom-0 right-0 -z-20">
          <img
            src={giftBox}
            alt="gift box party"
            className="w-70 max-lg:w-56"
          />
        </div>
        <div className="absolute top-0 left-4 -z-10">
          <img
            src={giftBox2}
            alt="gift box party"
            className="w-96 max-lg:w-64 max-sm:w-52"
          />
        </div>
        <hgroup className="grid gap-6 text-center text-pretty">
          <h2 className="text-5xl font-bold max-md:text-4xl">
            Regala un año de aprendizaje con nuestros planes
          </h2>
          <p className="w-[70%] justify-self-center text-xl max-md:text-lg">
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
      <section className="border-[#333333] border-y-2  bg-[#0E0E0E] h-auto">
        <Faq />
      </section>
    </main>
  );
}
