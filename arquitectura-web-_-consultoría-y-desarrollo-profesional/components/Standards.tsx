
import React from 'react';
import { BarChart3, Ruler, Cpu } from 'lucide-react';

const Standards: React.FC = () => {
  const pillars = [
    {
      icon: <BarChart3 size={24} />,
      title: "Análisis Estructural",
      description: "Evaluamos las necesidades de comunicación de su sector para definir una arquitectura de información lógica que facilite la toma de decisiones del cliente."
    },
    {
      icon: <Ruler size={24} />,
      title: "Diseño Sobrio",
      description: "Eliminamos el ruido visual. Nos centramos en tipografías de alta legibilidad y una disposición de elementos que jerarquiza su trayectoria profesional."
    },
    {
      icon: <Cpu size={24} />,
      title: "Implementación Técnica",
      description: "Desarrollo limpio y optimizado. Garantizamos que la plataforma sea escalable y fácil de mantener a largo plazo sin dependencias innecesarias."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <span className="text-slate-500 font-bold tracking-widest text-[10px] uppercase block mb-3">
            Nuestros Pilares
          </span>
          <h2 className="text-[#0f172a] text-3xl font-bold tracking-tight">
            Estándares de Trabajo
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="space-y-6 p-8 border border-slate-100 rounded-sm hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center text-[#0f172a] bg-slate-50 rounded">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">
                {pillar.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
