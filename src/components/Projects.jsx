import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projectVisuals = ['01', '02', '03', '04', '05', '06'];

const Projects = ({ t }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-pad">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="card-grid three mt-10">
          {t.items.map(([title, description, tags, links], index) => (
            <motion.article
              className="project-card"
              key={title}
              style={{ transformPerspective: 1100 }}
              whileHover={reduceMotion ? undefined : { y: -7, rotateX: 1.5, scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className={`project-visual project-visual-${index + 1}`} role="img" aria-label={`${title} project preview`}>
                <div className="project-preview-bar">
                  <span className="project-preview-brand">AK / WORK</span>
                  <span className="project-preview-dots"><i /><i /><i /></span>
                </div>
                <div className="project-preview-canvas">
                  <div className="project-preview-rail"><i /><i /><i /><i /></div>
                  <div className="project-preview-main">
                    <span className="project-preview-count">{projectVisuals[index]}</span>
                    <strong>{title}</strong>
                    <div className="project-preview-cards"><i /><i /><i /></div>
                    <div className="project-preview-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
                  </div>
                </div>
                <span className="project-preview-caption">Selected work <b>↗</b></span>
              </div>
              <div className="project-body">
                <div className="chip-row">
                  {tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-actions">
                  {links.map(([label, href]) => (
                    <motion.a
                      href={href}
                      key={href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={reduceMotion ? undefined : { y: -2 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    >
                      {label}
                      <motion.span whileHover={reduceMotion ? undefined : { x: 2, y: -2 }}>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
