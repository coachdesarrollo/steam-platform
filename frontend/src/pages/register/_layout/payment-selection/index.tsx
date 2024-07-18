import { paymentTypes } from "@/common/services/data";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/register/_layout/payment-selection/")({
  component: PaymentSelection,
});

function PaymentSelection() {
  const navigate = useNavigate();

  return (
    <div className="grid p-6 bg-black/60 w-[480px] gap-8">
      <div className=" w-full grid place-content-center">
        <span className="text-white/50 text-center text-sm">4 de 5</span>
        <h2 className="text-white font-bold text-4xl text-center">
          Elige como quieres pagar
        </h2>
      </div>

      <p className="text-center text-lg leading-tight text-pretty text-white">
        Tu forma de pago está encriptada y puedes cambiarla cuando quieras.
        Transacciones seguras y confiables. Cancela fácilmente online.
      </p>

      <div className="grid gap-5">
        {paymentTypes.map((paymentType) => (
          <button
            className="flex justify-between border-[.5px] border-white text-white p-3 hover:bg-white hover:text-black transition-colors duration-500 font-semibold"
            onClick={() =>
              navigate({
                to: "/login",
              })
            }
          >
            {paymentType}
          </button>
        ))}
      </div>
    </div>
  );
}
