import  lightlogo  from "/assets/light-logo.png"
import { BellIcon, SearchIcon } from "../icons"
export function NavBar() {
    return (
        <nav className="bg-[#070707] grid grid-cols-10 justify-between items-center w-screen">
            <section className="col-span-6 w-full flex flex-wrap items-center justify-start mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse px-5">
                  <img src={lightlogo} className="h-9" alt="steam" />
                </a>
                
                {/* navbar options */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 max-lg:text-sm">
                        <li>
                        <a href="#" className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Home</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Planes</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Destacados</a>  
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Categorías</a> 
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-white/90  md:bg-transparent md:p-0 hover:text-white hover:font-bold focus:border-b-2" aria-current="page">Mi lista</a> 
                        </li>
                        
                    </ul>
                </div>    
            </section>
            {/* botones del lado derecho */}
            <section className="col-span-4 w-auto max-md:hidden flex items-center justify-end px-6 max-xl:px-9 max-lg:px-4">
              <div className=" p-1 grid grid-flow-col justify-end gap-3">
                <SearchIcon className="w-5 h-5 text-white/80" />
                <BellIcon className="w-5 h-5 text-white/80" />
              </div>
              <hr className="bg-white/90 border w-6 rotate-90"/>
                    
              <div className="p-1 grid grid-flow-col justify-end gap-2 max-lg:gap-1">
                <button className="bg-[#272727] w-fit text-sm max-lg:text-xs h-9 text-white/90 px-3 py-1 rounded-md">Iniciar sesión</button>
                <button className="bg-[#272727] w-fit text-sm max-lg:text-xs h-9 text-white/90 px-3 py-1 rounded-md">Registrarse</button>
              </div>
                   
            </section>
            {/* botón de hamburguesa para dispositivos pequeños */}
            <button data-collapse-toggle="navbar-multi-level" type="button" 
            className="inline-flex flex-wrap items-center p-2 w-10 h-10 justify-center text-sm text-white/80 rounded-lg md:hidden hover:bg-[#272727] focus:outline-none focus:ring-1 focus:ring-gray-400 " aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
            </button>
        </nav>

    )}