import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';

const navItems = [
  ['about', 'about'],
  ['skills', 'skills'],
  ['projects', 'projects'],
  ['contact', 'contact']
];

const Navbar = ({ t, language, setLanguage, theme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    setMobileMenuOpen(false);
  };

  const controls = (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="icon-button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        title={t.theme}
        aria-label={t.theme}
      >
        <motion.span
          key={theme}
          initial={reduceMotion ? false : { rotate: -35, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </motion.span>
      </button>
      <button
        type="button"
        className="control-pill"
        onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
        title={t.language}
        aria-label={t.language}
      >
        {language === 'en' ? 'SW' : 'EN'}
      </button>
    </div>
  );

  return (
    <nav className="nav-shell" aria-label="Main navigation">
      <a href="#home" onClick={(event) => handleNavClick(event, 'home')} className="brand-mark">
        AK.
      </a>

      <ul className="hidden md:flex items-center gap-7 text-sm font-semibold">
        {navItems.map(([key, target]) => (
          <li key={key}>
            <a href={`#${target}`} onClick={(event) => handleNavClick(event, target)} className="nav-link">
              {t[key]}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" onClick={(event) => handleNavClick(event, 'contact')} className="primary-small">
            {t.hire}
          </a>
        </li>
      </ul>

      <div className="hidden md:block">{controls}</div>

      <button
        className="md:hidden icon-button"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
        type="button"
      >
        <motion.span
          key={mobileMenuOpen ? 'close' : 'open'}
          initial={reduceMotion ? false : { rotate: -25, opacity: 0.4 }}
          animate={{ rotate: 0, opacity: 1 }}
        >
          {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </motion.span>
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              {navItems.map(([key, target]) => (
                <li key={key}>
                  <a href={`#${target}`} onClick={(event) => handleNavClick(event, target)} className="nav-link">
                    {t[key]}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={(event) => handleNavClick(event, 'contact')} className="primary-small inline-flex">
                  {t.hire}
                </a>
              </li>
              <li>{controls}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
