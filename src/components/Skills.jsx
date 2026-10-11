import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PanelsTopLeft, Braces, Smartphone, Database } from 'lucide-react';

const proficiencyData = [
  ['Flutter / Dart', 90],
  ['React.js', 85],
  ['Laravel', 80],
  ['Django', 75],
  ['Java / Android', 82],
  ['Firebase', 88],
  ['HTML / CSS', 95],
  ['MySQL / PostgreSQL', 78]
];

const categoryIcons = [PanelsTopLeft, Braces, Smartphone, Database];

const Skills = ({ t }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-pad alt-section">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="card-grid four mt-10">
          {t.categories.map(([name, skills], index) => {
            const Icon = categoryIcons[index];

            return (
              <motion.article
                className="feature-card skill-card"
                key={name}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{ duration: 0.22 }}
              >
                <div className="skill-card-heading">
                  <span className="skill-icon"><Icon size={19} aria-hidden="true" /></span>
                  <span className="skill-number">0{index + 1}</span>
                </div>
                <h3>{name}</h3>
                <div className="chip-row">
                  {skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="feature-card skill-proficiency mt-12">
          <h3>{t.proficiencyTitle}</h3>
          <div className="proficiency-grid">
            {proficiencyData.map(([name, value]) => (
              <div key={name}>
                <div className="language-row">
                  <span>{name}</span>
                  <strong>{value}%</strong>
                </div>
                <div className="meter">
                  <motion.span
                    initial={reduceMotion ? { width: `${value}%` } : { width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
