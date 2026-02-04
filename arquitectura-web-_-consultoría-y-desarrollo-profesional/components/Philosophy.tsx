
import React from 'react';
import { Gavel, Database, Shield } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="enfoque" className="py-24 bg-white border-y border-slate-100 scroll-mt-20">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <h2 className="text-[#0f172a] text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Rigor técnico para una presencia sólida
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-20 max-w-[800px] mx-auto">
          Entendemos que un sitio web para un abogado, médico o consultor no es una pieza publicitaria genérica, sino una extensión de su reputación profesional. Priorizamos la estructura, el rendimiento y la seguridad.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          <div className="space-y-5">
            <div className="text-slate-400">
              <Gavel size={22} strokeWidth={1.2} />
            </div>
            <h3 className="font-bold text-[#0f172a] text-base">Legalmente Coherente</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              Cumplimiento estricto de normativas de protección de datos y privacidad.
            </p>
          </div>
          
          <div className="space-y-5">
            <div className="text-slate-400">
              <Database size={22} strokeWidth={1.2} />
            </div>
            <h3 className="font-bold text-[#0f172a] text-base">Estabilidad de Servidor</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              Infraestructura robusta con tiempos de respuesta garantizados.
            </p>
          </div>
          
          <div className="space-y-5">
            <div className="text-slate-400">
              <Shield size={22} strokeWidth={1.2} />
            </div>
            <h3 className="font-bold text-[#0f172a] text-base">Prestigio Visual</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              Estética institucional que proyecta seriedad y autoridad profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
