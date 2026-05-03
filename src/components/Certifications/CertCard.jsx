import "./Certifications.css";

export default function CertCard({ name, issuer, date, skills, color, emoji, image, desc }) {
  return (
    <div className="cert-card-wrapper">
      <div className="cert-card-inner">
        <div className="cert-card-face cert-card-front" style={{ borderTopColor: color }}>
          <div className="cert-card__icon-wrap" style={{ background: color + "22", border: `1px solid ${color}44` }}>
            <span className="cert-card__emoji">{emoji}</span>
          </div>
          <p className="cert-card__name">{name}</p>
          <p className="cert-card__issuer">{issuer} · {date}</p>
          <p className="cert-card__hover-hint">Hover to see details ↗</p>
        </div>

        <div className="cert-card-face cert-card-back" style={{ borderTopColor: color }}>
          <div className="cert-card-back__top">
            <img src={image} alt={name} className="cert-card-back__img" onError={e => { e.target.style.display = "none"; }} />
            <div>
              <p className="cert-card-back__name">{name}</p>
              <p className="cert-card-back__issuer" style={{ color }}>{issuer} · {date}</p>
            </div>
          </div>
          <p className="cert-card-back__desc">{desc}</p>
          <div className="cert-card-back__skills">
            {skills.map(s => (
              <span key={s} className="cert-skill-tag" style={{ background: color + "22", color, border: `1px solid ${color}44` }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}