
import React from 'react';

const EXAMPLE_IMAGE_URL = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop";

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="py-24 md:py-32 bg-[#fcfcfd]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <span className="inline-block text-slate-500 font-bold tracking-widest text-[11px] uppercase border-l-2 border-[#0f172a] pl-4">
              Consultoría & Desarrollo Web
            </span>
            <h1 className="text-[#0f172a] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Tu práctica profesional merece un sitio web a la altura
            </h1>
            <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
              Desde landing pages de alto impacto hasta estructuras institucionales completas. Desarrollamos herramientas para profesionales que requieren sobriedad y estabilidad técnica.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollTo('contacto')}
              className="bg-[#0f172a] hover:bg-slate-800 text-white text-sm font-bold py-4 px-8 rounded-sm transition-all shadow-sm"
            >
              Iniciar mi proyecto
            </button>
            <button 
              onClick={() => scrollTo('servicios')}
              className="bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-bold py-4 px-8 rounded-sm transition-all text-center"
            >
              Ver servicios
            </button>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="relative aspect-[4/3] bg-slate-100 border border-slate-200 rounded-sm shadow-inner overflow-hidden group">
            <img 
              src={EXAMPLE_IMAGE_URL} 
              alt="Ejemplo de plataforma profesional" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
