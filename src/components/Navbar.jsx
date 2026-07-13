import React, { useState } from 'react';

const navItems = [
  ['about', 'about'],
  ['skills', 'skills'],
  ['projects', 'projects'],
  ['experience', 'experience'],
  ['services', 'services']
];

const Navbar = ({ t, language, setLanguage, theme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
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
        {theme === 'dark' ? '☀' : '◐'}
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
    <nav className="nav-shell">
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
        type="button"
      >
        {mobileMenuOpen ? '×' : '☰'}
      </button>

      {mobileMenuOpen && (
        <div className="mobile-menu">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
