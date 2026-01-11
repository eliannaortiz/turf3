import { MessageCircle } from 'lucide-react';
import { siteInfo } from '../../data/siteData';

export default function WhatsAppButton() {
  const phoneNumber = siteInfo.phones[0].replace(/[^0-9]/g, '');
  const message = encodeURIComponent('Hi! I would like to book a slot at Turf 360.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
