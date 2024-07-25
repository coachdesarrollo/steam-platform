import { Hero } from "./hero";
import { LandNavBar } from "./landnavbar";
import { NavBar } from "../../../common/components/navbar/navbar"

export function Header() {
  return (
    <section
      className={`relative h-screen animate-scale border-b-4 border-y-zinc-800 bg-black/70 bg-banner-hero bg-cover bg-center bg-no-repeat bg-blend-multiply [animation-range:exit] [animation-timeline:view()]`}
    >
      <header className="relative z-10 flex h-full flex-col justify-between">
         <NavBar/> 
        <LandNavBar />
        <Hero />
      </header>
    </section>
  );
}
