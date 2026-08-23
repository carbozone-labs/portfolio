export default function SkillCard({ icon, title, items }) {
  return (
    <div className="skill-group">
      <div className="skill-group__header">
        <span className="skill-group__icon">{icon}</span>
        <h3 className="skill-group__title">{title}</h3>
      </div>
      <div className="skill-group__tags">
        {items.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
    </div>
  );
}