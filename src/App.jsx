import { useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Loader     from "./components/Loader/Loader";
import Navbar     from "./components/Navbar/Navbar";
import Footer     from "./components/Footer/Footer";
import HomePage       from "./pages/HomePage";
import ProjectsPage   from "./pages/ProjectsPage";
import ResearchPage   from "./pages/ResearchPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage    from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const loaded = true;

  return (
    <HashRouter>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <ScrollToTop />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </HashRouter>
  );
}

export default App;
