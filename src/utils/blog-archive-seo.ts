// Do not append brand here — Layout titleTemplate already adds " | GutSource".
const BLOG_OG_DEFAULT = { url: '/brand/logo-lockup.png', width: 1200, height: 628 };

const categoryDescriptions: Record<string, string> = {
  'Sourcing Guide':
    'B2B sourcing articles on digestive enzymes & probiotics OEM, wholesale MOQ, custom artwork, private label, and factory partnerships from GutSource.',
  'Product Knowledge':
    'digestive enzymes & probiotics product knowledge for brands and distributors — enzyme blends, probiotic formats, and catalog planning.',
};

const categoryTitles: Record<string, string> = {
  'Sourcing Guide': 'digestive enzymes & probiotics Sourcing Guide',
  'Product Knowledge': 'digestive enzymes & probiotics Product Knowledge',
};

export function getBlogArchiveOpenGraph(_categoryTitle?: string) {
  return { type: 'website' as const, images: [BLOG_OG_DEFAULT] };
}

export function getBlogListMetadata(page: number) {
  const pageSuffix = page > 1 ? ` — Page ${page}` : '';
  return {
    title: `digestive enzymes & probiotics OEM Blog${pageSuffix}`,
    description:
      'OEM sourcing guides for custom digestive enzymes and probiotics, wholesale buyers, private label packaging, and factory-direct dietary supplement production.',
    openGraph: getBlogArchiveOpenGraph(),
  };
}

export function getBlogCategoryMetadata(categoryTitle: string, page: number) {
  const pageSuffix = page > 1 ? ` — Page ${page}` : '';
  const title = categoryTitles[categoryTitle] ?? categoryTitle;
  const description =
    categoryDescriptions[categoryTitle] ??
    `Articles in ${categoryTitle} from GutSource — digestive enzymes & probiotics OEM insights for wholesale buyers.`;

  return {
    title: `${title}${pageSuffix}`,
    description,
    openGraph: getBlogArchiveOpenGraph(categoryTitle),
  };
}

export function getBlogTagMetadata(tagTitle: string, page: number) {
  const pageSuffix = page > 1 ? ` — Page ${page}` : '';
  return {
    title: `${tagTitle} Articles${pageSuffix}`,
    description: `Blog posts tagged "${tagTitle}" — B2B digestive enzymes & probiotics manufacturing, sourcing, and private label insights from GutSource.`,
    openGraph: getBlogArchiveOpenGraph(),
  };
}
