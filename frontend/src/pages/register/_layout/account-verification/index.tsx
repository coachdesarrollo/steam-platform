import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import { VerificationBtn } from "./components/verification-btn/verification-btn";

export const Route = createFileRoute("/register/_layout/account-verification/")({
  component: AccountVerification,
});

function AccountVerification() {
  const navigate = useNavigate({ from: "/register" });

  const sharedClassName = "w-16 sm:flex-1 border-2 border-[#615D5D] grid place-content-center";

  return (
    <form className="grid justify-center gap-12 bg-black/60 px-6 py-8 pt-5 text-center max-md:w-screen sm:px-12">
      <section className="grid max-w-sm place-content-center sm:max-w-sm">
        <span className="text-sm text-white/50">3 de 4</span>
        <h2 className="mb-6 text-4xl font-bold text-white">
          ¡Excelente! Ahora verifiquemos tu email
        </h2>
        <p className="text-base text-white">
          Hemos enviado un número de confirmación a <strong>loremipsum@gamil.com</strong> ára
          completar la verificación.
        </p>
      </section>
      <section className="flex flex-col flex-wrap gap-y-2">
        <p className="text-base font-medium text-white/50">Digite el codigo de verificación</p>
        <section className="flex h-16 items-stretch justify-center text-4xl font-extrabold text-white sm:h-[4.8rem]">
          <div className={sharedClassName}>2</div>
          <div className={sharedClassName}>0</div>
          <div className={sharedClassName}>2</div>
          <div className={sharedClassName}>4</div>
          <div className={sharedClassName}>1</div>
        </section>
      </section>
      <section className="flex flex-col flex-wrap items-stretch justify-center gap-y-3 px-8 sm:px-0">
        <VerificationBtn className="border-[#f7df1e] bg-[#f7df1e] text-black hover:border-yellow-400 hover:bg-yellow-400">
          Volver a generar
        </VerificationBtn>
        <VerificationBtn
          className="border-[#f7df1e] bg-transparent text-[#f7df1e] hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
          onClick={() =>
            navigate({
              to: "/register/payment-selection",
            })
          }
        >
          Listo
        </VerificationBtn>
        <Link
          className="text-center text-sm font-medium tracking-wide text-[#928f8f] hover:text-white/75"
          to="/register/payment-selection"
        >
          Omitir
        </Link>
      </section>
    </form>
  );
}
