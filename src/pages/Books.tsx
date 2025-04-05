import { motion } from "framer-motion";

const bookChapters = [
  {
    author: "Ghosal, S. (2023).",
    title:
      "Changing the Geography of Indian Rurality: By Force or Choice (p. 302 – 313).",
    source:
      "46th Indian Social Science Congress, p. 302 – 313. Bharathidasan University, Tiruchirappalli, India.",
  },
  {
    author: "Ghosh, M., Saha, A., Pal, S., and Ghosal, S. (2021).",
    title:
      "Do the collection and uses of NTFPs affect household well-being? Evidence from forest villages in eastern Himalaya.",
    source:
      "In Shit, P. K. et al. (Edi.), Forest Resources Resilience and Conflicts (Elsevier), p. 217 – 225.",
  },
  {
    author: "Ghosh, M. and Ghosal, S. (2018).",
    title:
      "Regional Pattern of Rural Livelihood Opportunities and Capital in Sub-Himalayan West Bengal, India.",
    source:
      "12th World Congress of Regional Science Association International (RSAI), p. 751 – 761. BITS Pilani, Goa Campus, India.",
  },
  {
    author: "Ghosal, S. and Liu, J. (2015).",
    title:
      "Forest Dependency: A Globally Established Model with Contradictions.",
    source:
      "In Liu, J. et al. (Edi.), Linking Biological and Cultural Diversity to Landscape Management, p. 48 – 51. Nanjing Forestry University, China.",
  },
  {
    author: "Ghosal, S. (2013)",
    title: "Role of Participatory Mechanism for Inclusive Growth.",
    source:
      "In Kannan, E. et al. (Edi.), Green Economy and Sustainable Development, p. 1 - 13. ISEC, Bangalore, India.",
  },
  {
    author: "Ghosal, S. (2013).",
    title:
      "Sustainable Forest Ecology Management: Religious Faith, Believes and Practices.",
    source:
      "In Heok-Choh, S. et al. (Edi.), Traditional Forest-related Knowledge and Culture for Green Economy, p. 164 -164. Asia Pacific Association of Forestry Research Institutions, Malaysia.",
  },
  {
    author: "Ghosal, S. (2011).",
    title: "Community Based Approach: Why, When and to What Extent?",
    source:
      "In Rout, S. (Edi.), Community, Institutions and Participation in Natural Resource Governance, p. 205 – 219. Dept of Sociology, University of Hyderabad, India.",
  },
  {
    author: "Ghosal, S., Watkins, C. and Jewitt, S. (2010).",
    title:
      "Marketing of Non-Timber Forest Products Produced in Dry-Deciduous Forest of West Bengal, India.",
    source:
      "The XIII World Forestry Congress Proceedings, Buenos Aires, Argentina.",
  },
];

const bookReviews = [
  {
    title: "Developing the Underdeveloped",
    author: "P.K. Bhowmick et al.",
    source: "Man and Life (ISSN No. 0972-4109), Vol. 45 (1&2) (2019).",
  },
  {
    title: "Changing Tribal Society in India: Issues and Challenges",
    author: "P.K. Bhowmick et al. (Edi.)",
    source: "Man and Life (ISSN No. 0972-4109), Vol. 43 (3&4) (2017).",
  },
  {
    title: "Medical Anthropology: Tradition and Change",
    author: "B. V. Sharma (Edi.)",
    source: "Man and Life (ISSN No. 0972-4109), Vol. 43 (1&2) (2017).",
  },
];

const Books = () => {
  return (
    <div>
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dq1llsy7f/image/upload/v1741810293/r3sazfzbarnt1xo2jrde.jpg")',
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">BOOK</h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
        </motion.div>
      </div>

      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl text-blue-600 font-bold py-2">
          <span className="pr-4">📚</span>Books
        </h1>
        <p className="text-lg font-medium mb-4">
          <span className="font-bold">Ghosal, S. (2013).</span>{" "}
          <i>Sustainable Forestry: People, Culture and Economics</i> (ISBN:
          978-81-910382-9-3), L. G. Publishers Distributors, New Delhi.
        </p>
        <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">
          Book Chapter/Congress/Conference Proceedings (Refereed/Peer-Reviewed):
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          {bookChapters.map((chapter, index) => (
            <li key={index}>
              <span className="font-bold">{chapter.author}</span>{" "}
              {chapter.title} <i>{chapter.source}</i>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">
          Book Review:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          {bookReviews.map((review, index) => (
            <li key={index}>
              <span className="font-bold">{review.title}</span> by{" "}
              {review.author} in <i>{review.source}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
