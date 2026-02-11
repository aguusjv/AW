
import React from 'react';
import { CONTACT_CONFIG } from '../utils/whatsapp';

const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 112; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 h-28 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, 'inicio')}
            className="flex items-center gap-1 hover:opacity-90 transition-all group"
          >
            {/* Contenedor con altura incrementada para un logo más imponente */}
            <div className="h-20 w-72 md:w-96 flex-shrink-0 flex items-center justify-start overflow-hidden">
              <img 
                src={CONTACT_CONFIG.logoUrl} 
                alt="Arquitectura Web Logo" 
                className="h-full w-auto object-contain pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#enfoque" onClick={(e) => scrollToSection(e, 'enfoque')} className="text-slate-600 text-[13px] font-bold uppercase tracking-widest hover:text-[#181f38] transition-colors">Enfoque</a>
          <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="text-slate-600 text-[13px] font-bold uppercase tracking-widest hover:text-[#181f38] transition-colors">Servicios</a>
          <a href="#metodologia" onClick={(e) => scrollToSection(e, 'metodologia')} className="text-slate-600 text-[13px] font-bold uppercase tracking-widest hover:text-[#181f38] transition-colors">Metodología</a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="text-[#181f38] text-[11px] font-bold py-3.5 px-8 border-2 border-[#181f38] rounded-sm hover:bg-[#181f38] hover:text-white transition-all uppercase tracking-[0.2em]">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
