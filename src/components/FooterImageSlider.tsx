import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import footerVideo from "../assests/video.mp4";

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

// ─── Footer Video (autoplay when visible) ──────────────────────────────────────
export const FooterVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked; browser will show controls
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-blue-950 to-blue-900 py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-6 tracking-wide drop-shadow">
          Watch Our Story
        </h2>

        {/* Video wrapper with glassy frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/30 backdrop-blur-sm">
          <video
            ref={videoRef}
            src={footerVideo}
            muted
            loop
            playsInline
            controls
            className="w-full max-h-[500px] object-contain bg-black"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-950/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

// ─── Image Slider ──────────────────────────────────────────────────────────────
const FooterImageSlider: React.FC<FooterImageSliderProps> = ({
  slides,
  slidesToShow = 4,
  autoPlayInterval = 5000,
  heightClass = "h-20 md:h-32 lg:h-32",
  paddingYClass = "py-10",
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

    if (isSmoothActive) {
      setIsSmoothActive(false);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
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

  useEffect(() => {
    if (isSmoothActive) return;
    const slideInterval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [autoPlayInterval, goToNext, isSmoothActive]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

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
    <>
      {/* ── Image slider ── */}
      <div
        className={`w-full bg-gradient-to-r from-blue-900 to-blue-800 ${paddingYClass} relative overflow-hidden`}
      >
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
              <SmoothMarquee
                slides={slides}
                slidesToShow={slidesToShow}
                heightClass={heightClass}
                autoPlayInterval={autoPlayInterval}
              />
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
                    className="group relative rounded-xl shadow-md bg-white overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 max-w-[240px] w-full"
                  >
                    <div
                      className={`aspect-[1/1] w-full h-full ${heightClass} overflow-hidden flex items-center justify-center`}
                    >
                      <img
                        src={slide.url}
                        alt={slide.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 mx-auto"
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
        </div>
      </div>
    </>
  );
};

export default FooterImageSlider;

const SmoothMarquee: React.FC<{
  slides: FooterSlide[];
  slidesToShow: number;
  heightClass: string;
  autoPlayInterval: number;
}> = ({ slides, slidesToShow, autoPlayInterval, heightClass }) => {
  const totalSlides = slides.length;
  const durationSeconds = Math.max(
    15,
    (totalSlides / slidesToShow) * (autoPlayInterval / 300)
  );

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div
        className="flex animate-marquee gap-5 px-4"
        style={{
          animationDuration: `${durationSeconds}s`,
          width: `${(totalSlides * 2 * 100) / slidesToShow}%`,
        }}
      >
        {[...slides, ...slides].map((slide, idx) => (
          <div
            key={idx}
            className="flex-none max-w-[240px] w-full"
          >
            <div className="group relative rounded-xl shadow-md bg-white overflow-hidden">
              <div
                className={`w-full aspect-[1/1] ${heightClass} overflow-hidden flex items-center justify-center`}
              >
                <img
                  src={slide.url}
                  alt={slide.alt || `Slide ${idx + 1}`}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105 mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
