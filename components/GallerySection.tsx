'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gown-04.jpg', alt: 'Bridal gown 1' },
  { src: '/images/gown-08.jpg', alt: 'Bridal gown 2' },
  { src: '/images/gown-13.jpg', alt: 'Bridal gown 3' },
  { src: '/images/gown-17.jpg', alt: 'Bridal gown 4' },
  { src: '/images/gown-05.jpg', alt: 'Bridal gown 5' },
  { src: '/images/gown-09.jpg', alt: 'Bridal gown 6' },
  { src: '/images/gown-14.jpg', alt: 'Bridal gown 7' },
  { src: '/images/gown-18.jpg', alt: 'Bridal gown 8' },
  { src: '/images/gown-10.jpg', alt: 'Bridal gown 9' },
  { src: '/images/gown-15.jpg', alt: 'Bridal gown 10' },
  { src: '/images/gown-19.jpg', alt: 'Bridal gown 11' },
  { src: '/images/gown-11.jpg', alt: 'Bridal gown 12' },
];

export default function GallerySection() {
  const t = useTranslations('gallery');
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const prev = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setCurrentIndex((i) => (i + 1) % galleryImages.length);

  return (
    <>
      <section id="gallery">
        <div className="gallery-header reveal">
          <div className="section-label">{t('label')}</div>
          <h2 className="section-title">
            {t('titleLine1')} <em>{t('titleItalic')}</em>
          </h2>
        </div>
        <div className="gallery-masonry reveal" id="galleryGrid">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item" onClick={() => openViewer(i)}>
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={i % 3 === 0 ? 600 : 400}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="gallery-item-overlay">
                <span className="gallery-zoom-icon">⊕</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Viewer */}
      <div className={`viewer-overlay${viewerOpen ? ' active' : ''}`}>
        <button className="viewer-close" onClick={() => setViewerOpen(false)}>×</button>
        <div className="viewer-img-wrap">
          <button className="viewer-nav prev" onClick={prev}>‹</button>
          <Image
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            width={900}
            height={700}
            style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain' }}
          />
          <button className="viewer-nav next" onClick={next}>›</button>
        </div>
        <div className="viewer-info">
          <div className="viewer-counter">{currentIndex + 1} / {galleryImages.length}</div>
        </div>
      </div>
    </>
  );
}
