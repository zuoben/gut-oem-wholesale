import { getSiteUrl } from '~/utils/site-url';

export const ORGANIZATION_ID = `${getSiteUrl()}/#organization`;

export function buildOrganizationSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'GutSource',
    alternateName: ['GutSource OEM', 'GutSource Wholesale'],
    url: `${siteUrl}/`,
    logo: `${siteUrl}/brand/logo-mark.png`,
    description:
      'B2B partner for private label digestive enzymes and probiotics — OEM custom formulas and wholesale case packs for brands, retailers, gyms, and distributors. Dietary supplement structure/function language only.',
    image: `${siteUrl}/brand/logo-mark.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Private label digestive enzymes',
      'Private label probiotics',
      'OEM dietary supplements',
      'Wholesale probiotics',
      'Digestive enzyme manufacturer',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+86-183-0291-9628',
        availableLanguage: ['English', 'Chinese'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

export function buildManufacturingPlantSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/about/#facility`,
    name: 'GutSource Partner Facility',
    url: `${siteUrl}/about`,
    parentOrganization: { '@id': ORGANIZATION_ID },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
    },
    description:
      'Partner manufacturing for digestive enzyme capsules, probiotic formulas, and optional fiber powder — private label and wholesale dietary supplements.',
    areaServed: 'Worldwide',
  };
}

export function buildAboutPageSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteUrl}/about/#webpage`,
    url: `${siteUrl}/about`,
    name: 'About GutSource',
    description:
      'GutSource helps brands and retailers launch or restock digestive enzyme and probiotic dietary supplements via OEM private label and wholesale.',
    isPartOf: { '@type': 'WebSite', url: `${siteUrl}/` },
    about: { '@id': ORGANIZATION_ID },
  };
}

export function buildContactPageSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}/contact/#webpage`,
    url: `${siteUrl}/contact`,
    name: 'Contact GutSource — OEM & Wholesale Inquiry',
    description:
      'Request OEM private label or wholesale pricing for digestive enzymes and probiotics. B2B inquiry form and WhatsApp.',
    isPartOf: { '@type': 'WebSite', url: `${siteUrl}/` },
    about: { '@id': ORGANIZATION_ID },
  };
}

export function buildBlogPostingSchema(post: {
  title: string;
  excerpt?: string;
  publishDate: Date;
  updateDate?: Date;
  imageUrl?: string;
  url: string;
}) {
  const siteUrl = getSiteUrl();
  const image = post.imageUrl?.startsWith('http')
    ? post.imageUrl
    : post.imageUrl
      ? `${siteUrl}${post.imageUrl}`
      : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: post.url,
    mainEntityOfPage: post.url,
    datePublished: post.publishDate.toISOString(),
    dateModified: (post.updateDate ?? post.publishDate).toISOString(),
    author: { '@type': 'Organization', '@id': ORGANIZATION_ID },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/brand/logo-mark.png` },
    },
    ...(image ? { image } : {}),
  };
}
