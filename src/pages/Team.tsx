import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe, ChevronDown, ChevronUp } from "lucide-react";

// Define types for scholars and sections
type Scholar = {
  name: string;
  topic: string;
};

// Use const assertion for section keys to ensure type safety
const SECTION_KEYS = [
  "singleGuidance",
  "jointGuidance",
  "completed",
  "mtech",
  "btech2024",
  "btech2023",
  "international",
] as const;

type SectionKey = (typeof SECTION_KEYS)[number];

// Define the type for the active section state
type ActiveSectionState = {
  [Key in SectionKey]: boolean;
};

const Team = () => {
  // Initialize state with explicit typing
  const [activeSection, setActiveSection] = useState<ActiveSectionState>({
    singleGuidance: false,
    jointGuidance: false,
    completed: false,
    mtech: false,
    btech2024: false,
    btech2023: false,
    international: false,
  });

  // Fully type-safe toggle function
  const toggleSection = (section: SectionKey) => {
    setActiveSection((prev) => {
      // Create a new object with all sections set to false
      const newState = SECTION_KEYS.reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as ActiveSectionState);

      // Set the clicked section to the opposite of its current state
      newState[section] = !prev[section];

      return newState;
    });
  };

  // Scholar category type with proper key typing
  type ScholarCategory = {
    key: SectionKey;
    title: string;
    icon: React.ReactNode;
    scholars: Scholar[];
  };

  const scholarCategories: ScholarCategory[] = [
    {
      key: "singleGuidance",
      title: "Research Scholars",
      icon: <GraduationCap className="mr-2 text-blue-600" />,
      scholars: [
        {
          name: "Sneha A P (2022 – 2026)",
          topic:
            "Assessing the Impact of an Emerging Seaport on Coastal Livelihoods",
        },
        {
          name: "Md Sayed Hasan (2021 – 2025)",
          topic:
            "Social Relationships and Elderly Well-being: A Psychosocial Study",
        },
        {
          name: "Chhanda Ruj (2020 – 2025)",
          topic:
            "Hydro-social Transformation Conflicts: Risk, Inequality and Adaptation",
        },
        {
          name: "Aloke Majumdar (2020 – 2025)",
          topic:
            "Understanding the Implementation of Climate Action Plans Through Risk-Informed Governance: A Case Study of the Indian Sundarbans Delta",
        },
        {
          name: "Hemant Kumar (2018 – 2025)",
          topic:
            "Rural Transformation through Peri-Urbanization and Its Impact on the Existing Local Governing Institution in Bihar, India",
        },
        {
          name: "Dipti Paridhi Kindo (2017 – 2025)",
          topic:
            "Local Self-Governance: The Experiment of Panchayats (Extension to Scheduled Areas) Act in Jharkhand",
        },
        {
          name: "Poulomi Chakraborty (2020 – 2024)",
          topic:
            "Social Valuation of High-Altitude Lake Ecosystem Services Under Climate Change in the Sikkim Himalayas",
        },
        {
          name: "Manoranjan Ghosh (2017 – 2021)",
          topic:
            "Rural Livelihoods and Socio-Economic Vulnerability in Context of Climate Change in Sub-Himalayan Region",
        },
      ],
    },

    {
      key: "mtech",
      title: "Masters Thesis Project",
      icon: <GraduationCap className="mr-2 text-indigo-600" />,
      scholars: [
        {
          name: "Anand Kumar (2024 – 2025)",
          topic:
            "Policy for Infrastructure Development for Technology and Innovation Based Rural Non-Farm Employment Generation",
        },
      ],
    },
    {
      key: "btech2024",
      title: "Bachelor Thesis Project",
      icon: <GraduationCap className="mr-2 text-teal-600" />,
      scholars: [
        {
          name: "Rohit Vannam, Gopu Abhinav Reddy",
          topic:
            "Researching rural crafts for better livelihood",
        },
        {
          name: "Sarayu Gosika, Bhukya Prakash",
          topic:
            "Technical solutions for crafts marketing",
        },
        {
          name: "Rishikesh Maurya",
          topic:
            "PM 2.5 Prediction for 34 States in India by Using Multivariate Time Series (LSTM) and Deployment on Streamlit",
        },
        {
          name: "Rohit Raj",
          topic:
            "Programming Learning Platform for Rural Children Using Audio-Visual Documents",
        },
        {
          name: "Bhaskar Jha",
          topic:
            "Empowering Communities Through Innovation: A Drinking Water Facility Initiative",
        },
        {
          name: "Abhay Nimoria",
          topic:
            "Technical Approach to Reach Out to People Through Digital Platforms Regarding Forest-Based Entrepreneurial Opportunities",
        },
        {
          name: "Subhang Singh",
          topic:
            "Catalyzing Change: Impact of Sanitary Facilities on Girls' Education in Rural West Bengal",
        },
        {
          name: "Ankit Raj",
          topic:
            "Sustainable Virtual Marketing Platform Development for Traditional Art and Craft Products",
        },
        {
          name: "Biswojit Mohapatra",
          topic: "Programming Learning Platform for Rural Children",
        },
        {
          name: "Rahul Das",
          topic:
            "Mobile App Development for Improving the Mental Health and Wellbeing for Students",
        },
        {
          name: "Bhaskar Jha",
          topic: "Cattle Identification and Tracking in Dairy Farms",
        },
        {
          name: "Rohit Raj",
          topic: "Web Application for Sustainable Agricultural Practices",
        },
        {
          name: "Biswojit Mohapatra",
          topic: "Education Development in Rural Areas",
        },
        {
          name: "Shubhang Singh",
          topic: "Cattle Action Recognition in Dairy Farms",
        },
      ],
    },

    {
      key: "international",
      title: "International Visiting Scholars",
      icon: <Globe className="mr-2 text-red-600" />,
      scholars: [
        {
          name: "Victoria Porley",
          topic: "University of Edinburgh, UK (2019)",
        },
        {
          name: "Prateep Nayek",
          topic: "University of Waterloo, Canada (2018)",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-12"
        >
          Our Research Community
        </motion.h1>

        <div className="space-y-6">
          {scholarCategories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <div
                onClick={() => toggleSection(category.key)}
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition"
              >
                <div className="flex items-center">
                  {category.icon}
                  <h2 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h2>
                </div>
                {activeSection[category.key] ? <ChevronUp /> : <ChevronDown />}
              </div>

              {activeSection[category.key] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-gray-50"
                >
                  {category.scholars.map((scholar, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="text-lg font-medium text-gray-900">
                        {scholar.name}
                      </h3>
                      <p className="text-gray-600 italic">{scholar.topic}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
