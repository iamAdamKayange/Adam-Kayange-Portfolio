import React from 'react';

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

const Skills = ({ t }) => {
  return (
    <section id="skills" className="section-pad alt-section">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="card-grid four mt-10">
          {t.categories.map(([name, skills], index) => (
            <article className="feature-card skill-card" key={name}>
              <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{name}</h3>
              <div className="chip-row">
                {skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="feature-card mt-12">
          <h3>{t.proficiencyTitle}</h3>
          <div className="proficiency-grid">
            {proficiencyData.map(([name, value]) => (
              <div key={name}>
                <div className="language-row">
                  <span>{name}</span>
                  <strong>{value}%</strong>
                </div>
                <div className="meter">
                  <span style={{ width: `${value}%` }}></span>
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
