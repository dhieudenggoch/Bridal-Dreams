'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: `#about`, label: t('story') },
    { href: `#collections`, label: t('collections') },
    { href: `#gallery`, label: t('gallery') },
    { href: `#testimonials`, label: t('brides') },
    { href: `#booking`, label: t('appointments') },
  ];

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href={`/${locale}`} className="nav-logo">
          Bridal Dreams
          <span>{locale === 'ar' ? 'أحلام العرائس' : 'Luxury Bridal Atelier'}</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <LanguageSwitcher />
          <a href="#booking" className="nav-cta">{t('bookCta')}</a>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          ×
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
        <a href="#booking" className="nav-cta" onClick={() => setMobileOpen(false)}>{t('bookCta')}</a>
        <LanguageSwitcher inMobileMenu />
      </div>
    </>
  );
}
