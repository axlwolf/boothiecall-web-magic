
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "¿Qué necesito para instalar el photo booth?",
      answer: "Solo necesitamos un espacio de 2.5x2.5 metros cerca de un enchufe en tu evento en CDMX. Nosotros nos encargamos del resto: transporte, instalación, configuración y operación durante todo el evento."
    },
    {
      question: "¿Puedo personalizar el diseño de las fotos?",
      answer: "¡Claro que sí! Nuestro equipo de diseño trabaja contigo para crear marcos y filtros que reflejen perfectamente la temática de tu evento. Incluimos logos, colores corporativos, nombres de novios, fechas especiales y cualquier elemento que desees."
    },
    {
      question: "¿El servicio incluye accesorios (props)?",
      answer: "Sí, incluimos una selección curada de props divertidos y elegantes para las fotos. Tenemos temáticas específicas para bodas, eventos corporativos, XV años, etc. También podemos conseguir props especiales bajo solicitud."
    },
    {
      question: "¿Cómo recibo las fotos de mi evento?",
      answer: "Las fotos se entregan de múltiples formas: impresión inmediata durante el evento, envío por WhatsApp en tiempo real, galería digital completa en 24 horas, y álbum personalizado. ¡Tú eliges cómo quieres recibir tus recuerdos!"
    },
    {
      question: "¿Cubren eventos fuera de CDMX?",
      answer: "Sí, cubrimos eventos en toda el área metropolitana de la Ciudad de México y alrededores. Para eventos fuera de la zona, aplicamos un costo adicional de traslado que cotizamos según la distancia."
    },
    {
      question: "¿Qué pasa si mi evento se cancela o cambia de fecha?",
      answer: "Entendemos que los planes pueden cambiar. Ofrecemos cambios de fecha sin costo adicional con 30 días de anticipación. Para cancelaciones, aplicamos nuestra política de reembolso parcial según el tiempo de anticipación."
    },
    {
      question: "¿Incluyen asistente durante todo el evento?",
      answer: "Absolutamente. Siempre enviamos un asistente profesional que se encarga de la operación del photo booth, ayuda a los invitados, cambia los props, resuelve cualquier inconveniente técnico y garantiza que todo funcione perfectamente."
    },
    {
      question: "¿Puedo ver las fotos en tiempo real durante el evento?",
      answer: "¡Sí! Con nuestro sistema de galería en vivo, puedes ver todas las fotos en tiempo real desde tu teléfono. Además, los invitados pueden recibir sus fotos al instante vía WhatsApp o email con QR."
    },
    {
      question: "¿Qué diferencia tienen de otros photo booths?",
      answer: "Nos enfocamos en la experiencia completa: tecnología de última generación (fotos + reels + boomerangs), personalización total, atención al cliente excepcional, y la mejor relación calidad-precio en CDMX. Nuestros 500+ eventos exitosos nos respaldan."
    },
    {
      question: "¿Manejan eventos corporativos y activaciones de marca?",
      answer: "¡Por supuesto! Tenemos amplia experiencia en eventos corporativos, lanzamientos de productos, activaciones de marca y campañas de marketing. Podemos integrar branding corporativo, recolectar datos de leads y crear contenido para redes sociales."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Preguntas Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos todas tus dudas para que tomes la mejor decisión para tu evento. ¿No encuentras tu respuesta? ¡Contáctanos!
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300 group"
              >
                <h3 className="font-poppins font-semibold text-lg pr-4 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 bg-primary text-white' : 'group-hover:bg-primary/20'
                }`}>
                  <span className={`text-lg font-bold transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-primary'
                  }`}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed animate-fade-in">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-to-br from-muted to-muted/50 p-8 rounded-2xl">
            <h3 className="font-poppins font-semibold text-xl mb-4">
              ¿Aún tienes dudas? 🤔
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para resolver cualquier pregunta específica sobre tu evento. ¡No dudes en contactarnos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                💬 WhatsApp Directo
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                📧 Enviar Mensaje
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
