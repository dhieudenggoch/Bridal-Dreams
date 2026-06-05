import { useTranslations } from 'next-intl';

type FeatureKey = 'privateTitle' | 'privateDesc' | 'alterationsTitle' | 'alterationsDesc' | 'curationTitle' | 'curationDesc' | 'luxuryTitle' | 'luxuryDesc';

const features: { icon: string; titleKey: FeatureKey; descKey: FeatureKey }[] = [
  { icon: '✦', titleKey: 'privateTitle', descKey: 'privateDesc' },
  { icon: '✂', titleKey: 'alterationsTitle', descKey: 'alterationsDesc' },
  { icon: '◈', titleKey: 'curationTitle', descKey: 'curationDesc' },
  { icon: '◇', titleKey: 'luxuryTitle', descKey: 'luxuryDesc' },
];

export default function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section id="experience">
      <div className="experience-bg" />
      <div className="experience-content reveal">
        <div className="section-label" style={{ justifyContent: 'center' }}>{t('label')}</div>
        <h2 className="section-title">{t('titleLine1')} <em>{t('titleItalic')}</em></h2>
      </div>
      <div className="experience-features reveal">
        {features.map((f) => (
          <div key={f.titleKey} className="exp-feature">
            <div className="exp-icon">{f.icon}</div>
            <h3>{t(f.titleKey)}</h3>
            <p>{t(f.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
