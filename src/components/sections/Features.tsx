
const Features = () => {
  const features = [
    {
      icon: "💎",
      title: "Competitive Basic Package with Premium Features",
      description: "Get premium quality photo booth experience at an unbeatable baseline price starting at just $500"
    },
    {
      icon: "🎯",
      title: "Varied Premium Add-On Options", 
      description: "Choose from our extensive menu of premium upgrades - from boomerangs and GIFs to red carpet service"
    },
    {
      icon: "⚙️",
      title: "Configure Your Package Your Way",
      description: "Build your perfect photo booth experience with exactly the options you prefer - no unnecessary extras"
    },
    {
      icon: "📸",
      title: "Professional Photo Technology",
      description: "High-quality photos, boomerangs, and GIFs with instant QR code delivery to keep your guests engaged"
    },
    {
      icon: "🎨",
      title: "Complete Customization",
      description: "Custom templates, fun filters, and premium backdrops to match your event's unique style and theme"
    },
    {
      icon: "🎭",
      title: "Extensive Props Collection",
      description: "From basic sign props to our complete premium collection - we have everything to make your photos fun"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Why Choose</span>
            <br />
            <span className="text-foreground">BoothieCall?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine competitive pricing with premium features, giving you the flexibility to create your perfect photo booth experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up border border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
