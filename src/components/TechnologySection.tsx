
import { Card, CardContent } from '@/components/ui/card';

const TechnologySection = () => {
  const technologies = [
    {
      icon: "🌡️",
      title: "Sensores IoT Avanzados",
      description: "Monitoreo continuo 24/7 de pH, temperatura, humedad, luminosidad y nutrientes con precisión milimétrica.",
      specs: ["pH: ±0.1 exactitud", "Temp: ±0.5°C", "Humedad: ±2%"]
    },
    {
      icon: "🤖",
      title: "Automatización Inteligente",
      description: "Sistemas de IA que ajustan automáticamente riego, nutrición y clima según las necesidades específicas de cada planta.",
      specs: ["24/7 Operativo", "Auto-ajuste IA", "Alertas instantáneas"]
    },
    {
      icon: "📱",
      title: "Control Remoto Total",
      description: "Aplicación móvil avanzada para supervisión y control desde cualquier ubicación del mundo.",
      specs: ["Tiempo real", "Históricos completos", "Notificaciones push"]
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      description: "Algoritmos de aprendizaje automático que optimizan continuamente las condiciones de cultivo.",
      specs: ["Predicción climática", "Optimización continua", "Mejora adaptativa"]
    }
  ];

  const certifications = [
    "🌱 100% Cultivo Ecológico Certificado",
    "⚡ 95% Energía Renovable Solar",
    "💧 100% Agua Reciclada y Purificada",
    "🔬 Laboratorio de Control Calidad",
    "📊 Trazabilidad Blockchain Completa",
    "♻️ Huella Carbono Neutral"
  ];

  return (
    <section id="tecnologia" className="py-24 bg-dark-zen relative overflow-hidden">
      {/* Elementos zen de fondo */}
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
            Innovación Tecnológica
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            Fusionamos la <span className="text-gradient-zen font-medium">sabiduría ancestral japonesa</span> con 
            la <span className="text-gradient-gold font-medium">inteligencia artificial más avanzada</span>, 
            creando el ecosistema de cultivo más sofisticado del mundo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zen-500 to-luxury-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/lovable-uploads/f3cfbfd9-fd64-40d5-8e48-2fa0d0c9a401.png" 
                alt="Sistema de sensores IoT avanzado de Wasabios" 
                className="relative w-full h-auto rounded-2xl shadow-zen transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="animate-slide-in-right space-y-8">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-6 tracking-wide">
                Precisión Nanométrica
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-6 text-medium-contrast">
                ナノメートル精度 - Nanomētoru Seido
              </div>
            </div>
            
            <p className="text-lg text-high-contrast leading-relaxed">
              Nuestro ecosistema de sensores IoT de última generación monitorea más de 47 parámetros 
              ambientales en tiempo real. Cada microsegundo cuenta para mantener las condiciones 
              perfectas que el wasabi necesita para desarrollar su característico sabor y potencia.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="zen-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-gradient-gold mb-2">99.7%</div>
                <div className="text-sm text-soft-contrast tracking-wider">Precisión Sistema</div>
              </div>
              <div className="zen-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-gradient-zen mb-2">5 min</div>
                <div className="text-sm text-soft-contrast tracking-wider">Frecuencia Monitoreo</div>
              </div>
            </div>
            
            <div className="glassmorphism p-8 rounded-2xl">
              <p className="font-semibold text-xl text-gradient-gold text-center tracking-wide mb-2">
                "Cada variable controlada con precisión científica extrema"
              </p>
              <div className="font-japanese text-center text-zen-400 text-sm tracking-wider">
                科学的精密制御
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

        {/* Sección de sostenibilidad avanzada */}
        <div className="glassmorphism rounded-3xl p-12 md:p-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-8 tracking-wide">
                Sostenibilidad Extrema
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-8 text-medium-contrast">
                持続可能性 - Jizoku Kanōsei
              </div>
              <p className="text-lg text-high-contrast mb-8 leading-relaxed">
                Nuestro compromiso con el medio ambiente va más allá de la sostenibilidad básica. 
                Hemos creado un ecosistema de carbono negativo que regenera el entorno mientras 
                produce el wasabi más puro del mundo.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="zen-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient-zen mb-2">-15%</div>
                  <div className="text-zen-300 text-sm tracking-wider">Carbono Negativo</div>
                  <div className="font-japanese text-zen-400 text-xs mt-1">炭素負</div>
                </div>
                <div className="zen-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient-gold mb-2">100%</div>
                  <div className="text-luxury-300 text-sm tracking-wider">Renovable</div>
                  <div className="font-japanese text-zen-400 text-xs mt-1">再生可能</div>
                </div>
                <div className="zen-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient-zen mb-2">0</div>
                  <div className="text-zen-300 text-sm tracking-wider">Residuos</div>
                  <div className="font-japanese text-zen-400 text-xs mt-1">廃棄物ゼロ</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-semibold text-gradient-zen mb-8 tracking-wide">
                Certificaciones Premium
              </h4>
              <div className="space-y-4 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 zen-card rounded-xl hover:scale-105 transition-transform duration-300">
                    <span className="text-lg text-medium-contrast">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-zen-gradient p-8 rounded-2xl text-center">
                <p className="text-white text-xl font-medium tracking-wide mb-2">
                  "Tecnología que honra la naturaleza"
                </p>
                <div className="font-japanese text-zen-200 text-sm tracking-wider mb-4">
                  自然を敬う技術
                </div>
                <p className="text-zen-100 text-sm">
                  Certificado por organismos internacionales de sostenibilidad
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
