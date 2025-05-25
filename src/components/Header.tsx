
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-top ${
      isScrolled 
        ? 'backdrop-luxury border-b border-luxury-500/30 py-3' 
        : 'backdrop-luxury border-b border-luxury-500/20 py-4 md:py-6'
    }`}>
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-luxury rounded-full flex items-center justify-center shadow-luxury animate-zen-glow flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-dark-900 fill-current">
              <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM12 6C11.4 6 11 5.6 11 5S11.4 4 12 4S13 4.4 13 5S12.6 6 12 6ZM8 6C8 4.9 8.9 4 10 4V2C7.8 2 6 3.8 6 6C6 7.1 6.4 8.1 7.1 8.8L8.5 7.4C8.2 7.1 8 6.6 8 6ZM16 6C16 6.6 15.8 7.1 15.5 7.4L16.9 8.8C17.6 8.1 18 7.1 18 6C18 3.8 16.2 2 14 2V4C15.1 4 16 4.9 16 6ZM12 12C8.7 12 6 14.7 6 18C6 21.3 8.7 24 12 24S18 21.3 18 18C18 14.7 15.3 12 12 12ZM12 22C9.8 22 8 20.2 8 18S9.8 14 12 14S16 15.8 16 18S14.2 22 12 22Z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gradient-gold tracking-wider">
              wasabios
            </span>
            <span className="font-japanese text-xs md:text-sm text-luxury-400 hidden sm:block leading-none">
              山葵栽培
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'empresa', label: 'Filosofía' },
            { id: 'cultivo', label: 'Cultivo' },
            { id: 'tecnologia', label: 'Tecnología' },
            { id: 'contacto', label: 'Contacto' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-luxury-400 transition-all duration-300 font-medium tracking-wide text-responsive-sm tap-target flex items-center justify-center"
            >
              {item.label}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('contacto')}
            className="bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold px-4 py-2 xl:px-6 xl:py-3 shadow-luxury transition-all duration-300 hover:scale-105 text-responsive-sm"
          >
            Experiencia Gourmet
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-3 text-luxury-400 hover:text-luxury-300 transition-colors tap-target"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 backdrop-luxury border-b border-luxury-500/20 lg:hidden safe-area-left safe-area-right">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'empresa', label: 'Filosofía' },
                { id: 'cultivo', label: 'Cultivo' },
                { id: 'tecnologia', label: 'Tecnología' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-luxury-400 transition-colors font-medium py-3 text-responsive-base tap-target"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold shadow-luxury py-3 text-responsive-base tap-target"
              >
                Experiencia Gourmet
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
