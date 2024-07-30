import { NavBar } from "@common/components/navbar/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: () => Home(),
});

export function Home() {
  return (
    <main>
      <NavBar />
    </main>
  );
}
