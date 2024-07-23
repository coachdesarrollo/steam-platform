import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/register/_layout")({
  component: RegisterLayout,
});

export function RegisterLayout() {
  return (
    <main className="grid h-screen place-content-center bg-black/70 bg-banner-hero bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <Outlet />
    </main>
  );
}
