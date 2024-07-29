import { useState } from "react";

import lightlogo from "/assets/light-logo.png";

import { useNavigate, Link } from "@tanstack/react-router";

import { BellIcon, SearchIcon } from "../icons";

export function NavBar() {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="fixed z-50 flex w-screen items-center justify-between bg-[#070707] px-2 max-lg:px-5">
      <section className="flex w-full flex-wrap items-center justify-start py-4 max-lg:pr-0">
        <Link
          className="flex items-center space-x-3 px-5 max-lg:px-0 max-lg:pr-2 rtl:space-x-reverse"
          to="/"
        >
          <img alt="steam" className="h-9" src={lightlogo} />
        </Link>

        {/* navbar options */}
        {isMenuVisible && (
          <div className="w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="mt-4 flex cursor-pointer flex-col rounded-lg border p-4 font-medium max-[1061px]:text-sm max-[764px]:fixed max-[764px]:left-auto max-[764px]:right-0 max-[764px]:h-screen max-[764px]:w-fit max-[764px]:bg-black md:mt-0 md:flex-row md:space-x-4 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <Link to="/">
                  <span
                    aria-current="page"
                    className="block px-3 py-2 text-white/90 hover:font-bold hover:text-white focus:border-b-2 md:bg-transparent md:p-0"
                  >
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/subcription">
                  <span
                    aria-current="page"
                    className="block px-3 py-2 text-white/90 hover:font-bold hover:text-white focus:border-b-2 md:bg-transparent md:p-0"
                  >
                    Planes
                  </span>
                </Link>
              </li>
              <li>
                <span
                  aria-current="page"
                  className="block px-3 py-2 text-white/90 hover:font-bold hover:text-white focus:border-b-2 md:bg-transparent md:p-0"
                >
                  Destacados
                </span>
              </li>
              <li>
                <span
                  aria-current="page"
                  className="block px-3 py-2 text-white/90 hover:font-bold hover:text-white focus:border-b-2 md:bg-transparent md:p-0"
                >
                  Categorías
                </span>
              </li>
              <li>
                <span
                  aria-current="page"
                  className="block px-3 py-2 text-white/90 hover:font-bold hover:text-white focus:border-b-2 md:bg-transparent md:p-0"
                >
                  Mi lista
                </span>
              </li>
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
              className="mx-2 w-52 rounded-md border border-white/90 bg-[#00000051] p-1 text-white/90 max-[1185px]:w-32"
              placeholder="Buscar"
              type="text"
            />
          )}
          <button onClick={toggleSearch}>
            <SearchIcon className="h-5 w-5 text-white/80 hover:text-white" />
          </button>
        </div>

        <div className="grid grid-flow-col justify-end gap-4 p-1">
          <button>
            <BellIcon className="h-5 w-5 text-white/80 hover:text-white" />
          </button>
        </div>
        <hr className="w-6 rotate-90 border bg-white/90 max-lg:-m-2" />
        {/*  */}
        <div className="grid grid-flow-col justify-end gap-2 p-1 max-lg:gap-1">
          <button
            className="h-8 w-32 rounded-md bg-white/90 px-3 py-1 text-sm font-bold text-black hover:bg-white hover:text-black/90 max-lg:w-28 max-lg:text-xs"
            onClick={() => navigate({ to: "/login" })}
          >
            Iniciar Sesión
          </button>
          <button
            className="h-8 w-32 rounded-md border border-white/90 bg-transparent px-3 py-1 text-sm font-bold text-white/90 hover:bg-white/90 hover:text-black max-lg:w-28 max-lg:text-xs"
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
        className="inline-flex h-10 w-10 flex-wrap items-center justify-center rounded-lg p-2 text-sm text-white/80 hover:bg-[#272727] focus:outline-none focus:ring-1 focus:ring-gray-400 md:hidden"
        data-collapse-toggle="navbar-multi-level"
        type="button"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 17 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1h15M1 7h15M1 13h15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;
