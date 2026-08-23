import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import './Projects.css';

export default function Projects({ limit, showViewAll = false, title = "Projects", subtitle = "— what I've built" }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </motion.div>

        <div className="projects__grid">
          {list.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <div className="projects__view-all">
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        )}
      </div>
    </section>
  );
}
