import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    contactNumber: "",
    reasonForContact: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here

    setFormData({
      name: "",
      organization: "",
      contactNumber: "",
      reasonForContact: "",
      message: "",
    });
    if (!form.current) return;
    emailjs
      .sendForm("service_goaosus", "template_fc8qh3p", form.current, {
        publicKey: "w4jmtdTNzsyRGst1s",
      })
      .then(
        () => {
          toast.success("SUCCESS!");
        },
        (error) => {
          toast.error("FAILED..." + error.text);
        }
      );
  };

  const reasonOptions = [
    "General Inquiry",
    "Career Opportunities",
    "Industrial Enquiries",
    "Collaboration Enquiries",
    "Invitation for Talks and Lectures",
    "Press and Media",
    "Feedback",
    "Other",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="w-full mx-auto">
        {/* Hero Section */}
        <div className="relative h-[30vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dq1llsy7f/image/upload/v1741208808/lynf5kq3wvysp9y1fbup.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gray-400/70"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              CONTACT US
            </h1>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          </motion.div>
        </div>

        {/* Contact Form Section */}

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} ref={form}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="organization"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Parent Organization:
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="Your organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="contactNumber"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Your contact number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="reasonForContact"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Reason for Contact:
                  </label>
                  <select
                    id="reasonForContact"
                    name="reasonForContact"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.reasonForContact}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a reason</option>
                    {reasonOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Any message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="max-w-2xl mx-auto mt-16 text-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://res.cloudinary.com/dq1llsy7f/image/upload/v1743854402/oymhfzlxj8k6glofetpn.jpg"
                alt="GEAR - Geo-Action Research"
                className="h-20 mx-auto max-h-full mb-4"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Office Hours
              </h3>
              <p className="mb-2">
                <strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM
              </p>
              <p className="mb-2">
                <strong>Saturday-Sunday:</strong> Closed
              </p>
              <p className="mt-4 text-gray-600">
                Please allow 2-3 business days for a response to your inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
