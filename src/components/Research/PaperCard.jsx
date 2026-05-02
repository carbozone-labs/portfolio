import { FiExternalLink } from 'react-icons/fi';

export default function PaperCard({ title, conference, date, doi, status, index }) {
  return (
    <div className="paper-card">
      <span className="paper-card__index">0{index + 1}</span>
      <div className="paper-card__body">
        <h3 className="paper-card__title">{title}</h3>
        <div className="paper-card__meta">
          <span className="paper-card__conf">{conference}</span>
          <span className="paper-card__date">{date}</span>
          <span className={`paper-status ${status}`}>{status}</span>
        </div>
        {doi && (
          <div className="paper-card__doi">
            <a href={doi} target="_blank" rel="noreferrer">
              <FiExternalLink /> View Paper
            </a>
          </div>
        )}
      </div>
    </div>
  );
}