import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { experiences } from '../../data/experience';
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
              key={exp.org}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <TimelineItem {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}