
const Testimonials = () => {
  const testimonials = [
    {
      name: "María Elena Rodríguez",
      event: "Boda en Polanco",
      rating: 5,
      text: "¡Increíble servicio! Nuestros invitados no pararon de usar el photo booth en toda la noche. Las fotos quedaron hermosas y el equipo súper profesional. Definitivamente los volveríamos a contratar.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Carlos Mendoza",
      event: "Evento Corporativo",
      rating: 5,
      text: "Contratamos BoothieCall para nuestro evento de fin de año y fue un éxito total. La personalización del marco con nuestro logo quedó perfecta. Muy recomendados para eventos empresariales.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ana Sofía Herrera",
      event: "XV Años de mi hija",
      rating: 5,
      text: "Mi hija y sus amigas estuvieron fascinadas toda la fiesta. Los props estaban padrísimos y las fotos se veían súper profesionales. El equipo llegó puntual y se encargó de todo. ¡Excelente experiencia!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Roberto y Fernanda",
      event: "Aniversario de Bodas",
      rating: 5,
      text: "Para nuestro 25° aniversario queríamos algo especial. BoothieCall superó nuestras expectativas. La calidad de las fotos y la atención al detalle fueron excepcionales. ¡Gracias por hacer nuestra celebración inolvidable!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Lupita González",
      event: "Baby Shower",
      rating: 5,
      text: "El servicio fue impecable desde el primer contacto hasta el final del evento. Las mamás y bebés se divirtieron muchísimo. Las fotos quedaron tiernas y muy profesionales. Sin duda los mejores en CDMX.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Javier Morales",
      event: "Lanzamiento de Producto",
      rating: 5,
      text: "Necesitábamos algo innovador para el lanzamiento de nuestro producto y BoothieCall fue la elección perfecta. El espejo mágico causó sensación y las fotos se compartieron masivamente en redes. ¡ROI increíble!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Lo que Dicen</span>
            <br />
            <span className="text-foreground">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 500 eventos exitosos nos respaldan. Lee las experiencias reales de quienes ya vivieron la magia de BoothieCall.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground mb-6 italic group-hover:text-foreground transition-colors duration-300">
                "{testimonial.text}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>

              {/* Decorative quote */}
              <div className="absolute top-4 right-6 text-primary/20 text-4xl font-serif">"</div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="p-6">
            <div className="text-3xl mb-2">🏆</div>
            <div className="font-bold text-2xl gradient-text">4.9/5</div>
            <div className="text-sm text-muted-foreground">Calificación promedio</div>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">👥</div>
            <div className="font-bold text-2xl gradient-text">500+</div>
            <div className="text-sm text-muted-foreground">Clientes felices</div>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-bold text-2xl gradient-text">98%</div>
            <div className="text-sm text-muted-foreground">Tasa de satisfacción</div>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">🔄</div>
            <div className="font-bold text-2xl gradient-text">85%</div>
            <div className="text-sm text-muted-foreground">Clientes que regresan</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              ¿Serás nuestro próximo cliente feliz?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a cientos de clientes satisfechos que confiaron en nosotros para hacer de su evento algo memorable.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              ✨ Crear mi Experiencia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
