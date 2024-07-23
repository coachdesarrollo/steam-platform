import React, { useState, useEffect, useRef } from "react";

const profiles = [
  { name: "Mauro", img: "https://via.placeholder.com/100" },
  { name: "Stiven", img: "https://via.placeholder.com/100" },
  { name: "Angel", img: "https://via.placeholder.com/100" },
  { name: "Victor", img: "https://via.placeholder.com/100" },
  { name: "Samuel", img: "https://via.placeholder.com/100" },
];

const ProfileCard = ({ name, img }: { name: string; img: string }) => (
  <div className="flex-none w-[200px] m-2.5 flex flex-col items-center bg-gray-600 bg-opacity-50 rounded-xl p-5 box-border">
    <img src={img} alt={`Perfil de ${name}`} className="w-full h-auto rounded-full mb-4" />
    <h2 className="text-2xl font-semibold text-center">{name}</h2>
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
      carouselRef.current.style.transition = 'none'; // Eliminar transición para el ajuste instantáneo
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
    <main className="grid place-content-center h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black bg-opacity-70 bg-blend-multiply">
      <form className="bg-black bg-opacity-60 grid gap-8 px-12 py-8">
        <h1 className="text-white font-bold text-4xl text-center">
          ¿Quién eres? Elige tu perfil
        </h1>
        <div className="relative w-full max-w-[1000px] my-4 overflow-hidden">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl cursor-pointer p-2 z-10"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <div className="flex transition-transform ease" ref={carouselRef} style={{ width: `${profiles.length * itemWidth * 3}px` }}>
            {profiles.concat(profiles).concat(profiles).map((profile, index) => (
              <ProfileCard key={index} name={profile.name} img={profile.img} />
            ))}
          </div>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl cursor-pointer p-2 z-10"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="w-[300px] py-4 px-6 font-bold rounded-lg text-center"
            style={{ backgroundColor: '#facc15', color: 'black' }}
          >
            Administrar perfiles
          </button>
        </div>
      </form>
    </main>
  );
}
