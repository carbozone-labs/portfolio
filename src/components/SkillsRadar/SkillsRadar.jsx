import { motion } from "framer-motion";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";
import "./SkillsRadar.css";

const data = [
  { skill: "Machine Learning", level: 88 },
  { skill: "Python",           level: 92 },
  { skill: "NLP",              level: 82 },
  { skill: "Data Analysis",    level: 85 },
  { skill: "Cloud (GCP)",      level: 72 },
  { skill: "Web Dev",          level: 70 },
  { skill: "Research",         level: 90 },
  { skill: "Deep Learning",    level: 75 },
];

export default function SkillsRadar() {
  return (
    <div className="radar-wrapper">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="radar-title">Skill Proficiency</h3>
        <ResponsiveContainer width="100%" height={340}>
          <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
            <PolarGrid stroke="rgba(108,99,255,0.2)" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: "#9999bb", fontSize: 12 }} />
            <Radar
              name="Atharv"
              dataKey="level"
              stroke="#6c63ff"
              fill="#6c63ff"
              fillOpacity={0.25}
              strokeWidth={2}
            />
            <Tooltip
              contentStyle={{ background: "#12121a", border: "1px solid #1e1e30", borderRadius: "8px", color: "#f0f0ff" }}
              formatter={(v) => [`${v}%`, "Proficiency"]}
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
