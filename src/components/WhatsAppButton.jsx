import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Replace with actual number
  const message = encodeURIComponent("Hi, I'd like to know more about your services!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
