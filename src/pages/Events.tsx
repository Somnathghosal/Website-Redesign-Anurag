import { motion } from "framer-motion";

const events = [
  {
    title:
      "Coordinator for IIT Kharagpur – University of Edinburgh Joint International Workshop on 'Water-Energy-Food-Health Nexus'",
    location: "IIT Kharagpur",
    date: "27th May – 31st May 2024",
  },
  {
    title:
      "Coordinator for IIT Kharagpur – University of Edinburgh Joint International Workshop on 'Water-Energy-Food-Health Nexus'",
    location: "IIT Kharagpur (online)",
    date: "31st July – 4th August 2023",
  },
  {
    title: "Organized International Seminars on 'Water for Community Health'",
    location: "CRDIST, IIT Kharagpur",
    date: "30 November 2022",
  },
  {
    title:
      "Coordinator for International Conference on 'Rural Transformation: From Natural to Cultural'",
    location: "CRDIST, IIT Kharagpur",
    date: "5 - 6 May, 2021",
  },
  {
    title:
      "Convener International Seminars on 'Geography of Rural Development: Planning and Perspectives'",
    location: "CRDIST, IIT Kharagpur",
    date: "27 February 2021",
  },
  {
    title:
      "Theme Coordinator for 'Science and Technology for Rural India', Young Scientists' Conference",
    location: "Indian International Science Festival",
    date: "22 - 24 December 2020",
  },
  {
    title: "Convener 'Rural Drinking Water Technology Hackathon 2019'",
    location: "IIT Kharagpur",
    date: "2019",
  },
  {
    title:
      "Co-coordinator 'International Workshop on Rural Water Quality and Management'",
    location: "IIT Kharagpur",
    date: "2019",
  },
  {
    title:
      "Convener TEGIP-III course on 'Climate Change Risk on Sustainable Development in Rural India (Fact, Friction, and Policy)'",
    location: "IIT Kharagpur",
    date: "2018",
  },
  {
    title:
      "Convener 'Training Programme on Mushroom Farming Technology', Agir-Food Expo – 2017",
    location: "IIT Kharagpur",
    date: "2017",
  },
  {
    title:
      "Convener for the conference on 'Governing Forest Resources for Economic Outcome'",
    location: "Centre for Studies in Social Sciences, Calcutta",
    date: "2011",
  },
  {
    title:
      "Organising committee member 'Object-Based Landscape Analysis Meeting & the Remote Sensing and Photogrammetry Society (RSPSec) Annual Lecture and Conversazione'",
    location: "University of Nottingham",
    date: "2009",
  },
];

const Events = () => {
  return (
    <>
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dq1llsy7f/image/upload/v1741810294/dlgipo3nyfrkhuwir8ys.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gray-400/70"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Events Organised
          </h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Events Organised
        </h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-blue-700">
                {event.title}
              </h3>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-500 text-sm">{event.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
