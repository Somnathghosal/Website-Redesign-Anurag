import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FooterSlide {
  url: string;
  alt?: string;
  title?: string;
}

interface FooterImageSliderProps {
  slides: FooterSlide[];
  slidesToShow?: number;
  autoPlayInterval?: number;
  // Tailwind height classes for the slide image container (e.g. "h-48 md:h-56 lg:h-64")
  heightClass?: string;
  // Tailwind padding-y class for the outer container (e.g. "py-12")
  paddingYClass?: string;
}

const FooterImageSlider: React.FC<FooterImageSliderProps> = ({
  slides,
  slidesToShow = 4,
  autoPlayInterval = 5000,
  heightClass = "h-48 md:h-56 lg:h-64",
  paddingYClass = "py-12",
}) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = slides.length;
  const maxStartIndex = Math.max(0, totalSlides - slidesToShow);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentStartIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > maxStartIndex ? 0 : nextIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxStartIndex, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentStartIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? maxStartIndex : nextIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxStartIndex, isTransitioning]);

  // Ensure continuous movement at regular intervals
  useEffect(() => {
    const slideInterval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [autoPlayInterval, goToNext]);

  // Calculate which slides to show
  const getVisibleSlides = () => {
    if (totalSlides <= slidesToShow) {
      return slides;
    }

    const visibleSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentStartIndex + i) % totalSlides;
      visibleSlides.push(slides[index]);
    }
    return visibleSlides;
  };

  return (
    <div className={`w-full bg-gradient-to-r from-blue-900 to-blue-800 ${paddingYClass} relative overflow-hidden`}>
      <div className="container mx-auto px-4 relative">
        {/* Navigation buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={goToPrev}
          aria-label="Previous slides"
        >
          <ChevronLeft className="w-6 h-6 text-blue-800" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={goToNext}
          aria-label="Next slides"
        >
          <ChevronRight className="w-6 h-6 text-blue-800" />
        </button>

        {/* Slider content */}
        <div className="overflow-hidden mx-12">
          <div
            className="transition-transform duration-500 ease-out"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${slidesToShow}, minmax(0, 1fr))`,
              gap: "1rem",
            }}
          >
            {getVisibleSlides().map((slide, index) => (
              <div
                key={`${currentStartIndex}-${index}`}
                className="group relative rounded-xl shadow-md bg-white overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`aspect-w-16 aspect-h-9 w-full ${heightClass} overflow-hidden`}>
                  <img
                    src={slide.url}
                    alt={slide.alt || `Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                {slide.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-3 text-sm md:text-base transform transition-transform duration-300 translate-y-0">
                    <h3 className="font-medium">{slide.title}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentStartIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentStartIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              aria-label={`Go to slide set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterImageSlider;
