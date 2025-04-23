import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const JournalPage = () => {
  const categories = [
    {
      title: "Rural Livelihoods Management and Public Policy",
      papers: [
        {
          authors: "Goswami, T. and Ghosal, S.",
          year: 2022,
          title:
            "From Rice Fields to Brackish Water Farms: Changing Livelihoods in Agrarian Coastal Bengal, India",
          journal: "Asia-Pacific Journal of Regional Science",
          details: "Vol. 6 (2), p. 453 – 484",
          doi: "10.1007/s41685-022-00229-8",
        },
        {
          authors: "Ghosh, M. and Ghosal S.",
          year: 2021,
          title:
            "Multidimensional Rural Livelihoods in Indian Sub-Himalaya: Regional Analysis, Households Well-Being and Its Determinants",
          journal: "International Journal of Rural Management",
          details: "Vol. 19, p. 45 - 63",
          doi: "10.1177/09730052211047639",
        },
        {
          authors: "Ghosh, M. and Ghosal S.",
          year: 2021,
          title:
            "Households' Choices and Their Drivers to Rural Non-Farm Livelihood Diversification in West Bengal, India",
          journal: "Journal of Asian and African Studies",
          details: "Vol. 57, p. 1158 - 1178",
          doi: "10.1177/00219096211040592",
        },
        {
          authors: "Ghosh, M. and Ghosal S.",
          year: 2019,
          title:
            "Living With Insecurity: A Critical Examination of the Environmental Problems Linked with Social Problems in Rural West Bengal, India",
          journal: "Romanian Journal of Geography",
          details: "Vol. 63 (1), p. 53 - 64",
          doi: "",
        },
        {
          authors: "Ghosal, S.",
          year: 2013,
          title:
            "Soft or Hard: Infrastructure Matters Rural Economic Empowerment",
          journal:
            "Journal of Infrastructure Development (Sage, ISSN: 0974-9306, eISSN: 0975-5969)",
          details: "Vol. 5 (2), p. 137 – 149",
          doi: "",
        },
        {
          authors: "Ghosal, S.",
          year: 2012,
          title:
            "Integral Economics and the Exploration of Indigenous Knowledge",
          journal:
            "Corvinus Journal of Sociology and Social Policy (Corvinus University of Budapest, ISSN: 2062-087X)",
          details: "Vol. 3 (2), p. 83 – 105",
          doi: "",
        },
        {
          authors: "Ghosal, S.",
          year: 2007,
          title:
            "Contents of Economic Geography: An Interdisciplinary Approach",
          journal: "Geographical Review of India (ISSN: Print 0375-6386)",
          details: "Vol. 69 (3), p. 293 – 298",
          doi: "",
        },
      ],
    },
    {
      title: "Community Water Planning",
      papers: [
        {
          authors: "Ruj, C., Ghosal, S. and Sen, A.",
          year: 2025,
          title:
            "Silenced Stream: Capital Interest and Water Politics in Drought Areas of Ajodhya Hill Region, Purulia, West Bengal",
          journal: "The Oriental Anthropologist",
          details: "Vol. 25 (1)",
          doi: "10.1177/0972558X251314721",
        },
        {
          authors: "Goswami, T. and Ghosal, S.",
          year: 2023,
          title:
            "Proposing Civil Structures for Managed Aquifer Recharge in Relevant Sites of Shilabati River: An Integrated Spatial Analysis",
          journal: "Environmental Earth Sciences",
          details: "Vol. 82",
          doi: "10.1007/s12665-023-11033-8",
        },
        {
          authors: "Ghosal, S. and Ruj, C.",
          year: 2023,
          title:
            "Societal Impact Analysis of Community Managed Potable Water Supply System in Rural India",
          journal: "Journal of Applied Social Science",
          details: "Vol. 17 (1), p. 148 – 167",
          doi: "10.1177/19367244221119140",
        },
        {
          authors: "Goswami, T. and Ghosal, S.",
          year: 2022,
          title:
            "Domestic Water Poverty in a Semi-arid District of Eastern India: Multiple Dimensions, Regional Patterns, and Association with Human Development",
          journal: "Environmental Development",
          details: "Vol. 44",
          doi: "10.1016/j.envdev.2022.100742",
        },
        {
          authors: "Goswami, T. and Ghosal, S.",
          year: 2022,
          title:
            "Examining the Groundwater Level in a Semi-arid District of Eastern India: Spatiotemporal Trends, Determinants, and Future Prospects",
          journal: "Environment, Development and Sustainability",
          details: "Vol. 25, p. 10929 - 10953",
          doi: "10.1007/s10668-022-02512-2",
        },
        {
          authors: "Ruj, C., Majumdar, A. and Ghosal, S.",
          year: 2022,
          title:
            "Political Ecology and Hydro-social Relation: A Study on Drought and Associated Migration in a Semi-arid District of West Bengal, India",
          journal: "Letters in Spatial and Resource Sciences",
          details: "Vol. 15, p. 709 – 734",
          doi: "10.1007/s12076-022-00321-9",
        },
        {
          authors: "Goswami, T. and Ghosal, S.",
          year: 2022,
          title:
            "Understanding the Suitability of Two MCDM Techniques in Mapping the Groundwater Potential Zones of Semi-arid Bankura District in Eastern India",
          journal: "Groundwater for Sustainable Development",
          details: "Vol. 17",
          doi: "10.1016/j.gsd.2022.100727",
        },
        {
          authors:
            "Porley, V., Chatzisymeon, E., Meikap, B.C., Ghosal, S., Robertson, N.",
          year: 2020,
          title:
            "Field Testing of Low-cost Titania-based Photocatalysts for Enhanced Solar Disinfection (SODIS) in Rural India",
          journal:
            "Environmental Science: Water Research and Technology (Royal Society of Chemistry, London)",
          details: "2020, 6, p. 809 - 816",
          doi: "10.1039/C9EW01023H",
        },
      ],
    },
    {
      title: "Health and Public Policy",
      papers: [
        {
          authors: "Hasan, M. S. and Ghosal, S.",
          year: 2025,
          title:
            "Unravelling Inequities in Access to Public Healthcare Services in West Bengal, India: Multiple Dimensions, Geographic Pattern, and Association with Health Outcomes",
          journal: "Global Social Welfare",
          doi: "10.1007/s40609-025-00384-8",
        },
        {
          authors: "Hasan, M. S. and Ghosal, S.",
          year: 2024,
          title:
            "Unveiling the Mechanism(s) Between Poverty, Deprivation, and Depression in Older Indian Adults: Findings from a Nationwide Survey",
          journal: "Journal of Aging and Health",
          doi: "10.1177/08982643241280529",
        },
        {
          authors: "Hasan, S. M. and Ghosal, S.",
          year: 2023,
          title:
            "Gender Differentials in the Choice of In-patient Healthcare Services among the Older Adults in India: A Cross-Sectional Study",
          journal:
            "The International Journal of Health Planning and Management",
          details: "Vol. 38 (5), p. 1464 – 1482",
          doi: "10.1002/hpm.3673",
        },
        {
          authors: "Hasan, S. M. and Ghosal, S.",
          year: 2023,
          title:
            "Informal Plastic Waste Recycling Firms in Rural Eastern India: Implications for Livelihood and Health",
          journal: "Clinical Epidemiology and Global Health",
          details: "Vol. 21",
        },
      ],
    },
    {
      title: "Social Forestry and Biodiversity Conservation",
      papers: [
        {
          authors: "Ghosal, S. and Goswami, T.",
          year: 2024,
          title:
            "Community Forest Dependency: Re-examining Established Thoughts with Empirical Evidence from Eastern India",
          journal: "European Journal of Forest Research",
          doi: "10.1007/s10342-024-01659-z",
        },
        {
          authors: "Ghosal, S., Majumdar, A., and Ruj, C.",
          year: 2023,
          title:
            "Reconnecting Humans with Nature: A Nature-based Participatory Approach for the Enhancement of Biodiversity Knowledge in Urban Area of West Bengal, India",
          journal: "GeoJournal",
          details: "Vol. 88, p. 4537 – 4554",
          doi: "10.1007/s10708-023-10880-z",
        },
        {
          authors: "Ghosh, M. and Ghosal, S.",
          year: 2019,
          title:
            "Historical Geography of Forestry and Forest Culture in the Sub-Himalayan West Bengal (1757 – 2015)",
          journal: "Space and Culture, India",
          details: "Vol. 6 (5), p. 215 – 227",
        },
        {
          authors: "Ghosal, S. and Liu, J.",
          year: 2018,
          title:
            "The Chronology of Community Participation in Indian Forest Management",
          journal: "International Forestry Review",
          details: "Vol. 20 (1), p. 79 – 88",
          issn: "2053-7778",
        },
        {
          authors: "Ghosal, S. and Liu, J.",
          year: 2017,
          title: "Community Forest Dependency: Does Distance Matter?",
          journal: "The Indian Forester",
          details: "Vol. 143 (5), p. 397 - 404",
          issn: "0019-4816",
          online_issn: "2321-094X",
        },
        {
          authors: "Ghosal, S.",
          year: 2014,
          title:
            "The Significance of the Non-Timber Forest Products Policy for Forest Ecology Management: A Case Study in West Bengal, India",
          journal: "Environmental Policy and Governance",
          details: "Vol. 24 (2), p. 108 – 121",
          publisher: "John Wiley & Sons, Ltd.",
          online_issn: "1756-9338",
        },
        {
          authors: "Ghosal, S.",
          year: 2013,
          title: "The Role of Formal Marketing Channels in NTFP Business",
          journal: "Journal of Sustainable Forestry",
          details: "Vol. 32 (3), p. 310 – 328",
          publisher:
            "Taylor & Francis Group, Yale University School of Forestry and Environmental Studies, USA",
          issn: "Print 1054-9811, Online 1540-756X",
          webpage:
            "http://environmentprogress.com/key-research-articles/the-role-of-formal-marketing-channels-in-ntfp-business/",
        },
        {
          authors: "Ghosal, S.",
          year: 2011,
          title:
            "Pre-colonial and Colonial Forest Culture in the Presidency of Bengal",
          journal: "Human Geographies",
          details: "Vol. 5 (1), p. 107 – 116",
          publisher: "University of Bucharest",
          issn: "Print 1843-6587, Online 2067-2284",
        },
        {
          authors: "Ghosal, S.",
          year: 2011,
          title:
            "Importance of Non-timber Forest Products in Native Household Economy",
          journal: "Journal of Geography and Regional Planning",
          details: "Vol. 4, p. 159-168",
        },
      ],
    },
    {
      title: "Environment, Climate Change Vulnerability, and Adaptation",
      papers: [
        {
          authors: "Ghosh, M. and Ghosal, S.",
          year: 2023,
          title:
            "Geographies of Vulnerability to Climate Change: Empirical Evidence from the Indian Himalayan Foothills",
          journal: "Asia-Pacific Journal of Regional Science",
          details: "Vol. 7, p. 405 – 431",
          doi: "10.1007/s41685-022-00273-4",
        },
        {
          authors: "Majumdar, A., Ghosal, S., Ruj, C. and Sen, A.",
          year: 2023,
          title:
            "Why Efforts to Address India's 'Just Transition' Should Support Nature-Based Solutions",
          journal: "Energy Research and Social Science",
          details: "Vol. 98",
          doi: "10.1016/j.erss.2023.103021",
        },
        {
          authors: "Ghosh, M. and Ghosal, S.",
          year: 2021,
          title:
            "Climate Change Vulnerability of Rural Households in Flood-prone Areas of Himalayan Foothills, West Bengal, India",
          journal: "Environment, Development and Sustainability",
          details: "Vol. 23, p. 2570 - 2595",
        },
        {
          authors: "Ghosh, M. and Ghosal, S.",
          year: 2021,
          title:
            "India's Domestic Climate Policy: Past, Present and Future Strategies",
          journal: "Annals of the National Association of Geographers, India",
          details:
            "Delhi School of Economics, ISSN: 0970-972X, Vol. 41 (1), p. 156 – 175",
        },
        {
          authors: "Ghosh, M. and Ghosal, S.",
          year: 2020,
          title:
            "Determinants of Household Livelihood Vulnerabilities to Climate Change in the Himalayan Foothills of West Bengal, India",
          journal: "International Journal of Disaster Risk Reduction",
          details: "Vol. 50",
          doi: "10.1016/j.ijdrr.2020.101706",
        },
      ],
    },
    {
      title: "Regional Planning",
      papers: [
         {
          authors: "Kumar, H. and Ghosal, S.",
          year: 2025,
          title:
            "Unravelling the Impact of Land Use Transformation on Thermal Environment Across Seasons: A Comprehensive Study of Rapidly Urbanizing Patna Planning Area, India",
          journal: "Environmental Science and Pollution Research",
          details: "",
          doi: "",
        },
        {
          authors: "Chakraborty, P. and Ghosal, S.",
          year: 2024,
          title:
            "An Eco-social Exploration of Tourism Area Evolution in Mountains through Stakeholders' Perspective",
          journal: "Environmental Development",
          details: "Vol. 49",
          doi: "10.1016/j.envdev.2024.100963",
        },
        {
          authors: "Chakraborty, P. and Ghosal, S.",
          year: 2022,
          title:
            "Status of Mountain-Tourism and Research in the Indian Himalayan Region: A Systematic Review",
          journal: "Asia-Pacific Journal of Regional Science",
          details: "Vol. 6 (3), p. 863 – 897",
          doi: "10.1007/s41685-022-00243-w",
        },
        {
          authors: "Goswami, T., Hasan, M. S. and Ghosal, S.",
          year: 2022,
          title:
            "Site Suitability of Emerging Maize Cultivation in a Changing Agro-climatic Setting of Eastern India: A Fuzzy-MCE Integrated Analysis",
          journal: "Environment, Development and Sustainability",
          details: "Vol. 26, p. 1229 - 1261",
          doi: "10.1007/s10668-022-02756-y",
        },
        {
          authors: "Ghosal, S., Lin, N. and Cross, I.",
          year: 2010,
          title:
            "The Role of Open-Source Software for Handling INSPIRE-compliant Data",
          journal: "Geoinformatics (CMedia B.V., Netherlands)",
          details: "ISSN: 1387-0858, Vol. 13 (8), p. 16 – 22",
        },
      ],
    },
    {
      title: "Theoretical",
      papers: [
        {
          authors: "Ghosal, S.",
          year: 2009,
          title:
            "Is Nature 'Cultural' or 'Produced': An Exploratory Analysis Based on Recent Human Geographical Studies",
          journal: "Annals of the National Association of Geographers, India",
          details:
            "(Delhi School of Economics, ISSN: 0970-972X), Vol. 29 (1), p. 89 – 96",
        },
        {
          authors: "Ghosal, S.",
          year: 2009,
          title: "Escalation of Knowledge: A Critical Analysis",
          journal: "Geographical Review of India",
          details: "(ISSN: Print 0375-6386), Vol. 71 (3), p. 233 – 239",
        },
        {
          authors: "Ghosal, S.",
          year: 2008,
          title: "Philosophy of Regional Science",
          journal: "Indian Journal of Regional Science",
          details:
            "(Regional Science Association, ISSN: Print 0046-9017), Vol. 40 (2), p. 151 – 153",
        },
        {
          authors: "Ghosal, S.",
          year: 2005,
          title: "Geographical Contributions of the Work of Pierre Bourdieu",
          journal: "Indian Journal of Geography and Environment",
          details: "(ISSN: Print 0972-7388), Vol. 10, p. 1 – 7",
        },
      ],
    },
  ];

  const refereeJournals = [
    "Environmental Development",
    "Environment, Development and Sustainability",
    "Journal of Ecology and Natural Environment",
    "Small-scale Forestry",
    "International Journal of Biodiversity and Conservation",
    "Journal of Agriculture and Ecology Research International",
    "Journal of Medicinal Plants Research",
    "Journal of Horticulture and Forestry",
    "Corvinus Journal of Sociology and Social Policy",
    "Journal of Agricultural Research",
    "Journal of Infrastructure Development",
    "Journal of Plant Science",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-[40vh]  flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover  bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
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
          <h1 className="text-4xl md:text-6xl  font-bold mb-4">Journal</h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {categories.map((category, index) => (
          <AnimatedSection key={index} className="mb-12" delay={index * 0.2}>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              {category.title}
            </h2>
            <div className="space-y-6">
              {category.papers.map((paper, paperIndex) => (
                <motion.div
                  key={paperIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: paperIndex * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-lg text-gray-800 mb-2">
                    {paper.authors} ({paper.year}). {paper.title}.{" "}
                    <span className="italic">{paper.journal}</span>{" "}
                    {paper.details}.
                  </p>
                  {paper.doi && (
                    <p className="text-blue-600">
                      DOI:{" "}
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {paper.doi}
                      </a>
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection className="mt-16" delay={0.4}>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Referee for Journals
          </h2>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {refereeJournals.map((journal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{journal}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default JournalPage;
