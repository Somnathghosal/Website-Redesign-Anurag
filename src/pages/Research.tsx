import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ResearchItem = {
  title: string;
  description: string;
  details: string;
  videoUrl?: string; // Optional video URL
};

const researchData: ResearchItem[] = [
  {
    title: "Action Research with Community Participation",
    description:
      "Engaging community members in the research process to ensure that the development projects meet their needs and are sustainable in the long term.",
    details:
      "The project focuses on involving community members actively in the research process. This approach ensures that development projects are not only tailored to the specific needs of the community but also sustainable over the long term by fostering local engagement and ownership. The project emphasizes a collaborative methodology where the insights and experiences of community members directly inform the research outcomes, leading to more effective and applicable solutions in community development. This project focused on installing advanced water purification systems tailored to the unique challenges of rural environments. Emphasizing sustainability, the endeavor not only sought to provide clean water but also to integrate community involvement and education, ensuring a long-term impact on the health and well-being of rural populations. This strategic approach highlights a commitment to leveraging technology for societal advancement and sustainable development.",
    videoUrl: "https://www.youtube.com/embed/es1_hhhPLFg?si=KYzIcX8pfxiQcMxd",
  },
  {
    title: "Science, Society, and Public Policy",
    description:
      "Analyzing how scientific research can directly inform public policies and contribute to societal development.",
    details:
      "The initiative investigates the complex interplay between scientific research and its implications for public policy and societal development. This project aims to show how scientific discoveries may be strategically used to educate and create policies that support sustainable development and social well-being by examining a variety of case studies. The program aims to build a more informed and proactive public policy landscape by highlighting the significance of interdisciplinary methods and active participation from diverse stakeholders to bridge the gap between scientific and societal requirements.",
  },
  {
    title: "Rural Health, and Hygenic Practices",
    description:
      "Hygiene education emphasizes behavioural change models that improve public health outcomes.",
    details:
      "Hygiene education emphasizes behavioural change models that improve public health outcomes. School-based hygiene programs foster long-term sanitation habits among children. Women and childern may play a vital role in promoting hygiene awareness in rural areas. Infrastructure development, including clean water and sanitation facilities, is crucial for better living conditions. Integrating hygiene education with public health initiatives maximizes its impact on community well-being.",
    videoUrl: "https://www.youtube.com/embed/xKtV118m5Gw?si=qxR2akRaAuq-kwY0",
  },
  {
    title: "Education and Skill Development",
    description:
      "Public policy emphasizes inclusive healthcare and education for rural communities.",
    details:
      "Public policy emphasizes inclusive healthcare and education for rural communities. Decentralized healthcare models improve accessibility and affordability, ensuring better health outcomes. Technology and community participation play a crucial role in enhancing rural education opportunities. Addressing gaps in policy implementation leads to evidence-based solutions for sustainable development. Action research focuses on innovative frameworks that integrate education, health, and livelihood strategies.",
  },
  {
    title: "Social Forestry and Nature-Based Entrepreneurship",
    description:
      "Social forestry initiatives focus on community-led conservation efforts to restore degraded ecosystems.",
    details:
      "Social forestry initiatives focus on community-led conservation efforts to restore degraded ecosystems. Agroforestry plays a key role in improving rural incomes while maintaining biodiversity. Policy incentives encourage sustainable forest management and carbon sequestration. Afforestation programs enhance climate resilience and support rural livelihoods. A balanced approach to environmental conservation and economic empowerment ensures long-term sustainability.",
  },
  {
    title: "Green Planning for Environment and Biodiversity Conservation",
    description:
      "Advancing green urban planning initiatives and promoting biodiversity conservation through innovative research designs.",
    details:
      "The project coordinated by Dr. Somnath Ghosal, focuses on improving urban landscapes to enhance biodiversity conservation and sustainability. This unique program incorporates ecological concepts into urban design to produce greener, more resilient communities that not only improve residents' quality of life but also provide home for a variety of flora and wildlife. The initiative highlights the importance of research in establishing public policies that promote ecologically friendly urban environments, demonstrating a dedication to ecological and urban harmony. The initiative aimed to integrate ecological sustainability with urban green spaces, thereby transforming city parks into vibrant ecosystems that educate and engage the public in biodiversity conservation. This innovative approach not only enriched local biodiversity but also served as an educational tool to foster community involvement and awareness about environmental stewardship.",
    videoUrl: "https://www.youtube.com/embed/dy18F8FOuCg?si=NCvTr7PW6QyCs8u4",
  },
];

const Research = () => {
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem | null>(
    null
  );
  const imageUrl =
    "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743013810/jb1zq57ahm4v6smrgrk8.png";
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Research List Section */}
      <div className="flex flex-col lg:flex-row bg-gray-100 mt-20 min-h-screen">
        {/* Image Section - Made responsive for mobile */}
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center lg:sticky lg:top-20 lg:h-screen pt-10">
          <div
            className="w-full max-w-lg h-64 sm:h-80 md:h-96 bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `url("${imageUrl}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={toggleFullscreen}
          ></div>
          <p className="text-blue-500 text-center mt-4 mb-6">
            Click the image to enlarge
          </p>
        </div>

        {/* Right Section - Research List */}
        <div className="w-full lg:w-1/2 p-4 lg:p-10 bg-gray-100">
          {/* Research List */}
          <div className="space-y-6">
            {researchData.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:bg-blue-100 transition-all text-center"
                onClick={() => setSelectedResearch(item)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fullscreen Image Modal */}
        {isFullscreen && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <button
              className="absolute top-4 right-4 z-50 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 focus:outline-none"
              onClick={toggleFullscreen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        )}

        {/* Research Detail Modal */}
        <AnimatePresence>
          {selectedResearch && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResearch(null)}
            >
              <motion.div
                className={`bg-white rounded-lg shadow-xl w-full relative ${
                  selectedResearch.videoUrl ? "max-w-4xl" : "max-w-2xl"
                } max-h-[90vh] overflow-hidden`}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-900 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                  onClick={() => setSelectedResearch(null)}
                >
                  &times;
                </button>

                {/* Conditional layout based on video availability */}
                {selectedResearch.videoUrl ? (
                  // Two-section layout when video is available
                  <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                    {/* Information Section with Scroll */}
                    <div className="p-6 md:w-1/2 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-8">
                        {selectedResearch.title}
                      </h3>
                      <div className="h-1 w-20 bg-blue-400 mb-4"></div>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        {selectedResearch.details}
                      </p>
                    </div>

                    {/* Video Section */}
                    <div className="bg-gray-100 p-6 md:w-1/2 flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Research Video
                      </h4>
                      <div className="relative w-full pt-[56.25%]">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
                          src={selectedResearch.videoUrl}
                          title={`Video for ${selectedResearch.title}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Centered single-section layout when no video is available
                  <div className="p-8 flex flex-col items-center max-h-[90vh] overflow-y-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center pr-8">
                      {selectedResearch.title}
                    </h3>
                    <div className="h-1 w-20 bg-blue-400 mb-6"></div>
                    <p className="mt-2 text-gray-700 leading-relaxed max-w-xl text-center">
                      {selectedResearch.details}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Research;
