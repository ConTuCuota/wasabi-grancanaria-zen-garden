
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden zen-pattern">
      {/* Background zen avanzado */}
      <div className="absolute inset-0 bg-luxury-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-800/85 to-zen-900/90"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-luxury-500/5 to-transparent animate-shimmer"></div>
        </div>
      </div>
      
      {/* Elementos zen flotantes mejorados */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-3 h-3 bg-luxury-400 rounded-full animate-zen-breathe premium-glow" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-zen-400 rounded-full animate-zen-breathe zen-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-luxury-300 rounded-full animate-zen-breathe premium-glow" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-zen-300 rounded-full animate-zen-breathe zen-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-luxury-500 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-zen-500 rounded-full animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Círculos zen con gradientes mejorados */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-luxury-500/30 to-transparent rounded-full blur-3xl animate-ripple"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-zen-500/30 to-transparent rounded-full blur-3xl animate-ripple" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-luxury-400/20 to-transparent rounded-full blur-2xl animate-zen-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}>
          {/* Logo zen con caracteres japoneses mejorado */}
          <div className="mb-12 flex flex-col items-center">
            <div className="w-28 h-28 luxury-card rounded-full flex items-center justify-center border border-luxury-400/40 shadow-luxury mb-6 animate-zen-pulse hover-lift group">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-luxury-400 fill-current animate-luxury-glow group-hover:scale-110 transition-transform duration-300">
                <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM12 6C11.4 6 11 5.6 11 5S11.4 4 12 4S13 4.4 13 5S12.6 6 12 6ZM8 6C8 4.9 8.9 4 10 4V2C7.8 2 6 3.8 6 6C6 7.1 6.4 8.1 7.1 8.8L8.5 7.4C8.2 7.1 8 6.6 8 6ZM16 6C16 6.6 15.8 7.1 15.5 7.4L16.9 8.8C17.6 8.1 18 7.1 18 6C18 3.8 16.2 2 14 2V4C15.1 4 16 4.9 16 6ZM12 12C8.7 12 6 14.7 6 18C6 21.3 8.7 24 12 24S18 21.3 18 18C18 14.7 15.3 12 12 12ZM12 22C9.8 22 8 20.2 8 18S9.8 14 12 14S16 15.8 16 18S14.2 22 12 22Z"/>
              </svg>
            </div>
            <div className="font-japanese text-luxury-400 text-xl tracking-wider mb-3 animate-luxury-glow">
              真の山葵 - 伝統の味
            </div>
            <div className="text-sm text-zen-400 tracking-widest uppercase font-medium">
              Authentic Premium Wasabi
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-tight">
            <span className="block text-gradient-gold tracking-wider animate-luxury-glow hover:scale-105 transition-transform duration-500">wasabios</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-6 text-zen-300 font-japanese animate-slide-in-left">
              伝統と革新の完璧な調和
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl font-light mt-3 text-luxury-400 tracking-widest animate-slide-in-right">
              La Perfección de la Tradición Japonesa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-high-contrast mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            El primer cultivo de <span className="text-gradient-zen font-medium">wasabi auténtico</span> en España. 
            Tecnología hidropónica de precisión en las montañas místicas de Gran Canaria, 
            honrando la <span className="text-gradient-gold font-medium">tradición japonesa milenaria</span> con 
            <span className="text-gradient-zen font-medium"> innovación europea</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              onClick={() => scrollToSection('empresa')}
              size="lg" 
              className="bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold px-12 py-5 text-xl shadow-luxury transition-all duration-300 hover:scale-105 tracking-wide premium-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Descubrir la Experiencia</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button 
              onClick={() => scrollToSection('tecnologia')}
              variant="outline" 
              size="lg"
              className="border-2 border-luxury-400/50 text-luxury-300 hover:bg-luxury-500/10 hover:border-luxury-300 px-12 py-5 text-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 tracking-wide zen-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Ver Innovación</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Estadísticas zen mejoradas */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="luxury-card p-6 rounded-2xl text-center hover-lift group">
              <div className="text-4xl font-bold text-gradient-gold mb-3 group-hover:scale-110 transition-transform duration-300">18-24</div>
              <div className="text-zen-400 tracking-wider font-japanese text-sm mb-1">月間栽培</div>
              <div className="text-soft-contrast tracking-wider text-sm">Meses de cultivo artesanal</div>
            </div>
            <div className="luxury-card p-6 rounded-2xl text-center hover-lift group">
              <div className="text-4xl font-bold text-gradient-zen mb-3 group-hover:scale-110 transition-transform duration-300">800m</div>
              <div className="text-zen-400 tracking-wider font-japanese text-sm mb-1">禅の高度</div>
              <div className="text-soft-contrast tracking-wider text-sm">Altitud zen perfecta</div>
            </div>
            <div className="luxury-card p-6 rounded-2xl text-center hover-lift group">
              <div className="text-4xl font-bold text-gradient-gold mb-3 group-hover:scale-110 transition-transform duration-300">1º</div>
              <div className="text-zen-400 tracking-wider font-japanese text-sm mb-1">スペイン初</div>
              <div className="text-soft-contrast tracking-wider text-sm">Pioneros en España</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator zen mejorado */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-10 h-16 border-2 border-luxury-400/40 rounded-full flex justify-center backdrop-blur-sm luxury-card hover:border-luxury-400/60 transition-colors duration-300 group">
            <div className="w-2 h-6 bg-luxury-400/80 rounded-full mt-4 animate-ripple group-hover:bg-luxury-400 transition-colors duration-300"></div>
          </div>
          <div className="text-xs text-zen-400 mt-2 tracking-wider font-japanese opacity-70">下にスクロール</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
