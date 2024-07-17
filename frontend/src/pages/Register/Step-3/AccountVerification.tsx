import { Step } from "@/components/Register/propTypes.d";
import { Link, useNavigate } from "react-router-dom";

type VerificationButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "className" | "onClick" | "disabled" | "children"
>;

const VerificationButton: React.FC<VerificationButtonProps> = ({
  type = "button",
  onClick,
  className,
  children,
  disabled,
}) => {
  const sharedClassName =
    "inline-block shadow border-2 rounded-md cursor-pointer text-xl font-semibold px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";
  const buttonClassName = className
    ? `${sharedClassName} ${className}`
    : sharedClassName;
  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const AccountVerification: React.FC = () => {
  const navigate = useNavigate();

  const sharedClassName =
    "w-16 sm:flex-1 border-2 border-[#615D5D] grid place-content-center";
  return (
    <main className="grid place-content-center h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply">
      <form className="bg-black/60 grid gap-12 text-center px-6 sm:px-12 py-8">
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
          <VerificationButton className="text-black border-[#f7df1e] bg-[#f7df1e] hover:bg-yellow-400 hover:border-yellow-400">
            Volver a generar
          </VerificationButton>
          <VerificationButton
            className="text-[#f7df1e] border-[#f7df1e] bg-transparent hover:text-black hover:border-yellow-400 hover:bg-yellow-400"
            onClick={() => navigate(`/register/${Step.STEP_4}`)}
          >
            Listo
          </VerificationButton>
          <Link
            to={`/register/${Step.STEP_4}`}
            className="text-sm text-center text-[#928f8f] hover:text-white/75 font-medium tracking-wide"
          >
            Omitir
          </Link>
        </section>
      </form>
    </main>
  );
};

export default AccountVerification;
