import type { Disclaimer, Input, Textarea } from '~/types';

/** Structured quote fields — shared by /contact and WhatsApp lead gate. */

export const inquiryFormInputs: Input[] = [
  {
    type: 'select',
    name: 'company',
    label: 'I am a',
    placeholder: 'Select…',
    required: true,
    options: [
      { value: 'Brand owner', label: 'Brand / private-label brand' },
      { value: 'Retailer', label: 'Retailer / store' },
      { value: 'Gym / spa', label: 'Gym / spa / wellness center' },
      { value: 'Distributor', label: 'Distributor / wholesaler' },
      { value: 'Other', label: 'Other B2B buyer' },
    ],
  },
  {
    type: 'select',
    name: 'channel',
    label: "I'm looking for",
    placeholder: 'Select…',
    required: true,
    options: [
      { value: 'OEM custom formula', label: 'OEM custom formula' },
      { value: 'Private label', label: 'Private label (standard formula + your brand)' },
      { value: 'Wholesale pricing', label: 'Wholesale pricing / open account' },
      { value: 'Sample', label: 'Sample request' },
    ],
  },
  {
    type: 'select',
    name: 'volume',
    label: 'Estimated volume',
    placeholder: 'Select…',
    required: true,
    options: [
      { value: 'Sample only', label: 'Sample only' },
      { value: 'Under 50 cases', label: 'Under 50 cases / bottles' },
      { value: '50-200 cases', label: '50–200 cases' },
      { value: '200-1000 cases', label: '200–1,000 cases' },
      { value: '1000+ cases', label: '1,000+ cases' },
    ],
  },
  { type: 'text', name: 'name', label: 'Name', placeholder: 'Your name' },
  { type: 'email', name: 'email', label: 'Email', placeholder: 'you@company.com' },
];

export const inquiryFormTextarea: Textarea = {
  label: 'Message',
  name: 'message',
  placeholder: 'SKU interest (digestive enzymes / probiotics / fiber), format, label needs, ship-to country, timeline…',
  rows: 3,
};

export const inquiryFormDisclaimer: Disclaimer = {
  label: 'I agree to be contacted by GutSource regarding OEM, private label, and wholesale inquiries.',
};

export const inquiryFormButton = 'Request B2B Quote';

export const inquiryFormDescription =
  'Tell us who you are and what you need — we send MOQ tiers, sampling options, and next steps.';

export const inquiryWhatsAppLead = {
  inputs: inquiryFormInputs,
  textarea: { ...inquiryFormTextarea, rows: 2 },
  disclaimer: {
    label: 'You agree we may contact you about this OEM / wholesale inquiry via email or WhatsApp.',
  },
  button: 'Continue to WhatsApp',
  description: 'We save your quote request, then open WhatsApp.',
  title: 'Chat on WhatsApp',
  subtitle: 'Quick details first — quote follows in chat.',
};
