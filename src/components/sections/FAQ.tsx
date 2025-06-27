
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What do I need to install the photo booth?",
      answer: "We only need a 2.5x2.5 meter space near an outlet at your event in Mexico City. We take care of the rest: transportation, installation, setup and operation throughout the entire event."
    },
    {
      question: "Can I customize the photo design?",
      answer: "Of course! Our design team works with you to create frames and filters that perfectly reflect your event's theme. We include logos, corporate colors, couple names, special dates and any element you desire."
    },
    {
      question: "Does the service include accessories (props)?",
      answer: "Yes, we include a curated selection of fun and elegant props for photos. We have specific themes for weddings, corporate events, Sweet 16s, etc. We can also get special props upon request."
    },
    {
      question: "How do I receive the photos from my event?",
      answer: "Photos are delivered in multiple ways: immediate printing during the event, real-time WhatsApp sharing, complete digital gallery in 24 hours, and personalized album. You choose how you want to receive your memories!"
    },
    {
      question: "Do you cover events outside Mexico City?",
      answer: "Yes, we cover events throughout the Mexico City metropolitan area and surroundings. For events outside the zone, we apply an additional transportation cost that we quote according to distance."
    },
    {
      question: "What happens if my event is cancelled or the date changes?",
      answer: "We understand that plans can change. We offer date changes at no additional cost with 30 days' notice. For cancellations, we apply our partial refund policy according to advance notice."
    },
    {
      question: "Do you include an assistant throughout the entire event?",
      answer: "Absolutely. We always send a professional assistant who takes care of photo booth operation, helps guests, changes props, resolves any technical issues and ensures everything works perfectly."
    },
    {
      question: "Can I see the photos in real time during the event?",
      answer: "Yes! With our live gallery system, you can see all photos in real time from your phone. Plus, guests can receive their photos instantly via WhatsApp or email with QR."
    },
    {
      question: "What makes you different from other photo booths?",
      answer: "We focus on the complete experience: cutting-edge technology (photos + reels + boomerangs), total customization, exceptional customer service, and the best quality-price ratio in Mexico City. Our 500+ successful events back us up."
    },
    {
      question: "Do you handle corporate events and brand activations?",
      answer: "Absolutely! We have extensive experience in corporate events, product launches, brand activations and marketing campaigns. We can integrate corporate branding, collect lead data and create content for social media."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We answer all your questions so you can make the best decision for your event. Can't find your answer? Contact us!
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300 group"
              >
                <h3 className="font-poppins font-semibold text-lg pr-4 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 bg-primary text-white' : 'group-hover:bg-primary/20'
                }`}>
                  <span className={`text-lg font-bold transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-primary'
                  }`}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed animate-fade-in">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-to-br from-muted to-muted/50 p-8 rounded-2xl">
            <h3 className="font-poppins font-semibold text-xl mb-4">
              Still have questions? 🤔
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is ready to answer any specific questions about your event. Don't hesitate to contact us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                💬 Direct WhatsApp
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                📧 Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
