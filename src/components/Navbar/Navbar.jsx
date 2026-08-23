import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Research", to: "/research" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          {"Atharv"}
          <span style={{ color: "var(--secondary)" }}>{"."}</span>
          {"dev"}
        </Link>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </NavLink>
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
