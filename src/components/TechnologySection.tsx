
import { Card, CardContent } from '@/components/ui/card';

const TechnologySection = () => {
  const technologies = [
    {
      icon: "🌡️",
      title: "Monitoreo Continuo",
      description: "Sensores de precisión que controlan pH, temperatura, humedad y nutrientes las 24 horas del día.",
      specs: ["Precisión ±0.1 pH", "Temp ±0.5°C", "Humedad ±2%"]
    },
    {
      icon: "🤖",
      title: "Control Automatizado",
      description: "Sistema inteligente que ajusta automáticamente riego, nutrición y condiciones ambientales.",
      specs: ["Respuesta inmediata", "Ajustes automáticos", "Alertas en tiempo real"]
    },
    {
      icon: "📱",
      title: "Supervisión Remota",
      description: "Monitoreo y control total de las instalaciones desde cualquier ubicación mediante aplicación móvil.",
      specs: ["Control 24/7", "Datos históricos", "Notificaciones"]
    },
    {
      icon: "🧠",
      title: "Optimización IA",
      description: "Algoritmos que aprenden y optimizan continuamente las condiciones de cultivo para máximo rendimiento.",
      specs: ["Aprendizaje continuo", "Predicción climática", "Mejora adaptativa"]
    }
  ];

  const sustainability = [
    "🌱 Cultivo ecológico certificado",
    "⚡ 90% energía solar renovable", 
    "💧 Recirculación total del agua",
    "🔬 Control de calidad constante",
    "📊 Trazabilidad completa",
    "♻️ Cero residuos tóxicos"
  ];

  return (
    <section id="tecnologia" className="py-24 bg-dark-zen relative overflow-hidden">
      {/* Elementos de fondo sutiles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-luxury-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-zen-500/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="font-japanese text-zen-400 text-lg tracking-wider mb-4 text-medium-contrast">
            先進技術
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 tracking-wider">
            Tecnología Avanzada
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            Combinamos la <span className="text-gradient-zen font-medium">sabiduría tradicional japonesa</span> con 
            <span className="text-gradient-gold font-medium"> tecnología moderna de precisión</span>, 
            creando un sistema de cultivo único y altamente eficiente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zen-500 to-luxury-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/lovable-uploads/f3cfbfd9-fd64-40d5-8e48-2fa0d0c9a401.png" 
                alt="Sistema de control tecnológico avanzado" 
                className="relative w-full h-auto rounded-2xl shadow-zen transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="animate-slide-in-right space-y-8">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-6 tracking-wide">
                Control de Precisión
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-6 text-medium-contrast">
                精密制御 - Seimitsu Seigyo
              </div>
            </div>
            
            <p className="text-lg text-high-contrast leading-relaxed">
              Nuestro sistema tecnológico monitorea más de 30 parámetros ambientales críticos. 
              Cada variable es ajustada automáticamente para mantener las condiciones ideales 
              que el wasabi necesita en cada etapa de su desarrollo.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="zen-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-gradient-gold mb-2">99.5%</div>
                <div className="text-sm text-soft-contrast tracking-wider">Precisión</div>
              </div>
              <div className="zen-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-gradient-zen mb-2">24/7</div>
                <div className="text-sm text-soft-contrast tracking-wider">Monitoreo</div>
              </div>
            </div>
            
            <div className="glassmorphism p-8 rounded-2xl">
              <p className="font-semibold text-xl text-gradient-gold text-center tracking-wide mb-2">
                "Tecnología al servicio de la tradición"
              </p>
              <div className="font-japanese text-center text-zen-400 text-sm tracking-wider">
                伝統に奉仕する技術
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <Card key={index} className="zen-card border-none hover:shadow-zen transition-all duration-500 animate-scale-in group hover:scale-105" style={{animationDelay: `${index * 0.15}s`}}>
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h4 className="text-xl font-semibold text-gradient-gold mb-4 tracking-wide">{tech.title}</h4>
                </div>
                <p className="text-medium-contrast leading-relaxed text-sm mb-6">{tech.description}</p>
                <div className="space-y-2">
                  {tech.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="bg-zen-900/50 px-3 py-2 rounded-full text-sm text-zen-300 border border-zen-600/30">
                      {spec}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sección de sostenibilidad */}
        <div className="glassmorphism rounded-3xl p-12 md:p-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-8 tracking-wide">
                Compromiso Ambiental
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-8 text-medium-contrast">
                環境への責任 - Kankyō e no Sekinin
              </div>
              <p className="text-lg text-high-contrast mb-8 leading-relaxed">
                Nuestro compromiso con la sostenibilidad va más allá del cultivo. Hemos diseñado 
                un sistema completamente ecológico que respeta el entorno natural de Gran Canaria 
                mientras produce wasabi de la más alta calidad.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="zen-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient-zen mb-2">90%</div>
                  <div className="text-zen-300 text-sm tracking-wider">Solar</div>
                  <div className="font-japanese text-zen-400 text-xs mt-1">太陽光</div>
                </div>
                <div className="zen-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient-gold mb-2">100%</div>
                  <div className="text-luxury-300 text-sm tracking-wider">Recirculado</div>
                  <div className="font-japanese text-zen-400 text-xs mt-1">再循環</div>
                </div>
                <div className="zen-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient-zen mb-2">0</div>
                  <div className="text-zen-300 text-sm tracking-wider">Residuos</div>
                  <div className="font-japanese text-zen-400 text-xs mt-1">廃棄物</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-semibold text-gradient-zen mb-8 tracking-wide">
                Certificaciones
              </h4>
              <div className="space-y-4 mb-8">
                {sustainability.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 zen-card rounded-xl hover:scale-105 transition-transform duration-300">
                    <span className="text-lg text-medium-contrast">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-zen-gradient p-8 rounded-2xl text-center">
                <p className="text-white text-xl font-medium tracking-wide mb-2">
                  "Innovación responsable con la naturaleza"
                </p>
                <div className="font-japanese text-zen-200 text-sm tracking-wider mb-4">
                  自然と調和する革新
                </div>
                <p className="text-zen-100 text-sm">
                  Certificado por organismos ambientales europeos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
