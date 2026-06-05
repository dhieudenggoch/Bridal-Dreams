import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for locale cookie (user's explicit choice)
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;

  // If user visits root, redirect based on cookie or Accept-Language
  if (pathname === '/') {
    let targetLocale = defaultLocale;

    if (localeCookie && (locales as readonly string[]).includes(localeCookie)) {
      targetLocale = localeCookie as typeof locales[number];
    } else {
      // Detect from Accept-Language header
      const acceptLanguage = request.headers.get('accept-language') || '';
      const preferredLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      if (preferredLang === 'ar') {
        targetLocale = 'ar';
      }
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${targetLocale}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
