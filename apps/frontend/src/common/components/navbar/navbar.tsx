import { useState } from "react";

import lightlogo from "/assets/light-logo.png";

import { Link, useNavigate } from "@tanstack/react-router";

import { BellIcon, BurgerIcon, SearchIcon } from "../icons";

export function NavBar() {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="fixed z-50 flex w-screen items-center justify-between bg-primary-black px-2 max-lg:px-5">
      <section className="flex w-full flex-wrap items-center justify-start py-4 max-lg:pr-0">
        <Link
          className="flex items-center space-x-3 px-5 max-lg:px-0 max-lg:pr-2 rtl:space-x-reverse"
          to="/home"
        >
          <img alt="steam" className="h-9" src={lightlogo} />
        </Link>

        {/* navbar options */}
        {isMenuVisible && (
          <div className="w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="mt-4 flex cursor-pointer flex-col rounded-lg border p-4 font-medium max-[1061px]:text-sm max-[764px]:fixed max-[764px]:left-auto max-[764px]:right-0 max-[764px]:h-screen max-[764px]:w-[40%] max-[764px]:items-center max-[764px]:gap-3 max-[764px]:rounded-none max-[764px]:border-none max-[764px]:bg-[#070707f6] max-[764px]:text-lg md:mt-0 md:flex-row md:space-x-4 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <Link to="/home">
                  <span
                    aria-current="page"
                    className="text-white/90 hover:text-white md:bg-transparent block px-3 py-2 hover:font-bold focus:border-b-2 md:p-0"
                  >
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/subcription">
                  <span
                    aria-current="page"
                    className="text-white/90 hover:text-white md:bg-transparent block px-3 py-2 hover:font-bold focus:border-b-2 md:p-0"
                  >
                    Planes
                  </span>
                </Link>
              </li>
              <li>
                <span
                  aria-current="page"
                  className="text-white/90 hover:text-white md:bg-transparent block px-3 py-2 hover:font-bold focus:border-b-2 md:p-0"
                >
                  Destacados
                </span>
              </li>
              <li>
                <span
                  aria-current="page"
                  className="text-white/90 hover:text-white md:bg-transparent block px-3 py-2 hover:font-bold focus:border-b-2 md:p-0"
                >
                  Categorías
                </span>
              </li>
              <li>
                <span
                  aria-current="page"
                  className="text-white/90 hover:text-white md:bg-transparent block px-3 py-2 hover:font-bold focus:border-b-2 md:p-0"
                >
                  Mi lista
                </span>
              </li>
              <li />
            </ul>
          </div>
        )}
      </section>
      {/* botones del lado derecho */}
      <section className="flex w-auto items-center justify-end px-6 max-lg:px-0 max-md:hidden">
        {/*búsqueda */}
        <div className="mx-2 flex items-center">
          {isSearchVisible && (
            <input
              className="max-lg: border-white/90 text-white/90 right-96 mx-2 w-52 rounded-md border bg-[#000000dc] p-1 max-[1185px]:absolute max-[1185px]:w-32 max-lg:right-80"
              placeholder="Buscar"
              type="text"
            />
          )}
          <button onClick={toggleSearch}>
            <SearchIcon className="text-white/80 hover:text-white h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-flow-col justify-end gap-4 p-1">
          <button>
            <BellIcon className="text-white/80 hover:text-white h-5 w-5" />
          </button>
        </div>
        <hr className="bg-white/90 w-6 rotate-90 border max-lg:-m-2" />
        {/*  */}
        <div className="grid grid-flow-col justify-end gap-2 p-1 max-lg:gap-1">
          <button
            className="bg-white/90 text-black hover:bg-white hover:text-black/90 h-8 w-32 rounded-md px-3 py-1 text-sm font-bold max-lg:w-28 max-lg:text-xs"
            onClick={() => navigate({ to: "/login" })}
          >
            Iniciar Sesión
          </button>
          <button
            className="border-white/90 bg-transparent text-white/90 hover:bg-white/90 hover:text-black h-8 w-32 rounded-md border px-3 py-1 text-sm font-bold max-lg:w-28 max-lg:text-xs"
            onClick={() => navigate({ to: "/register/personal-info" })}
          >
            Registrarse
          </button>
        </div>
      </section>
      {/* botón de hamburguesa para dispositivos pequeños */}
      <button
        aria-controls="navbar-multi-level"
        aria-expanded="false"
        className="text-white/80 focus:ring-gray-400 inline-flex h-10 w-10 flex-wrap items-center justify-center rounded-lg p-2 text-sm hover:bg-[#1c1b1b] focus:outline-none focus:ring-1 md:hidden"
        data-collapse-toggle="navbar-multi-level"
        type="button"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <BurgerIcon />
      </button>
    </nav>
  );
}

export default NavBar;
