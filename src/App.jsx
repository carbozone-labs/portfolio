import { useState } from "react";
import Loader         from "./components/Loader/Loader";
import Navbar         from "./components/Navbar/Navbar";
import Hero           from "./components/Hero/Hero";
import About          from "./components/About/About";
import Skills         from "./components/Skills/Skills";
import Services       from "./components/Services/Services";
import Projects       from "./components/Projects/Projects";
import Research       from "./components/Research/Research";
import Experience     from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Blog           from "./components/Blog/Blog";
import GitHub         from "./components/GitHub/GitHub";
import Contact        from "./components/Contact/Contact";
import Footer         from "./components/Footer/Footer";
import CursorGlow     from "./components/CursorGlow/CursorGlow";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <CursorGlow />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Research />
            <Experience />
            <Certifications />
            <Blog />
            <GitHub />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;