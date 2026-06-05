'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

interface LanguageSwitcherProps {
  inMobileMenu?: boolean;
}

export default function LanguageSwitcher({ inMobileMenu = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    // Save preference in cookie (1 year)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;

    // Swap locale in pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="lang-switcher" style={inMobileMenu ? { marginTop: 16 } : {}}>
      <button
        className={`lang-btn${locale === 'en' ? ' active' : ''}`}
        onClick={() => switchLocale('en')}
        disabled={isPending}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider" />
      <button
        className={`lang-btn${locale === 'ar' ? ' active' : ''}`}
        onClick={() => switchLocale('ar')}
        disabled={isPending}
        aria-label="Switch to Arabic"
        style={{ fontFamily: 'var(--font-arabic)', letterSpacing: 0 }}
      >
        عربي
      </button>
    </div>
  );
}
