import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '9185100316'; // Replace with actual number
  const message = encodeURIComponent('Hello Aarambh Pure Veg, I would like to order food.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
