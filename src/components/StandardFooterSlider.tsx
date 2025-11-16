import React from "react";
import StandardSlider from "./StandardSlider";

interface FooterSlide {
  url: string;
  alt?: string;
  title?: string;
  caption?: string;
  id?: string;
}

interface StandardFooterSliderProps {
  slides: FooterSlide[];
  slidesToShow?: number;
  autoPlayInterval?: number;
  heightClass?: string;
  paddingYClass?: string;
  smooth?: boolean;
}

const StandardFooterSlider: React.FC<StandardFooterSliderProps> = ({
  slides,
  slidesToShow = 4,
  autoPlayInterval = 5000,
  heightClass = "h-32 md:h-36 lg:h-40",
  paddingYClass = "py-10",
}) => {
  return (
    <div className={`w-full bg-gradient-to-r from-blue-900 to-blue-800 ${paddingYClass} relative overflow-hidden`}>
      <div className="container mx-auto px-4 relative">
        <div className="mx-12">
          <StandardSlider
            slides={slides}
            slidesToShow={slidesToShow}
            autoPlayInterval={autoPlayInterval}
            heightClass={heightClass}
            showNavigation={true}
            showPagination={false}
            loop={true}
            spaceBetween={16}
            slideClassName="max-w-[240px] w-full"
            imageClassName="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StandardFooterSlider;