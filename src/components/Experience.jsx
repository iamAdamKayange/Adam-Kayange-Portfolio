import React from 'react';

const Experience = ({ t }) => {
  return (
    <section id="experience" className="section-pad alt-section">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="timeline">
          {t.items.map(([title, company, period, description, techs]) => (
            <article className="timeline-item" key={`${title}-${period}`}>
              <div className="timeline-head">
                <div>
                  <h3>{title}</h3>
                  <p>{company}</p>
                </div>
                <span>{period}</span>
              </div>
              <p className="timeline-desc">{description}</p>
              <div className="chip-row">
                {techs.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
