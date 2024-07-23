import { Button } from "@/common/components/buttons";
import { ButtonSize, ButtonStyle } from "@/common/config/themes/button";

import { Link } from "@tanstack/react-router";

import logoLarge from "/assets/imagotiposteamwhite.png";
import logoTiny from "/assets/light-logo.png";

export function NavBar() {
  return (
    <nav className="z-10 flex w-full items-center justify-between bg-transparent px-20 pt-0 text-white max-sm:px-8 sm:flex-row sm:px-14">
      <div //
        className="mb-4 flex items-center justify-center space-x-4 sm:mb-0"
      >
        <img alt="SteamAcademy" className="hidden max-w-xs sm:block" src={logoLarge} />
        <img alt="SteamAcademy" className="block h-10 max-w-xs sm:hidden" src={logoTiny} />
      </div>
      <Link to="/login">
        <Button isLink={true} size={ButtonSize.Small} variant={ButtonStyle.Outline}>
          Iniciar Sesión
        </Button>
      </Link>
    </nav>
  );
}
