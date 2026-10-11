import React, { Suspense, lazy, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const HeroScene = lazy(() => import('./3d/HeroScene'));

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

const Hero = ({ t }) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const reduceMotion = useReducedMotion();
  const headingWords = t.title.split(' ');

  return (
    <section id="home" className="hero-section section-pad">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-light" />
      </div>
      <div className="section-inner hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.p className="hero-kicker" variants={rise}>Portfolio <span>—</span> Tanzania</motion.p>
          <motion.div className="status-pill" variants={rise}>
            <span className="status-dot"></span>
            {t.badge}
          </motion.div>
          <motion.h1 className="hero-title" aria-label={t.title} variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}>
            {headingWords.map((word) => (
              <motion.span className="hero-title-word" aria-hidden="true" key={word} variants={rise}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p className="hero-role" variants={rise}>{t.role}</motion.p>
          <motion.p className="hero-intro" variants={rise}>{t.intro}</motion.p>
          <div className="flex flex-wrap gap-3">
            <motion.a href="#projects" className="primary-button" variants={rise} whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
              {t.primary} <span aria-hidden="true">→</span>
            </motion.a>
            <motion.a href="#contact" className="secondary-button" variants={rise} whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
              {t.secondary}
            </motion.a>
            <motion.a href="/Adam-Kayange-CV.pdf" className="hero-cv-link" download variants={rise} whileHover={reduceMotion ? undefined : { y: -2 }}>
              {t.cv} <span aria-hidden="true">↓</span>
            </motion.a>
          </div>

        </motion.div>

        <div className="hero-visual">
          <Suspense fallback={<div className="scene-loading" aria-hidden="true" />}>
            <HeroScene />
          </Suspense>
        <motion.div className="portrait-card hero-portrait" whileHover={reduceMotion ? undefined : { y: -5, rotate: 0 }} transition={{ duration: 0.35 }}>
          <div className="portrait-frame">
            {imageLoaded && (
              <img
                src="/adams.webp"
                alt={t.portraitAlt}
                className="portrait-image"
                fetchPriority="high"
                onError={() => setImageLoaded(false)}
              />
            )}
            {!imageLoaded && (
              <div className="portrait-fallback">
                <span>AK</span>
              </div>
            )}
            <span className="portrait-caption">ADAM KAYANGE <i>•</i> DEVELOPER</span>
          </div>
          <div className="stats-grid">
            {t.stats.map(([value, label]) => (
              <div className="stat-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
