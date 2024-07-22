import { useEffect, useRef, useState } from "react";
import { profiles } from "../data";

export function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerSlide = 126;
  // Clonar los primeros elementos para efecto de bucle
  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      for (let i = 0; i < itemsPerSlide; i++) {
        const clone = carousel.children[i].cloneNode(true);
        carousel.appendChild(clone);
      }
    }
  }, [itemsPerSlide]);

  const showSlide = (index: number) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const totalItems = carousel.children.length;

      if (index >= totalItems - itemsPerSlide) {
        carousel.style.transition = "none";

        setCurrentIndex(index - totalItems + itemsPerSlide);

        const translateX = -currentIndex * (100 / itemsPerSlide);

        carousel.style.transform = `translateX(${translateX}%)`;

        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease";
          showSlide(currentIndex + 1);
        }, 50);
      } else if (index < 0) {
        carousel.style.transition = "none";

        setCurrentIndex(totalItems - itemsPerSlide + index);

        const translateX = -currentIndex * (100 / itemsPerSlide);

        carousel.style.transform = `translateX(${translateX}%)`;

        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease";
          showSlide(currentIndex - 1);
        }, 50);
      } else {
        setCurrentIndex(index);

        const translateX = -index * (100 / itemsPerSlide);

        carousel.style.transform = `translateX(${translateX}%)`;
      }
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };
  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div
      className="carousel-container overflow-hidden relative
				w-full"
    >
      <button
        className="carousel-button prev bg-black text-white
				absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <div
        className="carousel flex transition-transform
				duration-500 ease-in-out"
        ref={carouselRef}
      >
        {profiles.map((item) => (
          <div
            key={item.id}
            className="carousel-item min-w-1/4
				bg-gray-800 rounded-lg shadow-md p-6 text-center"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="mx-auto mb-4 rounded-full"
            />
            <h2
              className="text-2xl font-semibold
				mb-2"
            >
              {item.title}
            </h2>
            <button
              className="bg-blue-500 text-white py-2 px-4
				rounded"
            >
              Acceder
            </button>
          </div>
        ))}
      </div>
      <button
        className="carousel-button next bg-black text-white
				absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}
