
import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  { id: "01", title: "Evaluación", description: "Documentamos sus necesidades específicas." },
  { id: "02", title: "Prototipado", description: "Diseñamos la interfaz centrada en la confianza." },
  { id: "03", title: "Entrega", description: "Configuración final y formación técnica." }
];

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-[#0f172a]">Metodología Rigurosa</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step) => (
            <div key={step.id} className="relative pt-4">
              <span className="text-slate-200 text-7xl font-black absolute -top-12 -left-2 z-0">{step.id}</span>
              <div className="relative z-10">
                <h4 className="font-bold mb-4">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
