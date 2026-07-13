import React from 'react';

const projectVisuals = ['01', '02', '03', '04', '05', '06'];

const Projects = ({ t }) => {
  return (
    <section id="projects" className="section-pad">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="card-grid three mt-10">
          {t.items.map(([title, description, tags, links], index) => (
            <article className="project-card" key={title}>
              <div className="project-visual">
                <span>{projectVisuals[index]}</span>
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
                    <a href={href} key={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
