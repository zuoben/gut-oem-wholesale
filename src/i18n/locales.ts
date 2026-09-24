export const LOCALES = [
  'en',
  'zh-tw',
  'hi',
  'es',
  'ar',
  'fr',
  'bn',
  'pt',
  'ru',
  'ur',
  'id',
  'de',
  'ja',
  'ko',
  'vi',
  'th',
] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const I18N_LOCALES = LOCALES.filter((l): l is Exclude<Locale, 'en'> => l !== 'en');

export const LOCALE_META: Record<
  Locale,
  { name: string; htmlLang: string; ogLocale: string; dir: 'ltr' | 'rtl' }
> = {
  en: { name: 'English', htmlLang: 'en', ogLocale: 'en_US', dir: 'ltr' },
  'zh-tw': { name: '繁體中文', htmlLang: 'zh-Hant', ogLocale: 'zh_TW', dir: 'ltr' },
  hi: { name: 'हिन्दी', htmlLang: 'hi', ogLocale: 'hi_IN', dir: 'ltr' },
  es: { name: 'Español', htmlLang: 'es', ogLocale: 'es', dir: 'ltr' },
  ar: { name: 'العربية', htmlLang: 'ar', ogLocale: 'ar_SA', dir: 'rtl' },
  fr: { name: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
  bn: { name: 'বাংলা', htmlLang: 'bn', ogLocale: 'bn_BD', dir: 'ltr' },
  pt: { name: 'Português', htmlLang: 'pt', ogLocale: 'pt_BR', dir: 'ltr' },
  ru: { name: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU', dir: 'ltr' },
  ur: { name: 'اردو', htmlLang: 'ur', ogLocale: 'ur_PK', dir: 'rtl' },
  id: { name: 'Bahasa Indonesia', htmlLang: 'id', ogLocale: 'id_ID', dir: 'ltr' },
  de: { name: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE', dir: 'ltr' },
  ja: { name: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP', dir: 'ltr' },
  ko: { name: '한국어', htmlLang: 'ko', ogLocale: 'ko_KR', dir: 'ltr' },
  vi: { name: 'Tiếng Việt', htmlLang: 'vi', ogLocale: 'vi_VN', dir: 'ltr' },
  th: { name: 'ไทย', htmlLang: 'th', ogLocale: 'th_TH', dir: 'ltr' },
};

const PAGE_KEYS = [
  '/',
  '/oem',
  '/wholesale',
  '/products',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/privacy',
  '/terms',
] as const;

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && (LOCALES as readonly string[]).includes(value));
}

export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return isLocale(first) ? first : 'en';
}

export function stripLocale(pathname: string): string {
  const path = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return path;
}

export function localizePath(path: string, locale: Locale): string {
  const clean = stripLocale(path);
  if (locale === 'en') return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

export function getHreflangMap(pathname: string): Record<Locale, string> | null {
  const key = stripLocale(pathname);
  const isStaticPage = (PAGE_KEYS as readonly string[]).includes(key);
  const isProductDetail = /^\/products\/[a-z0-9-]+$/.test(key);
  if (!isStaticPage && !isProductDetail) return null;
  return Object.fromEntries(LOCALES.map((locale) => [locale, localizePath(key, locale)])) as Record<
    Locale,
    string
  >;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const hash = pathname.includes('#') ? `#${pathname.split('#')[1]}` : '';
  const map = getHreflangMap(pathname);
  if (map) return map[target] + hash;
  if (target === 'en') return stripLocale(pathname) + hash;
  return localizePath('/', target) + hash;
}

export const WHATSAPP_BY_LOCALE: Record<Locale, string> = {
  en: 'Hello, I would like to inquire about GutSource digestive enzyme / probiotic OEM or wholesale. Please send MOQ, sampling, and pricing. Thank you!',
  'zh-tw': '您好，想詢問 GutSource 消化酶／益生菌 OEM 貼牌或批發。請提供 MOQ、樣品方案與報價，謝謝。',
  hi: 'नमस्ते, मैं GutSource डाइजेस्टिव एंजाइम / प्रोबायोटिक OEM या होलसेल के बारे में पूछताछ करना चाहता/चाहती हूँ। कृपया MOQ, सैंपल और मूल्य भेजें। धन्यवाद!',
  es: 'Hola, quiero consultar enzimas digestivas / probióticos OEM o mayoreo con GutSource. Por favor envíen MOQ, muestreo y precios. Gracias.',
  ar: 'مرحباً، أود الاستفسار عن إنزيمات هضمية / بروبيوتيك OEM أو الجملة من GutSource. يرجى إرسال الحد الأدنى للطلب والعينات والأسعار. شكراً.',
  fr: 'Bonjour, je souhaite un devis GutSource pour enzymes digestives / probiotiques (OEM ou gros). Merci d’envoyer MOQ, échantillons et tarifs.',
  bn: 'হ্যালো, আমি GutSource ডাইজেস্টিভ এনজাইম / প্রোবায়োটিক OEM বা হোলসেল সম্পর্কে জানতে চাই। অনুগ্রহ করে MOQ, নমুনা এবং মূল্য পাঠান। ধন্যবাদ!',
  pt: 'Olá, quero consultar enzimas digestivas / probióticos OEM ou atacado com a GutSource. Por favor enviem MOQ, amostras e preços. Obrigado.',
  ru: 'Здравствуйте! Хочу запросить OEM / опт пищеварительных ферментов и пробиотиков GutSource. Пришлите MOQ, образцы и цены. Спасибо!',
  ur: 'السلام علیکم، میں GutSource ڈائجسٹو اینزائم / پروبائیوٹک OEM یا ہول سیل کے بارے میں پوچھنا چاہتا/چاہتی ہوں۔ براہ کرم MOQ، سیمپل اور قیمت بھیجیں۔ شکریہ!',
  id: 'Halo, saya ingin menanyakan enzim pencernaan / probiotik OEM atau grosir GutSource. Mohon kirim MOQ, sampel, dan harga. Terima kasih.',
  de: 'Hallo, ich möchte Verdauungsenzyme / Probiotika OEM oder Großhandel bei GutSource anfragen. Bitte senden Sie MOQ, Muster und Preise. Danke!',
  ja: 'こんにちは。GutSourceの消化酵素／プロバイオティクスのOEMまたは卸売について問い合わせたいです。MOQ・サンプル・価格をお送りください。',
  ko: '안녕하세요. GutSource 소화 효소/프로바이오틱 OEM 또는 도매 문의드립니다. MOQ, 샘플, 가격을 보내주세요.',
  vi: 'Xin chào, tôi muốn hỏi OEM hoặc bán sỉ enzyme tiêu hóa / probiotic của GutSource. Vui lòng gửi MOQ, mẫu và bảng giá. Cảm ơn!',
  th: 'สวัสดีครับ/ค่ะ ต้องการสอบถามเอนไซม์ย่อยอาหาร / โปรไบโอติก OEM หรือขายส่งกับ GutSource กรุณาส่ง MOQ ตัวอย่าง และราคา ขอบคุณครับ/ค่ะ',
};

export const WHATSAPP_MESSAGE_ES = WHATSAPP_BY_LOCALE.es;
