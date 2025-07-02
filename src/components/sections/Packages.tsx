
const Packages = () => {
  const packages = [
    {
      name: "BOOTHIE LITE",
      price: "$500",
      duration: "4 hours",
      description: "Where the fun begins",
      features: [
        "Picture Mode",
        "QR Code Delivery",
        "Plain Backdrop",
        "1 Basic Template",
        "5 Double-Sided Props",
        "Extra time: $100 per additional hour"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "BOOTHIE BLING",
      price: "Customize Your Experience",
      duration: "Choose any add-ons",
      description: "Design your package perfect with your preferred add-ons",
      features: [
        "Extra Modes (GIF, Boomerang): $50",
        "Fun Filters (up to 3): $25",
        "Text SMS Delivery: $25",
        "Extra Props (5 props): $25",
        "All Props: $100",
        "Concierge: $100",
        "Special Backdrop: $50",
        "Prints (up to 500): $200",
        "Print into Magnet (up to 100): $150",
        "Custom Templates (up to 3): $100",
        "Red Carpet Special: $250",
        "Roaming (30 minutes): $50",
        "Note: Some add-ons require others (e.g., Print into Magnet requires Prints package)."
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "THE WHOLE BOOTHIE",
      price: "$1,250",
      duration: "4 hours",
      description: "All-Inclusive Package",
      features: [
        "Picture, Boomerang, GIF, and Video Modes",
        "SMS, QR Code, and Email Delivery",
        "Fun Filters (up to 3)",
        "All Props",
        "Concierge",
        "Premium Backdrop",
        "Prints (up to 500)",
        "Custom Templates (up to 3)",
        "Red Carpet Service",
        "Roaming Mode (30 minutes)",
        "Extra time: $100 per additional hour"
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


      </div>
    </section>
  );
};

export default Packages;
