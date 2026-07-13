import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="section-pad">
      <div className="section-inner two-column">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <div className="body-copy">
            {t.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="fact-grid">
            {t.facts.map(([label, value]) => (
              <div className="mini-card" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="stacked-cards">
          <article className="feature-card accent-left">
            <span className="card-icon">🎓</span>
            <h3>{t.education}</h3>
            <p>{t.educationBody}</p>
          </article>
          <article className="feature-card">
            <h3>{t.languageTitle}</h3>
            <div className="language-list">
              {t.levels.map(([name, level], index) => (
                <div key={name}>
                  <div className="language-row">
                    <span>{name}</span>
                    <strong>{level}</strong>
                  </div>
                  <div className="meter">
                    <span style={{ width: index === 0 ? '100%' : '86%' }}></span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
