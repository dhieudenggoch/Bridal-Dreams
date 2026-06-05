import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about">
      <div className="about-images reveal">
        <Image
          src="/images/gown-01.jpg"
          alt="Bridal gown detail"
          className="about-img-main"
          width={540}
          height={480}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/images/gown-06.jpg"
          alt="Wedding ceremony"
          className="about-img-accent"
          width={400}
          height={330}
          style={{ objectFit: 'cover' }}
        />
        <div className="about-badge">
          <strong>15+</strong>
          <span>Years of<br/>Elegance</span>
        </div>
      </div>

      <div className="about-text reveal">
        <div className="section-label">{t('label')}</div>
        <h2 className="section-title">
          {t('titleLine1')}
          <em>{t('titleItalic')}</em>
          {t('titleLine2')}
        </h2>
        <div className="section-divider" />
        <p className="section-body">{t('body1')}</p>
        <p className="section-body">{t('body2')}</p>
        <p className="section-body">{t('body3')}</p>
        <a href="#booking" className="btn-outline" style={{ marginTop: 32, display: 'inline-block' }}>
          {t('readStoryBtn')}
        </a>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-num">15+</div>
            <div className="stat-label">{t('stats.brides')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">20+</div>
            <div className="stat-label">{t('stats.gowns')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">{t('stats.love')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
