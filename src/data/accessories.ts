/**
 * Catalog accessories — table covers / play mats, sold with or without a tile set.
 */

export type AccessoryKind = 'table-cover';
export type AccessoryTheme = 'halloween' | 'hanukkah';

export interface AccessoryItem {
  slug: string;
  name: string;
  shortName: string;
  kind: AccessoryKind;
  theme: AccessoryTheme;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  pairsWith?: string;
  inquiryHint: string;
  articleHref?: string;
}

const COVER_ARTICLE = '/american-mahjong-table-covers';

export const TABLE_COVERS: AccessoryItem[] = [
  {
    slug: 'cover-halloween-ghost-castle',
    name: 'Ghost Castle Table Cover',
    shortName: 'Ghost Castle',
    kind: 'table-cover',
    theme: 'halloween',
    tagline: 'Moonlit castle · ghosts · night table',
    description: 'Black Halloween play mat — castle, moon, and friendly ghosts with a gold corner frame.',
    image: '/manjongg/accessories/cover-halloween-ghost-castle.jpg',
    alt: 'Halloween mahjong table cover — ghosts and castle under a full moon',
    pairsWith: 'Twilight Cobweb',
    inquiryHint: 'Table cover: Ghost Castle',
    articleHref: COVER_ARTICLE,
  },
  {
    slug: 'cover-halloween-witch-flight',
    name: 'Witch Flight Table Cover',
    shortName: 'Witch Flight',
    kind: 'table-cover',
    theme: 'halloween',
    tagline: 'Purple night · broomstick · cobweb border',
    description: 'Purple Halloween mat — witch in flight across a full moon, bats and spider-web corners.',
    image: '/manjongg/accessories/cover-halloween-witch-flight.jpg',
    alt: 'Halloween mahjong table cover — witch flying across a purple moon',
    pairsWith: 'Twilight Cobweb',
    inquiryHint: 'Table cover: Witch Flight',
    articleHref: COVER_ARTICLE,
  },
  {
    slug: 'cover-halloween-hat-broom',
    name: 'Hat & Broom Table Cover',
    shortName: 'Hat & Broom',
    kind: 'table-cover',
    theme: 'halloween',
    tagline: 'Cream field · hat · broom · vintage webs',
    description: 'Cream Halloween mat — purple witch hat and broom on a vintage web-and-branch border.',
    image: '/manjongg/accessories/cover-halloween-hat-broom.jpg',
    alt: 'Halloween mahjong table cover — witch hat and broom on a cream field',
    pairsWith: 'Twilight Cobweb',
    inquiryHint: 'Table cover: Hat & Broom',
    articleHref: COVER_ARTICLE,
  },
  {
    slug: 'cover-halloween-pumpkin-town',
    name: 'Pumpkin Town Table Cover',
    shortName: 'Pumpkin Town',
    kind: 'table-cover',
    theme: 'halloween',
    tagline: 'Orange skyline · jack-o’-lanterns · party table',
    description: 'Orange Halloween mat — pumpkin town skyline, bats, and “Happy Halloween” party energy.',
    image: '/manjongg/accessories/cover-halloween-pumpkin-town.jpg',
    alt: 'Halloween mahjong table cover — orange pumpkin town and Happy Halloween lettering',
    pairsWith: 'Twilight Cobweb',
    inquiryHint: 'Table cover: Pumpkin Town',
    articleHref: COVER_ARTICLE,
  },
  {
    slug: 'cover-hanukkah-tile',
    name: 'Festival Tile Table Cover',
    shortName: 'Festival Tile',
    kind: 'table-cover',
    theme: 'hanukkah',
    tagline: 'Menorah · dreidel · geometric gift border',
    description: 'Ivory Hanukkah mat — tiled border of menorahs, dreidels, gifts, and stars around a clear play field.',
    image: '/manjongg/accessories/cover-hanukkah-tile.jpg',
    alt: 'Hanukkah mahjong table cover — geometric menorah and dreidel border',
    pairsWith: 'Festival Celebration',
    inquiryHint: 'Table cover: Festival Tile',
    articleHref: COVER_ARTICLE,
  },
  {
    slug: 'cover-hanukkah-watercolor',
    name: 'Festival Ribbon Table Cover',
    shortName: 'Festival Ribbon',
    kind: 'table-cover',
    theme: 'hanukkah',
    tagline: 'Watercolor ribbons · candles · hostess gifts',
    description: 'Soft watercolor Hanukkah mat — ribbons, menorahs, dreidels, and gifts around an open center.',
    image: '/manjongg/accessories/cover-hanukkah-watercolor.jpg',
    alt: 'Hanukkah mahjong table cover — watercolor ribbons, menorahs, and dreidels',
    pairsWith: 'Festival Celebration',
    inquiryHint: 'Table cover: Festival Ribbon',
    articleHref: COVER_ARTICLE,
  },
  {
    slug: 'cover-hanukkah-deco',
    name: 'Festival Deco Table Cover',
    shortName: 'Festival Deco',
    kind: 'table-cover',
    theme: 'hanukkah',
    tagline: 'Navy · gold · Art Deco menorah',
    description: 'Navy-and-gold Deco Hanukkah mat — menorahs, dreidels, and a faint star at center.',
    image: '/manjongg/accessories/cover-hanukkah-deco.jpg',
    alt: 'Hanukkah mahjong table cover — navy and gold Art Deco menorah frame',
    pairsWith: 'Festival Celebration',
    inquiryHint: 'Table cover: Festival Deco',
    articleHref: COVER_ARTICLE,
  },
];

export function getTableCovers(): AccessoryItem[] {
  return TABLE_COVERS;
}

export function getAccessories(): AccessoryItem[] {
  return TABLE_COVERS;
}
