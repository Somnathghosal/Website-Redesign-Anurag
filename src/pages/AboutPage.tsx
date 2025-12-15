import { BookMarked, Calendar, FileText } from "lucide-react";

const AboutPage = () => {
  // Blog posts data array for cleaner rendering

  // Function to navigate to blog post page
  const newsAndEvents = [
   {
      id: 18,
      date: "11th December 2025",
      event:
        "Dr. Somnath Ghosal Attended International Symposium on “Climate Change, Disasters, and Adaptation” at Mizoram University, Aizawl as the 'Guest of Honour'.",
    },
    {
      id: 17,
      date: "April 2025",
      event:
        "Dr. Somnath Ghosal received TUM Global Incentive Fund 2025, Germany for conducting project on 'Advancing Agricultural Resilience in West Bengal through Innovative Solutions in Value Chain Financing, Technology Adoption, and Smart Resource Management'.",
    },
    {
      id: 16,
      date: "May - July 2025",
      event:
        'Dr. Somnath Ghosal visiting British Columbia, Canada to conduct research projects.',
    },
    {
      id: 15,
      date: "13th - 16th March 2025",
      event:
        'Dr. Somnath Ghosal presented a research paper and chaired a scientific session during the 16th International Conference on "Environmental and Rural Development" held at Tokyo University of Agriculture, Japan.',
    },
    {
      id: 14,
      date: "13th - 16th March 2025",
      event:
        'Mr. Anand Kumar presented a paper at the 16th International Conference on "Environmental and Rural Development" held at Tokyo University of Agriculture, Japan.',
    },
    {
      id: 13,
      date: "2023 - 2025",
      event:
        "Dr. Somnath Ghosal received Research Associate position from University of the Fraser Valley, British Columbia, Canada.",
    },
    {
      id: 12,
      date: "10th - 14th February 2025",
      event:
        "Dr. Somnath Ghosal delivered a research paper at the IIAS - DARPG India International Conference 2025 held at Bharat Mandapam, New Delhi.",
    },
    {
      id: 11,
      date: "7th February 2025",
      event:
        'Dr. Somnath Ghosal was invited by TATA Steel Foundation to deliver an invited talk on, "Forest and Biodiversity Management with Focus on Role of Participatory Methods".',
    },
    {
      id: 10,
      date: "5th - 13th February 2025",
      event:
        'Dr. Ghosal delivered invited talk at the "22nd NEP Orientation and Sensitization Programme", organized by UGC-MMTTC Mizoram University.',
    },
    {
      id: 9,
      date: "8th - 17th January 2025",
      event:
        'Dr. Ghosal delivered invited talk at the "MMTTP-NEP Orientation and Sensitization Programme" organized by North-Eastern Hill University, Shillong.',
    },
    {
      id: 8,
      date: "23rd September 2024",
      event:
        'Dr. Somnath Ghosal took part as an expert panellist at the consultative workshop on "Promoting Entrepreneurship, Skilling and Employment by Leveraging Demographic Dividend of the State" organized by Tripura Rural Livelihood Mission, Rural Development Department, Government of Tripura, Agartala.',
    },
    {
      id: 7,
      date: "2023",
      event:
        'Dr. Ghosal has been offered with Outstation Chairman position for "Rural Technology, Social Organizations, and Rural Development" Thematic Panel of the 46th and 47th Indian Social Science Congress.',
    },
    {
      id: 6,
      date: "31st July - 4th August 2023",
      event:
        'Dr. Ghosal organized international workshop on "Water-Energy-Food-Health Nexus" at the IIT Kharagpur in collaboration with the University of Edinburgh, UK (online).',
    },
    {
      id: 5,
      date: "23rd - 25th November 2023",
      event:
        'Dr. Ghosal attended the "Industry-Academia Conclave (IAC 2023)" as an expert panellist held at NIT Jamshedpur.',
    },
    {
      id: 4,
      date: "22nd - 28th February 2022",
      event:
        "Dr. Somnath Ghosal was invited by the Nagaland Science and Technology Council (NASTEC) to deliver an invited talk on, 'The Road Ahead for Next 25 Years of Indian Science and Technology' during the festival of Science & Technology.",
    },
    {
      id: 3,
      date: "5th - 7th December 2019",
      event:
        'Dr. Ghosal delivered an invited talk at "4th India Water Impact Summit 2019" (IWIS), which was held at the Vigyan Bhawan, New Delhi.',
    },
    {
      id: 2,
      date: "2018",
      event:
        "Dr. Ghosal received Copyright Certificate for 'Designing Purified Drinking Water Distribution at Nominal Cost'.",
    },
    {
      id: 1,
      date: "26th - 28th June 2019",
      event:
        'Dr. Ghosal presented a research paper at the "4th International Conference on Public Policy" held at Concordia University, Montreal, Canada.',
    },
  ];

  // Reusable blog card component with TypeScript typing

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 ">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center ">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 mt-10">
            Dr. Somnath Ghosal
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-start mb-12">
            <div className="md:w-[35%] mb-8 md:mb-0 md:mr-12">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dq1llsy7f/image/upload/v1741107625/dxtna9mrw18l4dfix6gl.jpg"
                  alt="Dr. Somnath Ghosal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-[65%]">
              <div className="flex items-center mb-4"></div>
              <div className="max-h-[410px] overflow-y-auto pr-4 text-justify">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <p>
                    Dr. Somnath Ghosal is a sustainability expert specializing
                    in rural geography, with over twenty years of experience as
                    a renowned action researcher. His research focuses on the
                    dynamic interaction between humans and nature, drawing
                    insights from the scholarly knowledge embedded in nature
                    itself. His expertise extends to natural resource
                    management, climate vulnerability & adaptation, rural
                    livelihoods, community health, and public policy.
                  </p>
                  <br></br>
                  <p>
                    {" "}
                    Before joining IIT Kharagpur, Dr. Somnath Ghosal held
                    positions at the University of Nottingham, CSSS Calcutta,
                    IDF Gurgaon, Renmin University of China, and IIE Pune. He
                    has also been a visiting fellow at IITs, IIMs, NITs, and
                    University of the Fraser Valley and many other leading
                    universities and research institutes in India and abroad.
                    Additionally, he plays a key role in the sensitization of
                    the National Education Policy for Government of India. Dr. Ghosal is a core committee member of the Scheme for Promotion of Academic and Research Collaboration (SPARC).
                  </p>{" "}
                  <br></br>
                  Dr. Ghosal's work is deeply rooted in participatory action
                  research and industry-academic collaboration. He is also a
                  regular member of the National Level Monitoring (NLM)
                  Programme conducted by the Ministry of Rural Development,
                  Government of India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}

        {/* Awards Section */}

        {/* UG & PG Courses Taught */}
        <div className="max-w-6xl mx-auto mb-20 bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-8">
            <BookMarked className="h-8 w-8 text-blue-800 mr-3" />
            <h2 className="text-3xl font-bold text-blue-900">
              UG & PG Courses Taught
            </h2>
          </div>
          <p className="text-gray-700 mb-6 italic text-xl">
            Dr. Somnath Ghosal actively contributes to academic excellence by
            teaching a diverse range of courses for undergraduate and
            postgraduate students.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-800 text-xl">
                Fundamentals of Rural Innovation
              </p>
              <p className="text-gray-600 text-md">(RD30005)</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-xl text-blue-800">
                Participatory Rural Appraisal: Theories and Practices
              </p>
              <p className="text-gray-600 text-sm">(RD61001)</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-xl text-blue-800">
                Sustainable Natural Resource Management: Science, Society,
                and Policy
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-xl text-blue-800">
                Sustainable Rural Development: Policy, Planning, and
                Management
              </p>
              <p className="text-gray-600 text-sm">(RD60002)</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-xl text-blue-800">
                Transfer and Management of Rural Technology
              </p>
              <p className="text-gray-600 text-sm">(RD30002)</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-xl text-blue-800">
                Financing Infrastructure Projects
              </p>
              <p className="text-gray-600 text-sm">(ID60003)</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-xl text-blue-800">
                Sustainable Green Urban Planning
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-xl text-blue-800">
                Social Research Methodologies (Qualitative)
              </p>
            </div>
          </div>
        </div>

        {/* News & Events and Blog Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            {/* News & Events Section (Left) */}
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-8">
                <Calendar className="h-8 w-8 text-blue-800 mr-3" />
                <h2 className="text-3xl font-bold text-blue-900">
                  News & Events
                </h2>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                {newsAndEvents.length > 0 ? (
                  <div className="space-y-6 max-h-[280px] overflow-y-auto pr-2">
                    {newsAndEvents.map((item) => (
                      <div
                        key={item.id}
                        className="border-l-4 border-blue-600 pl-4 py-1"
                      >
                        <p className="text-sm font-semibold text-blue-800 mb-1">
                          {item.date}
                        </p>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center italic">
                    News and events will be updated soon.
                  </p>
                )}
              </div>
            </div>

            {/* Blog Section (Right) */}
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-8">
                <FileText className="h-8 w-8 text-blue-800 mr-3" />
                <h2 className="text-3xl font-bold text-blue-900">Blog</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Dr. Somnath Ghosal and his team members regularly share
                insights, research findings, and thoughts on various topics
                related to rural development, regional planning, sustainable
                practices and suitable public-policy.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-blue-800 font-semibold text-lg mb-2">
                  View all blog posts
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://drive.google.com/file/d/1DMchF-Z5q211vFb9o-sNxh1VUXnH96i1/view?usp=drive_link"
                    target="_blank"
                    className="text-xl hover:text-blue-500 hover:underline text-blue-700"
                  >
                    Climate Vulnerability and Adaptation
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1cybUDSHI9D1bfRoJldeM0kSyKoIRmDBK/view?usp=sharing"
                    target="_blank"
                    className="text-xl hover:text-blue-500 hover:underline text-blue-700"
                  >
                    Social Valuation of High-Altitude Lake Ecosystem Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
      </div>
    </div>
  );
};

export default AboutPage;
