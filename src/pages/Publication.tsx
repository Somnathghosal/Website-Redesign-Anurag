import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import ImageSlider from './ImageSlider'; // Import the new ImageSlider component

const publicationCategories = [
  {
    name: "Journal",
    path: "/publications/journal",
    description:
      "Peer-reviewed academic journal articles covering various aspects of regional planning, rural livelihood, community based natural resource management, public policy-planning and development and environmental biodiversity.",
    icon: "📰",
  },
  {
    name: "Book / Book Chapters",
    path: "/publications/books",
    description:
      "Published books and contributed chapters on sustainable development, forest management, and environmental governance.",
    icon: "📚",
  },
  {
    name: "Copyrights/Patents",
    path: "/publications/copyrights",
    description:
      "Produced copyrights and patents out of community based action research projects.",
    icon: "📖",
  },
  {
    name: "Invited Talk",
    path: "/publications/talks",
    description:
      "Invited talks delivered at different reputed universities, institutes, and academic events.",
    icon: "🎤",
  },
  {
    name: "Conferences",
    path: "/publications/conferences",
    description:
      "Academic research papers presented and chaired different technical sessions at national and international conferences, which are focusing on environment, society and public policy.",
    icon: "🏛️",
  },
  {
    name: "Events Organised",
    path: "/publications/events",
    description: "Workshops, symposia, hackathon, organised by the group.",
    icon: "🗓️",
  },
];

const Publication = () => {
  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Hero Section */}
        <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dq1llsy7f/image/upload/v1741208808/lynf5kq3wvysp9y1fbup.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gray-200/40"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Publications
            </h1>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          </motion.div>
        </div>

        {/* Category Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={category.path} className="block h-full">
                  <div className="bg-white h-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="p-6 flex flex-col h-full">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold text-blue-700 mb-3">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 flex-grow mb-4">
                        {category.description}
                      </p>
                      <div className="mt-auto">
                        <span className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                          Browse {category.name}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add the Image Slider as a footer */}
      </div>
    </div>
  );
};

export default Publication;
