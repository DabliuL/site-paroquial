import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show after scrolling 200px
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    
    // Show a tooltip bubble after 4 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const phoneNumber = '5521999999999'; // Simulated church number
  const message = 'Olá! Gostaria de falar com a secretaria da Paróquia Nossa Senhora da Guia.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      {/* Tooltip speech bubble */}
      {showBubble && (
        <div className="hidden sm:flex glass-panel-light text-mariana-navy font-medium text-xs px-3.5 py-2.5 rounded-xl shadow-lg border border-liturgical-gold/20 max-w-xs animate-bounce relative">
          <span>Como podemos ajudar hoje?</span>
          <button 
            onClick={() => setShowBubble(false)} 
            className="absolute -top-1 -right-1 bg-liturgical-red text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px] cursor-pointer"
          >
            ✕
          </button>
          <div className="absolute right-3 -bottom-1.5 w-3 h-3 bg-white rotate-45 border-r border-b border-black/5"></div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowBubble(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        {/* Pulsing glow effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:hidden"></span>
        
        {/* WhatsApp custom SVG path */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.005-5.05-2.839-6.89C16.656 2.134 14.22 1.127 11.99 1.127c-5.444 0-9.866 4.372-9.87 9.749-.001 1.764.476 3.486 1.382 5.01l-1.025 3.743 3.864-1.004c1.554.898 3.09 1.353 4.706 1.353zm11.233-7.513c-.301-.15-1.782-.872-2.056-.971-.274-.1-.475-.15-.675.15-.2.299-.775.971-.95 1.171-.175.2-.35.224-.651.075-1.162-.577-1.921-1.02-2.686-2.316-.2-.345-.2-.15.075-.425.275-.274.301-.349.45-.599.15-.25.075-.475-.038-.675-.112-.2-.675-1.623-.925-2.223-.244-.589-.494-.509-.675-.518-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.274.3-.15 1.172.925 2.196.2.274.3 1.162.775 1.871.4.6 1.05 1.163 1.775 1.5.725.337 1.45.225 1.95-.274.5-.499 1.701-1.696 1.751-2.122.05-.425-.075-.675-.225-.824z" />
        </svg>
      </a>
    </div>
  );
}
