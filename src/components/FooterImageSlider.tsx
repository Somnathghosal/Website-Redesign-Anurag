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
  // Enable smooth continuous scrolling (marquee-style)
  smooth?: boolean;
}

const FooterImageSlider: React.FC<FooterImageSliderProps> = ({
  slides,
  slidesToShow = 4,
  autoPlayInterval = 5000,
  heightClass = "h-48 md:h-56 lg:h-64",
  paddingYClass = "py-12",
  smooth = true,
}) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSmoothActive, setIsSmoothActive] = useState(smooth && slides.length > slidesToShow);
  const resumeTimerRef = React.useRef<number | null>(null);

  const totalSlides = slides.length;
  const maxStartIndex = Math.max(0, totalSlides - slidesToShow);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;

    // If smooth marquee is active, temporarily disable it so we can step
    if (isSmoothActive) {
      setIsSmoothActive(false);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      // We'll resume after a short pause (1s)
      resumeTimerRef.current = window.setTimeout(() => setIsSmoothActive(true), 1000);
    }

    setIsTransitioning(true);
    setCurrentStartIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > maxStartIndex ? 0 : nextIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxStartIndex, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;

    if (isSmoothActive) {
      setIsSmoothActive(false);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = window.setTimeout(() => setIsSmoothActive(true), 1000);
    }

    setIsTransitioning(true);
    setCurrentStartIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? maxStartIndex : nextIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxStartIndex, isTransitioning]);

  // Ensure continuous movement at regular intervals when NOT in smooth mode
  useEffect(() => {
    if (isSmoothActive) return;
    const slideInterval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [autoPlayInterval, goToNext, isSmoothActive]);

  // Cleanup resume timer on unmount or when slides change
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

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
          {isSmoothActive ? (
            <SmoothMarquee slides={slides} slidesToShow={slidesToShow} heightClass={heightClass} autoPlayInterval={autoPlayInterval} />
          ) : (
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
          )}
        </div>

        {/* Pagination dots removed per design — arrows remain for navigation */}
      </div>
    </div>
  );
};

export default FooterImageSlider;

// SmoothMarquee: renders duplicated slides and animates them leftwards for an infinite belt effect
const SmoothMarquee: React.FC<{
  slides: FooterSlide[];
  slidesToShow: number;
  heightClass: string;
  autoPlayInterval: number;
}> = ({ slides, slidesToShow, heightClass, autoPlayInterval }) => {
  // duration is proportional to number of slides to keep speed consistent
  const durationSeconds = Math.max(10, (slides.length / slidesToShow) * (autoPlayInterval / 1000));

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex will-change-transform animate-marquee gap-1"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {[...slides, ...slides].map((slide, idx) => (
          <div
            key={idx}
            className="flex-none px-2" /* padding complements gap so visual spacing matches previous grid */
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <div className="group relative rounded-xl shadow-md bg-white overflow-hidden flex items-center justify-center">
              <div className={`w-full ${heightClass} overflow-hidden flex items-center justify-center`} style={{ aspectRatio: '1/1' }}>
                <img src={slide.url} alt={slide.alt || `Slide ${idx + 1}`} className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};
