import { motion } from "framer-motion";

const Hero = () => {
  const focusAreas = [
    "Public Policy, Planning, and Development",
    "Community Participation Action Research",
    "Science and Public Policy Integration",
    "Skill Development for Livelihood Generation",
    "Rural Infrastructure Planning and Development (Water, Health, Sanitation, Education)",
    "Social Forestry and Natural Resource-Based Entrepreneurship",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center md:pt-10 pt-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dq1llsy7f/image/upload/v1743765121/cemke1rafuaoqewwjmhi.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 py-12">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mt-10 mt-16">
              GeoAction Research Lab
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto my-6"></div>
            <p className="text-xl md:text-2xl text-white italic mb-3">
              "Empowering Rural Communities Through Participatory Action
              Research"
            </p>
            <p className="text-lg md:text-xl text-gray-100 italic">
              "Exploring Rural Landscapes, Shaping Sustainable Futures"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.span>
                Research Focus Areas
              </h2>

              <ul className="space-y-3 md:space-y-4">
                {focusAreas.map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-600 mr-3 text-xl md:text-2xl">
                      •
                    </span>
                    <span className="text-gray-700 text-base md:text-xl">
                      {area}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
