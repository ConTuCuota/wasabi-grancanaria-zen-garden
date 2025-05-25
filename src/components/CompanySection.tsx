
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Leaf, Droplets, Microscope } from 'lucide-react';

const CompanySection = () => {
  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-zen-400" />,
      title: "Ubicación Privilegiada",
      description: "Valleseco, en el norte de Gran Canaria, a 800m de altitud. Microclima subtropical ideal que replica las condiciones montañosas japonesas.",
      highlight: "Primer cultivo en España"
    },
    {
      icon: <Leaf className="w-8 h-8 text-luxury-400" />,
      title: "Metodología Tradicional",
      description: "Aplicamos técnicas tradicionales de cultivo en corrientes de agua fría, perfeccionadas durante siglos en los valles japoneses.",
      highlight: "Técnicas milenarias"
    },
    {
      icon: <Microscope className="w-8 h-8 text-zen-400" />,
      title: "Agua de Manantial Volcánico",
      description: "Agua cristalina de los acuíferos canarios, naturalmente filtrada por roca volcánica basáltica, rica en minerales esenciales.",
      highlight: "Pureza excepcional"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-luxury-400" />,
      title: "Control de Calidad Premium",
      description: "Cada rizoma es monitoreado individualmente desde la siembra hasta la cosecha, garantizando máxima potencia y frescura.",
      highlight: "Calidad garantizada"
    }
  ];

  const certifications = [
    { name: "Cultivo Ecológico", status: "Certificado" },
    { name: "Trazabilidad Completa", status: "Verificado" },
    { name: "Análisis Microbiológico", status: "Aprobado" },
    { name: "Control de Residuos", status: "Libre" }
  ];

  return (
    <section id="empresa" className="py-20 md:py-32 bg-luxury-gradient relative overflow-hidden">
      {/* Elementos de fondo optimizados */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-radial from-luxury-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-radial from-zen-500/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in">
          <Badge variant="outline" className="mb-6 border-luxury-400/50 text-luxury-400 bg-luxury-400/10">
            🌱 Innovación Agrícola
          </Badge>
          <div className="font-japanese text-luxury-400 text-lg md:text-xl tracking-wider mb-4">
            本格栽培 - Honkaku Saibai
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-gold mb-6 tracking-wider">
            Cultivo Auténtico
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed">
            En Wasabios cultivamos <span className="text-gradient-zen font-semibold">Wasabia japonica auténtico</span> en 
            las montañas de Gran Canaria, aplicando <span className="text-gradient-gold font-semibold">métodos tradicionales japoneses</span> 
            adaptados a nuestro excepcional entorno volcánico subtropical.
          </p>
        </div>

        {/* Sección principal mejorada */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-luxury-500 to-zen-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/lovable-uploads/47b3289f-4ed1-4883-9255-44413206deba.png" 
                alt="Wasabi auténtico fresco cultivado en Valleseco, Gran Canaria" 
                className="relative w-full h-auto rounded-2xl shadow-luxury transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 glassmorphism rounded-xl px-4 py-2">
                <span className="text-luxury-400 font-semibold text-sm">100% Auténtico</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-gradient-gold mb-4 tracking-wide">
                El Auténtico Wasabi Japonés
              </h3>
              <div className="font-japanese text-zen-400 text-sm md:text-base tracking-wider mb-6">
                本わさび - Hon Wasabi (Wasabi Auténtico)
              </div>
            </div>
            
            <p className="text-base md:text-lg text-high-contrast leading-relaxed">
              El <em>Wasabia japonica</em> es una planta extraordinariamente exigente que crece naturalmente 
              en los lechos rocosos de arroyos montañosos japoneses. Su cultivo requiere condiciones muy específicas: 
              agua corriente fría, sombra filtrada y un equilibrio perfecto de humedad y temperatura.
            </p>
            
            {/* Métricas clave mejoradas */}
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="zen-card p-6 rounded-xl text-center hover-lift">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">18-24</div>
                <div className="text-sm text-soft-contrast">Meses de cultivo</div>
                <div className="font-japanese text-zen-400 text-xs mt-1">栽培期間</div>
              </div>
              <div className="zen-card p-6 rounded-xl text-center hover-lift">
                <div className="text-2xl md:text-3xl font-bold text-gradient-zen mb-2">12-18°C</div>
                <div className="text-sm text-soft-contrast">Temperatura óptima</div>
                <div className="font-japanese text-zen-400 text-xs mt-1">最適温度</div>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-medium-contrast leading-relaxed">
              En Valleseco hemos encontrado las condiciones ideales: altitud perfecta, agua pura de manantial volcánico, 
              microclima húmedo y temperaturas constantes. Nuestro sistema hidropónico replica fielmente el hábitat natural 
              del wasabi, produciendo rizomas de calidad excepcional.
            </p>
            
            {/* Certificaciones */}
            <div className="glassmorphism p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gradient-gold mb-4">Certificaciones y Controles</h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-zen-400" />
                    <div>
                      <div className="text-sm font-medium text-high-contrast">{cert.name}</div>
                      <div className="text-xs text-zen-400">{cert.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid de características mejorado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="zen-card border-none hover:shadow-zen transition-all duration-500 animate-scale-in group hover:scale-105 overflow-hidden" style={{animationDelay: `${index * 0.15}s`}}>
              <CardContent className="p-6 md:p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="mb-4 border-zen-400/50 text-zen-400 text-xs">
                    {feature.highlight}
                  </Badge>
                  <h4 className="text-lg md:text-xl font-semibold text-gradient-gold mb-4 tracking-wide">{feature.title}</h4>
                </div>
                <p className="text-medium-contrast leading-relaxed text-sm md:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sección de credenciales mejorada */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glassmorphism p-6 md:p-8 rounded-2xl hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-3">100%</div>
              <div className="text-soft-contrast text-sm md:text-base tracking-wider font-semibold">Wasabia Japonica</div>
              <div className="font-japanese text-zen-400 text-xs mt-2">純正品種</div>
              <Badge variant="outline" className="mt-3 border-luxury-400/50 text-luxury-400 text-xs">
                Variedad Certificada
              </Badge>
            </div>
            <div className="glassmorphism p-6 md:p-8 rounded-2xl hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gradient-zen mb-3">Pioneros</div>
              <div className="text-soft-contrast text-sm md:text-base tracking-wider font-semibold">En España</div>
              <div className="font-japanese text-zen-400 text-xs mt-2">先駆者</div>
              <Badge variant="outline" className="mt-3 border-zen-400/50 text-zen-400 text-xs">
                Primer Cultivo
              </Badge>
            </div>
            <div className="glassmorphism p-6 md:p-8 rounded-2xl hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-3">Premium</div>
              <div className="text-soft-contrast text-sm md:text-base tracking-wider font-semibold">Calidad Gourmet</div>
              <div className="font-japanese text-zen-400 text-xs mt-2">最高品質</div>
              <Badge variant="outline" className="mt-3 border-luxury-400/50 text-luxury-400 text-xs">
                Excelencia Garantizada
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
