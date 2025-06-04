import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface Article {
  id: number;
  img: string;
  alt: string;
}

const articles = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704537/Media/absegtcmrpcgvfs3pwox.jpg",
    alt: "Article 1",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704536/Media/pmeyz8y7xtehefn9jtzq.png",
    alt: "Article 2",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704537/Media/bb1yhbg09lljv2ecdpya.webp",
    alt: "Article 3",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704536/Media/awdjr7w6rqhbws3owy3o.jpg",
    alt: "Article 4",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704536/Media/uzmt2wswyaw0u9ir9ucj.png",
    alt: "Article 5",
  },

  {
    id: 7,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704537/Media/jrhoibzx12rrrc24bmso.webp",
    alt: "Article 7",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704537/Media/pgksjtuseq1yr8d9gezg.jpg",
    alt: "Article 8",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704536/Media/mja67pcqnotpjgpmonhv.png",
    alt: "Article 9",
  },
  {
    id: 10,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704537/Media/fcc3muq5er6gibcpu01j.jpg",
    alt: "Article 10",
  },
  {
    id: 11,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704537/Media/fxfl14wwn13wxiu8sxdp.jpg",
    alt: "Article 11",
  },
  {
    id: 12,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743704536/Media/rjcnyvbtea0qkn9qtvu7.jpg",
    alt: "Article 12",
  },
  {
    id: 13,
    img: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1744349861/ji2myvlfzsotmbfaby2x.png",
    alt: "Article 13",
  },
];

const News = () => {
  const [selectedImage, setSelectedImage] = useState<Article | null>(null);
  const openImageModal = (article: Article) => {
    setSelectedImage(article);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dq1llsy7f/image/upload/v1741810517/ufc4i8yvpx2g3cfhcb1o.jpg")',
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
            Media Coverage
          </h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>
      </div>

      {/* Articles Grid */}
      <div className="p-6 md:p-12 shadow-lg">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => openImageModal(article)}
            >
              <div>
                <img
                  src={article.img}
                  alt={article.alt}
                  className="w-full h-[300px] object-cover md:h-[350px] lg:h-[400px] transition-transform transform hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 pt-16"
          onClick={closeImageModal}
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
            <div
              className="relative max-w-6xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 shadow-lg z-10"
              >
                <X size={24} />
              </button>
              <motion.img
                src={selectedImage.img}
                alt={selectedImage.alt}
                className="max-w-full max-h-[100vh] object-contain rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default News;
