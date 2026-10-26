
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hospital1 from "../assets/hospital1.jpg";
import hospital2 from "../assets/hospital2.jpg";
import hospital3 from "../assets/hospital3.jpg";

const slides = [
  {
    id: 1,
    image: hospital1,
    tag: "Trusted Care",
    title: "Advanced Hospital Care For Every Patient",
    description:
      "Modern facilities, expert doctors, and compassionate service under one roof.",
  },
  {
    id: 2,
    image: hospital2,
    tag: "Expert Doctors",
    title: "Experienced Doctors Ready To Help",
    description:
      "Connect with skilled professionals across multiple departments and specialties.",
  },
  {
    id: 3,
    image: hospital3,
    tag: "Quality Healthcare",
    title: "Your Health Is Our Priority",
    description:
      "Providing quality healthcare services for every patient and family.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="p-3 sm:p-6">
      <div className="relative h-105 overflow-hidden rounded-3xl bg-slate-800 shadow-xl sm:h-130 lg:h-162.5">

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
              }`}
            aria-hidden={index !== current}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/25" />

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center px-12 text-white sm:px-20 lg:px-24">
              <div className="max-w-4xl">

                {/* Tag */}
                <span className="mb-5 inline-block rounded-full border border-teal-300/50 bg-teal-500/20 px-5 py-2 text-sm font-semibold text-teal-200 backdrop-blur-sm sm:text-base">
                  {slide.tag}
                </span>

                {/* Title */}
                <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-relaxed text-gray-100 sm:text-lg lg:text-xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-teal-500 sm:left-6 sm:p-3"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-teal-500 sm:right-6 sm:p-3"
        >
          <ChevronRight size={26} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${index === current
                  ? "scale-125 bg-teal-400"
                  : "bg-white/60 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
