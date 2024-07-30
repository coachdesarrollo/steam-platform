import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import { VerificationBtn } from "./components/verification-btn";

export const Route = createFileRoute("/register/_layout/account-verification/")({
  component: AccountVerification,
});

function AccountVerification() {
  const navigate = useNavigate({ from: "/register" });

  const sharedClassName = "w-16 sm:flex-1 border-2 border-[#615D5D] grid place-content-center";

  return (
    <form className="bg-black/60 grid justify-center gap-11 px-6 py-8 pt-5 text-center max-md:w-screen max-md:gap-5 max-sm:flex max-sm:min-h-screen max-sm:w-screen max-sm:flex-col max-sm:items-center max-sm:justify-center sm:px-12">
      <section className="grid max-w-sm place-content-center sm:max-w-sm">
        <span className="text-white/50 text-sm">3 de 4</span>
        <h2 className="text-white mb-6 text-4xl font-bold">
          ¡Excelente! Ahora verifiquemos tu email
        </h2>
        <p className="text-white text-base">
          Hemos enviado un número de confirmación a <strong>loremipsum@gamil.com</strong> ára
          completar la verificación.
        </p>
      </section>
      <section className="flex flex-col flex-wrap gap-y-2">
        <p className="text-white/50 text-base font-medium">Digite el codigo de verificación</p>
        <section className="text-white flex h-16 items-stretch justify-center text-4xl font-extrabold sm:h-[4.8rem]">
          <div className={sharedClassName}>2</div>
          <div className={sharedClassName}>0</div>
          <div className={sharedClassName}>2</div>
          <div className={sharedClassName}>4</div>
          <div className={sharedClassName}>1</div>
        </section>
      </section>
      <section className="flex flex-col flex-wrap items-stretch justify-center gap-y-3 px-8 sm:px-0">
        <VerificationBtn className="text-black hover:border-yellow-400 hover:bg-yellow-400 border-[#f7df1e] bg-[#f7df1e]">
          Volver a generar
        </VerificationBtn>
        <VerificationBtn
          className="bg-transparent hover:border-yellow-400 hover:bg-yellow-400 hover:text-black border-[#f7df1e] text-[#f7df1e]"
          onClick={() =>
            navigate({
              to: "/register/payment-selection",
            })
          }
        >
          Listo
        </VerificationBtn>
        <Link
          className="hover:text-white/75 text-center text-sm font-medium tracking-wide text-[#928f8f]"
          to="/register/payment-selection"
        >
          Omitir
        </Link>
      </section>
    </form>
  );
}
