import { useEffect, Suspense, lazy } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const HomePage       = lazy(() => import("./pages/HomePage"));
const ProjectsPage   = lazy(() => import("./pages/ProjectsPage"));
const ResearchPage   = lazy(() => import("./pages/ResearchPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ContactPage    = lazy(() => import("./pages/ContactPage"));
const NotFoundPage   = lazy(() => import("./pages/NotFoundPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;