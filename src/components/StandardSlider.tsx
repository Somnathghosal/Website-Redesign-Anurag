import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface StandardSlide {
  url: string;
  alt?: string;
  caption?: string;
  title?: string;
}

interface StandardSliderProps {
  slides: StandardSlide[];
  slidesToShow?: number;
  autoPlayInterval?: number;
  heightClass?: string;
  showNavigation?: boolean;
  showPagination?: boolean;
  loop?: boolean;
  spaceBetween?: number;
  className?: string;
  slideClassName?: string;
  imageClassName?: string;
}

const StandardSlider: React.FC<StandardSliderProps> = ({
  slides,
  slidesToShow = 4,
  autoPlayInterval = 3000,
  heightClass = "h-32 md:h-36 lg:h-40",
  showNavigation = true,
  showPagination = false,
  loop = true,
  spaceBetween = 16,
  className = "",
  slideClassName = "",
  imageClassName = "",
}) => {
  // Generate a safe unique ID for CSS selectors
  const uniqueId = React.useMemo(() => {
    return `slider-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        loop={loop && slides.length > slidesToShow}
        autoplay={{
          delay: autoPlayInterval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={
          showNavigation
            ? {
                prevEl: `.swiper-button-prev-${uniqueId}`,
                nextEl: `.swiper-button-next-${uniqueId}`,
              }
            : false
        }
        pagination={
          showPagination
            ? {
                clickable: true,
                el: `.swiper-pagination-${uniqueId}`,
              }
            : false
        }
        breakpoints={{
          640: {
            slidesPerView: Math.min(2, slidesToShow),
          },
          768: {
            slidesPerView: Math.min(3, slidesToShow),
          },
          1024: {
            slidesPerView: slidesToShow,
          },
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`group relative overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${slideClassName}`}
            >
              <div
                className={`w-full ${heightClass} overflow-hidden flex items-center justify-center`}
              >
                <img
                  src={slide.url}
                  alt={slide.alt || slide.title || `Slide ${index + 1}`}
                  className={`w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName}`}
                  loading="lazy"
                />
              </div>
              {(slide.caption || slide.title) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-3 text-sm md:text-base transform transition-transform duration-300">
                  <h3 className="font-medium">{slide.title || slide.caption}</h3>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {showNavigation && (
        <>
          <button
            className={`swiper-button-prev-${uniqueId} absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-blue-800" />
          </button>

          <button
            className={`swiper-button-next-${uniqueId} absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-blue-800" />
          </button>
        </>
      )}

      {/* Custom Pagination */}
      {showPagination && (
        <div
          className={`swiper-pagination-${uniqueId} flex justify-center mt-4 space-x-2`}
        />
      )}
    </div>
  );
};

export default StandardSlider;