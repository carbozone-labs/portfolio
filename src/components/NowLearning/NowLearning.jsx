import { motion } from "framer-motion";
import "./NowLearning.css";

export default function NowLearning() {
  return (
    <section id="now-learning">
      <div className="container">
        <motion.div
          className="now-learning__box glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="now-learning__label">🔐 Currently deep-diving into</span>
          <div className="now-learning__topics">
            <span className="now-learning__topic">Network Security</span>
            <span className="now-learning__topic">Cryptography</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
