import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

type CopyrightItem = {
  title: string;
  type: "Patent" | "Copyright";
  year: string;
  status?: "Filed" | "Submitted" | "Certified";
};

const CopyrightPage = () => {
  const copyrightItems: CopyrightItem[] = [
    {
      title:
        "Sustainable Eco-Silt: Innovative Green Organic Fertiliser from Curated Pond Silt and its Production Process",
      type: "Copyright",
      year: "2024",
      status: "Submitted",
    },
    {
      title:
        "A Model to Provide Healthy and Hygienic Restroom Facility for Schools at Reasonable Cost: Issues and Evidences",
      type: "Copyright",
      year: "2024",
      status: "Submitted",
    },
    {
      title:
        "Organic Fertilizer Produced from the Silt of Specialized Curated Ponds and the Process Thereof",
      type: "Patent",
      year: "2024",
      status: "Filed",
    },
    {
      title: "Low-Cost Drinking Water Filtration System",
      type: "Patent",
      year: "2021",
      status: "Filed",
    },
    {
      title: "Designing Purified Drinking Water Distribution at Nominal Cost",
      type: "Copyright",
      year: "2018",
      status: "Certified",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
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
            Patents & Copyrights
          </h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <AnimatedSection className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Intellectual Property
          </h2>
          <div className="space-y-6">
            {copyrightItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 mb-2">
                      <span className="font-semibold">{item.title}</span>
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Type: {item.type}</p>
                      <p>Year: {item.year}</p>
                      {item.status && <p>Status: {item.status}</p>}
                    </div>
                  </div>
                  <div className="ml-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                      ${
                        item.type === "Patent"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CopyrightPage;
