import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Slide = {
  id: number;
  image: string;
  title: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/productos/slider4.png",
    title: "Slider1",
  },
  {
    id: 2,
    image: "/productos/slider2.png",
    title: "Slider2",
  },
  {
    id: 3,
    image: "/productos/slider3.png",
    title: "Slider3",
  },
  {
    id: 4,
    image: "/productos/slider1.png",
    title: "Slider3",
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [error] = useState<Error | null>(null);

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
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, isHovered, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
          <p className="text-gray-700">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="pt-12">
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <div
            className="relative h-64 sm:h-80 md:h-96"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="region"
            aria-roledescription="carousel"
            aria-label="Image Slider"
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                aria-hidden={index !== currentSlide}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-2xl text-gray-800" />
          </button>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight className="text-2xl text-gray-800" />
          </button>
        </div>
      </main>
    </>
  );
};

export default Slider;
