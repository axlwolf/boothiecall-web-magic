
const Packages = () => {
  const packages = [
    {
      name: "BASELINE DIGITAL",
      price: "$500",
      duration: "4 hours",
      description: "Competitive basic package with premium characteristics",
      features: [
        "Pictures mode",
        "QR scan code delivery",
        "Plain backdrop",
        "1 basic template",
        "5 sign props (double sided = 10)",
        "$100 per extra hour"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "CUSTOM PACKAGE",
      price: "Build Your Own",
      duration: "4+ hours",
      description: "Design your package perfect with your preferred add-ons",
      features: [
        "Start with Baseline Digital",
        "Digital extras: Boomerang, GIFs (+$50)",
        "Fun Filters (+$25)",
        "SMS delivery (+$25)",
        "Extra props (+$25 each set of 5)",
        "All props (+$100)",
        "Concierge service (+$100)",
        "Special backdrop (+$50)",
        "Print package (+$200 up to 500)",
        "Print magnets (+$150 add-on)",
        "Custom template (+$100)",
        "Red carpet special (+$250)"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "I WANT IT ALL",
      price: "$1,250",
      duration: "4 hours",
      description: "All-inclusive premium package with everything included",
      features: [
        "Picture, boomerang, GIF modes",
        "QR code, SMS text & email delivery",
        "Fun filters included",
        "All props collection",
        "Concierge service",
        "Premium backdrop",
        "Prints (up to 500)",
        "Custom templates",
        "Red carpet setup",
        "$100 per extra hour",
        "Does not include print magnets"
      ],
      popular: false,
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Design Your</span>
            <br />
            <span className="text-foreground">Perfect Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our competitive baseline to premium all-inclusive experience. Build exactly what you need for your event.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 animate-slide-up ${
                pkg.popular 
                  ? 'ring-4 ring-primary shadow-2xl lg:scale-110' 
                  : 'hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-10`}></div>
              
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full font-semibold text-sm">
                    ⭐ MOST FLEXIBLE
                  </div>
                </div>
              )}

              <div className="relative p-8 bg-card">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="font-poppins font-bold text-2xl mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    <div className="text-muted-foreground">
                      <div className="text-sm">USD</div>
                      <div className="text-sm">{pkg.duration}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-primary text-white hover:scale-105 shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {pkg.popular ? '🎯 Build My Package' : 'Get Quote'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-poppins font-semibold text-xl mb-4">💡 Add-Ons Available</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mb-6">
              <div>Digital Extras: $50</div>
              <div>Fun Filters: $25</div>
              <div>SMS Delivery: $25</div>
              <div>Extra Props: $25/set</div>
              <div>All Props: $100</div>
              <div>Concierge: $100</div>
              <div>Special Backdrop: $50</div>
              <div>Print Package: $200</div>
              <div>Print Magnets: $150</div>
              <div>Custom Template: $100</div>
              <div>Red Carpet: $250</div>
              <div>Extra Hour: $100</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Design My Package
              </a>
              <a
                href="tel:+525512345678"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call for Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
