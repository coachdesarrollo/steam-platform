import { Banner } from "./banner";

import NavBar from "@/common/components/navbar/navbar";

export function Header() {
  return (
    <section className="relative h-screen border-b-4 border-y-zinc-800 bg-black/70">
      <header className="relative z-10 flex h-full flex-col justify-between">
        <NavBar />
        <Banner />
      </header>
    </section>
  );
}
