import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">Bridal Dreams</a>
          <p className="footer-tagline">{t('tagline')}</p>
          <p className="footer-desc">{t('desc')}</p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@bridal.dreams3" className="social-link" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t('navigate')}</h4>
          <ul className="footer-links">
            <li><a href="#about">{nav('story')}</a></li>
            <li><a href="#collections">{nav('collections')}</a></li>
            <li><a href="#gallery">{nav('gallery')}</a></li>
            <li><a href="#testimonials">{nav('brides')}</a></li>
            <li><a href="#booking">{nav('appointments')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('collectionsTitle')}</h4>
          <ul className="footer-links">
            <li><a href="#collections">Ball Gown</a></li>
            <li><a href="#collections">Mermaid</a></li>
            <li><a href="#collections">A-Line</a></li>
            <li><a href="#collections">Sheath</a></li>
            <li><a href="#collections">Lace &amp; Embroidery</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('contact')}</h4>
          <div className="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href={`tel:${t('phone')}`}>{t('phone')}</a>
          </div>
          <div className="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href={`mailto:${t('email')}`}>{t('email')}</a>
          </div>
          <div className="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{t('location')}</span>
          </div>
          <a
            href="https://goo.gl/maps/zqyisF9iMpjTjkwm9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-directions-btn"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {t('getDirections')}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">{t('copyright')}</p>
        <div className="footer-legal">
          <a href="#">{t('privacy')}</a>
          <a href="#">{t('terms')}</a>
        </div>
      </div>
    </footer>
  );
}
