import { Hero } from "./hero";
import { LandNavBar } from "./landnavbar";

export function Header() {
  return (
    <section
      className={`border-y-zinc-800 bg-black/70 relative h-screen animate-scale border-b-4 bg-banner-hero bg-cover bg-center bg-no-repeat bg-blend-multiply [animation-range:exit] [animation-timeline:view()]`}
    >
      <header className="relative z-10 flex h-full flex-col justify-between">
        <LandNavBar />
        <Hero />
      </header>
    </section>
  );
}
