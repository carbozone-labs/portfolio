import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SkillsRadar from "../SkillsRadar/SkillsRadar";
import { skills } from "../../data/skills";
import "./Skills.css";

const groups = [
  { icon: "💻", title: "Programming Languages", items: skills.languages },
  { icon: "🌐", title: "Web Development",        items: skills.web },
  { icon: "🤖", title: "ML & AI",                items: skills.ml },
  { icon: "🧠", title: "NLP",                    items: skills.nlp },
  { icon: "🛠️", title: "Tools & Libraries",      items: skills.tools },
  { icon: "☁️", title: "Cloud & DevOps",         items: skills.cloud },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle">— what I work with</p>
          <h2 className="section-title">Skills</h2>
        </motion.div>
        <div className="skills__layout">
          <div className="skills__groups">
            {groups.map((g, i) => (
              <motion.div key={g.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <SkillCard {...g} />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SkillsRadar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
