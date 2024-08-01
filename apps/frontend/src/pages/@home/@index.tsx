import { Footer } from "@common/components/footer";
import { createFileRoute } from "@tanstack/react-router";

import { Header } from "./@header";

export const Route = createFileRoute("/home/")({
  component: () => Home(),
});

export function Home() {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
}
