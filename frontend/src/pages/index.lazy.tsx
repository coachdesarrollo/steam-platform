import { createLazyFileRoute } from "@tanstack/react-router";
import { Advertisements } from "./components/advertisments";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Header />
      <Advertisements />
      <Faq />
      <Footer />
    </>
  );
}
