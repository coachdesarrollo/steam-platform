import { 
  FacebookIcon, GoogleIcon, InstagramIcon, InIcon, MobileIcon, HouseIcon, MailIcon,TelephoneIcon 
} from "@/common/components/icons";
export function Footer() {
  return (
    <footer className="bg-gray-500 text-center text-surface/75 dark:bg-[#070707] dark:text-gray-400 lg:text-left">
      <div //Footer title container
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between"
      >
        <div className="me-12 hidden lg:block">
          <span>Encuéntranos en nuestras redes sociales:</span>
        </div>

        <div //Social network icons container
          className="flex justify-center "
        >
          <a //Facebook
            href="https://www.facebook.com/STEAMAcademy.co"
            target="_blank"
            className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:dark:text-gray-200"
          >
            <FacebookIcon />
          </a>
          
          <a //google
            href="https://mail.google.com/mail/u/0/#search/steamacademi%40gmail.com" target="_blank"
            className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:dark:text-gray-200"
          >
            <GoogleIcon />
          </a>
          <a //insta
            href="https://www.instagram.com/steamacademy.co/"
            target="_blank"
            className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:dark:text-gray-200"
          >
            <InstagramIcon/>
          </a>
          <a //In
            href="https://co.linkedin.com/company/steamacademyco"
            target="_blank"
            className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:dark:text-gray-200"
          >
            <InIcon/>
          </a>
          
        </div>
      </div>

      <div //-- Main container div:
        className="mx-6 py-10 text-center md:text-left "
      >
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div //--Elements section 1
            className=""
          >
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start ">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              Sobre la empresa
            </h6>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="https://www.steamacademy.com.co/" target="_blank">
                {" "}
                Sobre STEAM{" "}
              </a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a
                href="https://www.steamacademy.com.co/fundacionstem"
                target="_blank"
              >
                {" "}
                Fundación STEAM{" "}
              </a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="https://www.steamacademy.com.co/" target="_blank">
                {" "}
                STEAM para empresas{" "}
              </a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="https://www.steamacademy.com.co/blog" target="_blank">
                {" "}
                Blog{" "}
              </a>
            </p>
          </div>

          <div //-- Products section 2
          >
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Productos
            </h6>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Centro de ayuda</a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Empleo</a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Preferencias de cookies</a>
            </p>
          </div>

          <div //-- Useful links section
          >
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Información
            </h6>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Tarjetas de regalo</a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Términos de uso</a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Información corporativa</a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Prensa</a>
            </p>
            <p className="mb-4 hover:dark:text-gray-200">
              <a href="#!">Privacidad</a>
            </p>
          </div>

          <div //-- Contact section
          >
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contacto
            </h6>
            <a
              href="#!"
              className="mb-4 flex items-center justify-center md:justify-start hover:dark:text-gray-200"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <HouseIcon/>
              </span>
              Cra. 46 #74-16, Piso 2 local 12 <br /> Nte. Centro Histórico,
              Barranquilla, Atlántico, Colombia
            </a>
            <a
              href="#!"
              className="mb-4 flex items-center justify-center md:justify-start hover:dark:text-gray-200"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <MailIcon/>
              </span>
              steamacademi@gmail.com
            </a>
            <a
              href="#!"
              className="mb-4 flex items-center justify-center md:justify-start hover:dark:text-gray-200"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <MobileIcon/>
              </span>
              +57 3006388207
            </a>
            <a
              href="#!"
              className="flex items-center justify-center md:justify-start hover:text-gray-200"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5 ">
                <TelephoneIcon/>
              </span>
              <span>+57 3042801825</span>
            </a>
          </div>
        </div>
      </div>

      <div //--Copyright section
        className="bg-black/5 p-6 text-center"
      >
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tw-elements.com/">
          {" "}
          STEAM ACADEMY
        </a>
      </div>
    </footer>
  );
}
