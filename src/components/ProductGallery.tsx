
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductGallery = () => {
  const products = [
    {
      image: "/lovable-uploads/47b3289f-4ed1-4883-9255-44413206deba.png",
      title: "Wasabi Premium Fresco",
      subtitle: "本わさび - Rizoma Auténtico",
      description: "Rizoma fresco recién cosechado, listo para rallar en el momento. Intensidad y frescura incomparables.",
      features: ["Cosecha semanal", "Envío refrigerado", "Certificado de autenticidad"],
      price: "A consultar"
    },
    {
      image: "/lovable-uploads/6277c40e-107d-41cb-8603-13202f0b2773.png",
      title: "Hojas de Wasabi Gourmet",
      subtitle: "わさびの葉 - Hojas Premium",
      description: "Hojas tiernas perfectas para ensaladas, tempura y guarniciones. Sabor único y propiedades antioxidantes.",
      features: ["Cosecha diaria", "Perfectas para tempura", "Rica en vitaminas"],
      price: "A consultar"
    },
    {
      image: "/lovable-uploads/15aba063-6235-48ee-8bfd-cb9a41b31bdf.png",
      title: "Experiencia Wasabi Zen",
      subtitle: "禅の体験 - Gift Box Premium",
      description: "Presentación exclusiva en caja de madera japonesa con wasabi fresco, rallador tradicional y guía gastronómica.",
      features: ["Caja artesanal japonesa", "Rallador de tiburón", "Guía gastronómica"],
      price: "A consultar"
    }
  ];

  const certifications = [
    "🌱 100% Wasabia japonica certificado",
    "❄️ Cadena de frío garantizada",
    "📦 Entrega 24-48h península",
    "🎌 Métodos tradicionales japoneses",
    "🔬 Control de calidad extremo",
    "♻️ Cultivo sostenible y ecológico"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-dark-zen relative overflow-hidden">
      {/* Elementos zen de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-zen-400/40 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-luxury-400/40 to-transparent rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="font-japanese text-zen-400 text-lg tracking-wider mb-4 text-medium-contrast">
            高級製品
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 tracking-wider">
            Productos Gourmet
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            Ofrecemos wasabi auténtico en diferentes presentaciones premium, siempre con la 
            <span className="text-gradient-zen font-medium"> máxima frescura</span> y 
            <span className="text-gradient-gold font-medium"> calidad excepcional</span> que caracteriza nuestros cultivos artesanales.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="zen-card border-none hover:shadow-zen transition-all duration-500 animate-scale-in group overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gradient-gold mb-2 tracking-wide">{product.title}</h3>
                  <div className="font-japanese text-zen-400 text-sm tracking-wider text-medium-contrast">{product.subtitle}</div>
                </div>
                
                <p className="text-medium-contrast mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-zen-400 rounded-full"></div>
                      <span className="text-sm text-soft-contrast">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gradient-zen">{product.price}</span>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold px-6 py-2 transition-all duration-300 hover:scale-105"
                  >
                    Solicitar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sección de calidad garantizada */}
        <div className="glassmorphism rounded-3xl p-12 md:p-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-8 tracking-wide">
                Garantía de Excelencia
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-6 text-medium-contrast">
                品質保証 - Hinshitsu Hoshō
              </div>
              <p className="text-lg text-high-contrast mb-8 leading-relaxed">
                Cada wasabi pasa por controles de calidad extremos. Desde la selección de semillas hasta 
                la entrega final, garantizamos la máxima frescura, autenticidad y pureza en cada producto.
              </p>
              <div className="space-y-4">
                {certifications.slice(0, 3).map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg text-medium-contrast">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-semibold text-gradient-zen mb-8 tracking-wide">
                Estándares Premium
              </h4>
              <div className="space-y-4 mb-8">
                {certifications.slice(3).map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg text-medium-contrast">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-zen-gradient p-8 rounded-2xl text-center">
                <p className="font-semibold text-xl text-white mb-2 tracking-wide">
                  "Del cultivo zen a tu mesa gourmet"
                </p>
                <div className="font-japanese text-zen-200 text-sm tracking-wider">
                  禅から美食へ
                </div>
                <p className="text-zen-100 text-sm mt-4">
                  Menos de 48 horas desde la cosecha
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold px-12 py-4 text-lg shadow-luxury transition-all duration-300 hover:scale-105 tracking-wide"
          >
            Experiencia Wasabi Gourmet
          </Button>
          <p className="text-soft-contrast text-sm mt-4 tracking-wider">
            Descubre el auténtico sabor del wasabi japonés
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
