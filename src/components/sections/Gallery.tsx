
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Photo booth en boda elegante",
      category: "Bodas"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Eventos corporativos divertidos",
      category: "Corporativo"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fiesta de XV años memorable",
      category: "XV Años"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Celebración familiar única",
      category: "Fiestas"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Activación de marca exitosa",
      category: "Marca"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Evento social divertido",
      category: "Social"
    }
  ];

  const categories = ['Todos', 'Bodas', 'Corporativo', 'XV Años', 'Fiestas', 'Marca', 'Social'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Galería de Eventos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revive la magia de nuestros eventos anteriores. Cada imagen cuenta una historia de diversión y alegría.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-scale-in hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">{image.category}</p>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>

              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👁️</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="p-6 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Eventos Capturados</div>
          </div>
          <div className="p-6 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
            <div className="text-muted-foreground">Fotos Tomadas</div>
          </div>
          <div className="p-6 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Clientes Satisfechos</div>
          </div>
          <div className="p-6 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold gradient-text mb-2">24h</div>
            <div className="text-muted-foreground">Entrega Digital</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <a
            href="#contact"
            className="inline-block bg-gradient-secondary text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            🎉 ¡Crea tu propia galería!
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
