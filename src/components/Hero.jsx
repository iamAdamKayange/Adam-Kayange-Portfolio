import React, { Suspense, lazy, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2, MapPin } from 'lucide-react';

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

      <div className="section-inner">
        <div className="hero-stage">
          <motion.div
            className="hero-copy hero-rail"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.div className="hero-topline" variants={rise}>
              <span className="hero-monogram">ADAM KAYANGE<span> / UDOM</span></span>
              <span className="status-pill"><i className="status-dot" />{t.badge}</span>
            </motion.div>
            <motion.p className="hero-kicker" variants={rise}>Portfolio <span>—</span> Tanzania</motion.p>
            <motion.h1 className="hero-title hero-display-title" aria-label={t.title} variants={rise}>
              {headingWords.map((word, index) => (
                <span className={`hero-title-word ${index === 1 ? 'hero-title-accent' : ''}`} key={word}>{word}</span>
              ))}
            </motion.h1>
            <motion.p className="hero-role" variants={rise}>{t.role}</motion.p>
            <motion.p className="hero-intro" variants={rise}>{t.intro}</motion.p>
            <motion.div className="hero-location" variants={rise}>
              <MapPin size={15} aria-hidden="true" /> Dodoma, Tanzania <span /> <Code2 size={15} aria-hidden="true" /> Web &amp; Mobile
            </motion.div>
            <motion.div className="hero-actions" variants={rise}>
              <motion.a
                href="#projects"
                className="primary-button"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                {t.primary} <ArrowUpRight size={17} aria-hidden="true" />
              </motion.a>
              <motion.a
                href="/Adam-Kayange-CV.pdf"
                className="secondary-button"
                download
                whileHover={reduceMotion ? undefined : { y: -3 }}
              >
                {t.cv} <ArrowDown size={15} aria-hidden="true" />
              </motion.a>
            </motion.div>
            <motion.a className="hero-contact-link" href="#contact" variants={rise}>
              {t.secondary} <ArrowUpRight size={15} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
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
            <div className="hero-image-orbit" aria-hidden="true"><span>BUILDING<br />USEFUL THINGS</span><i>✳</i></div>
            <div className="hero-image-index" aria-hidden="true"><span>01</span><i /> PROFILE</div>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats-band"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {t.stats.map(([value, label]) => (
            <div className="hero-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
          <blockquote>
            <span>“</span>
            <p>Building digital experiences that feel useful, clear and human.</p>
            <cite>— Adam Kayange</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
