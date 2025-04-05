const About = () => {
  return (
    <div className="pt-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              Our vision is rooted in a profound commitment to transformative
              social change, focusing on empowering marginalized communities
              through a holistic approach to development. We are dedicated to
              systematically addressing the{" "}
              <span className="font-semibold">
                United Nations Sustainable Development Goals
              </span>{" "}
              by creating comprehensive strategies that transcend traditional
              humanitarian efforts.
            </p>

            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              At the core of our vision lies a deep understanding that
              sustainable progress requires a multifaceted approach. We aim to{" "}
              <span className="font-semibold">
                strategically intervene in critical areas
              </span>{" "}
              such as education, healthcare, economic opportunities, and
              infrastructure development. By targeting these fundamental
              pillars, we seek to dismantle the structural barriers that
              perpetuate inequality between urban and rural landscapes.
            </p>

            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              Our comprehensive strategy focuses on innovative, context-specific
              interventions that are designed to be scalable and adaptable. We
              believe in leveraging cutting-edge technologies and sustainable
              solutions to provide communities with{" "}
              <span className="font-semibold">
                practical, affordable, and transformative resources
              </span>
              . From implementing digital learning platforms in remote schools
              to developing affordable healthcare technologies and creating
              sustainable economic models, our approach is intentionally dynamic
              and responsive to local needs.
            </p>

            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              Ultimately, we envision a future where geographical boundaries and
              economic constraints no longer dictate an individual's potential.
              By providing equitable access to knowledge, resources, and
              opportunities, we are not just addressing immediate challenges but
              cultivating a generation empowered to drive their own sustainable
              development and create lasting, positive change in their
              communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
