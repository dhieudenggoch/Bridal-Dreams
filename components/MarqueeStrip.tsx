import { useTranslations } from 'next-intl';

export default function MarqueeStrip() {
  const t = useTranslations('marquee');
  const text = t('text');

  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {[...Array(4)].map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
