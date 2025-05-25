
import { Card, CardContent } from '@/components/ui/card';

const CultivationSection = () => {
  const processes = [
    {
      step: "01",
      title: "Sustrato Especializado",
      description: "Preparación de lechos que replican los suelos volcánicos de montaña japoneses, con drenaje perfecto y pH controlado.",
      image: "/lovable-uploads/e0e9cc05-8eba-4ad2-93e7-527181d7c1eb.png"
    },
    {
      step: "02", 
      title: "Sistema Hidropónico",
      description: "Circulación continua de agua fría rica en minerales, simulando los arroyos montañosos naturales del wasabi.",
      image: "/lovable-uploads/742b1868-bec4-4486-8925-2cccbe20bd65.png"
    },
    {
      step: "03",
      title: "Control Ambiental",
      description: "Monitoreo constante de temperatura, humedad, pH y calidad del agua mediante sensores de precisión.",
      image: "/lovable-uploads/d4b019ed-7074-4441-9f5c-e3ef6e93efa2.png"
    },
    {
      step: "04",
      title: "Cosecha Selectiva",
      description: "Recolección manual cuando cada rizoma alcanza su punto óptimo de madurez, preservando máxima potencia.",
      image: "/lovable-uploads/989f875f-d3df-4f82-9a8e-604ad70d444f.png"
    }
  ];

  const specs = [
    { label: "Temperatura agua", value: "12-18°C", icon: "🌡️" },
    { label: "pH del sustrato", value: "6.0-7.0", icon: "⚗️" },
    { label: "Humedad ambiental", value: "85-95%", icon: "💧" },
    { label: "Ciclo completo", value: "18-24 meses", icon: "⏰" },
    { label: "Altitud", value: "800m", icon: "🏔️" },
    { label: "Pureza del agua", value: "Filtrada", icon: "💎" }
  ];

  return (
    <section id="cultivo" className="py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Elementos de fondo sutiles */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-radial from-zen-500/40 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-luxury-500/40 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="font-japanese text-luxury-400 text-lg tracking-wider mb-4 text-medium-contrast">
            栽培方法
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 tracking-wider">
            Método de Cultivo
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            Aplicamos <span className="text-gradient-zen font-medium">técnicas tradicionales japonesas</span> adaptadas 
            con <span className="text-gradient-gold font-medium">tecnología hidropónica moderna</span>, 
            recreando las condiciones naturales del wasabi en su hábitat originario.
          </p>
        </div>

        {/* Imagen panorámica del cultivo */}
        <div className="mb-20 animate-fade-in">
          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-zen-500 to-luxury-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/lovable-uploads/cb4c53ee-df2c-4806-93a8-17d596f4dd15.png"
              alt="Instalaciones de cultivo hidropónico de wasabi en Valleseco" 
              className="relative w-full h-auto rounded-2xl shadow-zen transform group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-display font-bold mb-2">Cultivo Hidropónico Especializado</h3>
              <p className="text-lg opacity-90">Reproduciendo el ecosistema natural japonés en Gran Canaria</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left space-y-8">
            <div>
              <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-6 tracking-wide">
                Hidroponía de Precisión
              </h3>
              <div className="font-japanese text-zen-400 text-sm tracking-wider mb-6 text-medium-contrast">
                水耕栽培 - Suikō Saibai (Cultivo Hidropónico)
              </div>
            </div>
            
            <p className="text-lg text-high-contrast leading-relaxed">
              El wasabi crece naturalmente en arroyos de montaña japoneses, donde las raíces se alimentan 
              de agua corriente fría, rica en minerales volcánicos. Nuestro sistema hidropónico avanzado 
              recrea estas condiciones exactas con agua de manantial canario.
            </p>
            
            <div className="glassmorphism p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold text-gradient-zen mb-6 tracking-wide">
                Parámetros de Cultivo
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <div key={index} className="zen-card p-4 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{spec.icon}</div>
                    <div className="text-xl font-bold text-gradient-gold mb-1">{spec.value}</div>
                    <div className="text-xs text-soft-contrast tracking-wider">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-zen-gradient p-8 rounded-2xl text-center">
              <p className="font-semibold text-xl text-white mb-2 tracking-wide">
                "Reproducimos las condiciones exactas de los valles japoneses"
              </p>
              <div className="font-japanese text-zen-200 text-sm tracking-wider">
                日本の谷の条件を再現
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zen-500 to-luxury-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/lovable-uploads/f3cfbfd9-fd64-40d5-8e48-2fa0d0c9a401.png" 
                alt="Sistema hidropónico de precisión para wasabi" 
                className="relative w-full h-auto rounded-2xl shadow-zen transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-soft-contrast tracking-wider">
                Sistema hidropónico avanzado - Valleseco, Gran Canaria
              </p>
            </div>
          </div>
        </div>

        {/* Proceso de cultivo */}
        <div className="mb-20">
          <h3 className="text-4xl font-display font-semibold text-gradient-zen mb-12 text-center tracking-wide">
            Proceso de Producción
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="zen-card border-none hover:shadow-zen transition-all duration-500 animate-scale-in group hover:scale-105 overflow-hidden" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img 
                    src={process.image} 
                    alt={process.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="text-3xl font-bold text-gradient-gold">{process.step}</div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gradient-zen mb-3 tracking-wide">{process.title}</h4>
                  <p className="text-medium-contrast leading-relaxed text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ubicación específica mejorada */}
        <div className="glassmorphism rounded-3xl p-12 md:p-16 text-center animate-fade-in">
          <h3 className="text-4xl font-display font-semibold text-gradient-gold mb-6 tracking-wide">
            Valleseco - Norte de Gran Canaria
          </h3>
          <div className="font-japanese text-zen-400 text-sm tracking-wider mb-8 text-medium-contrast">
            グランカナリア島北部
          </div>
          
          <p className="text-xl text-high-contrast mb-12 max-w-4xl mx-auto leading-relaxed">
            Valleseco, situado en el norte montañoso de Gran Canaria, nos ofrece el microclima subtropical perfecto. 
            Los vientos alisios, la humedad constante y el agua pura de los acuíferos volcánicos crean condiciones 
            excepcionales para el cultivo de wasabi auténtico.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="zen-card p-8 rounded-2xl group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-gradient-gold mb-2">800m</div>
              <div className="text-luxury-300 text-sm tracking-wider">Altitud</div>
              <div className="font-japanese text-zen-400 text-xs mt-1">海抜</div>
            </div>
            <div className="zen-card p-8 rounded-2xl group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-gradient-zen mb-2">16-20°C</div>
              <div className="text-zen-300 text-sm tracking-wider">Temperatura media</div>
              <div className="font-japanese text-zen-400 text-xs mt-1">平均気温</div>
            </div>
            <div className="zen-card p-8 rounded-2xl group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-gradient-gold mb-2">90%</div>
              <div className="text-luxury-300 text-sm tracking-wider">Humedad natural</div>
              <div className="font-japanese text-zen-400 text-xs mt-1">自然湿度</div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-zen-600 to-luxury-600 p-8 rounded-2xl">
            <p className="text-white text-lg font-medium tracking-wide">
              "El lugar perfecto donde confluyen la tradición japonesa y la naturaleza canaria"
            </p>
            <div className="font-japanese text-zen-200 text-sm mt-2 tracking-wider">
              日本の伝統とカナリアの自然が出会う完璧な場所
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultivationSection;
