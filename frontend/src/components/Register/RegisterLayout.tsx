import { FC } from "react";
import { Outlet } from "react-router-dom";

const RegisterLayout: FC = () => {
  return (
    <main className="grid h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply place-content-center">
      <Outlet />
    </main>
  );
};

export default RegisterLayout;
