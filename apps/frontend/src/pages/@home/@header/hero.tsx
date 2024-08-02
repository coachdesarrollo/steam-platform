import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/common/components/buttons";
import { ButtonColor, ButtonSize, ButtonVariant } from "@/common/components/buttons/button";
import { InfoIcon, PlayIcon } from "@/common/components/icons";
import { synopsis_group } from "@/common/services/data";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex h-screen w-[80%] items-end justify-start max-lg:w-full max-lg:py-16">
      <div className="space-y-8 px-4 max-md:py-5 lg:py-40">
        {synopsis_group.map((synopsis) => (
          <hgroup
            key={synopsis.description}
            className="grid gap-2 px-7 text-left max-lg:px-20 max-sm:px-0"
          >
            <h3 className="text-pretty font-poppins text-7xl font-bold max-lg:text-6xl max-sm:text-5xl">
              {synopsis.title}
            </h3>
            <p className="w-[50%] text-lg max-xl:w-full max-sm:text-base">{synopsis.description}</p>
          </hgroup>
        ))}
        <div className="flex flex-row gap-2 px-7 max-lg:px-20 max-sm:w-[70%] max-sm:px-0 max-[556px]:w-full max-[556px]:flex-col max-[556px]:items-center">
          <Button
            className="flex items-center gap-2 max-sm:text-sm max-[556px]:px-11"
            color={ButtonColor.Gold}
            size={ButtonSize.Small}
            variant={ButtonVariant.Standard}
            onClick={() => navigate({ to: "/" })}
          >
            <PlayIcon className="m-1 w-4" />
            Reproducir
          </Button>
          <button className="flex items-center gap-2 rounded-md border-none bg-[#a2a1a1c7] p-2 text-white/75 hover:bg-[#c1c1c1c7] max-sm:text-sm">
            <InfoIcon className="m-1 w-6" />
            Más información
          </button>
        </div>
      </div>
    </section>
  );
}
