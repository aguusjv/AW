
import React, { useState, useEffect } from 'react';
import { CONTACT_CONFIG, openEmail } from '../utils/whatsapp';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);
  const currentYear = new Date().getFullYear();

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  const handleTechContact = (e: React.MouseEvent) => {
    e.preventDefault();
    openEmail(
      'Soporte Técnico - Arquitectura Web', 
      'Hola, me contacto para solicitar asistencia técnica sobre servicios web...'
    );
  };

  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div className="flex items-center gap-5">
            {/* <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-[#181f38] rounded-sm overflow-hidden shadow-sm">
              <img 
                src={CONTACT_CONFIG.logoUrl} 
                alt="Logo" 
                className="h-full w-full object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div> */}
            <div className="flex flex-col -space-y-1">
              <span className="text-[#181f38] text-2xl font-bold tracking-tight">Arquitectura</span>
              <span className="text-[#181f38] text-2xl font-medium tracking-tight">Web</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <button 
              onClick={() => setActiveModal('terms')}
              className="text-slate-500 hover:text-[#181f38] transition-colors text-xs font-semibold uppercase tracking-widest border-b border-transparent hover:border-[#181f38]"
            >
              Términos de Servicio
            </button>
            <button 
              onClick={() => setActiveModal('privacy')}
              className="text-slate-500 hover:text-[#181f38] transition-colors text-xs font-semibold uppercase tracking-widest border-b border-transparent hover:border-[#181f38]"
            >
              Política de Datos
            </button>
            {/* <button 
              onClick={handleTechContact}
              className="text-slate-400 hover:text-slate-600 transition-colors text-xs font-medium italic"
            >
              Asistencia Técnica
            </button> */}
          </div>
        </div>
        
        <div className="max-w-[800px] border-l-2 border-slate-100 pl-8">
          <p className="text-slate-400 text-[11px] leading-relaxed font-medium uppercase tracking-tighter">
            © {currentYear} Arquitectura Web - Servicios Profesionales de Desarrollo y Consultoría Digital. 
            Todas las implementaciones se rigen bajo estándares de alta disponibilidad y seguridad técnica.
            La marca "Arquitectura Web" es propiedad intelectual registrada.
          </p>
        </div>

        {/* Modal System */}
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
              onClick={() => setActiveModal(null)}
            />
            
            <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-sm shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-[#181f38] rounded-sm flex items-center justify-center p-1">
                    <img src={CONTACT_CONFIG.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-[#181f38] font-bold text-sm uppercase tracking-widest">
                    {activeModal === 'terms' ? 'Términos y Condiciones' : 'Protección de Datos'}
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-slate-400 hover:text-[#181f38] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto p-8 md:p-12 text-slate-600 text-sm leading-relaxed">
                {activeModal === 'terms' ? (
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-[#181f38] font-bold mb-3 uppercase text-xs tracking-wider">1. Alcance del Servicio</h4>
                      <p>Arquitectura Web provee servicios de diseño, desarrollo y consultoría técnica. Cada proyecto se rige por un documento de requerimientos técnicos aprobado previamente por el cliente profesional.</p>
                    </section>
                    <section>
                      <h4 className="text-[#181f38] font-bold mb-3 uppercase text-xs tracking-wider">2. Propiedad Intelectual</h4>
                      <p>Tras la liquidación total de los honorarios, el cliente adquiere la propiedad de los archivos finales y el derecho de uso sobre el código desarrollado. Arquitectura Web conserva el derecho de exhibir el trabajo en su portafolio profesional, salvo acuerdo de confidencialidad previo.</p>
                    </section>
                    <section>
                      <h4 className="text-[#181f38] font-bold mb-3 uppercase text-xs tracking-wider">3. Garantía y Mantenimiento</h4>
                      <p>Se garantiza el funcionamiento técnico del sitio durante los primeros 30 días post-entrega. Modificaciones estructurales solicitadas posteriormente se considerarán nuevas intervenciones técnicas sujetas a presupuesto.</p>
                    </section>
                    <section>
                      <h4 className="text-[#181f38] font-bold mb-3 uppercase text-xs tracking-wider">4. Responsabilidad Técnica</h4>
                      <p>No nos hacemos responsables por caídas de servicio derivadas de proveedores externos (Hosting/Dominios) ajenos a nuestra administración directa o mal uso de credenciales por parte del cliente.</p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-[#181f38] font-bold mb-3 uppercase text-xs tracking-wider">Tratamiento de Datos Personales</h4>
                      <p>En cumplimiento con las normativas vigentes, le informamos que los datos suministrados a través de nuestros canales de contacto (WhatsApp o Email) son tratados con estricta confidencialidad profesional.</p>
                    </section>
                    <section>
                      <h4 className="text-[#181f38] font-bold mb-3 uppercase text-xs tracking-wider">Finalidad de la Información</h4>
                      <p>La información recolectada se utiliza exclusivamente para:
                        <ul className="list-disc ml-5 mt-3 space-y-2">
                          <li>Elaboración de presupuestos técnicos personalizados.</li>
                          <li>Comunicación directa sobre el estado del proyecto.</li>
                          <li>Envío de documentación legal y técnica relevante.</li>
                        </ul>
                      </p>
                    </section>
                    <section>
                      <h4 className="text-[#181f38] font-bold mb-3 uppercase text-xs tracking-wider">Seguridad y Confidencialidad</h4>
                      <p>Implementamos protocolos de seguridad para evitar el acceso no autorizado a su información. No cedemos, vendemos ni distribuimos sus datos a terceros bajo ninguna circunstancia ajena a la ejecución técnica del proyecto.</p>
                    </section>
                  </div>
                )}
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="bg-[#181f38] text-white py-3 px-10 font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-slate-800 transition-all"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
