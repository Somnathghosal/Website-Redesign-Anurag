import { useState } from "react";
import { Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Mission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group max-w-4xl mx-auto"
        >
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-blue-100/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col md:flex-row-reverse h-full">
              {/* Right sidebar with icon (mirrored from Vision) */}
              <div className="w-full md:w-32 bg-blue-800 flex items-center justify-center p-6 md:p-0">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Target className="text-white h-10 w-10" />
                </div>
              </div>

              {/* Content area */}
              <div className="flex-1 p-8 md:p-12">
                <div className="inline-flex items-center space-x-2 text-blue-800 font-bold mb-4 uppercase tracking-wider text-sm">
                  <span>Our Mission</span>
                  <div className="w-8 h-[2px] bg-blue-800" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                  Developing <span className="text-blue-800 underline decoration-blue-100 underline-offset-8">Sustainable</span> Solutions for Rural Communities
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 line-clamp-3">
                  To develop and implement cost-effective, innovative technical and engineering solutions that directly address the daily challenges faced by communities in rural areas. Through our dedicated approach, we aim to transform the quality of life in underserved regions.
                </p>

                <motion.button
                  whileHover={{ x: -5 }}
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-3 text-blue-800 font-bold text-lg group/btn"
                >
                  <ArrowRight className="h-5 w-5 bg-blue-800 text-white rounded-full p-1 group-hover/btn:scale-110 transition-transform rotate-180" />
                  <span className="border-b-2 border-blue-800 pb-1 group-hover/btn:border-blue-600 transition-colors">Explore Our Mission</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mission Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Mission"
      >
        <div className="space-y-6">
          <p>
            To develop and implement <span className="font-semibold text-blue-800">cost-effective, innovative technical and engineering solutions</span> that directly address the daily challenges faced by communities in rural areas. Through our dedicated approach, we aim to transform the quality of life in underserved regions by <span className="font-semibold text-blue-800">designing sustainable infrastructure</span> that respects the natural environment while meeting essential needs.
          </p>
          <p>
            We are committed to uplifting communities through <span className="font-semibold text-blue-800">enhancing nature-friendly livelihoods</span> that preserve ecological balance while creating economic opportunities. By improving both soft infrastructure—such as education and healthcare systems—and hard infrastructure like roads, water systems, and energy solutions, we create the foundation for lasting prosperity.
          </p>
          <p>
            Our work centers on <span className="font-semibold text-blue-800">promoting sustainable practices</span> that can be maintained by local communities with minimal external support. We believe in fostering inclusive growth that leaves no one behind, building capacity within communities, and ultimately creating pathways to <span className="font-semibold text-blue-800">self-reliance and empowerment</span> for generations to come.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Mission;
