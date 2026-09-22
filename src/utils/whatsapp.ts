const WHATSAPP_PHONE = '8618302919628';

export const WHATSAPP_PHONES = [WHATSAPP_PHONE] as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello, I would like to inquire about GutSource digestive enzyme / probiotic OEM or wholesale. Please send MOQ, sampling, and pricing. Thank you!';

export function getWhatsAppPhoneNumber(_date: Date = new Date()): string {
  return WHATSAPP_PHONE;
}

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE, date: Date = new Date()): string {
  const phoneNumber = getWhatsAppPhoneNumber(date);
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
