import { type Locale } from '~/i18n/locales';
import { getSiteUrl } from '~/utils/site-url';

export type BreadcrumbCrumb = {
  name: string;
  path: string;
};

export const BREADCRUMB_HOME: Record<Locale, string> = {
  en: 'Home',
  es: 'Inicio',
  de: 'Startseite',
  fr: 'Accueil',
  ja: 'ホーム',
  'zh-tw': '首頁',
  ko: '홈',
  vi: 'Trang chủ',
};

export const BREADCRUMB_BLOG: Record<Locale, string> = {
  en: 'Blog',
  es: 'Blog',
  de: 'Blog',
  fr: 'Blog',
  ja: 'ブログ',
  'zh-tw': '部落格',
  ko: '블로그',
  vi: 'Blog',
};

export const BREADCRUMB_PRODUCTS: Record<Locale, string> = {
  en: 'Products',
  es: 'Productos',
  de: 'Produkte',
  fr: 'Produits',
  ja: '製品',
  'zh-tw': '產品',
  ko: '제품',
  vi: 'Sản phẩm',
};

export const BREADCRUMB_ABOUT: Record<Locale, string> = {
  en: 'About Us',
  es: 'Nosotros',
  de: 'Über uns',
  fr: 'À propos',
  ja: '会社概要',
  'zh-tw': '關於我們',
  ko: '소개',
  vi: 'Giới thiệu',
};

export function buildBreadcrumbList(crumbs: BreadcrumbCrumb[]) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => {
      const item = crumb.path.startsWith('http')
        ? crumb.path
        : crumb.path === '/'
          ? siteUrl
          : `${siteUrl}${crumb.path}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item,
      };
    }),
  };
}
