import { useState } from "react";
import lightlogo from "/assets/light-logo.png";
import { BellIcon, SearchIcon } from "../icons";
import { useNavigate, Link } from "@tanstack/react-router";

export function NavBar() {
  const navigate= useNavigate()
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
   
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <nav className="fixed z-50 bg-[#070707] flex justify-between px-2 max-lg:px-5 items-center w-screen">
      <section className="w-full flex flex-wrap items-center justify-start py-4 max-lg:pr-0">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse px-5 max-lg:px-0 max-lg:pr-2">
          <img src={lightlogo} className="h-9" alt="steam" />
        </Link>

        {/* navbar options */} 
        {isMenuVisible && (
          <div className="w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="cursor-pointer flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 max-[1061px]:text-sm max-[764px]:w-fit max-[764px]:fixed max-[764px]:left-auto max-[764px]:right-0 max-[764px]:bg-black max-[764px]:h-screen">
            <li>
              <Link to="/">
                <span className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2 " aria-current="page">Inicio</span>
              </Link>
            </li>
            <li>
              <Link to="/subcription">
                <span className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Planes</span>
              </Link>
            </li>
            <li>
              <span className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Destacados</span>
            </li>
            <li>
              <span className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Categorías</span>
            </li>
            <li>
              <span className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Mi lista</span>
            </li>
          </ul>
        </div>)}
      </section>
      {/* botones del lado derecho */}
      <section className="w-auto max-md:hidden flex items-center justify-end px-6 max-lg:px-0">
        {/*búsqueda */}
        <div className="flex items-center mx-2">
          {isSearchVisible && (
            <input
              className="mx-2 p-1 rounded-md w-52 bg-[#00000051] border border-white/90 text-white/90 max-[1185px]:w-32"
              type="text"
              placeholder="Buscar"
            />
          )}
          <button onClick={toggleSearch}>
            <SearchIcon className="w-5 h-5 text-white/80 hover:text-white" />
          </button>
        </div>

        <div className="p-1 grid grid-flow-col justify-end gap-4">
          <button>
            <BellIcon className="w-5 h-5 text-white/80 hover:text-white" />
          </button>
        </div>
        <hr className="bg-white/90 border w-6 rotate-90 max-lg:-m-2" />
        {/*  */}
        <div className="p-1 grid grid-flow-col justify-end gap-2 max-lg:gap-1">
          <button onClick={() => navigate({ to: "/login" })} className="font-bold bg-white/90 w-32 max-lg:w-28 text-sm max-lg:text-xs h-8 text-black px-3 py-1 rounded-md hover:bg-white hover:text-black/90">Iniciar Sesión</button>
          <button onClick={() => navigate({ to: "/register/personal-info" })} className="font-bold bg-transparent border border-white/90 w-32 max-lg:w-28 text-sm max-lg:text-xs h-8 text-white/90 px-3 py-1 rounded-md hover:bg-white/90 hover:text-black">Registrarse</button>
        </div>
      </section>
      {/* botón de hamburguesa para dispositivos pequeños */}
      <button onClick={toggleMenu} data-collapse-toggle="navbar-multi-level" type="button"
        className="inline-flex flex-wrap items-center p-2 w-10 h-10 justify-center text-sm text-white/80 rounded-lg md:hidden hover:bg-[#272727] focus:outline-none focus:ring-1 focus:ring-gray-400"
        aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;
