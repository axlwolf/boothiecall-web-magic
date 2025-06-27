
import { useState } from 'react';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Cutting-Edge Technology",
      description: "Capture photos, reels and boomerangs with the best quality. Technology that impresses and entertains everyone.",
      icon: "📸",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Total Customization",
      description: "Unique frames, custom filters and designs that perfectly reflect your special event's theme.",
      icon: "🎨",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Share Instantly",
      description: "Receive your photos instantly via WhatsApp, email or QR. Share on social media without waiting.",
      icon: "⚡",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "High Quality Printing",
      description: "Take home physical memories with our professional printer. Premium paper that lasts a lifetime.",
      icon: "🖨️",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Professional Assistant",
      description: "Our team takes care of everything. Installation, operation and support throughout your entire event.",
      icon: "👨‍💼",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Fun Props",
      description: "Unique and creative accessories included. Hats, glasses, signs and more for incredible photos.",
      icon: "🎭",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Why Choose Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another photo booth. We're the complete experience that will make your event unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer animate-slide-up glass ${
                hoveredIndex === index ? 'shadow-2xl' : 'hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className="relative text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="font-poppins font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              Ready for a unique experience?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              More than 500 successful events back us up. Your event will be next.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
