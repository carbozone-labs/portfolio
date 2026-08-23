import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section id="contact-cta">
      <div className="container">
        <motion.div
          className="contact-cta__box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-cta__title">Let's work together</h2>
          <p className="contact-cta__desc">
            Open to research collaborations, ML projects, and internship opportunities.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
