import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { experiences, leadership } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">— where I've contributed</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.org + exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <TimelineItem {...exp} />
            </motion.div>
          ))}
        </div>

        {leadership && leadership.length > 0 && (
          <motion.div
            className="leadership"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="leadership__title">Leadership & Involvement</h3>
            <div className="leadership__list">
              {leadership.map((l) => (
                <div key={l.org + l.role} className="leadership__item">
                  <span className="leadership__role">{l.role}</span>
                  <span className="leadership__org">{l.org}</span>
                  <span className="leadership__period">{l.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
