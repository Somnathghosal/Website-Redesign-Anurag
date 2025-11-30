import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the structure for collaborator logos
interface CollaboratorLogo {
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

const Collaboration: React.FC = () => {
  // Predefined objects for academic and industry collaborators
  const [academicCollaborators] = useState<CollaboratorLogo[]>([
    {
      name: "University 1",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140615/Academic/x2wbwc200mw045vx2kuf.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 2",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705063/vpywcg59hp8hdaj4bsi3.jpg", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 3",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705185/Media/lack2kflobaarq1xwwha.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 4",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705296/Media/rxbsfkqk4e6dkxhduvzl.jpg", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 5",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/ymetzmva73wd5oorlr1l.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 6",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/uowlixutpgz2dmcnlebb.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 7",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/wihoafzwmmjskqo2p9vq.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 8",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/dc5f6cdp0ojvpfkvuxse.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 9",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/g1wblh3rydtpf4m7hyir.jpg", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 10",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/f0xct9o0ouway7wcdbtq.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "University 11",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/jc0usicjsxobdostseut.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    // Add more academic collaborators as needed
  ]);

  const [industryCollaborators] = useState<CollaboratorLogo[]>([
    {
      name: "Company 1",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/j09ocu9zbadsf8qwoebn.webp", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "Company 2",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/zefmkwk3fdbgb4o7pgz1.jpg", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "Company 2",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/d3tnhx0qalxnz4jxfryl.png", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    {
      name: "Company 2",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/lanjt77irxgvjmvjthri.jpg", // You'll replace this with actual logo URL
      websiteUrl: "",
    },
    // Add more industry collaborators as needed
  ]);

  // Refs for scrolling
  const academicScrollRef = useRef<HTMLDivElement>(null);
  const industryScrollRef = useRef<HTMLDivElement>(null);

  // Scroll function
  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = 250;
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Render logo component
  const renderLogos = (
    logos: CollaboratorLogo[],
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <div className="relative w-full">
      <div
        ref={ref}
        className="flex overflow-x-scroll scrollbar-hide space-x-6 py-4 px-4 scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        {logos.map((collaborator, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-28 flex items-center justify-center 
                       bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-all 
                       duration-300 transform hover:scale-105 cursor-pointer 
                       border border-blue-100 hover:border-blue-200"
            onClick={() =>
              collaborator.websiteUrl &&
              window.open(collaborator.websiteUrl, "_blank")
            }
          >
            <img
              src={collaborator.logoUrl || "/api/placeholder/200/100"}
              alt={collaborator.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll(ref, "left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 
                   bg-blue-100/70 hover:bg-blue-100/90 rounded-full 
                   p-2 shadow-md z-10"
      >
        <ChevronLeft className="text-blue-700" />
      </button>
      <button
        onClick={() => scroll(ref, "right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 
                   bg-blue-100/70 hover:bg-blue-100/90 rounded-full 
                   p-2 shadow-md z-10"
      >
        <ChevronRight className="text-blue-700" />
      </button>
    </div>
  );

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
        {renderLogos(academicCollaborators, academicScrollRef)}
      </div>

      {/* Industry Collaborators Section */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-8 text-blue-800">
          Industry Partners
        </h3>
        {renderLogos(industryCollaborators, industryScrollRef)}
      </div>
    </div>
  );
};

export default Collaboration;
