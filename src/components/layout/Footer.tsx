
const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="font-poppins font-bold text-lg gradient-text">BoothieCall</span>
            </div>
            <p className="text-muted-foreground">
              We create unforgettable memories with the most fun technology for your event in Mexico City.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Photo Booth for Weddings</li>
              <li>Photo Booth for Parties</li>
              <li>Corporate Events</li>
              <li>Sweet 16 & Celebrations</li>
              <li>Brand Activations</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 LA, California, US</p>
              <p>📞 +1 123456789</p>
              <p>✉️ hello@boothiecall.net</p>
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
          <p>&copy; 2025 BoothieCall. All rights reserved. Made with ❤️ in Mexico City.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
