import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./Hero.css";

const roles = ["ML Engineer","AI Researcher","Data Scientist","NLP Specialist","Python Developer","Cloud Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero__badge-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="availability-badge">
              <span className="availability-dot" />
              Available for Freelance
            </span>
            <span className="hero__location-badge">📍 Pune, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="hero__greeting">// Hello, World!</p>
            <h1 className="hero__name">
              {"I am "}
              <span className="hero__name-gradient">Atharv</span>
              <br />
              <span className="hero__name-gradient">Ekavire</span>
            </h1>
          </motion.div>

          <motion.div
            className="hero__role-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__role-prefix">{">"}</span>
            <span className="hero__typewriter">{displayed}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            M.Sc. Computer Science student at Vishwakarma College, Pune.
            Building intelligent systems through ML, AI research, and cloud computing.
            <span className="hero__highlight"> 2x IEEE/Springer published researcher.</span>
          </motion.p>

          <motion.div
            className="hero__stats-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[["2+","Papers Published"],["5+","Projects Built"],["8+","Certifications"]].map(([num, label]) => (
              <div key={label} className="hero__mini-stat">
                <span className="hero__mini-num">{num}</span>
                <span className="hero__mini-label">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects <FiArrowRight />
            </button>
            <a href="/atharv-resume.pdf" target="_blank" className="btn btn-outline">
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            className="hero__social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/atharv-ekvire/" target="_blank" rel="noreferrer" title="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:atharvekavire01@gmail.com" title="Email"><FiMail /></a>
            <a href="https://wa.me/917263038739" target="_blank" rel="noreferrer" title="WhatsApp" className="whatsapp-btn"><FaWhatsapp /></a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring hero__avatar-ring--1" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
            <div className="hero__avatar">
              <div className="hero__avatar-inner">🧑‍💻</div>
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--tl">
              <span>🤖</span> ML
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--tr">
              <span>📊</span> Data
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--bl">
              <span>☁️</span> Cloud
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--br">
              <span>🔬</span> Research
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
