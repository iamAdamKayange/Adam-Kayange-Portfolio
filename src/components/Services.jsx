import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Braces, Cloud, Database, LayoutDashboard, Smartphone, PanelsTopLeft } from 'lucide-react';

const serviceIcons = [LayoutDashboard, Smartphone, Braces, Cloud, PanelsTopLeft, Database];

const Services = ({ t }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-pad">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="card-grid three mt-10">
          {t.items.map(([title, description], index) => {
            const Icon = serviceIcons[index];

            return (
            <motion.article
              className="feature-card service-card"
              key={title}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.22 }}
            >
              <div className="service-card-top">
                <span className="service-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
