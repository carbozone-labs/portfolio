import "./Footer.css";

const nav = ["about","skills","projects","research","experience","certifications","contact"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          Atharv<span style={{color: "var(--secondary)"}}>.</span>dev
        </span>
        <div className="footer__links">
          {nav.map(n => (
            <a key={n} onClick={() => document.getElementById(n)?.scrollIntoView({ behavior: "smooth" })}
               style={{ cursor: "pointer", textTransform: "capitalize" }}>
              {n}
            </a>
          ))}
        </div>
        <p className="footer__copy">
          © 2025 <span>Atharv Ekavire</span>. Built with React & ❤️
        </p>
      </div>
    </footer>
  );
}
