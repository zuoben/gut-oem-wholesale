import { localizePath, type Locale } from './locales';

type NavGroup = { title: string; links: { text: string; href: string }[] };

export function getHeaderFooter(locale: Locale) {
  const p = (path: string) => localizePath(path, locale);
  const home = p('/');
  return {
    header: {
      links: [
        { text: 'Home', href: home },
        { text: 'OEM / Private Label', href: p('/oem') },
        { text: 'Wholesale', href: p('/wholesale') },
        { text: 'Blog', href: p('/blog') },
        { text: 'About', href: p('/about') },
        { text: 'Contact', href: p('/contact') },
      ],
      actions: [{ text: 'Request Quote', href: `${p('/contact')}#inquiry-form`, variant: 'primary' as const }],
    },
    footer: {
      links: [
        {
          title: 'Company',
          links: [
            { text: 'Home', href: home },
            { text: 'About', href: p('/about') },
            { text: 'Blog', href: p('/blog') },
            { text: 'Contact', href: `${p('/contact')}#inquiry-form` },
          ],
        },
        {
          title: 'B2B Channels',
          links: [
            { text: 'OEM / Private Label', href: p('/oem') },
            { text: 'Wholesale Account', href: p('/wholesale') },
            { text: 'Request Quote', href: `${p('/contact')}#inquiry-form` },
          ],
        },
        {
          title: 'Support',
          links: [
            { text: 'Samples', href: `${p('/contact')}#inquiry-form` },
            { text: 'FAQ', href: `${home}#faq` },
            { text: 'Sourcing Notes', href: p('/blog') },
            { text: 'Compliance note', href: `${home}#compliance` },
          ],
        },
      ] satisfies NavGroup[],
      secondaryLinks: [
        { text: 'Terms', href: p('/terms') },
        { text: 'Privacy Policy', href: p('/privacy') },
      ],
      socialLinks: [],
      footNote: `Made by <a class="text-primary underline dark:text-accent" href="${home}">GutSource</a> · Dietary supplements · Structure/function only · All rights reserved.`,
    },
  };
}
