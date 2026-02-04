
import React from 'react';
import { MousePointerClick, Building2, Network } from 'lucide-react';
import { ServiceCard as IServiceCard } from '../types';

const services: IServiceCard[] = [
  {
    icon: <MousePointerClick size={32} strokeWidth={1.2} />,
    title: "Landing Pages Profesionales",
    description: "Páginas únicas de alta conversión diseñadas específicamente para servicios concretos.",
    tag: "Conversión"
  },
  {
    icon: <Building2 size={32} strokeWidth={1.2} />,
    title: "Sitios Institucionales",
    description: "Estructuras sólidas para una presencia establecida en su sector.",
    tag: "Autoridad"
  },
  {
    icon: <Network size={32} strokeWidth={1.2} />,
    title: "Estructuras a Medida",
    description: "Arquitectura web integral para necesidades complejas y flujos personalizados.",
    tag: "Personalizado"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-[#fcfcfd] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[#0f172a] text-3xl font-bold mb-12">Servicios Profesionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-10 border border-slate-200 rounded-sm hover:shadow-xl transition-all h-full flex flex-col">
              <div className="text-slate-400 group-hover:text-[#0f172a] mb-10">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-10 flex-grow">{service.description}</p>
              <span className="text-[10px] font-bold text-[#0f172a] uppercase tracking-widest">{service.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
