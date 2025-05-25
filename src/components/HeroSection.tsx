
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = isMobile ? 80 : 100;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden zen-pattern safe-area-top">
      {/* Enhanced background with better mobile performance */}
      <div className="absolute inset-0 bg-luxury-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-800/85 to-zen-900/90"></div>
        <div className="absolute inset-0 opacity-20 md:opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-luxury-500/5 to-transparent animate-shimmer"></div>
        </div>
      </div>
      
      {/* Optimized floating elements for mobile */}
      <div className="absolute inset-0 opacity-30 md:opacity-40">
        <div className="absolute top-16 left-4 md:top-20 md:left-20 w-2 h-2 md:w-3 md:h-3 bg-luxury-400 rounded-full animate-zen-breathe premium-glow" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-8 md:top-40 md:right-32 w-1.5 h-1.5 md:w-2 md:h-2 bg-zen-400 rounded-full animate-zen-breathe zen-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-24 left-8 md:bottom-32 md:left-32 w-3 h-3 md:w-4 md:h-4 bg-luxury-300 rounded-full animate-zen-breathe premium-glow" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-16 right-4 md:bottom-20 md:right-20 w-1.5 h-1.5 md:w-2 md:h-2 bg-zen-300 rounded-full animate-zen-breathe zen-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-4 md:left-10 w-1 h-1 bg-luxury-500 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-4 md:right-10 w-1 h-1 bg-zen-500 rounded-full animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Responsive circle gradients */}
      <div className="absolute inset-0 opacity-15 md:opacity-25">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-luxury-500/30 to-transparent rounded-full blur-2xl md:blur-3xl animate-ripple"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-l from-zen-500/30 to-transparent rounded-full blur-2xl md:blur-3xl animate-ripple" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-radial from-luxury-400/20 to-transparent rounded-full blur-xl md:blur-2xl animate-zen-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}>
          {/* Enhanced logo section */}
          <div className="mb-8 md:mb-12 flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 lg:w-28 md:h-24 lg:h-28 luxury-card rounded-full flex items-center justify-center border border-luxury-400/40 shadow-luxury mb-4 md:mb-6 animate-zen-pulse hover-lift group">
              <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 text-luxury-400 fill-current animate-luxury-glow group-hover:scale-110 transition-transform duration-300">
                <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM12 6C11.4 6 11 5.6 11 5S11.4 4 12 4S13 4.4 13 5S12.6 6 12 6ZM8 6C8 4.9 8.9 4 10 4V2C7.8 2 6 3.8 6 6C6 7.1 6.4 8.1 7.1 8.8L8.5 7.4C8.2 7.1 8 6.6 8 6ZM16 6C16 6.6 15.8 7.1 15.5 7.4L16.9 8.8C17.6 8.1 18 7.1 18 6C18 3.8 16.2 2 14 2V4C15.1 4 16 4.9 16 6ZM12 12C8.7 12 6 14.7 6 18C6 21.3 8.7 24 12 24S18 21.3 18 18C18 14.7 15.3 12 12 12ZM12 22C9.8 22 8 20.2 8 18S9.8 14 12 14S16 15.8 16 18S14.2 22 12 22Z"/>
              </svg>
            </div>
            <div className="font-japanese text-luxury-400 text-responsive-lg md:text-responsive-xl tracking-wider mb-2 md:mb-3 animate-luxury-glow">
              真の山葵 - 伝統の味
            </div>
            <div className="text-responsive-xs md:text-responsive-sm text-zen-400 tracking-widest uppercase font-medium">
              Authentic Premium Wasabi
            </div>
          </div>

          {/* Responsive typography */}
          <h1 className="text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl font-display font-bold mb-6 md:mb-8 leading-tight">
            <span className="block text-gradient-gold tracking-wider animate-luxury-glow hover:scale-105 transition-transform duration-500">wasabios</span>
            <span className="block text-responsive-lg md:text-responsive-2xl lg:text-responsive-3xl font-normal mt-4 md:mt-6 text-zen-300 font-japanese animate-slide-in-left">
              伝統と革新の完璧な調和
            </span>
            <span className="block text-responsive-sm md:text-responsive-lg lg:text-responsive-xl font-light mt-2 md:mt-3 text-luxury-400 tracking-widest animate-slide-in-right">
              La Perfección de la Tradición Japonesa
            </span>
          </h1>
          
          <p className="text-responsive-sm md:text-responsive-lg lg:text-responsive-xl text-high-contrast mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light spacing-responsive">
            El primer cultivo de <span className="text-gradient-zen font-medium">wasabi auténtico</span> en España. 
            Tecnología hidropónica de precisión en las montañas místicas de Gran Canaria, 
            honrando la <span className="text-gradient-gold font-medium">tradición japonesa milenaria</span> con 
            <span className="text-gradient-zen font-medium"> innovación europea</span>.
          </p>
          
          {/* Responsive button layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 px-4">
            <Button 
              onClick={() => scrollToSection('empresa')}
              size={isMobile ? "default" : "lg"}
              className="w-full sm:w-auto bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold px-6 md:px-12 py-3 md:py-5 text-responsive-sm md:text-responsive-lg shadow-luxury transition-all duration-300 hover:scale-105 tracking-wide premium-glow group relative overflow-hidden tap-target"
            >
              <span className="relative z-10">Descubrir la Experiencia</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button 
              onClick={() => scrollToSection('tecnologia')}
              variant="outline" 
              size={isMobile ? "default" : "lg"}
              className="w-full sm:w-auto border-2 border-luxury-400/50 text-luxury-300 hover:bg-luxury-500/10 hover:border-luxury-300 px-6 md:px-12 py-3 md:py-5 text-responsive-sm md:text-responsive-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 tracking-wide zen-glow group relative overflow-hidden tap-target"
            >
              <span className="relative z-10">Ver Innovación</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Responsive statistics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: "18-24", japanese: "月間栽培", description: "Meses de cultivo artesanal", color: "gold" },
              { value: "800m", japanese: "禅の高度", description: "Altitud zen perfecta", color: "zen" },
              { value: "1º", japanese: "スペイン初", description: "Pioneros en España", color: "gold" }
            ].map((stat, index) => (
              <div key={index} className="luxury-card p-4 md:p-6 rounded-2xl text-center hover-lift group">
                <div className={`text-responsive-2xl md:text-responsive-3xl font-bold ${stat.color === 'gold' ? 'text-gradient-gold' : 'text-gradient-zen'} mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-zen-400 tracking-wider font-japanese text-responsive-xs md:text-responsive-sm mb-1">{stat.japanese}</div>
                <div className="text-soft-contrast tracking-wider text-responsive-xs md:text-responsive-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-float safe-area-bottom">
          <div className="w-8 h-12 md:w-10 md:h-16 border-2 border-luxury-400/40 rounded-full flex justify-center backdrop-blur-sm luxury-card hover:border-luxury-400/60 transition-colors duration-300 group">
            <div className="w-1.5 h-4 md:w-2 md:h-6 bg-luxury-400/80 rounded-full mt-3 md:mt-4 animate-ripple group-hover:bg-luxury-400 transition-colors duration-300"></div>
          </div>
          <div className="text-responsive-xs text-zen-400 mt-2 tracking-wider font-japanese opacity-70">下にスクロール</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
