import React, { useState } from 'react';

const Hero = ({ t }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section id="home" className="hero-section section-pad">
      <div className="section-inner hero-grid">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot"></span>
            {t.badge}
          </div>
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-role">{t.role}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">
              {t.primary} <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="secondary-button">
              {t.secondary}
            </a>
          </div>
        </div>

        <div className="portrait-card">
          <div className="portrait-frame">
            {imageLoaded && (
              <img
                src="/adams.jpg"
                alt={t.portraitAlt}
                className="portrait-image"
                onError={() => setImageLoaded(false)}
              />
            )}
            {!imageLoaded && (
              <div className="portrait-fallback">
                <span>AK</span>
              </div>
            )}
          </div>
          <div className="stats-grid">
            {t.stats.map(([value, label]) => (
              <div className="stat-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
