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
    <>
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Invited Talks</h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
        </motion.div>
      </div>
      <div className="text-center text-3xl py-5 font-bold text-blue-600 bg-gray-200">
        <h2>Invited Talks and Presentations </h2>
      </div>
      <div className="relative h-auto flex flex-col items-center justify-center p-8 bg-gray-100">
        <ul className="max-w-4xl w-full mt-8">
          {invitedTalks.map((talk, index) => (
            <li key={index} className="mb-6 p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800">
                {talk.title}
              </h2>
              <p className="text-gray-700">{talk.event}</p>
              <p className="text-gray-700">{talk.eventLocation}</p>
              <p className="text-gray-600 text-sm">{talk.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <FooterImageSlider
        slides={slides}
        slidesToShow={4}
        autoPlayInterval={3000}
      />
    </>
  );
};

export default InvitedTalks;
