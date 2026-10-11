import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';

const About = ({ t }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-pad">
      <div className="section-inner two-column">
        <div className="about-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <div className="body-copy">
            {t.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="fact-grid">
            {t.facts.map(([label, value], index) => (
              <motion.div
                className="mini-card"
                key={label}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="fact-index">0{index + 1}</span>
                <span>{label}</span>
                <strong>{value}</strong>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="stacked-cards">
          <motion.article className="feature-card accent-left about-feature" whileHover={reduceMotion ? undefined : { x: 4 }}>
            <span className="card-icon"><GraduationCap size={21} aria-hidden="true" /></span>
            <h3>{t.education}</h3>
            <p>{t.educationBody}</p>
          </motion.article>
          <motion.article className="feature-card about-feature" whileHover={reduceMotion ? undefined : { x: 4 }}>
            <span className="card-icon"><Languages size={20} aria-hidden="true" /></span>
            <h3>{t.languageTitle}</h3>
            <div className="language-list">
              {t.levels.map(([name, level], index) => (
                <div key={name}>
                  <div className="language-row">
                    <span>{name}</span>
                    <strong>{level}</strong>
                  </div>
                  <div className="meter">
                    <span style={{ width: index === 0 ? '100%' : '86%' }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default About;
