import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { paymentTypes } from "@/common/services/data";

export const Route = createFileRoute("/register/_layout/payment-selection/")({
  component: PaymentSelection,
});

function PaymentSelection() {
  const navigate = useNavigate();

  return ( //w-[480px] items-center justify-center gap-7 space-y-8 bg-black/60 p-6 pt-5 max-sm:h-screen max-sm:w-screen max-sm:min-h-screen max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:bg-[#0000007c]
    <div className="w-[480px] items-center justify-center gap-7 space-y-8 bg-black/60 p-6 pt-5 max-sm:h-screen max-sm:w-screen max-sm:min-h-screen max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:space-y-2 max-sm:bg-[#0000007c]">
      <div className="grid w-full place-content-center">
        <span className="text-center text-sm text-white/50">4 de 5</span>
        <h2 className="text-center text-4xl font-bold text-white">Elige como quieres pagar</h2>
      </div>

      <p className="text-pretty text-center text-lg leading-tight text-white">
        Tu forma de pago está encriptada y puedes cambiarla cuando quieras. Transacciones seguras y
        confiables. Cancela fácilmente online.
      </p>

      <div className="grid justify-center gap-5">
        {paymentTypes.map((paymentType) => (
          <button
            key={paymentType}
            className="flex w-96 justify-between border-[.5px] border-white p-3 font-semibold text-white transition-colors duration-500 hover:bg-white hover:text-black max-sm:w-60"
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
