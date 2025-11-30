import Hero from "../components/Hero";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import VideoSection from "../components/VideoSection";
import Contact from "../components/Contact";
import Mission from "../components/Mission";
import Approach from "../components/Approach";

const HomePage = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743065599/qw3ontkimtqaeayz2og7.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743065571/kzj5kktvwxyrb1igapri.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743065578/ihsmc7nipxwt1za3q6tj.jpg ",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743065569/hb34jv6yo2zhx3krfso8.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743065572/pdlpwzuc1nf679v0dx9k.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743856287/kofdbmxo3aljfvqtswt3.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743856287/scaueczjuhgrafoqmqze.jpg",
      caption: "",
    },

    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743765121/fmvfoz5cmozmhunrt5dd.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743065569/jstfzjnsyachuqcigcsn.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743856398/r1dswngdkt3f4hgftxzn.jpg",
      caption: "",
    },
  ];
  return (
    <>
      <Hero />
      <ImageSlider slides={slides} />
      <About />
      <Mission />
      <Approach />
      <VideoSection />
      <Contact />
    </>
  );
};

export default HomePage;
