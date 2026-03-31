import { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group max-w-4xl mx-auto"
        >
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-blue-50/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left sidebar with icon */}
              <div className="w-full md:w-32 bg-blue-900 flex items-center justify-center p-6 md:p-0">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Eye className="text-white h-10 w-10" />
                </div>
              </div>

              {/* Content area */}
              <div className="flex-1 p-8 md:p-12">
                <div className="inline-flex items-center space-x-2 text-blue-900 font-bold mb-4 uppercase tracking-wider text-sm">
                  <div className="w-8 h-[2px] bg-blue-900" />
                  <span>Our Vision</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                  Empowering Communities for <span className="text-blue-900 underline decoration-blue-200 underline-offset-8">Transformative</span> Social Change
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 line-clamp-3">
                  It is rooted in a profound commitment to transformative social change, focusing on empowering marginalized communities through a holistic approach to development. We are dedicated to systematically addressing the United Nations Sustainable Development Goals by creating comprehensive strategies that transcend traditional humanitarian efforts.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-3 text-blue-900 font-bold text-lg group/btn"
                >
                  <span className="border-b-2 border-blue-900 pb-1 group-hover/btn:border-blue-700 transition-colors">Read Full Vision</span>
                  <ArrowRight className="h-5 w-5 bg-blue-900 text-white rounded-full p-1 group-hover/btn:scale-110 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vision Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Vision"
      >
        <div className="space-y-6">
          <p>
            It is rooted in a profound commitment to transformative social change, focusing on empowering marginalized communities through a holistic approach to development. We are dedicated to systematically addressing the <span className="font-semibold text-blue-900">United Nations Sustainable Development Goals</span> by creating comprehensive strategies that transcend traditional humanitarian efforts.
          </p>
          <p>
            At the core of our vision lies a deep understanding that sustainable progress requires a multifaceted approach. We aim to <span className="font-semibold text-blue-900">strategically intervene in critical areas</span> such as education, healthcare, economic opportunities, and infrastructure development. By targeting these fundamental pillars, we seek to dismantle the structural barriers that perpetuate inequality between urban and rural landscapes.
          </p>
          <p>
            Our comprehensive strategy focuses on innovative, context-specific interventions that are designed to be scalable and adaptable. We believe in leveraging cutting-edge technologies and sustainable solutions to provide communities with <span className="font-semibold text-blue-900">practical, affordable, and transformative resources</span>. From implementing digital learning platforms in remote schools to developing affordable healthcare technologies and creating sustainable economic models, our approach is intentionally dynamic and responsive to local needs.
          </p>
          <p>
            Ultimately, we envision a future where geographical boundaries and economic constraints no longer dictate an individual's potential. By providing equitable access to knowledge, resources, and opportunities, we are not just addressing immediate challenges but cultivating a generation empowered to drive their own sustainable development and create lasting, positive change in their communities.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default About;
