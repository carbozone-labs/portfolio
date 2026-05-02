import { motion } from "framer-motion";
import CertCard from "./CertCard";
import { certifications } from "../../data/certifications";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">— credentials earned</p>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CertCard {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
