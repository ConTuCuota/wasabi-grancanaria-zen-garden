
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductGallery = () => {
  const products = [
    {
      image: "/lovable-uploads/605e445a-8bfe-4325-90b4-0a05fb70b188.png",
      title: "Rizoma de Wasabi Fresco",
      subtitle: "本わさび - Wasabi Auténtico",
      description: "Rizoma recién cosechado, listo para rallar. Intensidad y frescura incomparables del auténtico wasabi japonés.",
      features: ["Cosecha bajo pedido", "Envío refrigerado 24h", "Certificado de autenticidad"],
      price: "Consultar precio"
    },
    {
      image: "/lovable-uploads/77a73f96-74d2-42c6-9121-9230935ddf7a.png",
      title: "Hojas de Wasabi Premium",
      subtitle: "わさびの葉 - Hojas Frescas",
      description: "Hojas tiernas perfectas para ensaladas gourmet, tempura y como guarnición aromática única.",
      features: ["Cosecha diaria", "Ideales para tempura", "Alto contenido nutricional"],
      price: "Consultar precio"
    },
    {
      image: "/lovable-uploads/9694e3ba-48d8-475e-9f8b-22d8baa5755a.png",
      title: "Kit Wasabi Experience",
      subtitle: "和食体験 - Experiencia Completa",
      description: "Set completo con wasabi fresco, rallador tradicional oroshi y guía de uso gastronómico profesional.",
      features: ["Rallador oroshi incluido", "Guía gastronómica", "Presentación regalo"],
      price: "Consultar precio"
    }
  ];

  const applications = [
    {
      image: "/lovable-uploads/61900add-70bc-47d0-93e8-114a434ac4d7.png",
      title: "Alta Gastronomía",
      description: "El acompañamiento perfecto para sushi, sashimi y pescados premium. Realza los sabores naturales sin enmascararlos."
    },
    {
      image: "/lovable-uploads/5122542d-e351-4d99-be6e-d3073aeb9f72.png",
      title: "Preparación Tradicional",
      description: "Rallado fresco con técnica japonesa tradicional. El oroshi de piel de tiburón extrae máximo sabor y aroma."
    }
  ];

  const benefits = [
    "🌱 100% Wasabia japonica certificado",
    "❄️ Cadena de frío asegurada",
    "📦 Entrega 24-48h península",
    "🎌 Técnicas tradicionales japonesas",
    "🔬 Control de calidad extremo",
    "♻️ Cultivo sostenible"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-dark-zen relative overflow-hidden">
      {/* Elementos de fondo sutiles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-zen-400/40 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-luxury-400/40 to-transparent rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="font-japanese text-zen-400 text-lg tracking-wider mb-4 text-medium-contrast">
            製品ライン
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 tracking-wider">
            Productos Premium
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            Ofrecemos wasabi auténtico en diferentes formatos gourmet, siempre con la 
            <span className="text-gradient-zen font-medium"> máxima frescura</span> y 
            <span className="text-gradient-gold font-medium"> calidad excepcional</span> que caracteriza nuestro cultivo artesanal.
          </p>
        </div>

        {/* Sección de aplicaciones gastronómicas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {applications.map((app, index) => (
            <div key={index} className="relative group animate-fade-in">
              <div className="absolute -inset-2 bg-gradient-to-r from-zen-500 to-luxury-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-3">{app.title}</h3>
                  <p className="text-lg opacity-90 leading-relaxed">{app.description}</p>
                </div>
              </div>
            </div>
          ))}
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

        {/* Sección de garantía de calidad */}
        <div className="glassmorphism rounded-3xl p-12 md:p-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-8 tracking-wide">
                Garantía de Calidad
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-6 text-medium-contrast">
                品質保証 - Hinshitsu Hoshō
              </div>
              <p className="text-lg text-high-contrast mb-8 leading-relaxed">
                Cada producto pasa por controles de calidad rigurosos. Desde la selección hasta 
                la entrega, garantizamos la máxima frescura, autenticidad y pureza en cada envío.
              </p>
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg text-medium-contrast">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-semibold text-gradient-zen mb-8 tracking-wide">
                Nuestros Estándares
              </h4>
              <div className="space-y-4 mb-8">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg text-medium-contrast">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-zen-gradient p-8 rounded-2xl text-center">
                <p className="font-semibold text-xl text-white mb-2 tracking-wide">
                  "Del cultivo a tu mesa en menos de 48 horas"
                </p>
                <div className="font-japanese text-zen-200 text-sm tracking-wider">
                  栽培から食卓まで48時間以内
                </div>
                <p className="text-zen-100 text-sm mt-4">
                  Frescura garantizada en cada entrega
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
            Solicitar Información
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
