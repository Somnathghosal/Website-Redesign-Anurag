import { ArrowLeft, Calendar, Tag, User, Clock, Share2 } from "lucide-react";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

// ScrollToTop component to handle scroll position
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Define TypeScript interfaces for our data structures
interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  tags: string[];
  image: string;
}

// Sample blog posts data that would typically come from an API or context
const blogPostsData: BlogPost[] = [
  {
    id: "1",
    category: "Rural Development",
    date: "March 15, 2025",
    title: "Innovations in Rural Infrastructure Development",
    excerpt:
      "Exploring sustainable approaches to developing infrastructure in rural areas that balance economic needs with environmental conservation and social equity.",
    content: `
      <p>Rural infrastructure development stands at a critical juncture globally. As we navigate the complexities of the 21st century, the need for innovative approaches that harmonize economic progress, environmental sustainability, and social equity has never been more pressing.</p>
      
      <h2>The Challenge of Rural Infrastructure</h2>
      
      <p>Rural communities worldwide face unique challenges in infrastructure development. Limited resources, geographical isolation, and lower population densities often result in inadequate infrastructure investments. Traditional approaches have frequently prioritized urban centers, leaving rural areas underserved.</p>
      
      <p>However, recent years have witnessed a paradigm shift in how we conceptualize rural infrastructure. The recognition that thriving rural communities are essential for balanced national development has prompted fresh thinking about infrastructure solutions tailored to rural contexts.</p>
      
      <h2>Sustainable Approaches</h2>
      
      <p>Sustainability forms the cornerstone of modern rural infrastructure development. Beyond merely constructing roads, bridges, and utilities, the focus has shifted to creating systems that can be maintained with local resources, minimize environmental impact, and adapt to changing conditions.</p>
      
      <p>Community-centered design has emerged as a powerful methodology. By engaging local communities in the planning, implementation, and maintenance of infrastructure projects, we can ensure that solutions address genuine needs while fostering ownership and sustainability.</p>
      
      <h2>Technological Integration</h2>
      
      <p>The integration of appropriate technology has revolutionized rural infrastructure development. Renewable energy systems, such as solar micro-grids and small-scale hydroelectric installations, are providing reliable power to remote communities without the environmental footprint of fossil fuels.</p>
      
      <p>Digital connectivity, once considered a luxury, is now recognized as essential infrastructure. Innovative approaches to telecommunications infrastructure, including community networks and satellite-based solutions, are bridging the digital divide and opening educational, economic, and healthcare opportunities previously unavailable to rural residents.</p>
      
      <h2>Case Study: Participatory Watershed Management</h2>
      
      <p>In our recent fieldwork in eastern India, we observed the transformative impact of participatory watershed management. By combining traditional knowledge with modern engineering principles, communities have developed integrated systems that address water scarcity, soil erosion, and agricultural productivity simultaneously.</p>
      
      <p>Local watershed committees, comprising diverse stakeholders, oversee the planning and implementation of infrastructure such as check dams, contour trenches, and percolation tanks. These relatively simple structures, when strategically placed across the landscape, yield remarkable results in water conservation and agricultural productivity.</p>
      
      <h2>Economic Considerations</h2>
      
      <p>Innovative financing mechanisms are essential for sustainable rural infrastructure. Public-private partnerships, microfinance initiatives, and community contribution models all offer promising avenues for mobilizing the resources needed for infrastructure development.</p>
      
      <p>Importantly, economic analyses of rural infrastructure projects are increasingly adopting broader frameworks that account for social benefits, ecosystem services, and long-term sustainability—not merely short-term financial returns.</p>
      
      <h2>Looking Forward</h2>
      
      <p>As we look to the future of rural infrastructure development, several principles emerge as guiding stars:</p>
      
      <ul>
        <li>Integration of traditional knowledge with modern approaches</li>
        <li>Community ownership and participation throughout the project lifecycle</li>
        <li>Appropriate technology that can be locally maintained</li>
        <li>Multifunctional design that addresses multiple needs simultaneously</li>
        <li>Adaptive capacity to respond to changing environmental and social conditions</li>
      </ul>
      
      <p>By embracing these principles, we can develop rural infrastructure that not only meets immediate needs but also lays the foundation for thriving, resilient communities for generations to come.</p>
    `,
    author: "Dr. Somnath Ghosal",
    readTime: "8 min",
    tags: [
      "infrastructure",
      "sustainability",
      "community development",
      "watershed management",
    ],
    image: "/api/placeholder/1200/600",
  },
  {
    id: "2",
    category: "Geography & GIS",
    date: "February 28, 2025",
    title: "GIS Applications in Rural Resource Management",
    excerpt:
      "How Geographical Information Systems are transforming resource allocation, planning, and management in rural areas through data-driven spatial analysis.",
    content: `
      <p>Geographical Information Systems (GIS) have revolutionized our approach to rural resource management over the past decade. By integrating spatial data with analytical capabilities, GIS tools provide unprecedented insights for decision-makers in rural development contexts.</p>
      
      <h2>The Power of Spatial Analysis</h2>
      
      <p>Rural areas often face complex resource allocation challenges due to geographical dispersion, varied topography, and diverse land use patterns. GIS technologies offer powerful solutions by enabling spatial visualization, pattern identification, and predictive modeling.</p>
      
      <p>The ability to overlay multiple data layers—from soil types and water resources to population distribution and infrastructure networks—allows for comprehensive analysis that was previously impossible. This multi-dimensional view supports more informed decision-making for resource management.</p>
      
      <h2>Practical Applications in Rural Settings</h2>
      
      <p>Across rural regions, GIS applications are making tangible differences in several key areas:</p>
      
      <h3>Agricultural Planning</h3>
      
      <p>Precision agriculture benefits tremendously from GIS integration. By analyzing soil quality, slope, moisture patterns, and microclimate data, farmers can optimize crop selection, planting schedules, and resource inputs. This leads to increased productivity while minimizing environmental impact.</p>
      
      <h3>Water Resource Management</h3>
      
      <p>GIS-based watershed analysis helps communities model water flow, identify groundwater recharge zones, and plan water harvesting structures strategically. These tools have been instrumental in designing drought mitigation strategies and sustainable irrigation systems.</p>
      
      <h3>Infrastructure Development</h3>
      
      <p>Route optimization for rural roads, location analysis for community facilities, and network planning for utilities all benefit from spatial analysis. GIS helps identify optimal locations that maximize accessibility while minimizing costs and environmental disruption.</p>
      
      <h2>Participatory GIS Approaches</h2>
      
      <p>The integration of local knowledge with technical spatial analysis through Participatory GIS (PGIS) represents one of the most promising developments in this field. By engaging community members in mapping exercises, data collection, and interpretation, PGIS creates more relevant and contextually appropriate resource management solutions.</p>
      
      <p>In our recent project in central India, mobile GIS applications enabled local farmers to document traditional water sources, identify land degradation hotspots, and plan soil conservation measures. The resulting spatial database combines generations of local ecological knowledge with scientific data layers.</p>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>Despite its potential, GIS implementation in rural contexts faces several challenges. Limited technical capacity, data gaps, and infrastructure constraints can hinder effective adoption. However, recent developments in cloud-based GIS services, open data initiatives, and mobile applications are addressing many of these barriers.</p>
      
      <p>Simplified interfaces, offline functionality, and integration with smartphone technology are making GIS tools increasingly accessible to rural practitioners. Open-source GIS platforms, coupled with capacity-building initiatives, are democratizing access to spatial analysis capabilities.</p>
      
      <h2>Future Directions</h2>
      
      <p>Looking ahead, several emerging trends promise to further enhance GIS applications in rural resource management:</p>
      
      <ul>
        <li>Integration of satellite remote sensing for real-time monitoring of resources</li>
        <li>Machine learning algorithms for predictive modeling of environmental changes</li>
        <li>Blockchain technology for transparent resource allocation tracking</li>
        <li>Virtual and augmented reality interfaces for community planning processes</li>
        <li>Integration with IoT sensors for environmental monitoring networks</li>
      </ul>
      
      <p>As these technologies mature and become more accessible, the potential for data-driven, spatially informed resource management in rural areas will continue to expand, offering new pathways for sustainable development.</p>
    `,
    author: "Dr. Somnath Ghosal",
    readTime: "7 min",
    tags: [
      "GIS",
      "spatial analysis",
      "resource management",
      "rural planning",
      "participatory mapping",
    ],
    image: "/api/placeholder/1200/600",
  },
  {
    id: "3",
    category: "Water Management",
    date: "January 12, 2025",
    title: "Community-Based Water Conservation Strategies",
    excerpt:
      "Examining successful cases of participatory water management systems that engage local communities in conservation efforts and sustainable usage practices.",
    content: `
      <p>Water scarcity presents one of the most pressing challenges facing rural communities worldwide. As climate change intensifies and demographic pressures mount, traditional approaches to water management often prove insufficient. However, community-based water conservation strategies offer promising alternatives that combine traditional wisdom with contemporary science.</p>
      
      <h2>The Community Approach Difference</h2>
      
      <p>Conventional water management typically follows top-down implementation models that often fail to account for local realities and traditional practices. In contrast, community-based approaches position local residents as active participants in planning, implementing, and maintaining water systems.</p>
      
      <p>This shift from passive recipients to active stakeholders transforms the dynamics of resource management. When communities have ownership of water conservation efforts, sustainability improves dramatically through enhanced maintenance, appropriate technology selection, and cultural integration.</p>
      
      <h2>Successful Models</h2>
      
      <h3>Traditional Water Harvesting Revival</h3>
      
      <p>In semi-arid regions of western India, the revival of traditional water harvesting structures has demonstrated remarkable success. Community-led restoration of step-wells, tanks, and check dams—many dating back centuries—has rekindled indigenous knowledge while addressing contemporary water scarcity.</p>
      
      <p>These efforts combine traditional designs with modern materials and construction techniques. Critically, local water user associations establish and enforce usage protocols that balance competing needs and ensure equitable access.</p>
      
      <h3>Participatory Watershed Development</h3>
      
      <p>Integrated watershed management approaches have transformed degraded landscapes in Ethiopia, India, and regions of Latin America. By working at the watershed scale and engaging multiple villages in coordinated efforts, these initiatives address the interconnected nature of hydrological systems.</p>
      
      <p>Participatory mapping, resource assessments, and collaborative planning form the foundation of these programs. Communities develop prioritized action plans that typically begin with ridge-line treatments and progress downslope, maximizing water infiltration and reducing erosive runoff.</p>
      
      <h3>Community-Managed Water Supply Systems</h3>
      
      <p>Local management of rural water supply systems has proven effective across diverse contexts. From gravity-fed systems in mountainous regions to handpump networks in plains areas, community water committees successfully operate and maintain infrastructure that government agencies often struggle to support.</p>
      
      <p>Transparent fee structures, locally trained technicians, and democratic governance are common elements in successful systems. The most effective models include mechanisms for technical support and periodic recapitalization to address major repairs beyond community means.</p>
      
      <h2>Key Success Factors</h2>
      
      <p>Analysis of successful community water initiatives reveals several critical factors:</p>
      
      <ul>
        <li>Inclusive representation in decision-making bodies, particularly of women and marginalized groups</li>
        <li>Clear usage rights and management responsibilities codified in community agreements</li>
        <li>Appropriate technical design that balances effectiveness with local maintenance capacity</li>
        <li>Transparent financial systems with community oversight</li>
        <li>Linkages to external technical and financial support when needed</li>
        <li>Integration with broader livelihood considerations, particularly agricultural practices</li>
      </ul>
      
      <h2>Challenges and Adaptations</h2>
      
      <p>Despite their promise, community-based approaches face significant challenges. Power dynamics within communities can reproduce existing inequalities if not explicitly addressed. Technical limitations may constrain effectiveness, particularly for complex hydrogeological contexts.</p>
      
      <p>Successful programs develop adaptive strategies to address these concerns. Quota systems for management committee composition, tiered pricing structures, and ongoing capacity building help ensure equity. Technical partnerships with academic institutions or NGOs bridge knowledge gaps while building local expertise incrementally.</p>
      
      <h2>Scaling Considerations</h2>
      
      <p>The contextual nature of community-based approaches presents challenges for scaling. Rather than standardized replication, effective scaling strategies focus on disseminating principles and processes while encouraging local adaptation.</p>
      
      <p>Peer learning networks, where communities exchange experiences directly, have proven particularly effective. These horizontal exchanges foster innovation and adaptation while building confidence among participating communities.</p>
      
      <p>As water stresses intensify globally, community-centered conservation strategies offer vital pathways to resilience. By honoring local knowledge while integrating scientific insights, these approaches create water management systems that are both technically sound and socially sustainable.</p>
    `,
    author: "Dr. Somnath Ghosal",
    readTime: "6 min",
    tags: [
      "water conservation",
      "community management",
      "participatory approach",
      "traditional knowledge",
      "watershed development",
    ],
    image: "/api/placeholder/1200/600",
  },
  {
    id: "4",
    category: "Sustainable Agriculture",
    date: "December 5, 2024",
    title: "Integrating Traditional Knowledge in Modern Agricultural Practices",
    excerpt:
      "How combining indigenous farming wisdom with contemporary scientific approaches can lead to more resilient and sustainable agricultural systems.",
    content: `
      <p>The integration of traditional agricultural knowledge with modern scientific approaches represents one of the most promising pathways toward sustainable food systems. For generations, farming communities worldwide have developed sophisticated practices adapted to local conditions—knowledge that offers valuable insights for addressing contemporary agricultural challenges.</p>
      
      <h2>Beyond the False Dichotomy</h2>
      
      <p>Discussions about agricultural development often position "traditional" and "modern" approaches as opposing paradigms. This false dichotomy overlooks the dynamic nature of traditional knowledge systems and the potential for productive synthesis with scientific research.</p>
      
      <p>Traditional agricultural knowledge encompasses more than specific techniques; it represents holistic systems thinking that considers ecological relationships, seasonal patterns, and long-term sustainability. When combined with the analytical precision and technological capabilities of modern science, these integrated approaches offer powerful solutions to complex agricultural challenges.</p>
      
      <h2>Knowledge Domains and Integration Pathways</h2>
      
      <h3>Crop Diversity and Variety Selection</h3>
      
      <p>Traditional farmers have cultivated extraordinary crop diversity, selecting varieties for specific microclimates, soil conditions, and use characteristics. Modern breeding programs increasingly recognize the value of these landrace varieties as genetic resources for developing climate-resilient cultivars.</p>
      
      <p>Participatory plant breeding represents a successful integration approach. Scientific breeders work alongside farmers to develop varieties that combine traditional adaptation traits with improved yield potential. This collaborative process respects farmers as innovators while accessing scientific tools for accelerated improvement.</p>
      
      <h3>Soil Management Practices</h3>
      
      <p>Indigenous soil knowledge often encompasses sophisticated classification systems and management practices tailored to local conditions. Traditional approaches to soil fertility—including complex rotations, cover cropping, and organic amendments—align well with contemporary agroecological principles.</p>
      
      <p>Modern soil science provides analytical frameworks that can explain and enhance traditional practices. For example, scientific measurement of microbial activity helps explain why traditional composting techniques are effective and suggests ways to optimize these processes for different contexts.</p>
      
      <h3>Pest and Disease Management</h3>
      
      <p>Traditional pest management typically involves multiple strategies, including companion planting, timing adjustments, and botanical preparations. While sometimes dismissed as folklore, many of these approaches demonstrate efficacy when subjected to scientific evaluation.</p>
      
      <p>Integrated Pest Management (IPM) offers a framework for combining traditional ecological knowledge with modern biological control methods. The most successful examples maintain the systems perspective of traditional approaches while incorporating targeted interventions based on scientific understanding of pest life cycles and ecology.</p>
      
      <h2>Case Studies in Successful Integration</h2>
      
      <p>Our research in the Eastern Ghats region documented a remarkable integration of traditional and modern approaches among tribal farming communities. Traditional mixed cropping systems incorporating drought-resistant millets have been enhanced with improved water harvesting techniques and selective introduction of suitable commercial crops.</p>
      
      <p>Notably, farmers maintain traditional seed selection and exchange networks while selectively adopting specific modern varieties for designated purposes. Their approach demonstrates how communities can integrate new elements without abandoning the core principles of their agricultural heritage.</p>
      
      <p>Similarly, in terraced rice systems across Southeast Asia, farmers combine traditional landscape management practices with selective adoption of improved varieties and precise water management techniques informed by scientific research. These integrated systems often outperform both purely traditional and exclusively modern approaches in terms of resilience to climatic variability.</p>
      
      <h2>Institutional Frameworks for Knowledge Integration</h2>
      
      <p>Successful knowledge integration requires supportive institutional frameworks:</p>
      
      <ul>
        <li>Research methodologies that value farmers as co-investigators rather than merely study subjects</li>
        <li>Extension systems that facilitate bi-directional knowledge exchange</li>
        <li>Educational curricula that present both knowledge systems as valuable and complementary</li>
        <li>Policy frameworks that protect traditional knowledge rights while encouraging innovation</li>
        <li>Market systems that recognize and reward the multiple values of traditional agricultural products</li>
      </ul>
      
      <h2>Challenges and Path Forward</h2>
      
      <p>Despite promising examples, significant barriers to knowledge integration persist. Power imbalances between scientific and traditional knowledge systems often marginalize farmers' expertise. Commercialization pressures can lead to extraction of traditional knowledge without appropriate recognition or benefit-sharing.</p>
      
      <p>Moving forward requires genuine respect for diverse knowledge systems and commitment to co-creation processes that honor both traditional wisdom and scientific insights. With appropriate approaches, the integration of traditional agricultural knowledge with modern science offers a powerful pathway toward farming systems that are productive, resilient, and culturally appropriate.</p>
    `,
    author: "Dr. Somnath Ghosal",
    readTime: "7 min",
    tags: [
      "traditional knowledge",
      "sustainable agriculture",
      "indigenous practices",
      "farming systems",
      "agroecology",
    ],
    image: "/api/placeholder/1200/600",
  },
];

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the post that matches the ID from the URL
  const post = blogPostsData.find((post) => post.id === id);

  // Add an effect to scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Re-run when the post ID changes

  // If no matching post is found, show a message or redirect
  if (!post) {
    return (
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Function to handle going back
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <ScrollToTop />
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="flex items-center text-blue-700 font-medium mb-8 hover:text-blue-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        {/* Article */}
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Featured Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />

          {/* Content Container */}
          <div className="p-6 md:p-10">
            {/* Category & Date */}
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="flex items-center text-sm text-blue-700 font-medium">
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {post.title}
            </h1>

            {/* Content */}
            <div
              className="prose prose-blue max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center">
              <span className="text-gray-600 mr-3">Share this article:</span>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
