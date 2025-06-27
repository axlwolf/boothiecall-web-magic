
const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="font-poppins font-bold text-lg gradient-text">BoothieCall</span>
            </div>
            <p className="text-muted-foreground">
              Creamos recuerdos inolvidables con la tecnología más divertida para tu evento en CDMX.
            </p>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Photo Booth para Bodas</li>
              <li>Cabina de Fotos para Fiestas</li>
              <li>Eventos Corporativos</li>
              <li>XV Años y Celebraciones</li>
              <li>Activaciones de Marca</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contacto</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 Ciudad de México, México</p>
              <p>📞 +52 55 1234 5678</p>
              <p>✉️ hola@boothiecall.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 BoothieCall. Todos los derechos reservados. Hecho con ❤️ en CDMX.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
