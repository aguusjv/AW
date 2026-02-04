
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const FloatingContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[60] animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button
        onClick={() => openWhatsApp()}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -left-32 bg-white text-[#1e293b] text-[11px] font-bold py-2 px-4 rounded-full shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">
          ¿Hablamos?
        </span>
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default FloatingContact;
