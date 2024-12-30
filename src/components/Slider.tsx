import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Slide = {
  id: number;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/productos/sliderComponentes.png",
  },
  {
    id: 2,
    image: "/productos/sliderElectrod.png",
  },
  {
    id: 3,
    image: "/productos/sliderGas.png",
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (isPlaying && !isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, isHovered, nextSlide]);

  return (
    <div className="relative max-w-full mx-auto mt-16 overflow-hidden rounded-xl shadow-xl">
      <div
        className="relative h-72 sm:h-96 md:h-[500px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-roledescription="carousel"
        aria-label="Image Slider"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="object-cover w-full h-full transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-3xl" />
      </button>

      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-3xl" />
      </button>
    </div>
  );
};

export default Slider;
