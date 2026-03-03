import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FooterImageSlider from "../components/FooterImageSlider";

const invitedTalks = [
  {
    title:
      "Forest and Biodiversity Management with Focus on Role of Participatory Methods",
    event: "TATA Steel Foundation",
    date: "7th February, 2025",
  },
  {
    title:
      "Community Driven Knowledge Sharing and Capacity Building: A Grassroots Level Success Story",
    event: "National Social Organizations and Institutions Meet (NSOIM)",
    eventLocation: "IISF, MANIT, Bhopal",
    date: "21st – 23rd January, 2023",
  },
  {
    title: "The Road Ahead For Next 25 Years of Indian Science and Technology",
    event: "Festival of Science & Technology – Vigyan Sarvatra Pujyate",
    eventLocation:
      "Nagaland Science and Technology Council (NASTEC), Kohima, Nagaland",
    date: "22nd - 28th February, 2022",
  },
  {
    title:
      "Contribution of Contemporary Indian Geographers for Commons Prosperity",
    event:
      "Plenary Talk at International E-Conference on Geography for People, Planet, Prosperity and Peace",
    eventLocation: "Savitribai Phule Pune University, and IIG",
    date: "4th - 6th October, 2021",
  },
  {
    title:
      "Planning Distributive Growth Through Community Driven Potable Water System",
    event: "Water Conclave, IISF 2020",
    date: "24th December, 2020",
  },
  {
    title: "How I Do Science With Commons",
    event: "India International Science Festival 2019",
    eventLocation: "Biswa Bangla Convention Centre, Kolkata",
    date: "5th - 8th November, 2019",
  },
  {
    title: "Rural Skill Development for Livelihood Generation",
    event: "Indo-German Chambers of Commerce, SREI Foundation, Kolkata",
    date: "16th October, 2017",
  },
  {
    title: "A Window for Better Quality of Life",
    event: "Manipal University, Jaipur",
    date: "15th November, 2016",
  },
  {
    title:
      "Sustainable Marketing of Forest Products: Rediscovering Rural Economic Opportunities",
    event: "IIT Bombay",
    date: "28th March, 2014",
  },
  {
    title: "Woodlands: A Space for Trade",
    event: "Delhi School of Economics, University of Delhi",
    date: "24th January, 2014",
  },
  {
    title:
      "Institutionalisation of Green Business: An Initiative towards Saving Environment",
    event: "Royal Holloway, University of London, UK",
    date: "2nd October, 2013",
  },
  {
    title: "Exploring Entrepreneurial Opportunities for Afforestation",
    event: "Institute of Economic Growth (IEG), Delhi",
    date: "3rd July, 2013",
  },
  {
    title: "Go for a ‘Green City’: Environment, Legislation and Liability",
    event:
      "Workshop on Legislation for environment and climate change: Focus on urban greens, parks and garden",
    eventLocation: "American Information Centre, Kolkata",
    date: "5th December, 2012",
  },
  {
    title:
      "Participatory Appraisal: A New Approach for Social Science Research",
    event:
      "Indian Institute of Bio-Social Research and Development, Kolkata, India",
    date: "2nd December, 2012",
  },
];

const InvitedTalks = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const talksSlidesToShow = windowWidth < 640 ? 2 : windowWidth < 1024 ? 3 : 4;

  const slides = [
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099983/Invited%20talks/cbvpxmiv0tiopzyovhqa.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099980/Invited%20talks/joqtjnpfztcoej0xyzdw.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099980/Invited%20talks/gqpxzqrpslvhklchey4p.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099980/Invited%20talks/frdxjknm7j8sinmm0oja.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099979/Invited%20talks/r4ihds1qlyrboedr0kyn.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099979/Invited%20talks/irg615ap0ifgbnqs0hwm.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099979/Invited%20talks/mn5dztvzfzj6axdicq0i.jpg",
      caption: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      {/* Sticky top header (hero + subheader) */}
      <header className="sticky top-16 md:top-20 z-30">
        <div className="relative h-20 md:h-28 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dq1llsy7f/image/upload/v1741810294/se6x8imzn8ptqx0mlujq.jpg")',
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
            <h1 className="text-2xl md:text-4xl font-bold mb-2 mt-5">Invited Talks</h1>
            <div className="w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-2"></div>
          </motion.div>
        </div>

        <div className="text-center text-lg md:text-2xl py-3 font-bold text-blue-600 bg-gray-200">
          <h2>Invited Talks and Presentations</h2>
        </div>
      </header>

      {/* Scrollable middle content */}
      <main className="flex-1 mt-4 md:mt-8 overflow-auto bg-gray-100 p-4 md:p-8 pb-48 md:pb-56">
        <ul className="max-w-4xl w-full mx-auto space-y-4">
          {invitedTalks.map((talk, index) => (
            <li key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-lg md:text-xl font-semibold text-blue-800">{talk.title}</h2>
              <p className="text-gray-700 text-sm md:text-base">{talk.event}</p>
              {talk.eventLocation && <p className="text-gray-700 text-sm md:text-base">{talk.eventLocation}</p>}
              <p className="text-gray-600 text-xs md:text-sm">{talk.date}</p>
            </li>
          ))}
        </ul>
      </main>

      {/* Fixed bottom carousel */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <FooterImageSlider
          slides={slides}
          slidesToShow={talksSlidesToShow}
          autoPlayInterval={3000}
          heightClass="h-28 md:h-44 lg:h-40"
          paddingYClass="py-4 md:py-6"
        />
      </div>
    </motion.div>
  );
};

export default InvitedTalks;
