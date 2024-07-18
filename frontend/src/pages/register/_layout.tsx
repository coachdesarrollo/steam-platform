import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/register/_layout")({
  component: RegisterLayout,
});

export function RegisterLayout() {
  return (
    <main className="grid h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply place-content-center">
      <Outlet />
    </main>
  );
}
