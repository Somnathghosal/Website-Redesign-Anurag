import { useState } from "react";
import { Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Approach = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group max-w-4xl mx-auto"
        >
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-blue-50/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left sidebar with icon */}
              <div className="w-full md:w-32 bg-blue-700 flex items-center justify-center p-6 md:p-0">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Compass className="text-white h-10 w-10" />
                </div>
              </div>

              {/* Content area */}
              <div className="flex-1 p-8 md:p-12">
                <div className="inline-flex items-center space-x-2 text-blue-700 font-bold mb-4 uppercase tracking-wider text-sm">
                  <div className="w-8 h-[2px] bg-blue-700" />
                  <span>Our Approach</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                  Research-Driven <span className="text-blue-700 underline decoration-blue-100 underline-offset-8">Interventions</span> for Social Impact
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 line-clamp-3">
                  At the heart of our approach lies a profound commitment to empowering socio-economically marginalized communities through innovative, research-driven interventions. We recognize that sustainable development is about deeply understanding the unique contextual challenges.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-3 text-blue-700 font-bold text-lg group/btn"
                >
                  <span className="border-b-2 border-blue-700 pb-1 group-hover/btn:border-blue-500 transition-colors">Discover Our Methodology</span>
                  <ArrowRight className="h-5 w-5 bg-blue-700 text-white rounded-full p-1 group-hover/btn:scale-110 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Approach Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Approach"
      >
        <div className="space-y-6">
          <p>
            At the heart of our approach lies a profound commitment to empowering socio-economically marginalized communities through <span className="font-semibold text-blue-700">innovative, research-driven interventions</span>. We recognize that sustainable development is not about implementing one-size-fits-all solutions, but about deeply understanding the unique contextual challenges and potential of each community we engage with.
          </p>
          <p>
            Our <span className="font-semibold text-blue-700">Action Research methodology</span> is a dynamic and participatory approach that goes beyond traditional research paradigms. We don't just observe or analyze communities; we actively collaborate with local stakeholders, ensuring that every intervention is co-created, culturally sensitive, and aligned with the community's aspirations and existing strengths.
          </p>
          <p>
            Our ultimate goal is not just to implement projects, but to catalyze transformative change that empowers communities to become architects of their own development. By combining rigorous academic research with grassroots-level understanding, we strive to create meaningful, lasting impact that transcends traditional boundaries of academic and social intervention.
          </p>
          <p className="font-semibold text-blue-800 italic">
            "We don't just see challenges; we see opportunities for collaborative, sustainable transformation."
          </p>
          <p>
            By focusing on sustainable practices and inclusive growth, we aim to create meaningful and lifelong changes for the communities we serve.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Approach;
