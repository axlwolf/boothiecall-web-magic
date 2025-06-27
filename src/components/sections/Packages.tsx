
const Packages = () => {
  const packages = [
    {
      name: "Fun",
      price: "$8,500",
      duration: "4 hours",
      description: "Perfect for family parties and intimate celebrations",
      features: [
        "Professional photo booth",
        "Basic props included",
        "Unlimited printing",
        "Digital gallery 24h",
        "Custom frame",
        "Assistant during event"
      ],
      popular: false,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      name: "Premium",
      price: "$12,500",
      duration: "6 hours",
      description: "The most popular option for weddings and special events",
      features: [
        "Everything from Fun package",
        "Photos + Reels + Boomerangs",
        "2 frame designs",
        "Premium themed props",
        "Social media sharing",
        "Event summary video",
        "Personalized digital album"
      ],
      popular: true,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "Elite",
      price: "$18,500",
      duration: "8 hours",
      description: "The most complete experience for luxury events",
      features: [
        "Everything from Premium package",
        "Interactive magic mirror",
        "3+ custom designs",
        "Exclusive luxury props",
        "Instant WhatsApp delivery",
        "Live streaming",
        "Total custom setup",
        "Dedicated coordinator",
        "Equipment backup"
      ],
      popular: false,
      gradient: "from-purple-600 to-indigo-700"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Packages that Fit</span>
            <br />
            <span className="text-foreground">Your Budget</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate celebrations to luxury events. We have the perfect package to make your vision come true.
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
                    ⭐ MOST POPULAR
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
                      <div className="text-sm">MXN</div>
                      <div className="text-sm">{pkg.duration}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-foreground">{feature}</span>
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
                  {pkg.popular ? '🚀 I Want This!' : 'Request Info'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-poppins font-semibold text-xl mb-4">💡 Can't find what you're looking for?</h3>
            <p className="text-muted-foreground mb-6">
              We create custom packages for unique events. Tell us your vision and we'll make it reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Custom Package
              </a>
              <a
                href="tel:+525512345678"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
