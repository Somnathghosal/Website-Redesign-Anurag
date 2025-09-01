import { useState } from "react";
import FooterImageSlider from "../components/FooterImageSlider";
import PP1 from "../assests/PP1.jpg";
import PP2 from "../assests/PP2.jpg";
import PP3 from "../assests/PP3.jpg";
import PP4 from "../assests/PP4.jpg";
import PP5 from "../assests/PP5.jpg";

const ProjectsComponent = () => {
  const [activeTab, setActiveTab] = useState("current");
  const slides = [
    {
      id: "1",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705557/Project/fdxfh2jfm1amuyrjgzxa.jpg",
      caption: "",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705556/Project/h98kop4jgt3mmx8zxgw4.jpg",
      caption: "",
    },
    {
      id: "3",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705556/Project/au8itrweudddirfodtr1.jpg",
      caption: "",
    },
    {
      id: "4",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705556/Project/finbeiu0ugorp2drq0sj.jpg",
      caption: "",
    },
    {
      id: "5",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705556/Project/q6pvg7gkfqyt0gcqtphv.jpg",
      caption: "",
    },
    {
      id: "6",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705555/Project/ohqhwrbpvwut37zv2ycu.jpg",
      caption: "",
    },
    {
      id: "7",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705555/Project/gwh6avz5gsodvya9qdh4.jpg",
      caption: "",
    },
    {
      id: "8",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705555/Project/egifwcbn4p4mnkowhpsn.jpg",
      caption: "",
    },
    {
      id: "9",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705555/Project/idnnk0ntxh1bhnjhmpzs.jpg",
      caption: "",
    },
    {
      id: "10",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705547/Project/l2epqhqyopofocrrws2r.jpg",
      caption: "",
    },
    {
      id: "11",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705524/Project/wfwbrmvkwnke648164vu.jpg",
      caption: "",
    },
    {
      id: "12",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705523/Project/a9apjbgclehkw4lrpylk.jpg",
      caption: "",
    },
    {
      id: "13",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705523/Project/mustp2c7dvdubv42nznr.jpg",
      caption: "",
    },
    {
      id: "14",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705523/Project/wjdv5cdnerfdc4c1wxo9.jpg",
      caption: "",
    },
    {
      id: "15",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705522/Project/scgcrugpjrxmky6rjpak.jpg",
      caption: "",
    },
    {
      id: "16",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705522/Project/rbmba1brkotdqs4lnkhb.jpg",
      caption: "",
    },
    {
      id: "17",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705522/Project/txtkzzcgie7acrvypqvh.jpg",
      caption: "",
    },
    {
      id: "18",
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705522/Project/twrzxitkbpqjlubdzdo8.jpg",
      caption: "",
    },
    {
      id: "19",
      url: PP1,
      caption: "Project Photo 1",
    },
    {
      id: "20",
      url: PP2,
      caption: "Project Photo 2",
    },
    {
      id: "21",
      url: PP3,
      caption: "Project Photo 3",
    },
    {
      id: "22",
      url: PP4,
      caption: "Project Photo 4",
    },
    {
      id: "23",
      url: PP5,
      caption: "Project Photo 5",
    },
  ];

  const currentProjects = [
    {
      type: "Principal Investigator",
      projects: [
        {
          title:
            "Necessity of Community-Driven Hard Infrastructures for Rural Well-Being",
          period: "2023 - 2025",
          role: "Principal Investigator",
        },

      ],
    },
    {
      type: "Co-Principal Investigator",
      projects: [
        {
          title: "Preparation of Sivagangai Regional Plan 2047",
          period: "2024 – 2025",
          role: "Co-Principal Investigator",
        },
        {
          title:
            "Review and Update of the Master Plan for the IIT Kharagpur Campus",
          period: "2024 - 2025",
          role: "Co-Principal Investigator",
        },
      ],
    },
  ];

  const completedProjects = [
    {
      type: "Principal Investigator",
      projects: [
        {
          title: "Transferability and Scaling-up of Agri-Technologies",
          period: "2025",
          role: "Principal Investigator",
        },
        {
          title: "Pre-university Education Curriculum Transformation in British Columbia, Canada for a Changing World",
          period: "2025",
          role: "Principal Investigator",
        },
        {
          title:
            "Restroom Facility Development for Female Students to Address Hygienic Practices in Rural School Premises",
          period: "2023 - 2024",
          role: "Principal Investigator",
        },
        {
          title:
            "Participatory Action Research – A Model-Based Impact Analysis",
          period: "2023",
          role: "Principal Investigator",
        },
        {
          title: "Using of Pond Silt and Algae as Natural Fertilizer",
          period: "2022 - 2023",
          role: "Principal Investigator",
        },
        {
          title: "Introducing of 'WASH' Model for Better School Education",
          period: "2022 - 2023",
          role: "Principal Investigator",
        },
        {
          title: "Ensuring Quality of Life by Sustainable Practices",
          period: "2021 - 2023",
          role: "Principal Investigator",
        },
        {
          title:
            "Installing a Water Filtration and Purification Plant in Ramgopalchak Bharati Vidyamandir School (H.S.), Haldia, Purba Medinipur",
          period: "2020 – 2021",
          role: "Principal Investigator",
        },
        {
          title:
            "Partnering with Commons for Sustainable Technology Transfer and Business Model Development",
          period: "2019 - 2021",
          role: "Principal Investigator",
        },
        {
          title:
            "Addressing SDG – 6 in Rural India Through Customized Engineering Solutions and Participatory Management Approach.",
          period: "2017 – 2020",
          role: "Principal Investigator",
        },
        {
          title:
            "Exploring Biodiversity Knowledge through NTFP Cultivation in City Parks",
          period: "2016 – 2020",
          role: "Principal Investigator",
        },
        {
          title:
            "Re-examining 'Distance Decay Model' through the Study of Community Forest Dependency",
          period: "2015 – 2016",
          role: "Principal Investigator",
        },
        {
          title: "NTFPs in West Bengal: Knowledge, Livelihoods and Policy",
          period: "2007 – 2010",
          role: "Principal Investigator",
        },
      ],
    },
    {
      type: "Co-Principal Investigator",
      projects: [
        {
          title:
            "Defining a Refugee Protection Law for India: Demystifying Socio-Legal Debates from 1950 to 2019 towards the New Beginning",
          period: "2023 – 2025",
          role: "Co-Principal Investigator",
        },
        {
          title: "Rural Drinking Water Treatment and Health",
          period: "2020 – 2024",
          role: "Co-Principal Investigator",
        },
        {
          title: "Rural Water Quality and Management",
          period: "2019",
          role: "Co-Principal Investigator",
        },
        {
          title: "Photocatalytic Water Purification",
          period: "2019 - 2023",
          role: "Co-Principal Investigator",
        },
        {
          title: "Arsenic from Root to Gut",
          period: "2018 - 2020",
          role: "Co-Principal Investigator",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="container mx-auto  px-4 py-8">
        <div className="bg-blue-50 mt-20  rounded-lg shadow-md overflow-hidden">
          <div className=" px-6 py-4">
            <h2 className="text-2xl font-bold text-center text-blue-800">
              Research Projects
            </h2>
          </div>

          <div className="flex border-b ">
            <button
              onClick={() => setActiveTab("current")}
              className={`w-1/2 py-3 text-center rounded-md font-semibold transition-colors duration-300 
              ${activeTab === "current"
                  ? "bg-blue-600 text-white"
                  : "text-blue-700 hover:bg-blue-200"
                }`}
            >
              Current Projects
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`w-1/2 py-3 text-center rounded-md font-semibold transition-colors duration-300 
              ${activeTab === "completed"
                  ? "bg-blue-600 text-white"
                  : "text-blue-700 hover:bg-blue-200"
                }`}
            >
              Completed Projects
            </button>
          </div>

          <div className="p-4 h-full overflow-y-auto">
            {activeTab === "current"
              ? currentProjects.map((projectGroup, groupIndex) => (
                <div key={groupIndex} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">
                    {projectGroup.type}
                  </h3>
                  <div className="h-64 overflow-y-auto pr-2">
                    {projectGroup.projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3 
                hover:bg-blue-100 hover:shadow-md transition-all duration-300"
                      >
                        <h4 className="text-md font-medium mb-2 text-blue-900">
                          {project.title}
                        </h4>
                        <div className="flex items-center space-x-3">
                          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {project.role}
                          </span>
                          <span className="text-sm text-blue-600">
                            {project.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
              : completedProjects.map((projectGroup, groupIndex) => (
                <div key={groupIndex} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">
                    {projectGroup.type}
                  </h3>
                  <div className="h-64 overflow-y-auto pr-2">
                    {projectGroup.projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3 
                hover:bg-blue-100 hover:shadow-md transition-all duration-300"
                      >
                        <h4 className="text-md font-medium mb-2 text-blue-900">
                          {project.title}
                        </h4>
                        <div className="flex items-center space-x-3">
                          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {project.role}
                          </span>
                          <span className="text-sm text-blue-600">
                            {project.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <FooterImageSlider
        slides={slides}
        slidesToShow={4} // Number of logos to show at once
        autoPlayInterval={3000} // Change logo every 3 seconds
      />
    </div>
  );
};

export default ProjectsComponent;
