export const LOCALES = ['en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const I18N_LOCALES = [] as const;

export const LOCALE_META: Record<
  Locale,
  { name: string; htmlLang: string; ogLocale: string; dir: 'ltr' }
> = {
  en: { name: 'English', htmlLang: 'en', ogLocale: 'en_US', dir: 'ltr' },
};

const PAGE_KEYS = ['/', '/oem', '/wholesale', '/about', '/contact', '/blog', '/privacy', '/terms'] as const;

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && (LOCALES as readonly string[]).includes(value));
}

export function getLocaleFromPath(_pathname: string): Locale {
  return 'en';
}

export function stripLocale(pathname: string): string {
  const path = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  return path;
}

export function localizePath(path: string, _locale: Locale): string {
  return stripLocale(path);
}

export function getHreflangMap(pathname: string): Record<Locale, string> | null {
  const key = stripLocale(pathname);
  const isStaticPage = (PAGE_KEYS as readonly string[]).includes(key);
  const isBlogPost = /^\/[a-z0-9-]+$/.test(key) && key !== '/blog';
  if (!isStaticPage && !isBlogPost) return null;
  return { en: key } as Record<Locale, string>;
}

export function switchLocalePath(pathname: string, _target: Locale): string {
  const hash = pathname.includes('#') ? `#${pathname.split('#')[1]}` : '';
  return stripLocale(pathname) + hash;
}

export const WHATSAPP_BY_LOCALE: Record<Locale, string> = {
  en: 'Hello, I would like to inquire about GutSource digestive enzyme / probiotic OEM or wholesale. Please send MOQ, sampling, and pricing. Thank you!',
};

export const WHATSAPP_MESSAGE_ES = WHATSAPP_BY_LOCALE.en;
