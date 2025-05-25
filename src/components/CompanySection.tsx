
import { Card, CardContent } from '@/components/ui/card';

const CompanySection = () => {
  const features = [
    {
      icon: "🏔️",
      title: "Ubicación Única",
      description: "Valleseco del Norte, montañas de Gran Canaria a 800m de altitud. Condiciones climáticas perfectas que recrean el entorno natural japonés."
    },
    {
      icon: "🌱",
      title: "Tradición Japonesa",
      description: "Respetamos los métodos ancestrales japoneses de cultivo en corrientes de agua fría, adaptándolos con precisión científica."
    },
    {
      icon: "💧",
      title: "Agua Pura de Manantial",
      description: "Utilizamos agua cristalina de los manantiales canarios, filtrada naturalmente por roca volcánica, libre de contaminantes."
    },
    {
      icon: "🎯",
      title: "Excelencia Artesanal",
      description: "Cada planta de wasabi recibe cuidado individual, monitoreada 24/7 para garantizar la máxima calidad y autenticidad."
    }
  ];

  return (
    <section id="empresa" className="py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Elementos zen de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-luxury-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-zen-500/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="font-japanese text-luxury-400 text-lg tracking-wider mb-4 text-medium-contrast">
            哲学と革新
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 tracking-wider">
            Nuestra Filosofía
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            En Wasabios S.L. fusionamos la <span className="text-gradient-zen font-medium">sabiduría ancestral japonesa</span> con 
            la <span className="text-gradient-gold font-medium">innovación tecnológica más avanzada</span>, 
            creando el wasabi más puro y auténtico de Europa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-500 to-zen-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/lovable-uploads/47b3289f-4ed1-4883-9255-44413206deba.png" 
                alt="Wasabi fresco auténtico de Wasabios" 
                className="relative w-full h-auto rounded-2xl shadow-luxury transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="animate-slide-in-right space-y-8">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-6 tracking-wide">
                El Verdadero Wasabi Japonés
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-4 text-medium-contrast">
                本わさび - Hon Wasabi
              </div>
            </div>
            
            <p className="text-lg text-high-contrast leading-relaxed">
              El wasabi auténtico (<em>Wasabia japonica</em>) es conocido como el "oro verde" de Japón. 
              Es una de las plantas más difíciles y valiosas de cultivar del mundo, requiriendo 
              condiciones extremadamente específicas que recreamos con precisión milimétrica.
            </p>
            
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="zen-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-gradient-gold">18-24</div>
                <div className="text-sm text-soft-contrast">Meses cultivo</div>
              </div>
              <div className="zen-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-gradient-zen">12-18°C</div>
                <div className="text-sm text-soft-contrast">Temperatura</div>
              </div>
            </div>
            
            <p className="text-lg text-medium-contrast leading-relaxed">
              En las místicas montañas de Gran Canaria hemos recreado el ecosistema perfecto: 
              agua corriente pura, temperatura controlada, humedad constante y la sombra filtrada 
              que el wasabi necesita para desarrollar su característico sabor y propiedades únicas.
            </p>
            
            <div className="glassmorphism p-8 rounded-2xl">
              <p className="font-semibold text-xl text-gradient-gold text-center tracking-wide">
                "Wasabios: El primer y único cultivo comercial de wasabi auténtico en España"
              </p>
              <div className="font-japanese text-center text-zen-400 text-sm mt-2 tracking-wider">
                スペイン初の本格的わさび栽培
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="zen-card border-none hover:shadow-zen transition-all duration-500 animate-scale-in group hover:scale-105" style={{animationDelay: `${index * 0.15}s`}}>
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-gradient-gold mb-4 tracking-wide">{feature.title}</h4>
                </div>
                <p className="text-medium-contrast leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sección de credenciales */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-gold mb-2">100%</div>
              <div className="text-soft-contrast text-sm tracking-wider">Wasabia Japonica</div>
            </div>
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-zen mb-2">1º</div>
              <div className="text-soft-contrast text-sm tracking-wider">Cultivo en España</div>
            </div>
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-gold mb-2">24/7</div>
              <div className="text-soft-contrast text-sm tracking-wider">Monitoreo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
