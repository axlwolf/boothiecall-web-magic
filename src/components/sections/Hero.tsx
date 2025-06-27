
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 dark:from-primary/30 dark:via-secondary/30 dark:to-primary/30"></div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="gradient-text">Más que Fotos,</span>
            <br />
            <span className="text-foreground">Creamos Recuerdos</span>
            <br />
            <span className="gradient-text">en un Flash</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Fotos, Reels y Boomerangs para que tu evento sea inolvidable. 
            El photo booth más divertido y profesional de la CDMX.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <a
              href="#contact"
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow"
            >
              ✨ Cotiza tu Evento
            </a>
            <a
              href="#gallery"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Ver Galería
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">500+</div>
              <div className="text-muted-foreground">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">50K+</div>
              <div className="text-muted-foreground">Fotos Tomadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">4.9★</div>
              <div className="text-muted-foreground">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">3 Años</div>
              <div className="text-muted-foreground">de Experiencia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
