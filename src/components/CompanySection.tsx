
import { Card, CardContent } from '@/components/ui/card';

const CompanySection = () => {
  const features = [
    {
      icon: "🏔️",
      title: "Ubicación Privilegiada",
      description: "Valleseco, en el norte de Gran Canaria, a 800m de altitud. Microclima subtropical ideal que replica las condiciones montañosas japonesas."
    },
    {
      icon: "🌱",
      title: "Metodología Japonesa",
      description: "Aplicamos técnicas tradicionales de cultivo en corrientes de agua fría, perfeccionadas durante siglos en los valles japoneses."
    },
    {
      icon: "💧",
      title: "Agua de Manantial Volcánico",
      description: "Agua cristalina de los acuíferos canarios, naturalmente filtrada por roca volcánica basáltica, rica en minerales esenciales."
    },
    {
      icon: "🎯",
      title: "Control de Calidad Premium",
      description: "Cada rizoma es monitoreado individualmente desde la siembra hasta la cosecha, garantizando máxima potencia y frescura."
    }
  ];

  return (
    <section id="empresa" className="py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Elementos de fondo sutiles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-luxury-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-zen-500/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="font-japanese text-luxury-400 text-lg tracking-wider mb-4 text-medium-contrast">
            本格栽培
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 tracking-wider">
            Cultivo Auténtico
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            En Wasabios cultivamos <span className="text-gradient-zen font-medium">Wasabia japonica auténtico</span> en 
            las montañas de Gran Canaria, aplicando <span className="text-gradient-gold font-medium">métodos tradicionales japoneses</span> 
            adaptados a nuestro excepcional entorno volcánico subtropical.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-500 to-zen-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/lovable-uploads/47b3289f-4ed1-4883-9255-44413206deba.png" 
                alt="Wasabi auténtico fresco de Wasabios" 
                className="relative w-full h-auto rounded-2xl shadow-luxury transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="animate-slide-in-right space-y-8">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-6 tracking-wide">
                El Auténtico Wasabi Japonés
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-4 text-medium-contrast">
                本わさび - Hon Wasabi (Wasabi Auténtico)
              </div>
            </div>
            
            <p className="text-lg text-high-contrast leading-relaxed">
              El <em>Wasabia japonica</em> es una planta extraordinariamente exigente que crece de forma natural 
              en los lechos rocosos de arroyos montañosos japoneses. Su cultivo requiere condiciones muy específicas: 
              agua corriente fría, sombra filtrada y un equilibrio perfecto de humedad y temperatura.
            </p>
            
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="zen-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-gradient-gold">18-24</div>
                <div className="text-sm text-soft-contrast">Meses de cultivo</div>
              </div>
              <div className="zen-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-gradient-zen">12-18°C</div>
                <div className="text-sm text-soft-contrast">Temperatura óptima</div>
              </div>
            </div>
            
            <p className="text-lg text-medium-contrast leading-relaxed">
              En Valleseco hemos encontrado las condiciones ideales: altitud perfecta, agua pura de manantial volcánico, 
              microclima húmedo y temperaturas constantes. Nuestro sistema hidropónico replica fielmente el hábitat natural 
              del wasabi, produciendo rizomas de calidad excepcional.
            </p>
            
            <div className="glassmorphism p-8 rounded-2xl">
              <p className="font-semibold text-xl text-gradient-gold text-center tracking-wide">
                "Primer cultivo comercial de wasabi auténtico en España"
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

        {/* Sección de credenciales mejorada */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-gold mb-2">100%</div>
              <div className="text-soft-contrast text-sm tracking-wider">Wasabia Japonica</div>
              <div className="font-japanese text-zen-400 text-xs mt-1">純正品種</div>
            </div>
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-zen mb-2">Pioneros</div>
              <div className="text-soft-contrast text-sm tracking-wider">En España</div>
              <div className="font-japanese text-zen-400 text-xs mt-1">先駆者</div>
            </div>
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-gold mb-2">Premium</div>
              <div className="text-soft-contrast text-sm tracking-wider">Calidad Gourmet</div>
              <div className="font-japanese text-zen-400 text-xs mt-1">最高品質</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
