import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import JournalPage from "./pages/JournalPage";
import Publication from "./pages/Publication";
import Research from "./pages/Research";
import News from "./pages/News";
import Project from "./pages/Project";
import InvitedTalks from "./pages/InvitedTalks";
import Conferences from "./pages/Conferences";
import Events from "./pages/Events";
import Books from "./pages/Books";
import ContactUs from "./pages/ContactUs";
import BlogPostPage from "./pages/BlogPostPage";
import { useEffect } from "react";
import Team from "./pages/Team";
import { ToastContainer } from "react-toastify";
import Collaboration from "./pages/Collaboration";

import CopyrightPage from "./pages/Copyright";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ToastContainer />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/publications/journal" element={<JournalPage />} />
          <Route path="/publications/books" element={<Books />} />
          <Route path="/publications/copyrights" element={<CopyrightPage />} />
          <Route path="/publications/talks" element={<InvitedTalks />} />
          <Route path="/publications/conferences" element={<Conferences />} />
          <Route path="/publications/events" element={<Events />} />

          <Route path="/research" element={<Research />} />
          <Route path="/media" element={<News />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/research/projects" element={<Project />} />
          <Route path="/research/team" element={<Team />} />
          <Route path="/research/collaborations" element={<Collaboration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
