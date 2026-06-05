import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section id="hero">
      <div className="hero-video-wrap">
        <video autoPlay muted loop playsInline>
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-pre">{t('pre')}</p>
        <h1 className="hero-title">
          {t('titleLine1')}
          <br />
          {t('titleLine2')}
          <em>{t('titleItalic')}</em>
        </h1>
        <div className="hero-divider" />
        <p className="hero-sub">{t('titleItalic')}</p>
        <div className="hero-actions">
          <a href="#collections" className="btn-primary">{t('exploreBtn')}</a>
          <a href="#booking" className="btn-outline">{t('bookBtn')}</a>
          <a
            href="https://goo.gl/maps/zqyisF9iMpjTjkwm9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-directions"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {t('directionsBtn')}
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
