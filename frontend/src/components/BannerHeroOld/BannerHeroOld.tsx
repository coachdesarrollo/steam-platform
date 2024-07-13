// import { ArrowIcon } from "../ArrowIcon";
import { EnvolveIcon } from "../EnvolveIcon";

const BannerHero: React.FC = () => {
  return (
    <header className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Películas y series ilimitadas y mucho más
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-100 lg:text-2xl sm:px-16 lg:px-48">
            Disfruta donde quieras. Cancela cuando quieras.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
        </p>
        <form className="w-full max-w-md mx-auto">
            <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Email sign-up
            </label>
            <div className="relative flex flex-col sm:flex-row items-center gap-5 sm:gap-2">
                <div className="absolute inset-y-0 rtl:inset-x-0 start-0 sm:flex items-center ps-3.5 pointer-events-none hidden">
                    <EnvolveIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input type="email" id="default-email" className="block w-full p-4 sm:ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900/70 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                <button type="submit" className="w-2/5 flex justify-evenly items-center gap-3 text-black bg-yellow-500/80 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-neutral-900 font-semibold rounded-md text-xl/none p-4 dark:bg-yellow-400 dark:hover:bg-yelllow-400 dark:focus:ring-yellow-500">
                    Comenzar <ArrowIcon className="h-5 text-neutral-800" />
                </button>
            </div>
        </form>
    </header>
  );
};

export default BannerHero;
