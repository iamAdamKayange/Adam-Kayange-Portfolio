import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = ({ t }) => {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="footer-shell">
      <p>© 2026 {t.rights}</p>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}>
        <ArrowUp size={16} aria-hidden="true" /> {t.top}
      </button>
    </footer>
  );
};

export default Footer;
