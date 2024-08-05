import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/common/components/buttons";
import { ButtonColor, ButtonSize, ButtonVariant } from "@/common/components/buttons/button";
import { InfoIcon, PlayIcon } from "@/common/components/icons";
import { synopsis_group } from "@/common/services/data";

export function Hero() {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 flex h-screen w-full items-end justify-start p-4 pb-24">
      <div className="space-y-8 px-4 py-10">
        {synopsis_group.map((synopsis) => (
          <hgroup
            key={synopsis.description}
            className={`grid transform gap-2 text-left transition-all duration-1000 ease-in-out ${hide ? "translate-y-4" : "translate-y-0"} max-lg:px-5 max-sm:px-0`}
          >
            <h3 className="text-pretty font-poppins text-7xl font-bold max-lg:text-6xl max-sm:text-5xl">
              {synopsis.title}
            </h3>
            <p
              className={`w-[50%] text-lg transition-opacity duration-1000 ease-in-out max-xl:w-full max-sm:text-base ${hide ? "hidden opacity-0" : "opacity-100"}`}
            >
              {synopsis.description}
            </p>
          </hgroup>
        ))}
        <div className="flex flex-row gap-2 max-sm:w-[70%] max-sm:px-0 max-[556px]:w-full max-[556px]:flex-col max-[556px]:items-center">
          <Button
            className="flex items-center gap-2 max-sm:text-sm"
            color={ButtonColor.Gold}
            size={ButtonSize.Small}
            variant={ButtonVariant.Standard}
            onClick={() => navigate({ to: "/" })}
          >
            <PlayIcon className="m-1 w-4" />
            Reproducir
          </Button>
          <button className="flex items-center gap-2 rounded-md border-none bg-[#a2a1a1b4] p-2 text-white/75 hover:bg-[#c1c1c1c7] max-sm:text-sm">
            <InfoIcon className="m-1 w-6" />
            Más información
          </button>
        </div>
      </div>
    </section>
  );
}
