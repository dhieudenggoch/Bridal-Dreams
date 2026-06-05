import { useTranslations } from 'next-intl';
import Image from 'next/image';

type CollectionKey = 'ballGown' | 'sheath' | 'aLine' | 'lace' | 'mermaid';
type SubKey = 'ballGownSub' | 'sheathSub' | 'aLineSub' | 'laceSub' | 'mermaidSub';
type BtnKey = 'viewCollection' | 'view';

interface CollectionItem {
  key: CollectionKey;
  subKey: SubKey;
  btnKey: BtnKey;
  src: string;
  alt: string;
}

const collectionItems: CollectionItem[] = [
  { key: 'ballGown', subKey: 'ballGownSub', btnKey: 'viewCollection', src: '/images/gown-02.jpg', alt: 'Ball Gown' },
  { key: 'sheath', subKey: 'sheathSub', btnKey: 'view', src: '/images/gown-07.jpg', alt: 'Sheath Gown' },
  { key: 'aLine', subKey: 'aLineSub', btnKey: 'view', src: '/images/gown-12.jpg', alt: 'A-Line Gown' },
  { key: 'lace', subKey: 'laceSub', btnKey: 'view', src: '/images/gown-16.jpg', alt: 'Lace Gown' },
  { key: 'mermaid', subKey: 'mermaidSub', btnKey: 'viewCollection', src: '/images/gown-03.jpg', alt: 'Mermaid Gown' },
];

export default function CollectionsSection() {
  const t = useTranslations('collections');

  return (
    <section id="collections">
      <div className="collections-header reveal">
        <div className="section-label">{t('label')}</div>
        <h2 className="section-title">
          {t('titleLine1')} <em>{t('titleItalic')}</em>
        </h2>
      </div>

      <div className="collections-grid reveal">
        {collectionItems.map((col) => (
          <div key={col.key} className="collection-card">
            <Image src={col.src} alt={col.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="collection-overlay">
              <div className="collection-info">
                <h3>{t(col.key)}</h3>
                <p>{t(col.subKey)}</p>
                <a href="#booking" className="collection-view-btn">{t(col.btnKey)}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
