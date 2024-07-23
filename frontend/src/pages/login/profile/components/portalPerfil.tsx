import React, { useEffect, useRef, useState } from "react";

const profiles = [
  { name: "Mauro", img: "https://via.placeholder.com/100" },
  { name: "Stiven", img: "https://via.placeholder.com/100" },
  { name: "Angel", img: "https://via.placeholder.com/100" },
  { name: "Victor", img: "https://via.placeholder.com/100" },
  { name: "Samuel", img: "https://via.placeholder.com/100" },
];

const ProfileCard = ({ name, img }: { name: string; img: string }) => (
  <div className="m-2.5 box-border flex w-[200px] flex-none flex-col items-center rounded-xl bg-gray-600 bg-opacity-50 p-5">
    <img alt={`Perfil de ${name}`} className="mb-4 h-auto w-full rounded-full" src={img} />
    <h2 className="text-center text-2xl font-semibold">{name}</h2>
  </div>
);

export function Portal() {
  const [currentIndex, setCurrentIndex] = useState(profiles.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemWidth = 220; // Ancho de cada item incluyendo márgenes
  const transitionDuration = 500; // Duración de la transición en milisegundos

  const showSlide = (index: number) => {
    if (carouselRef.current) {
      setIsTransitioning(true);
      const translateX = -index * itemWidth;

      carouselRef.current.style.transition = `transform ${transitionDuration}ms ease`;
      carouselRef.current.style.transform = `translateX(${translateX}px)`;

      setTimeout(() => {
        setIsTransitioning(false);
        if (index >= profiles.length * 2) {
          setCurrentIndex(profiles.length);
          updatePosition(profiles.length);
        } else if (index < profiles.length) {
          setCurrentIndex(profiles.length * 2 - 1);
          updatePosition(profiles.length * 2 - 1);
        } else {
          setCurrentIndex(index);
        }
      }, transitionDuration);
    }
  };

  const updatePosition = (index: number) => {
    if (carouselRef.current) {
      const translateX = -index * itemWidth;

      carouselRef.current.style.transition = "none"; // Eliminar transición para el ajuste instantáneo
      carouselRef.current.style.transform = `translateX(${translateX}px)`;
    }
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isTransitioning) {
      showSlide(currentIndex + 1);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isTransitioning) {
      showSlide(currentIndex - 1);
    }
  };

  useEffect(() => {
    updatePosition(currentIndex);
    const handleResize = () => updatePosition(currentIndex);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <main className="grid h-screen place-content-center bg-black bg-opacity-70 bg-banner-hero bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <form className="grid gap-8 bg-black bg-opacity-60 px-12 py-8">
        <h1 className="text-center text-4xl font-bold text-white">¿Quién eres? Elige tu perfil</h1>
        <div className="relative my-4 w-full max-w-[1000px] overflow-hidden">
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer bg-black bg-opacity-50 p-2 text-2xl text-white"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <div
            ref={carouselRef}
            className="ease flex transition-transform"
            style={{ width: `${profiles.length * itemWidth * 3}px` }}
          >
            {profiles
              .concat(profiles)
              .concat(profiles)
              .map((profile, index) => (
                <ProfileCard key={index} img={profile.img} name={profile.name} />
              ))}
          </div>
          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer bg-black bg-opacity-50 p-2 text-2xl text-white"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="w-[300px] rounded-lg px-6 py-4 text-center font-bold"
            style={{ backgroundColor: "#facc15", color: "black" }}
          >
            Administrar perfiles
          </button>
        </div>
      </form>
    </main>
  );
}
