
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does customization work?",
      answer: "With Boothie Bling, you can add whatever makes your experience extra: prints, premium props, custom templates, filters, guestbook, audio messages—you name it. Build a setup that fits your event, your vibe, and your budget."
    },
    {
      question: "Can I add features to Boothie Lite?",
      answer: "Yes! Boothie Bling lets you upgrade your Boothie Lite experience however you like. Add boomerangs, GIFs, text delivery, filters, extra props, premium backdrops, prints, concierge service—even a red carpet moment."
    },
    {
      question: "What’s in The Whole Boothie?",
      answer: "The Whole Boothie is our all-inclusive experience. It comes fully loaded with multiple photo/video modes, prints (up to 500), fun filters, all props, premium backdrop, concierge, custom templates, red carpet, and roaming."
    },
    {
      question: "Can I upgrade to The Whole Boothie after booking Boothie Lite?",
      answer: "Absolutely. If you start with Boothie Lite and change your mind, we can apply your payment toward The Whole Boothie and upgrade your experience."
    },
    {
      question: "Do I need a concierge?",
      answer: "If you're looking for a red carpet feel or want an extra set of hands to assist guests, the concierge add-on is 💯 worth it. Already included in The Whole Boothie or available à la carte with Boothie Bling."
    },
    {
      question: "What’s the red carpet experience?",
      answer: "Our Red Carpet Special includes stanchions, the carpet itself, and a Boothie Concierge to guide your guests. It's a total glam moment—available as a Boothie Bling upgrade or part of The Whole Boothie."
    },
    {
      question: "What’s Roaming?",
      answer: "Sometimes the best moments happen away from the backdrop. For 15 minutes, your Boothie Attendant will roam the event, snapping photos and boomerangs on the go—from the dance floor to the bar."
    },
    {
      question: "Can I mix and match Boothie Bling?",
      answer: "Yes! That’s the beauty of Boothie Bling. Pick exactly what you need and skip what you don’t. Want filters but not prints? Props but no concierge? Done and done."
    },
    {
      question: "Do you travel outside of LA?",
      answer: "We sure do! Travel within 25 miles of Los Angeles is included. Beyond that, a small travel fee may apply—just ask and we’ll work it out."
    },
    {
      question: "What’s your cancellation policy?",
      answer: "Life happens; we get it. Retainers are non-refundable, but we’re happy to reschedule your date if needed (subject to availability). Just give us a heads-up at least 14 days in advance."
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
