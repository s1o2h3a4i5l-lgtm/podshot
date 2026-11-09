import { whatsappLink } from '@/data/site';

// The site has no backend yet, so forms open WhatsApp with the details filled in.
export function sendToWhatsApp(form, intro) {
  const data = new FormData(form);
  const lines = [intro];
  for (const [key, value] of data.entries()) {
    if (String(value).trim()) lines.push(`${key}: ${value}`);
  }
  window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
}
