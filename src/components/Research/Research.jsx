import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaperCard from "./PaperCard";
import { papers } from "../../data/research";
import { FiX, FiExternalLink } from "react-icons/fi";
import "./Research.css";

export default function Research() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="research">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle">— published and presented work</p>
          <h2 className="section-title">Research</h2>
        </motion.div>

        <div className="research__list">
          {papers.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(p)}
              style={{ cursor: "pointer" }}
            >
              <PaperCard {...p} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="paper-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="paper-modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="paper-modal__close" onClick={() => setSelected(null)}><FiX /></button>
              <span className={`paper-status ${selected.status}`}>{selected.status}</span>
              <h2 className="paper-modal__title">{selected.title}</h2>
              <p className="paper-modal__conf">{selected.conference}</p>
              <p className="paper-modal__date">{selected.date}</p>
              <div className="paper-modal__divider" />
              <div className="paper-modal__section">
                <h4>About this Research</h4>
                <p>{selected.about || "This research was presented/published at an international conference. Click the link below to read the full paper."}</p>
              </div>
              {selected.doi && (
                <a href={selected.doi} target="_blank" rel="noreferrer" className="paper-modal__link">
                  <FiExternalLink /> View Full Paper
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
