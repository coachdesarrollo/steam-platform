import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import video from "../../../../public/assets/video.mp4";

import { Hero } from "./hero";

import NavBar from "@/common/components/navbar/navbar";

export function Header() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaying(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen border-b-4 border-y-zinc-800 bg-black/70">
      <header className="relative z-10 flex h-full flex-col justify-between">
        <NavBar />
        <Hero />
        <ReactPlayer
          loop
          className="z-0"
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                },
              },
            },
          }}
          height="100%"
          playing={playing}
          style={{ position: "absolute", top: 0, left: 0 }}
          url={video}
          width="100%"
        />
      </header>
    </section>
  );
}
