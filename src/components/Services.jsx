import React from 'react';

const Services = ({ t }) => {
  return (
    <section id="services" className="section-pad">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="card-grid three mt-10">
          {t.items.map(([title, description], index) => (
            <article className="feature-card service-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
