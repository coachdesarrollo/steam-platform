import { createLazyFileRoute } from "@tanstack/react-router";

import { Footer } from "../common/components/footer";

import { Advertisements } from "./components/advertisments";
import { Faq } from "./components/faq";
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
