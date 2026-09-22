import type { Locale } from './locales';

const EN = {
  formTitle: 'Request a B2B quote',
  formSub: 'OEM private label or wholesale — we reply with MOQ and next steps.',
  wa: 'WhatsApp',
};

export function getContactCopy(_locale: Locale = 'en') {
  return EN;
}
