import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  { number: 2,  suffix: "+", label: "Published Papers", icon: "📄" },
  { number: 4,  suffix: "+", label: "Conferences",       icon: "🎤" },
  { number: 5,  suffix: "+", label: "Projects Built",    icon: "🚀" },
  { number: 8,  suffix: "+", label: "Certifications",    icon: "🏆" },
  { number: 3,  suffix: "+", label: "Communities",       icon: "🤝" },
  { number: 100, suffix: "%", label: "Plagiarism Free",  icon: "✅" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="stat-card__icon">{s.icon}</span>
              <div className="stat-card__number">
                <Counter target={s.number} suffix={s.suffix} />
              </div>
              <p className="stat-card__label">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
