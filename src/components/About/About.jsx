import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">— who I am</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about__inner">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__card">
              <div className="about__initials">AE</div>
              <h3>Atharv Ekavire</h3>
              <p>M.Sc. Computer Science · Pune, India</p>
              <div className="about__stats">
                <div className="about__stat">
                  <div className="about__stat-number">2+</div>
                  <div className="about__stat-label">Published Papers</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-number">5+</div>
                  <div className="about__stat-label">Projects</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-number">8+</div>
                  <div className="about__stat-label">Certificates</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-number">3+</div>
                  <div className="about__stat-label">Communities</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm a motivated M.Sc. Computer Science student at Vishwakarma College, Pune,
              with a strong focus on Machine Learning, Data Science, and AI research.
              I enjoy building real-world intelligent systems that solve meaningful problems.
            </p>
            <p>
              My research has been published in IEEE and Springer conferences, covering topics
              like cancer prediction, clustering algorithms, and customer segmentation.
              I'm currently exploring privacy-preserving continual learning in medical AI.
            </p>
            <p>
              Beyond academics, I actively contribute to technical communities through IEEE,
              GDSC, and Rotaract — organizing events, hackathons, and diversity initiatives.
            </p>

            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Pune, Maharashtra</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Degree</span>
                <span className="about__info-value">M.Sc. Computer Science</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <span className="about__info-value">atharvekavire01@gmail.com</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Languages</span>
                <span className="about__info-value">English, Hindi, Marathi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}