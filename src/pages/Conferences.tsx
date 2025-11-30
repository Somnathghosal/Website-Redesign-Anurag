import { motion } from "framer-motion";
import FooterImageSlider from "../components/FooterImageSlider";
import Img1 from "../assests/img1.jpg";
import Img2 from "../assests/img2.jpg";

const conferences = [
  {
    name: "16th International Conference on Environmental and Rural Development",
    location: "Tokyo University of Agriculture, Japan",
    date: "13th – 16th March 2025",
    presentationTitle:
      "Rural Community Development through Non-Farm Employment Opportunity Creation: Scope and Perspectives",
    role: "Chairing and Paper Presented at the sixteenth ICERD Scientific Session",
  },
  {
    name: "International Institute of Administrative Science (IIAS) – Department of Administrative Reforms and Public Grievances (DARPG) India International Conference 2025",
    location: "Bharat Mandapam, New Delhi",
    date: "10th – 14th February, 2025",
    presentationTitle:
      "Empowering Community-Based Infrastructure Management in Rural India",
    role: "Presenter",
  },
  {
    name: "22nd NEP Orientation and Sensitization Programme",
    location: "UGC-MMTTC Mizoram University",
    date: "5th February – 13th February, 2025",
    presentationTitle: "Planning for Alternative Subsistence: The Way Forward",
    role: "Resource Person",
  },
  {
    name: "Training Programme on Sustainable Livelihoods and Adaptation to Climate Change",
    location:
      "National Institute of Rural Development and Panchayati Raj (NIRDPR), Hyderabad",
    date: "29th – 31st January 2025",
    presentationTitle:
      "Policies to Enhance Sustainable Rural Livelihoods in Context of Climate Change Adaptation",
    role: "Invited Talk",
  },

  {
    name: "MMTTP-NEP Orientation and Sensitization Programme",
    location: "North-Eastern Hill University, Shillong",
    date: "8th – 17th January, 2025",
    presentationTitle:
      "History of Skill-Based Education: Current Status and Future Strategies for India",
    role: "Resource Person",
  },
  {
    name: "Consultative Workshop on Promoting Entrepreneurship, Skilling and Employment by Leveraging Demographic Dividend of the State",
    location:
      "Tripura Rural Livelihood Mission, Rural Development Department, Government of Tripura, Agartala",
    date: "23rd September, 2024",
    presentationTitle:
      "Entrepreneurship – Challenges, Solutions and Way Forward for the Rural Non-Farm and MSME",
    role: "Expert Panelist",
  },
  {
    name: "Grassroots Models for Strengthening STI Capabilities in Community and to Improve Livelihood Generation",
    location:
      "NSOIM, IISF - 2023, DBT-Translational Health Science and Technology Institute (THSTI) RCB Campus, Faridabad, Haryana",
    date: "17th – 19th January, 2024",
    presentationTitle: "Grassroots Model Submission",
    role: "Chair-East Zone",
  },
  {
    name: "Industry-Academia Conclave (IAC 2023)",
    location: "NIT Jamshedpur",
    date: "23 – 25 November 2023",
    presentationTitle: "Academic Social Responsibility",
    role: "Expert Panelist",
  },
  {
    name: "International Seminar on India's Independence: Expectations and Attainments",
    location: "Pathar Pratima Mahavidyalaya",
    date: "14th - 15th August 2023",
    presentationTitle: "Social Entrepreneurship: Empowering the Society",
    role: "Invited Lecture",
  },
  {
    name: "International Workshop on Water-Energy-Food-Health Nexus",
    location:
      "IIT Kharagpur in collaboration with the University of Edinburgh, UK",
    date: "31st July – 4th August 2023, online",
    presentationTitle: "Thematic Nexus Water-Energy-Food-Health",
    role: "Special Talk",
  },
  {
    name: "Virtual International Conference on Environment, Sustainability, and Technology in Social Sciences",
    location: "KL University",
    date: "1st-3rd June 2023",
    presentationTitle: "Sustainability Makes a Technology Environment Friendly",
    role: "Special Lecture",
  },
  {
    name: "Advanced Management Development Programs on Social Entrepreneurship",
    location: "VGSoM, IIT Kharagpur in collaboration with Ministry of MS&ME",
    date: "20th – 24th February 2023",
    presentationTitle: "Theories of Social Impact and Social Changes",
    role: "Resource person",
  },
  {
    name: "46th Indian Social Science Congress",
    location: "Bharathidasan University, Tiruchirappalli",
    date: "27th – 31st January 2023",
    presentationTitle:
      "Changing the Geography of Indian Rurality: By Force or Choice",
    role: "Outstation Chairman Talk for Thematic Panel 17",
  },
  {
    name: "International Conference on Rural Transformation: From Natural to Cultural",
    location: "CRDIST, IIT Kharagpur",
    date: "5 - 6 May 2021",
    presentationTitle: "Rural Transformation: From Natural to Cultural",
    role: "Presenter",
  },
  {
    name: "AICTE online FDP on Design Thinking on Developmental Projects Related to Social and Rural",
    location: "IIITDM, Kurnool",
    date: "17th - 21st October 2020",
    presentationTitle: "Tribal Development: Perspectives and Planning",
    role: "Presenter",
  },
  {
    name: "Lecture Series on Contemporary Geographical Perspectives: From Natural Resource Management to Geopolitical Arena",
    location: "Govt. Vivekanand Mahavidyalaya, Maihar (M.P.) and IQAC",
    date: "26th August, 2020",
    presentationTitle:
      "Community Driven Potable Water Supply Mechanism in Rural India",
    role: "Presenter",
  },
  {
    name: "Seminar Series on COVID-19 Pandemic Disaster: Water, Agriculture and Environment",
    location: "IIT Jodhpur",
    date: "5th June 2020",
    presentationTitle:
      "User Friendly Emerging Technology Confirms Sustainability",
    role: "Presenter",
  },
  {
    name: "International Seminar on 'Issues of Development With Special Reference to Gender, Caste and Religion'",
    location: "Midnapore College",
    date: "17th - 18th December, 2019",
    presentationTitle: "Processing Thoughts for Planning Development",
    role: "Presenter",
  },
  {
    name: "4th India Water Impact Summit 2019' (IWIS)",
    location: "Vigyan Bhawan, New Delhi",
    date: "5th - 7th December, 2019",
    presentationTitle:
      "Delivering Jal Jeevan Mission in Synergy With River Restoration and Conservation Activities in Rural India - Beyond Ganga Rejuvenation",
    role: "Moderator for the Plenary Session",
  },
  {
    name: "Tech4Seva",
    location: "IIT Delhi",
    date: "10th - 12th August, 2019",
    presentationTitle:
      "Sustainable and Affordable Technologies to Provide Safe Drinking Water",
    role: "Panel Theme",
  },
  {
    name: "4th International Conference on Public Policy",
    location: "Concordia University, Montreal, Canada",
    date: "26th - 28th June, 2019",
    presentationTitle:
      "Commons Participation in Technology Transfer for a Better Quality of Life, Livelihood Generation, and Poverty Alleviation in Rural India",
    role: "Presenter",
  },
  {
    name: "UK-India-Bangladesh Global Challenge Research Fund (GCRF) Workshop on 'Arsenic in the Food Chain'",
    location: "University of Sheffield, UK",
    date: "17th - 18th September, 2018",
    presentationTitle:
      "Educating The Rural India: An Approach Towards Arsenic Problem Mitigation",
    role: "Resource person",
  },
  {
    name: "National workshop on 'Resource Use and Conservation for Sustainable Socio-ecoloical Development'",
    location: "NIRDPR, Guwahati",
    date: "21st – 22nd December, 2017",
    presentationTitle:
      "Natural Resource Conservation and Management as a Part of Development Planning",
    role: "Resource person",
  },
  {
    name: "International Conference on 'Land Use/ Cover Changes, Biodiversity, Health and Environment, Local and Regional Development'",
    location: "Romanian Academy, Institute of Geography, Bucharest, Romania",
    date: "10th – 14th September, 2017",
    presentationTitle:
      "Promoting Biodiversity Knowledge: A Means for Nature Conservation",
    role: "Presenter",
  },
  {
    name: "Indian Heritage in Digital Space' (IHDS) Workshop",
    location: "CSIR–CEERI, BISR Jaipur",
    date: "15th – 16th July, 2017",
    presentationTitle:
      "Digitization of Sacred Groves: Geo-Ecological Heritage of West Bengal",
    role: "Presenter",
  },
  {
    name: "International Conference on 'Emerging Technologies in Agricultural and Food Engineering'",
    location: "IIT Kharagpur",
    date: "27th – 30th December, 2016",
    presentationTitle: "",
    role: "Co-chaired Technical session 'Environmental Remediation Technologies'",
  },
  {
    name: "2nd International APR Environment–Landscape Architecture Forum",
    location: "Seoul National University, South Korea",
    date: "17th – 19th October, 2016",
    presentationTitle: "Green Landscape: Knowledge, Preservation and Promotion",
    role: "Presenter",
  },
  {
    name: "Capacity Building Programme for Social Science Faculty Memebrs",
    location: "J.P. Naik Centre for Education and Development, Pune",
    date: "17th March – 31st March, 2016",
    presentationTitle: "How to Make an Effective Presentation",
    role: "Resource person",
  },
  {
    name: "The 8th International Conference on Traditional Forest Knowledge and Culture in Asia: Linking Biological and Cultural Diversity with Landscape Management",
    location: "Nanjing Forestry University, China",
    date: "7th – 9th November, 2015",
    presentationTitle:
      "Forest Dependency: A Globally Established Model with Contradictions",
    role: "Presenter",
  },
  {
    name: "IIIDEM Seminar on 'Gender in Elections'",
    location: "Election Commission of India, Nirvachan Sadan, New Delhi",
    date: "29th January, 2015",
    presentationTitle: "Elections and Women Participation",
    role: "Resource person",
  },
  {
    name: "International Seminar on 'Green Economy and Sustainable Development'",
    location: "Institute for Social and Economic Change (ISEC), Bangalore",
    date: "6th – 7th November, 2014",
    presentationTitle: "Role of Participatory Mechanism for Inclusive Growth",
    role: "Discussant for the technical session on 'Environmental Degradation: Economic and Social Impacts'",
  },
  {
    name: "Workshop on 'Women Empowerment and Disaster Management'",
    location: "CDMS, GGSIP University, New Delhi",
    date: "23rd August, 2014",
    presentationTitle: "",
    role: "Participated in panel discussion",
  },
  {
    name: "The '2012 Yangling International Agri-science Forum' and the 'International Conference on Traditional Forest-related Knowledge and Culture for Green Economy'",
    location: "Northwest Agriculture and Forestry University, Yangling, China",
    date: "5th – 8th November, 2012",
    presentationTitle:
      "Sustainable Forest Ecology Management: Religious Faith, Believes and Practices",
    role: "Presenter",
  },
  {
    name: "Workshop on Kolkata – Risks and Readiness to mitigate urban disaster",
    location: "The Bengal Chamber of Commerce and Industry, Kolkata",
    date: "14th June, 2012",
    presentationTitle: "",
    role: "Participated in panel discussion",
  },
  {
    name: "National Conference on 'Why Development Matters: Capture better the Complexity of Human Life'",
    location:
      "Department of Economics, University of North Bengal and A.C. College of Commerce, Jalpaiguri",
    date: "26th – 27th March, 2012",
    presentationTitle:
      "Financial Empowerment and the Vulnerability of Urban Environment",
    role: "Resource person, Chaired Plenary Session II",
  },
  {
    name: "The 6th Global South Doctoral Workshop",
    location:
      "Graduate School, Gadjah Mada University (UGM), Yogyakarta, Indonesia",
    date: "26th November – 3rd December, 2011",
    presentationTitle:
      "Conservation of open dry-deciduous forest covers of West Bengal, India, through the socio-economic progress of forest dwellers",
    role: "Discussant for the paper 'Economic valuation model as a basis for the rehabilitation of damaged mangrove forest using spatial data based' by Dewi Wahyuni K. Baderan, Universitas Gadjah Mada",
  },
  {
    name: "International Conference on 'Development, Logistics, and Governance'",
    location: "Calcutta Research Group (CRG), Academy of Fine Arts, Kolkata",
    date: "8th – 10th September, 2011",
    presentationTitle: "",
    role: "Discussant for the session 'Configuring Spaces: The Logic of Administration'",
  },
  {
    name: "National Seminar on 'Governing Forest Resources for Economic Outcome'",
    location: "Centre for Studies in Social Sciences, Calcutta",
    date: "23rd – 24th June, 2011",
    presentationTitle: "",
    role: "Chief organiser",
  },
  {
    name: "Association of American Geographers (AAG) 2010 Annual Meeting",
    location: "Washington DC, USA",
    date: "14th – 18th April, 2010",
    presentationTitle:
      "An investigation of the importance of non-timber forest products documentation in 11 forest fringe villages of West Bengal, India",
    role: "Presenter",
  },
  {
    name: "The European International Association of Landscape Ecology (IALE) Conference 2009",
    location:
      "Faculty of Natural Science, Department of Geography and Geology, Salzburg University, Austria",
    date: "12th – 16th July, 2009",
    presentationTitle: "",
    role: "Participated as research scholar",
  },
  {
    name: "International Conference on 'Object-Based Landscape Analysis Meeting'",
    location: "University of Nottingham, UK",
    date: "7th – 8th April, 2009",
    presentationTitle: "",
    role: "Conference organising committee member",
  },
];

const Conferences = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099680/Conferences/txvabsese2gquhgsrcuz.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099675/Conferences/oxmqvena0xi8xn0mpfs8.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099671/Conferences/dnx70cuq1jv7fk8dmjlw.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099669/Conferences/kq1najhfqlccdqsvaxir.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099669/Conferences/gdjbkpakbanf7cs7kerf.jpg",
      caption: "",
    },
    // {
    //   url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099668/Conferences/reewv11tczta0nvz9f3l.jpg",
    //   caption: "",
    // },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099665/Conferences/ogqnpdwijzfufedgo5w9.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099664/Conferences/chcfhrqhw0sezekntbwg.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099661/Conferences/lq5lacdl6nfvgtxhfoyg.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099660/Conferences/tbangeu1axobago29uct.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099660/Conferences/aoevjsfdwkecuypzdnju.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743099659/Conferences/mtcghqdfn6hy8ayxbqve.jpg",
      caption: "",
    },
    // {
    //   url: CofImage,
    //   caption: "Conference Photo",
    // },
    {
      url: Img1,
      caption: "",
    },
    {
      url: Img2,
      caption: "",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky header (hero + title) */}
      <header className="sticky top-20 z-30">
        <div className="relative h-20 md:h-28 lg:h-28 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dq1llsy7f/image/upload/v1741810294/ecbv0dyarhv3nb8gsu3g.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gray-200/40"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative text-center text-white px-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-0 mt-5">Conferences</h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-1 bg-blue-400 mx-auto mb-2"
            ></motion.div>
          </motion.div>
        </div>

        <div className="text-center py-3 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-0"
          >
            <h1 className="text-2xl md:text-2xl font-bold text-blue-600">
              List of Conferences, Seminars, and Workshops (Participated)
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-1 bg-blue-400 mx-auto mt-2"
            ></motion.div>
          </motion.div>
        </div>
      </header>

      {/* Scrollable content area */}
      <main className="flex-1 mt-8 overflow-auto bg-gray-100 p-6 pb-56">
        <ul className="max-w-4xl mx-auto space-y-6">
          {conferences.map((conference, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.06,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500"
            >
              <h2 className="text-xl font-semibold text-blue-700">
                {conference.name}
              </h2>
              <p className="text-gray-600 ">
                {conference.location} ({conference.date})
              </p>
              {conference.presentationTitle && (
                <p className="mt-2 text-gray-700">
                  <strong>Title of the Presentation:</strong>{" "}
                  <span className="italic">{conference.presentationTitle}</span>
                </p>
              )}
              {conference.role && (
                <p className="mt-1 text-gray-600">
                  <strong>Role:</strong> {conference.role}
                </p>
              )}
            </motion.li>
          ))}
        </ul>
      </main>

      {/* Fixed bottom carousel */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <FooterImageSlider
          slides={slides}
          slidesToShow={4}
          autoPlayInterval={3000}
          heightClass="h-36 md:h-44 lg:h-40"
          paddingYClass="py-6"
        />
      </div>
    </div>
  );
};

export default Conferences;
