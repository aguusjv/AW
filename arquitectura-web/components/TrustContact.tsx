
import React, { useState } from 'react';
import { Shield, Layers, Smartphone, Send, Mail, MessageCircle, CheckCircle2, MousePointerClick } from 'lucide-react';
import { openWhatsApp, CONTACT_CONFIG } from '../utils/whatsapp';

type ContactMethod = 'none' | 'whatsapp' | 'email';

interface FormState {
  nombre: string;
  email: string;
  rubro: string;
  tipo: string;
  mensaje: string;
}

const TrustContact: React.FC = () => {
  const [method, setMethod] = useState<ContactMethod>('none');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState<FormState>({
    nombre: '',
    email: '',
    rubro: '',
    tipo: 'Landing',
    mensaje: ''
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Usamos FormSubmit.co que permite usar el email directamente como identificador
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_CONFIG.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: form.nombre,
          Email: form.email,
          Rubro: form.rubro,
          Tipo_Proyecto: form.tipo,
          Mensaje: form.mensaje,
          _subject: `Nueva consulta web: ${form.nombre}`,
          _template: "table" // Envía el correo con un formato de tabla limpio
        }),
      });

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setShowSuccess(true);
        setForm({ nombre: '', email: '', rubro: '', tipo: 'Landing', mensaje: '' });
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error de envío:", error);
      alert("No se pudo enviar el correo. Por favor, intenta por WhatsApp mientras revisamos el servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 max-w-[1200px] mx-auto px-6 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div>
            <span className="text-slate-500 font-bold tracking-widest text-[10px] uppercase block mb-3">Contacto profesional</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a]">
              Iniciemos la arquitectura de su sitio
            </h2>
          </div>
          
          <div className="space-y-10">
            {[
              { icon: <Shield size={20} />, title: "Seguridad y Estabilidad", desc: "Robustez en el alojamiento y protocolos estrictos de protección de datos." },
              { icon: <Layers size={20} />, title: "Visibilidad Estructurada", desc: "Cumplimiento de estándares SEO para asegurar una indexación profesional." },
              { icon: <Smartphone size={20} />, title: "Adaptabilidad Total", desc: "Navegación fluida y profesional en cualquier dispositivo." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="mt-1 text-[#0f172a]">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-[#0f172a] mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[440px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-100 p-6 bg-slate-50/50 rounded-sm">
            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              "La excelencia técnica comienza con una comunicación clara. Seleccione su canal preferido y nuestro equipo se pondrá en contacto en menos de 24hs hábiles."
            </p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden min-h-[520px] flex flex-col relative">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-[#0f172a] font-bold mb-6 text-center">Seleccione Canal de Consulta</h3>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => { setMethod('whatsapp'); setShowSuccess(false); }}
                className={`flex flex-col items-center gap-3 p-4 border rounded-sm transition-all ${method === 'whatsapp' ? 'border-[#25D366] bg-green-50 text-[#1a9d4b]' : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'}`}
              >
                <MessageCircle size={24} />
                <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
              </button>
              <button 
                onClick={() => { setMethod('email'); setShowSuccess(false); }}
                className={`flex flex-col items-center gap-3 p-4 border rounded-sm transition-all ${method === 'email' ? 'border-[#0f172a] bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'}`}
              >
                <Mail size={24} />
                <span className="text-[11px] font-bold uppercase tracking-wider">Email</span>
              </button>
            </div>
          </div>

          <div className="p-8 flex-grow flex flex-col">
            {showSuccess ? (
              <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500 min-h-[300px]">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-[#0f172a] mb-3">¡Correo enviado!</h4>
                <p className="text-sm text-slate-500 max-w-[300px] leading-relaxed">
                  Su consulta ha sido recibida. Un arquitecto web revisará su solicitud y le responderá directamente a su casilla.
                </p>
                <button 
                  onClick={() => { setShowSuccess(false); setMethod('none'); }}
                  className="mt-10 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-[#0f172a] border-b border-slate-200 pb-1 hover:border-[#0f172a] transition-all"
                >
                  Nueva consulta
                </button>
              </div>
            ) : (
              <>
                {method === 'none' && (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <MousePointerClick size={28} />
                    </div>
                    <p className="text-sm text-slate-500 max-w-[200px]">Por favor, elija un medio para que podamos asesorarlo</p>
                  </div>
                )}

                {method === 'whatsapp' && (
                  <div className="flex-grow flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="text-center space-y-3">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-[#1a9d4b] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">
                        <CheckCircle2 size={12} /> Atención Prioritaria
                      </div>
                      <h4 className="text-xl font-bold text-[#0f172a]">WhatsApp Directo</h4>
                      <p className="text-sm text-slate-500 max-w-[280px]">Inicie una conversación inmediata con nuestro equipo técnico.</p>
                    </div>
                    <button 
                      onClick={() => openWhatsApp()}
                      className="w-full max-w-xs bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-5 rounded-sm transition-all text-sm shadow-lg shadow-green-100 flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      <MessageCircle size={20} /> Contactar ahora
                    </button>
                  </div>
                )}

                {method === 'email' && (
                  <form onSubmit={handleEmailSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required type="text" name="nombre" placeholder="Nombre completo"
                        className="w-full bg-slate-50 border border-slate-200 p-3 text-sm rounded-sm focus:outline-none focus:border-[#0f172a] transition-all"
                        value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})}
                      />
                      <input 
                        required type="email" name="email" placeholder="Email de contacto"
                        className="w-full bg-slate-50 border border-slate-200 p-3 text-sm rounded-sm focus:outline-none focus:border-[#0f172a] transition-all"
                        value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required type="text" name="rubro" placeholder="Su profesión / Rubro"
                        className="w-full bg-slate-50 border border-slate-200 p-3 text-sm rounded-sm focus:outline-none focus:border-[#0f172a] transition-all"
                        value={form.rubro} onChange={e => setForm({...form, rubro: e.target.value})}
                      />
                      <select 
                        name="tipo"
                        className="w-full bg-slate-50 border border-slate-200 p-3 text-sm rounded-sm focus:outline-none focus:border-[#0f172a] transition-all cursor-pointer"
                        value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})}
                      >
                        <option value="Landing">Landing Page Profesional</option>
                        <option value="Institucional">Sitio Institucional Sólido</option>
                        <option value="A Medida">Desarrollo Web a Medida</option>
                      </select>
                    </div>

                    <textarea 
                      required name="mensaje" placeholder="Describa brevemente su necesidad o proyecto..."
                      className="w-full bg-slate-50 border border-slate-200 p-4 text-sm rounded-sm h-32 focus:outline-none focus:border-[#0f172a] transition-all resize-none"
                      value={form.mensaje} onChange={e => setForm({...form, mensaje: e.target.value})}
                    ></textarea>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className={`w-full ${isSubmitting ? 'bg-slate-400' : 'bg-[#0f172a] hover:bg-slate-800'} text-white font-bold py-5 rounded-sm transition-all text-[11px] uppercase tracking-[0.2em] shadow-md flex items-center justify-center gap-3`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <><Send size={16} /> Enviar Correo</>
                      )}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustContact;
