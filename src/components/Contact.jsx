import React, { useState } from 'react';

const contactItems = [
  ['Email', 'adamkayange223@email.com', 'mailto:adamkayange223@email.com'],
  ['Phone', '+255 629 095 954', 'tel:+255629095954'],
  ['Location', 'Dodoma, Tanzania', 'https://maps.google.com/?q=Dodoma,Tanzania'],
  ['University', 'UDOM CIVE', 'https://www.udom.ac.tz']
];

const socialLinks = [
  ['GitHub', 'github', 'https://github.com/iamAdamKayange'],
  ['TikTok', 'tiktok', 'https://www.tiktok.com/@adamkayangemusic'],
  ['Threads', 'threads', 'https://www.threads.com/@adamkayangemusic'],
  ['Twitter', 'x', 'https://twitter.com/adamKayange239'],
  ['WhatsApp', 'whatsapp', 'https://wa.me/255629095954'],
  ['Instagram', 'instagram', 'https://www.instagram.com/adamkayangemusic/']
];

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '8efc1bf5-b535-40ec-8482-70f83403533c';

const iconPaths = {
  github:
    'M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6A4.7 4.7 0 0 1 7.5 7.8c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.1 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.7.3 3 .1 3.3a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.9 5.6-5.6 5.9.4.4.8 1.1.8 2.2v4.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z',
  tiktok:
    'M16.7 2c.3 2.6 1.8 4.2 4.3 4.4v3.2a7.6 7.6 0 0 1-4.3-1.4v6.6c0 5.4-5.9 8.1-9.8 4.8-2.6-2.2-2.6-6.4 0-8.7a7 7 0 0 1 4.5-1.6v3.4c-.5-.1-1.4.1-2 .5-1.7 1.1-1.4 3.8.5 4.5 1.8.7 3.5-.6 3.5-2.8V2h3.3Z',
  threads:
    'M12 2C6.4 2 3 5.6 3 12.2 3 18.6 6.5 22 12 22c5 0 8.3-2.7 8.3-6.5 0-3-1.9-4.8-5.2-5.2-.6-2.2-2.2-3.5-4.7-3.5-2 0-3.6.8-4.7 2.2l2.4 1.7c.5-.7 1.2-1.1 2.3-1.1 1.2 0 2 .6 2.3 1.7-4.3.2-6.3 1.8-6.3 4.5 0 2.5 2 4.2 4.8 4.2 3.2 0 5-1.9 5-5v-1.7c1 .4 1.6 1.1 1.6 2.2 0 2.3-2.2 3.8-5.7 3.8-4 0-6.4-2.5-6.4-7.1C5.7 7.4 8 4.7 12 4.7c2.8 0 4.7 1.2 5.8 3.5l2.5-1.3C18.7 3.7 15.9 2 12 2Zm1.5 12.3v.6c0 1.6-.8 2.4-2.2 2.4-1.1 0-1.8-.6-1.8-1.5 0-1 1-1.5 3.1-1.5h.9Z',
  x:
    'M18.2 2h3.3l-7.2 8.2L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2H8l4.7 6.2L18.2 2Zm-1.1 17.9h1.8L7 4H5.1l12 15.9Z',
  whatsapp:
    'M20.5 3.5A11.8 11.8 0 0 0 2.2 18.1L1 23l5-1.3A11.8 11.8 0 0 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4Z',
  instagram:
    'M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4a5.3 5.3 0 0 1-5.3 5.3H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2Zm0 2A3.3 3.3 0 0 0 4 7.3v9.4A3.3 3.3 0 0 0 7.3 20h9.4a3.3 3.3 0 0 0 3.3-3.3V7.3A3.3 3.3 0 0 0 16.7 4H7.3Zm9.9 1.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z'
};

const SocialIcon = ({ name }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={iconPaths[name]} />
  </svg>
);

const Contact = ({ t }) => {
  const [submitStatus, setSubmitStatus] = useState('idle');

  const toastMessage =
    submitStatus === 'sent' ? t.successToast : submitStatus === 'error' ? t.errorToast : '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const form = event.currentTarget;

    setSubmitStatus('sending');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio message from ${data.firstName} ${data.lastName}`,
          from_name: `${data.firstName} ${data.lastName}`,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          service: data.service,
          message: data.message
        })
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Message failed');
      }

      setSubmitStatus('sent');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      window.setTimeout(() => {
        window.location.href = createMailtoLink(data);
      }, 1200);
    }

    window.setTimeout(() => setSubmitStatus('idle'), 4200);
  };

  const createMailtoLink = (data) => {
    const subject = encodeURIComponent(`Portfolio message from ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage:\n${data.message}`
    );
    return `mailto:adamkayange223@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad alt-section">
      <div className="section-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-intro">{t.intro}</p>

        <div className="contact-grid mt-10">
          <div>
            <h3 className="block-title">{t.getInTouch}</h3>
            <div className="contact-list">
              {contactItems.map(([label, value, href]) => (
                <a href={href} className="contact-item" key={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span>{label.slice(0, 1)}</span>
                  <div>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </div>
                </a>
              ))}
            </div>
            <div className="social-row">
              {socialLinks.map(([label, icon, href]) => (
                <a href={href} key={label} target="_blank" rel="noreferrer" title={label}>
                  <SocialIcon name={icon} />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h3>{t.formTitle}</h3>
            <div className="form-grid">
              <label>
                <span>{t.firstName}</span>
                <input name="firstName" type="text" placeholder="Adam" required />
              </label>
              <label>
                <span>{t.lastName}</span>
                <input name="lastName" type="text" placeholder="Kayange" required />
              </label>
            </div>
            <label>
              <span>{t.email}</span>
              <input name="email" type="email" placeholder="adamkayange@example.com" required />
            </label>
            <label>
              <span>{t.service}</span>
              <select name="service">
                {t.services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </label>
            <label>
              <span>{t.message}</span>
              <textarea name="message" placeholder={t.placeholder} rows="4" required></textarea>
            </label>
            <button type="submit" className="primary-button full-width" disabled={submitStatus === 'sending'}>
              {submitStatus === 'sending'
                ? t.sending
                : submitStatus === 'sent'
                  ? t.sent
                  : submitStatus === 'error'
                    ? t.fallback
                    : t.submit}
            </button>
          </form>
        </div>
      </div>

      {toastMessage && (
        <div className={`toast-notification ${submitStatus}`} role="status" aria-live="polite">
          <span>{submitStatus === 'sent' ? '✓' : '!'}</span>
          <p>{toastMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
