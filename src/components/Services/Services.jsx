import { motion } from "framer-motion";
import { services } from "../../data/services";
import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">— what I offer</p>
          <h2 className="section-title">Freelance Services</h2>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="service-card__price">{s.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="services__cta">
          <p>Interested in working together? Let us discuss your project.</p>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
