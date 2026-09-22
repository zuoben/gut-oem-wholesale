import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  en: {
    links: [
      { text: 'Home', href: '/' },
      { text: 'OEM / Private Label', href: getPermalink('/oem') },
      { text: 'Wholesale', href: getPermalink('/wholesale') },
      { text: 'Blog', href: getBlogPermalink() },
      { text: 'About', href: getPermalink('/about') },
      { text: 'Contact', href: getPermalink('/contact') },
    ],
    actions: [{ text: 'Request Quote', href: '/contact#inquiry-form', variant: 'primary' }],
  },
};

export const footerData = {
  en: {
    links: [
      {
        title: 'Company',
        links: [
          { text: 'Home', href: '/' },
          { text: 'About', href: '/about' },
          { text: 'Blog', href: '/blog' },
          { text: 'Contact', href: '/contact#inquiry-form' },
        ],
      },
      {
        title: 'B2B Channels',
        links: [
          { text: 'OEM / Private Label', href: '/oem' },
          { text: 'Wholesale Account', href: '/wholesale' },
          { text: 'Digestive Enzymes', href: '/oem#enzymes' },
          { text: 'Probiotics', href: '/oem#probiotics' },
          { text: 'Fiber Powder (optional)', href: '/oem#fiber' },
        ],
      },
      {
        title: 'Support',
        links: [
          { text: 'Request Quote', href: '/contact#inquiry-form' },
          { text: 'Sample Requests', href: '/contact#inquiry-form' },
          { text: 'FAQ', href: '/#faq' },
          { text: 'Sourcing Notes', href: '/blog' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Terms', href: getPermalink('/terms') },
      { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [],
    footNote: `
      Made by <a class="text-primary underline dark:text-accent" href="/">GutSource</a> · Dietary supplements · Structure/function only · All rights reserved.
    `,
  },
};
