import { FC, Fragment } from "react";
import { type HomeProps } from "./propTypes";
import {
    HomeHeader,
    HomeAbout
} from "../../components";


const Home: FC<HomeProps> = ({ isDark = false }) => {
    console.log(`Theme: ${isDark ? "dark" : "light"}`);

    return (
        <Fragment>
            {/* <HomeHeader /> */}

            <section className="bg-center bg-no-repeat bg-banner-hero bg-black/70 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Películas y series ilimitadas y mucho más
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Disfruta donde quieras. Cancela cuando quieras.
                    </p>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
                    </p>
                    <form className="w-full max-w-md mx-auto">   
                        <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                            Email sign-up
                        </label>
                        <div className="relative flex flex-col sm:flex-row">
                            <div className="absolute inset-y-0 rtl:inset-x-0 start-0 sm:flex items-center ps-3.5 pointer-events-none hidden">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </div>
                            <input type="email" id="default-email" className="block w-full p-4 sm:ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900/70 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                            <button type="submit" className="w-2/5 ml-0 mt-5 sm:mt-0 text-black sm:ml-2 bg-yellow-500/80 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-neutral-900 font-medium rounded-md text-sm p-4 dark:bg-yellow-400 dark:hover:bg-yelllow-400 dark:focus:ring-yellow-500">
                                Comenzar
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <HomeAbout
                title="Disfruta en TV"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit."
                thumbnail="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg"
            />
            <HomeAbout
                title="Descarga tus series para verlas offline"
                description="Guarda tu contenido favorito y tendrás siempre algo para ver."
                thumbnail="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <HomeAbout
                title="Disfruta donde quieras"
                description="Películas y series ilimitadas en tu teléfono, tablet, laptop y TV."
                thumbnail="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            />
        </Fragment>
    );
};

export default Home;
