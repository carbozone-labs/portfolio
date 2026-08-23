import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Footer.css";

const nav = [
  { label: "About", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Research", to: "/research" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          Atharv<span style={{ color: "var(--secondary)" }}>.</span>dev
        </span>
        <div className="footer__links">
          {nav.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </div>
        <div className="footer__social">
          <a href="https://github.com/carbozone-labs" target="_blank" rel="noreferrer" title="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/atharv-ekvire/" target="_blank" rel="noreferrer" title="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:atharvekavire01@gmail.com" title="Email"><FiMail /></a>
        </div>
        <p className="footer__copy">
          © 2025 <span>Atharv Ekavire</span>. Built with React & ❤️
        </p>
      </div>
    </footer>
  );
}
