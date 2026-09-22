import type { Locale } from './locales';
import {
  inquiryFormButton,
  inquiryFormDescription,
  inquiryFormDisclaimer,
  inquiryFormInputs,
  inquiryFormTextarea,
  inquiryWhatsAppLead,
} from '~/data/inquiry-form';

export function getInquiryForm(_locale: Locale = 'en') {
  return {
    button: inquiryFormButton,
    description: inquiryFormDescription,
    disclaimer: inquiryFormDisclaimer,
    inputs: inquiryFormInputs,
    textarea: inquiryFormTextarea,
    close: 'Close',
    preferChat: 'Prefer WhatsApp?',
    waLead: inquiryWhatsAppLead,
  };
}
