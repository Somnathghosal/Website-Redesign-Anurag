import React, { useState, useEffect } from "react";

interface Slide {
  url: string;
  caption?: string;
}

interface ImageSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
  height?: string;
  maxWidth?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlayInterval = 4000,
  height = "h-[300px] md:h-[500px]",
  maxWidth = "max-w-6xl",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlayInterval]);

  return (
    <div
      className={`relative w-full ${maxWidth} mx-auto my-12 px-4 md:px-0 ${height}`}
    >
      <div className="w-full h-full bg-white flex items-center justify-center">
        <div
          className="max-w-full max-h-full bg-center bg-contain bg-no-repeat duration-1000 transition-opacity"
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            width: "100%",
            height: "100%",
            opacity: 1,
          }}
        >
          {slides[currentIndex].caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
              {slides[currentIndex].caption}
            </div>
          )}
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 text-white cursor-pointer">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 text-white cursor-pointer">
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
