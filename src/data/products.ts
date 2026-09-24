/**
 * Representative OEM capability examples for GutSource (B2B).
 * Sourced from public 1688 indexed cards — not retail SKUs for cart checkout.
 * Specs are limited to visible card wording (1688 login/captcha can block fuller offer pages).
 */

export type ProductCategory = 'enzyme' | 'probiotic' | 'fiber';

export type Product = {
  id: string;
  slug: string;
  name: string;
  nameZh: string;
  category: ProductCategory;
  format: string;
  specs: string[];
  sellingPoints: string[];
  /** Public path under /products/... */
  image: string;
  sourceNote: string;
};

export const SOURCE_NOTE =
  'Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only.';

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  enzyme: 'Digestive Enzymes',
  probiotic: 'Probiotics',
  fiber: 'Fiber Powder',
};

export const products: Product[] = [
  {
    id: 'enzyme-bromelain-multi-spec',
    slug: 'enzyme-bromelain-multi-spec',
    name: 'Bromelain powder — multi-spec, OEM/ODM',
    nameZh: '菠萝蛋白酶粉（多种规格，OEM/ODM）',
    category: 'enzyme',
    format: 'powder',
    specs: ['Multiple specifications', 'Stock supply shown'],
    sellingPoints: [
      'Bromelain powder ingredient for light dietary-supplement formulations',
      'Multiple specifications shown on indexed cards',
      'OEM/ODM one-stop service direction',
      'Stock supply and sample support wording shown',
    ],
    image: '/products/enzyme-bromelain-01.jpg',
    sourceNote: SOURCE_NOTE,
  },
  {
    id: 'enzyme-bromelain-oem-odm',
    slug: 'enzyme-bromelain-oem-odm',
    name: 'Bromelain powder — one-stop OEM/ODM processing',
    nameZh: '菠萝蛋白酶粉 OEM/ODM 一站式加工',
    category: 'enzyme',
    format: 'powder',
    specs: ['Bromelain enzyme powder', 'Ready-stock / fast-dispatch wording'],
    sellingPoints: [
      'Dry enzyme powder format for private-label programs',
      'OEM/ODM one-stop processing direction',
      'Ready-stock and fast-dispatch wording shown',
      'Volume-order pricing support shown on cards',
    ],
    image: '/products/enzyme-bromelain-02.jpg',
    sourceNote: SOURCE_NOTE,
  },
  {
    id: 'probiotic-magenvital-oem-30',
    slug: 'probiotic-magenvital-oem-30',
    name: 'German probiotic capsules — 30-count OEM private label',
    nameZh: '德国益生菌胶囊 OEM 贴牌（30粒）',
    category: 'probiotic',
    format: 'capsule',
    specs: ['30 capsules per box (example)'],
    sellingPoints: [
      'Capsule format with 30-count pack shown',
      'OEM / private-label packaging direction',
      'Packaging, formula, and specification customization shown',
      'Packaging design support shown',
    ],
    image: '/products/probiotic-magenvital-01.jpg',
    sourceNote: SOURCE_NOTE,
  },
  {
    id: 'probiotic-japan-56-pack',
    slug: 'probiotic-japan-56-pack',
    name: 'Japanese probiotic sachet — 56-count pack',
    nameZh: '日本益生菌（56粒/袋，授权/一件代发）',
    category: 'probiotic',
    format: 'powder',
    specs: ['56-count pack (example)', 'Authorization support shown'],
    sellingPoints: [
      'Lightweight single-pack format for dietary-supplement programs',
      '56-count pack shown on indexed cards',
      'Authorization support wording shown',
      'One-piece dropshipping support shown (logistics option — not a disease claim)',
    ],
    image: '/products/probiotic-japan-01.jpg',
    sourceNote: SOURCE_NOTE,
  },
  {
    id: 'fiber-composite-oem-box',
    slug: 'fiber-composite-oem-box',
    name: 'Composite fiber powder — OEM package concept',
    nameZh: '复合纤维粉 OEM 包装定制',
    category: 'fiber',
    format: 'powder',
    specs: ['Composite dietary-fiber powder', 'OEM package example'],
    sellingPoints: [
      'Composite dietary-fiber powder format',
      'OEM package concept shown',
      'Retail-ready box direction for private label',
      'Light, dry-format product suitable for brand packaging',
    ],
    image: '/products/fiber-composite-01.jpg',
    sourceNote: SOURCE_NOTE,
  },
  {
    id: 'fiber-inulin-soluble-oem',
    slug: 'fiber-inulin-soluble-oem',
    name: 'Inulin soluble dietary-fiber powder drink OEM',
    nameZh: '菊粉可溶性膳食纤维固体饮料 OEM',
    category: 'fiber',
    format: 'powder',
    specs: [
      'Inulin soluble dietary-fiber solid drink (powder)',
      'Cross-border e-commerce positioning shown',
      'On-demand customization',
    ],
    sellingPoints: [
      'Inulin soluble dietary-fiber powder format',
      'Cross-border e-commerce positioning shown',
      'On-demand customization for formula and pack',
      'Flavor, formula, and packaging customization shown',
      'Free design / sample wording shown on cards',
    ],
    image: '/products/fiber-inulin-01.jpg',
    sourceNote: SOURCE_NOTE,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
