export default function TimelineItem({ role, org, period, points }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__header">
        <h3 className="timeline-item__role">{role}</h3>
        <span className="timeline-item__period">{period}</span>
      </div>
      <p className="timeline-item__org">{org}</p>
      <ul className="timeline-item__points">
        {points.map((pt, i) => <li key={i}>{pt}</li>)}
      </ul>
    </div>
  );
}