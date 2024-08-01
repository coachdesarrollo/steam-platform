import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/common/components/buttons";
import { ButtonColor, ButtonSize, ButtonVariant } from "@/common/components/buttons/button";
import { InfoIcon } from "@/common/components/icons";
import { synopsis_group } from "@/common/services/data";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex h-screen w-[70%] items-end justify-start">
      <div className="space-y-8 px-4 lg:py-56">
        {synopsis_group.map((synopsis) => (
          <hgroup
            key={synopsis.description}
            className="grid gap-2 px-7 text-left max-lg:px-20 max-sm:px-0"
          >
            <h3 className="text-pretty font-poppins text-7xl font-bold">{synopsis.title}</h3>
            <p className="w-[50%] text-lg">{synopsis.description}</p>
          </hgroup>
        ))}
        <div className="flex flex-col justify-start space-x-2 px-7 sm:flex-row sm:space-y-0">
          <Button
            className=""
            color={ButtonColor.Gold}
            size={ButtonSize.Small}
            variant={ButtonVariant.Standard}
            onClick={() => navigate({ to: "/register/personal-info" })}
          >
            Reproducir
          </Button>
          <Button
            className="flex items-center gap-1 border-none bg-[#a2a1a1c7] text-white/75 hover:bg-[#c1c1c1c7]"
            size={ButtonSize.Small}
            variant={ButtonVariant.Standard}
            onClick={() => navigate({ to: "/register/personal-info" })}
          >
            <InfoIcon className="m-1 w-6" />
            Más información
          </Button>
        </div>
      </div>
    </section>
  );
}
