import { Button } from "@/common/components/buttons";
import { ButtonSize, ButtonStyle } from "@/common/config/themes/button";
import { Link } from "@tanstack/react-router";
import logoLarge from "/assets/imagotiposteamwhite.png";
import logoTiny from "/assets/light-logo.png";

export function NavBar() {
  return (
    <nav className="bg-transparent text-white px-20 sm:px-14 pt-0 flex  sm:flex-row justify-between items-center w-full z-10 max-sm:px-8">
      <div //
       className="flex justify-center items-center space-x-4 mb-4 sm:mb-0 ">
        <img className="max-w-xs hidden sm:block" src={logoLarge} alt="SteamAcademy" />
        <img className="max-w-xs block sm:hidden h-10" src={logoTiny} alt="SteamAcademy" />
      </div>
      <Link to="/login">
        <Button
          size={ButtonSize.Small}
          variant={ButtonStyle.Outline}
          isLink={true}
        >
          Iniciar Sesión
        </Button>
      </Link>
    </nav>
  );
}
