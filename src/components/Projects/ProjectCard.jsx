import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ title, desc, tags, status, github, demo }) {
  return (
    <div className="project-card">
      <div className="project-card__top">
        <h3 className="project-card__title">{title}</h3>
        <span className={`project-status ${status}`}>{status}</span>
      </div>
      <p className="project-card__desc">{desc}</p>
      <div className="project-card__tags">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="project-card__links">
        {github && <a href={github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>}
        {demo   && <a href={demo}   target="_blank" rel="noreferrer"><FiExternalLink /> Demo</a>}
      </div>
    </div>
  );
}