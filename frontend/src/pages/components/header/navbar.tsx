import { Button } from "@/common/components/buttons";
import { ButtonSize, ButtonStyle } from "@/common/config/themes/button";
import { Link } from "@tanstack/react-router";
import logo from "/assets/imagotiposteamwhite.png";

export function NavBar() {
  return (
    <nav className="bg-transparent text-white px-20 sm:px-14 pt-0 flex flex-col sm:flex-row justify-between items-center w-full z-10">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <img className="max-w-xs" src={logo} alt="SteamAcademy" />
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
