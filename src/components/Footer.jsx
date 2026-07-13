import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="footer-shell">
      <p>© 2026 {t.rights}</p>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑ {t.top}
      </button>
    </footer>
  );
};

export default Footer;
