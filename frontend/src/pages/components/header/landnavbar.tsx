import { useNavigate } from "@tanstack/react-router";

import logoLarge from "/assets/imagotiposteamwhite.png";
import logoTiny from "/assets/light-logo.png";

import { Button } from "@/common/components/buttons";
import { ButtonColor, ButtonSize, ButtonVariant } from "@/common/components/buttons/button";

export function LandNavBar() {
  const navigate = useNavigate();

  return (
    <nav className="z-10 flex w-full items-center justify-between bg-transparent px-20 pt-0 text-white max-sm:px-8 sm:flex-row sm:px-14">
      <div //
        className="mb-4 flex items-center justify-center space-x-4 sm:mb-0"
      >
        <img alt="SteamAcademy" className="hidden max-w-xs sm:block" src={logoLarge} />
        <img alt="SteamAcademy" className="block h-10 max-w-xs sm:hidden" src={logoTiny} />
      </div>
      <Button
        size={ButtonSize.Small}
        variant={ButtonVariant.Outline}
        color={ButtonColor.Light}
        onClick={() => navigate({ to: "/login" })}
      >
        Iniciar Sesión
      </Button>
    </nav>
  );
}
