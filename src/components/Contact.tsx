import { Linkedin, Mail } from "lucide-react";
import { Twitter, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Logo and Description Section */}

          <div className="md:pr-12 flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/dq1llsy7f/image/upload/v1743854402/oymhfzlxj8k6glofetpn.jpg"
              alt="GEAR - Geo-Action Research"
              className="h-28 max-h-full mb-4 mx-auto"
            />
            <h2 className="lg:text-4xl text-3xl font-light italic mb-8 text-white text-center">
              GeoAction Research Lab
            </h2>
            <p className="text-blue-200 leading-relaxed text-lg text-center">
              "Exploring innovative ideas and disseminating through technology
              transfer, adoption, and diffusion to create a sustainable future."
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="rounded-lg p-8 shadow-xl">
            <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-lg text-center text-blue-100">
              GeoAction Research Lab
            </p>

            <div className="text-center ">
              <p className="text-blue-200 leading-relaxed">
                Rural Development Center
                <br />
                Indian Institute of Technology Kharagpur
                <br />
                Kharagpur - 721302, West Bengal, INDIA
              </p>
            </div>

            <div className=" ">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-3 text-blue-300" />
                <a
                  href="mailto:support@sparc.iitkgp.ac.in"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  drsomnathghosal@gmail.com
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-6 my-2">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/somnath-ghosal-556980228/",
                },
                { Icon: Twitter, href: "https://x.com/SomnathGhosal13" },
                {
                  Icon: Youtube,
                  href: "https://www.youtube.com/channel/UCWGsmVznFv1_nRaRT24SV7Q",
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-blue-300">
                © {new Date().getFullYear()} Dr Somnath Ghosal. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
