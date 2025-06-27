
const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Elena Rodriguez",
      event: "Wedding in Polanco",
      rating: 5,
      text: "Incredible service! Our guests couldn't stop using the photo booth all night long. The photos turned out beautiful and the team was super professional. We would definitely hire them again.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Carlos Mendoza",
      event: "Corporate Event",
      rating: 5,
      text: "We hired BoothieCall for our year-end event and it was a total success. The frame customization with our logo was perfect. Highly recommended for corporate events.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ana Sofia Herrera",
      event: "My daughter's Sweet 16",
      rating: 5,
      text: "My daughter and her friends were fascinated the entire party. The props were awesome and the photos looked super professional. The team arrived on time and took care of everything. Excellent experience!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Roberto and Fernanda",
      event: "Wedding Anniversary",
      rating: 5,
      text: "For our 25th anniversary we wanted something special. BoothieCall exceeded our expectations. The photo quality and attention to detail were exceptional. Thank you for making our celebration unforgettable!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Lupita Gonzalez",
      event: "Baby Shower",
      rating: 5,
      text: "The service was impeccable from first contact to the end of the event. The moms and babies had so much fun. The photos turned out adorable and very professional. Without a doubt the best in Mexico City.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Javier Morales",
      event: "Product Launch",
      rating: 5,
      text: "We needed something innovative for our product launch and BoothieCall was the perfect choice. The magic mirror caused a sensation and the photos were shared massively on social media. Incredible ROI!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">What Our</span>
            <br />
            <span className="text-foreground">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than 500 successful events back us up. Read the real experiences of those who have already lived the BoothieCall magic.
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
            <div className="text-sm text-muted-foreground">Average rating</div>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">👥</div>
            <div className="font-bold text-2xl gradient-text">500+</div>
            <div className="text-sm text-muted-foreground">Happy clients</div>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-bold text-2xl gradient-text">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction rate</div>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">🔄</div>
            <div className="font-bold text-2xl gradient-text">85%</div>
            <div className="text-sm text-muted-foreground">Returning clients</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              Will you be our next happy client?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of satisfied clients who trusted us to make their event something memorable.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              ✨ Create My Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
