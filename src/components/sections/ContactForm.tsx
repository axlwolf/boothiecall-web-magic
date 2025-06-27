
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Formulario enviado:', formData);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center animate-scale-in">
            <div className="bg-card p-12 rounded-3xl shadow-2xl">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h2 className="font-poppins font-bold text-3xl mb-4 gradient-text">
                ¡Mensaje Enviado!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Gracias por contactarnos. Nuestro equipo te responderá en menos de 2 horas con una cotización personalizada para tu evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/525512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  💬 WhatsApp para Urgencias
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      eventType: '',
                      eventDate: '',
                      guestCount: '',
                      location: '',
                      message: ''
                    });
                  }}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  📝 Enviar Otro Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">¡Cotiza tu Evento!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu evento y recibe una cotización personalizada en menos de 2 horas. ¡Es gratis y sin compromiso!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 rounded-3xl shadow-lg h-full">
              <h3 className="font-poppins font-bold text-2xl mb-6 gradient-text">
                ¿Prefieres hablar directamente?
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">+52 55 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-muted-foreground">Respuesta inmediata</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">hola@boothiecall.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ubicación</h4>
                    <p className="text-muted-foreground">Ciudad de México, México</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/525512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-primary text-white text-center py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
                >
                  💬 Chatear por WhatsApp
                </a>
                <a
                  href="tel:+525512345678"
                  className="block w-full border-2 border-primary text-primary text-center py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  📞 Llamar Ahora
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo de Evento *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="boda">Boda</option>
                    <option value="xv-anos">XV Años</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="fiesta">Fiesta/Celebración</option>
                    <option value="activacion">Activación de Marca</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Fecha del Evento</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Número de Invitados</label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                  >
                    <option value="">Seleccionar cantidad</option>
                    <option value="1-50">1-50 personas</option>
                    <option value="51-100">51-100 personas</option>
                    <option value="101-200">101-200 personas</option>
                    <option value="201-300">201-300 personas</option>
                    <option value="300+">Más de 300 personas</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Ubicación del Evento</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                  placeholder="Colonia, Delegación, Ciudad"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2">Cuéntanos más sobre tu evento</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background resize-none"
                  placeholder="Detalles especiales, temática, horarios, etc..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-gradient-primary text-white hover:scale-105 shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  '🚀 Solicitar Cotización Gratis'
                )}
              </button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                * Respuesta garantizada en menos de 2 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
