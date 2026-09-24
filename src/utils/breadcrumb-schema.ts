import { type Locale } from '~/i18n/locales';
import { getSiteUrl } from '~/utils/site-url';

export type BreadcrumbCrumb = {
  name: string;
  path: string;
};

export const BREADCRUMB_HOME: Record<Locale, string> = {
  "en": "Home",
  "zh-tw": "首頁",
  "hi": "होम",
  "es": "Inicio",
  "ar": "الرئيسية",
  "fr": "Accueil",
  "bn": "হোম",
  "pt": "Início",
  "ru": "Главная",
  "ur": "ہوم",
  "id": "Beranda",
  "de": "Startseite",
  "ja": "ホーム",
  "ko": "홈",
  "vi": "Trang chủ",
  "th": "หน้าแรก"
};
export const BREADCRUMB_BLOG: Record<Locale, string> = {
  "en": "Blog",
  "zh-tw": "部落格",
  "hi": "ब्लॉग",
  "es": "Blog",
  "ar": "المدونة",
  "fr": "Blog",
  "bn": "ব্লগ",
  "pt": "Blog",
  "ru": "Блог",
  "ur": "بلاگ",
  "id": "Blog",
  "de": "Blog",
  "ja": "ブログ",
  "ko": "블로그",
  "vi": "Blog",
  "th": "บล็อก"
};
export const BREADCRUMB_PRODUCTS: Record<Locale, string> = {
  "en": "Products",
  "zh-tw": "產品",
  "hi": "उत्पाद",
  "es": "Productos",
  "ar": "المنتجات",
  "fr": "Produits",
  "bn": "পণ্য",
  "pt": "Produtos",
  "ru": "Продукты",
  "ur": "مصنوعات",
  "id": "Produk",
  "de": "Produkte",
  "ja": "製品",
  "ko": "제품",
  "vi": "Sản phẩm",
  "th": "ผลิตภัณฑ์"
};
export const BREADCRUMB_ABOUT: Record<Locale, string> = {
  "en": "About Us",
  "zh-tw": "關於我們",
  "hi": "हमारे बारे में",
  "es": "Nosotros",
  "ar": "من نحن",
  "fr": "À propos",
  "bn": "আমাদের সম্পর্কে",
  "pt": "Sobre",
  "ru": "О нас",
  "ur": "ہمارے بارے میں",
  "id": "Tentang",
  "de": "Über uns",
  "ja": "会社概要",
  "ko": "소개",
  "vi": "Giới thiệu",
  "th": "เกี่ยวกับเรา"
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
