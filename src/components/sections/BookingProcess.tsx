
const BookingProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Cotiza",
      description: "Completa nuestro formulario con los detalles de tu evento. Te respondemos en menos de 2 horas.",
      icon: "📝",
      color: "from-pink-500 to-purple-600"
    },
    {
      number: "02", 
      title: "Personaliza",
      description: "Trabajamos juntos en el diseño de marcos, selección de props y configuración del photo booth.",
      icon: "🎨",
      color: "from-yellow-400 to-orange-500"
    },
    {
      number: "03",
      title: "Confirma",
      description: "Apartas tu fecha con el 50% del total. Te enviamos la confirmación y detalles del servicio.",
      icon: "✅",
      color: "from-green-400 to-blue-500"
    },
    {
      number: "04",
      title: "¡Disfruta!",
      description: "Llegamos 1 hora antes, instalamos todo y tu solo te preocupas por divertirte y crear recuerdos.",
      icon: "🎉",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Proceso Super Fácil</span>
            <br />
            <span className="text-foreground">en Solo 4 Pasos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reservar tu photo booth es tan simple como contar hasta cuatro. Sin complicaciones, sin estrés.
          </p>
        </div>

        {/* Desktop Process */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 to-purple-500 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Number circle */}
                  <div className={`relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:scale-105 transition-transform">
                    <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {step.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number and connector */}
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary mt-4"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-card p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="font-poppins font-semibold text-xl">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              ¿Listos para empezar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              El primer paso es el más importante. Cuéntanos sobre tu evento y recibe una cotización personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                🚀 Comenzar Ahora
              </a>
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
