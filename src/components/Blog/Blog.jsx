import { motion } from "framer-motion";
import { blogs } from "../../data/blogs";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle">— thoughts and insights</p>
          <h2 className="section-title">Blog</h2>
        </motion.div>

        <div className="blog__grid">
          {blogs.map((b, i) => (
            <motion.div
              key={b.title}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="blog-card__emoji">{b.emoji}</div>
              <div className="blog-card__meta">
                <span><FiCalendar size={12} /> {b.date}</span>
                <span><FiClock size={12} /> {b.readTime}</span>
              </div>
              <h3 className="blog-card__title">{b.title}</h3>
              <p className="blog-card__excerpt">{b.excerpt}</p>
              <div className="blog-card__tags">
                {b.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {b.link ? (
                <a href={b.link} target="_blank" rel="noreferrer" className="blog-card__link">
                  Read More <FiArrowRight />
                </a>
              ) : (
                <span className="blog-card__link blog-card__coming">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
