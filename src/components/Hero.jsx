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

      <div className="section-inner hero-stage">
        <motion.h1
          className="hero-title hero-backdrop-title"
          aria-label={t.title}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } }}
        >
          {headingWords.map((word) => (
            <motion.span className="hero-title-word" aria-hidden="true" key={word} variants={rise}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="hero-copy hero-rail"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.32 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.p className="hero-kicker" variants={rise}>Portfolio <span>—</span> Tanzania</motion.p>
          <motion.div className="status-pill" variants={rise}>
            <span className="status-dot" />
            {t.badge}
          </motion.div>
          <div className="hero-actions">
            <motion.a
              href="#projects"
              className="primary-button"
              variants={rise}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {t.primary} <span aria-hidden="true">→</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="secondary-button"
              variants={rise}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {t.secondary}
            </motion.a>
            <motion.a
              href="/Adam-Kayange-CV.pdf"
              className="hero-cv-link"
              download
              variants={rise}
              whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              {t.cv} <span aria-hidden="true">↓</span>
            </motion.a>
          </div>
        </motion.div>

        <div className="hero-visual">
          <Suspense fallback={<div className="scene-loading" aria-hidden="true" />}>
            <HeroScene />
          </Suspense>
          <motion.div
            className="hero-portrait"
            whileHover={reduceMotion ? undefined : { y: -5, scale: 1.015 }}
            transition={{ duration: 0.35 }}
          >
            <div className="portrait-frame">
              {imageLoaded ? (
                <img
                  src="/adam.webp"
                  alt={t.portraitAlt}
                  className="portrait-image"
                  fetchPriority="high"
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <div className="portrait-fallback"><span>AK</span></div>
              )}
            </div>
            <span className="portrait-caption">ADAM KAYANGE <i>•</i> DEVELOPER</span>
          </motion.div>
        </div>

        <motion.aside
          className="hero-context"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ staggerChildren: 0.14, delayChildren: 0.46 }}
          variants={{ hidden: {}, visible: {} }}
          aria-label={t.role}
        >
          <motion.p className="hero-role" variants={rise}>{t.role}</motion.p>
          <motion.p className="hero-intro" variants={rise}>{t.intro}</motion.p>
          <div className="hero-stat-grid">
            {t.stats.map(([value, label]) => (
              <motion.div className="hero-stat" key={label} variants={rise}>
                <strong>{value}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
