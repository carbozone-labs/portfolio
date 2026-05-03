import { useState, useEffect } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useDarkMode } from "../../hooks/useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const sections = ["home","about","skills","services","projects","research","experience","certifications","blog","github","contact"];
const navLinks = ["about","skills","services","projects","research","certifications","blog","github","contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();
  const activeId = useScrollSpy(sections);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const linkStyle = { cursor: "pointer", textTransform: "capitalize" };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar__inner">
        <span className="navbar__logo" onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
          {"Atharv"}
          <span style={{ color: "var(--secondary)" }}>{"."}</span>
          {"dev"}
        </span>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((s) => (
            <li key={s}>
              <a className={activeId === s ? "active" : ""} onClick={() => scrollTo(s)} style={linkStyle}>
                {s}
              </a>
            </li>
          ))}
          <li className="navbar__theme-li">
            <button className="navbar__theme-btn" onClick={toggleDark} aria-label="Toggle theme">
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
