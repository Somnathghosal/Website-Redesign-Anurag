import React from "react";
import StandardSlider from "../components/StandardSlider";

const Collaboration: React.FC = () => {
  // Transform collaborators to match StandardSlider interface
  const academicSlides = [
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140615/Academic/x2wbwc200mw045vx2kuf.png",
      alt: "University 1",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705063/vpywcg59hp8hdaj4bsi3.jpg",
      alt: "University 2",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705185/Media/lack2kflobaarq1xwwha.png",
      alt: "University 3",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705296/Media/rxbsfkqk4e6dkxhduvzl.jpg",
      alt: "University 4",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/ymetzmva73wd5oorlr1l.png",
      alt: "University 5",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/uowlixutpgz2dmcnlebb.png",
      alt: "University 6",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/wihoafzwmmjskqo2p9vq.png",
      alt: "University 7",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/dc5f6cdp0ojvpfkvuxse.png",
      alt: "University 8",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/g1wblh3rydtpf4m7hyir.jpg",
      alt: "University 9",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/f0xct9o0ouway7wcdbtq.png",
      alt: "University 10",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/jc0usicjsxobdostseut.png",
      alt: "University 11",
    },
  ];

  const industrySlides = [
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/j09ocu9zbadsf8qwoebn.webp",
      alt: "Company 1",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/zefmkwk3fdbgb4o7pgz1.jpg",
      alt: "Company 2",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/d3tnhx0qalxnz4jxfryl.png",
      alt: "Company 3",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/lanjt77irxgvjmvjthri.jpg",
      alt: "Company 4",
    },
  ];

  return (
    <div
      className="container mx-auto px-4 py-12 bg-blue-50/50 
                 pt-24 md:pt-32 lg:pt-40 
                 scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-32"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
        Our Collaborators
      </h2>

      {/* Academic Collaborators Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center mb-8 text-blue-800">
          Academic Partners
        </h3>
        <StandardSlider
          slides={academicSlides}
          slidesToShow={4}
          autoPlayInterval={4000}
          heightClass="h-28 md:h-32 lg:h-36"
          showNavigation={true}
          showPagination={false}
          loop={true}
          spaceBetween={16}
          slideClassName="bg-blue-50 rounded-lg border border-blue-100"
        />
      </div>

      {/* Industry Collaborators Section */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-8 text-blue-800">
          Industry Partners
        </h3>
        <StandardSlider
          slides={industrySlides}
          slidesToShow={4}
          autoPlayInterval={4000}
          heightClass="h-28 md:h-32 lg:h-36"
          showNavigation={true}
          showPagination={false}
          loop={true}
          spaceBetween={16}
          slideClassName="bg-blue-50 rounded-lg border border-blue-100"
        />
      </div>
    </div>
  );
};

export default Collaboration;
