import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { VerificationBtn } from "./components/verification-btn/verification-btn";

export const Route = createFileRoute("/register/_layout/account-verification/")(
  {
    component: AccountVerification,
  }
);

function AccountVerification() {
  const navigate = useNavigate({ from: "/register" });

  const sharedClassName =
    "w-16 sm:flex-1 border-2 border-[#615D5D] grid place-content-center";

  return (
    <form className="justify-center bg-black/60 grid gap-12 text-center px-6 sm:px-12 py-8 max-md:w-screen pt-5">
      <section className="max-w-sm sm:max-w-sm grid place-content-center">
        <span className="text-sm text-white/50">3 de 4</span>
        <h2 className="text-4xl text-white font-bold mb-6">
          ¡Excelente! Ahora verifiquemos tu email
        </h2>
        <p className="text-base text-white">
          Hemos enviado un número de confirmación a{" "}
          <strong>loremipsum@gamil.com</strong> ára completar la verificación.
        </p>
      </section>
      <section className="flex flex-col flex-wrap gap-y-2">
        <p className="text-base font-medium text-white/50">
          Digite el codigo de verificación
        </p>
        <section className="h-16 sm:h-[4.8rem] flex items-stretch justify-center font-extrabold text-4xl text-white">
          <div className={sharedClassName}>2</div>
          <div className={sharedClassName}>0</div>
          <div className={sharedClassName}>2</div>
          <div className={sharedClassName}>4</div>
          <div className={sharedClassName}>1</div>
        </section>
      </section>
      <section className="flex flex-col flex-wrap items-stretch justify-center px-8 sm:px-0 gap-y-3">
        <VerificationBtn className="text-black border-[#f7df1e] bg-[#f7df1e] hover:bg-yellow-400 hover:border-yellow-400">
          Volver a generar
        </VerificationBtn>
        <VerificationBtn
          className="text-[#f7df1e] border-[#f7df1e] bg-transparent hover:text-black hover:border-yellow-400 hover:bg-yellow-400"
          onClick={() =>
            navigate({
              to: "/register/payment-selection",
            })
          }
        >
          Listo
        </VerificationBtn>
        <Link
          className="text-sm text-center text-[#928f8f] hover:text-white/75 font-medium tracking-wide"
          to="/register/payment-selection"
        >
          Omitir
        </Link>
      </section>
    </form>
  );
}
