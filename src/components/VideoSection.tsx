import React from "react";

const VideoSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          More About Our Participatory Action Research Projects
        </h2>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/eN7i6jJYchg"
              title="Participatory Action Research Projects"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-xl mb-6 text-center">
            Our participatory action research focuses on the intersection of
            rural geography, development, and sustainability. Watch this video
            to explore how we integrate technology and community engagement to
            drive impactful change.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Key Takeaways:
            </h3>
            <ul className="space-y-2 text-xl">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">
                  Innovative approaches to community-based research
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">
                  Integration of traditional knowledge with modern technology
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">
                  Sustainable development practices for rural communities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">
                  Policy recommendations based on field research
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
