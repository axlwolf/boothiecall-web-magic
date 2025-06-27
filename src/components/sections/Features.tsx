
import { useState } from 'react';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Tecnología de Punta",
      description: "Captura fotos, reels y boomerangs con la mejor calidad. Tecnología que impresiona y divierte a todos.",
      icon: "📸",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Personalización Total",
      description: "Marcos únicos, filtros personalizados y diseños que reflejan perfectamente la temática de tu evento especial.",
      icon: "🎨",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Comparte al Instante",
      description: "Recibe tus fotos al momento vía WhatsApp, email o QR. Comparte en redes sociales sin esperar.",
      icon: "⚡",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Impresión de Alta Calidad",
      description: "Llévate recuerdos físicos con nuestra impresora profesional. Papel premium que dura toda la vida.",
      icon: "🖨️",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Asistente Profesional",
      description: "Nuestro equipo se encarga de todo. Instalación, operación y soporte durante todo tu evento.",
      icon: "👨‍💼",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Props Divertidos",
      description: "Accesorios únicos y creativos incluidos. Sombreros, gafas, letreros y más para fotos increíbles.",
      icon: "🎭",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">¿Por qué elegirnos?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No somos solo otro photo booth. Somos la experiencia completa que hará de tu evento algo inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer animate-slide-up glass ${
                hoveredIndex === index ? 'shadow-2xl' : 'hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className="relative text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="font-poppins font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              ¿Listo para una experiencia única?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Más de 500 eventos exitosos nos respaldan. Tu evento será el siguiente.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
