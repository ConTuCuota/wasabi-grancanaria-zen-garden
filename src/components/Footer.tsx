
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();

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
    <footer className="bg-dark-950 border-t border-luxury-500/20 safe-area-bottom">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo y descripción - span 2 columns on larger screens */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-luxury rounded-full flex items-center justify-center shadow-luxury animate-zen-glow flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-dark-900 fill-current">
                  <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM12 6C11.4 6 11 5.6 11 5S11.4 4 12 4S13 4.4 13 5S12.6 6 12 6ZM8 6C8 4.9 8.9 4 10 4V2C7.8 2 6 3.8 6 6C6 7.1 6.4 8.1 7.1 8.8L8.5 7.4C8.2 7.1 8 6.6 8 6ZM16 6C16 6.6 15.8 7.1 15.5 7.4L16.9 8.8C17.6 8.1 18 7.1 18 6C18 3.8 16.2 2 14 2V4C15.1 4 16 4.9 16 6ZM12 12C8.7 12 6 14.7 6 18C6 21.3 8.7 24 12 24S18 21.3 18 18C18 14.7 15.3 12 12 12ZM12 22C9.8 22 8 20.2 8 18S9.8 14 12 14S16 15.8 16 18S14.2 22 12 22Z"/>
                </svg>
              </div>
              <div>
                <span className="text-responsive-xl md:text-responsive-2xl lg:text-responsive-3xl font-display font-bold text-gradient-gold tracking-wider">wasabios</span>
                <div className="font-japanese text-luxury-400 text-responsive-xs md:text-responsive-sm tracking-wider">山葵栽培の芸術</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-md font-light text-responsive-sm">
              El primer cultivo comercial de wasabi auténtico en España. 
              Combinando la sabiduría ancestral japonesa con tecnología de vanguardia 
              en el entorno místico de las montañas de Gran Canaria.
            </p>
            <div className="text-responsive-xs md:text-responsive-sm text-gray-500 space-y-1 md:space-y-2">
              <p className="font-medium text-luxury-400">Wasabios S.L.</p>
              <p>Valleseco del Norte, Gran Canaria</p>
              <p>Islas Canarias, España</p>
              <p className="font-japanese text-xs">真正な山葵体験</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-1">
            <h4 className="text-responsive-lg md:text-responsive-xl font-semibold mb-4 md:mb-6 text-gradient-gold tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'empresa', label: 'Nuestra Filosofía' },
                { id: 'cultivo', label: 'Arte del Cultivo' },
                { id: 'tecnologia', label: 'Innovación' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-luxury-400 transition-all duration-300 font-light tracking-wide text-responsive-sm tap-target flex items-start w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto zen */}
          <div className="lg:col-span-1">
            <h4 className="text-responsive-lg md:text-responsive-xl font-semibold mb-4 md:mb-6 text-gradient-zen tracking-wide">
              Conexión
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400">
              {[
                { icon: "✉", text: "info@wasabios.es" },
                { icon: "☎", text: "+34 928 XXX XXX" },
                { icon: "📍", text: "Gran Canaria, España" },
                { icon: "⏰", text: "Lun-Vie: 9:00-18:00" }
              ].map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-luxury-400 flex-shrink-0">{contact.icon}</span>
                  <span className="font-light text-responsive-sm">{contact.text}</span>
                </li>
              ))}
              <li className="flex items-center space-x-3 mt-4 md:mt-6">
                <span className="text-zen-400 font-japanese flex-shrink-0">🎋</span>
                <span className="font-light font-japanese text-zen-400 text-responsive-sm">禅の心で栽培</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-500/20 mt-12 md:mt-16 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-responsive-xs md:text-responsive-sm font-light text-center md:text-left">
              <p>&copy; 2024 Wasabios S.L. Todos los derechos reservados.</p>
              <p className="font-japanese text-xs mt-1">真の山葵を世界へ</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-responsive-xs md:text-responsive-sm text-gray-500">
              {[
                'Política de Privacidad',
                'Términos de Uso',
                'Certificaciones'
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="hover:text-luxury-400 transition-colors font-light tracking-wide tap-target text-center sm:text-left"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
