import { Button } from "@/common/components/buttons";
import { CheckIcon } from "@/common/components/icons";
import { goals, subcriptions } from "@/common/services/data";

import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Faq } from "../components/faq";
import { NavBar } from "@common/components/navbar/navbar";

import giftBox2 from "/assets/gift-box-party-2.png";
import giftBox from "/assets/gift-box-party.png";

export const Route = createFileRoute("/subcription/")({
  component: Subcription,
});

function Subcription() {
  const navigate = useNavigate();

  return (
    <main className="grid gap-0 text-white">
      <NavBar/>
      <header className="grid gap-12 bg-[#070707] py-16 max-lg:px-12 lg:px-32">
        <h2 className="text-center text-5xl font-bold">Seleccionar Plan</h2>

        <section className="flex flex-wrap gap-5 max-md:gap-7">
          {subcriptions.map((subcription) => (
            <article
              key={subcription.name}
              className={`group relative flex flex-1 basis-[300px] cursor-pointer flex-col gap-3 rounded-md border-2 border-transparent bg-[#1D1D1D] p-4 transition-transform hover:scale-105 hover:border-2 hover:border-white`}
            >
              <div className="grid flex-1 gap-1 text-center">
                {subcription.morePopular && (
                  <h2 className="absolute -top-4 left-0 w-full rounded-t-md bg-white py-0.5 font-bold italic text-black transition-all duration-200 [transform-origin:top] group-hover:opacity-0">
                    Mas popular
                  </h2>
                )}
                <h3 className="text-lg font-semibold italic">Plan {subcription.name}</h3>
                <img
                  alt="plan icon"
                  className="h-40 w-40 justify-self-center"
                  src={subcription.icon}
                />
                <p className="text-2xl font-bold">
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
                  <h4 key={feature} className="flex gap-2 rounded-sm px-3 py-2 odd:bg-[#333333aa]">
                    <CheckIcon />
                    <span>{feature}</span>
                  </h4>
                ))}
              </div>
            </article>
          ))}
        </section>

        <p className="px-0 text-center text-lg text-[#C8C8C8] md:px-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
          hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
          ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
          auctor ornare leo, non suscipit magna interdum eu..
        </p>

        <Button
          className="w-max mt-2 justify-self-center"

          onClick={() => navigate({ to: "/register/personal-info" })}
        >
          Registrarme ahora
        </Button>
      </header>

      <hr className="border-2 border-[#333333]" />

      <section className="grid w-full gap-16 bg-[#0E0E0E] py-32 max-lg:px-5 max-lg:py-10 lg:px-32">
        <hgroup className="grid gap-6">
          <h2 className="text-center text-5xl font-bold">Alcanza tus objetivos</h2>
          <p className="w-[70%] justify-self-center text-center text-xl max-md:w-full">
            Embárcate en un viaje de aprendizaje sin límites con nuestros planes mensuales,
            diseñados para impulsar tu crecimiento académico y profesional. ¡No esperes más para
            iniciar tu camino hacia el éxito!
          </p>
        </hgroup>

        <article className="grid gap-12 max-sm:px-4 md:px-6 lg:grid-flow-col max-lg:gap-3">
          {goals.map((goal) => (
            <hgroup
              key={goal.description}
              className="grid gap-2 text-center max-lg:px-20 max-sm:px-0"
            >
              <h3 className="text-pretty text-6xl font-poppins font-bold italic text-[#F7DF1E]">{goal.statistics}</h3>
              <p>{goal.description}</p>
            </hgroup>
          ))}
        </article>
      </section>

      <hr className="border-2 border-[#333333]" />

      <section className="relative z-20 grid w-full place-content-center gap-14 p-8 py-32 max-sm:bg-[#070707] max-lg:px-5 max-lg:py-20 ">
        <div className="absolute bottom-0 right-0 -z-20 ">
          <img alt="gift box party" className="w-70 max-lg:w-56" src={giftBox} />
        </div>
        <div className="absolute left-4 top-0 -z-10 max-lg:-left-2">
          <img alt="gift box party" className="w-96 max-lg:w-64 max-sm:w-52" src={giftBox2} />
        </div>
        <hgroup className="grid gap-6 text-pretty text-center">
          <h2 className="text-5xl font-bold max-md:text-4xl">
            Regala un año de aprendizaje con nuestros planes
          </h2>
          <p className="w-[70%] justify-self-center text-xl max-md:text-lg max-sm:w-full">
            ¡Haz un regalo que inspire! Regala un año completo de acceso ilimitado a nuestros cursos
            con nuestro Plan Mono. Perfecto para amigos, familiares o colegas que buscan crecer y
            aprender. ¡Impulsa su éxito educativo hoy mismo!
          </p>
        </hgroup>

        <div className="grid place-content-center gap-2">
          <button className="rounded-md border-2 border-white bg-[#3D3D3D] px-16 py-3 font-semibold">
            Regala plan Duo
          </button>
          <button className="rounded-md border-2 border-white py-3 font-semibold">
            Regala plan familiar
          </button>
        </div>
      </section>
      <section className="h-auto border-y-2 border-[#333333] bg-[#0E0E0E] max-lg:py-0">
        <Faq />
      </section>
    </main>
  );
}
