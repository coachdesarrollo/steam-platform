import { Hero } from "./hero";
import { NavBar } from "./navbar";

export function Header() {
  return (
    <section
      className={`h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply border-b-4 border-y-zinc-800 relative [animation-range:exit] [animation-timeline:view()] animate-scale`}
    >
      <header className="h-full flex flex-col justify-between relative z-10">
        <NavBar />
        <Hero />
      </header>
    </section>
  );
}
