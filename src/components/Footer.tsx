
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-luxury-500/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gold-luxury rounded-full flex items-center justify-center shadow-luxury animate-zen-glow">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-dark-900 fill-current">
                  <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM12 6C11.4 6 11 5.6 11 5S11.4 4 12 4S13 4.4 13 5S12.6 6 12 6ZM8 6C8 4.9 8.9 4 10 4V2C7.8 2 6 3.8 6 6C6 7.1 6.4 8.1 7.1 8.8L8.5 7.4C8.2 7.1 8 6.6 8 6ZM16 6C16 6.6 15.8 7.1 15.5 7.4L16.9 8.8C17.6 8.1 18 7.1 18 6C18 3.8 16.2 2 14 2V4C15.1 4 16 4.9 16 6ZM12 12C8.7 12 6 14.7 6 18C6 21.3 8.7 24 12 24S18 21.3 18 18C18 14.7 15.3 12 12 12ZM12 22C9.8 22 8 20.2 8 18S9.8 14 12 14S16 15.8 16 18S14.2 22 12 22Z"/>
                </svg>
              </div>
              <div>
                <span className="text-3xl font-display font-bold text-gradient-gold tracking-wider">wasabios</span>
                <div className="font-japanese text-luxury-400 text-sm tracking-wider">山葵栽培の芸術</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md font-light">
              El primer cultivo comercial de wasabi auténtico en España. 
              Combinando la sabiduría ancestral japonesa con tecnología de vanguardia 
              en el entorno místico de las montañas de Gran Canaria.
            </p>
            <div className="text-sm text-gray-500 space-y-2">
              <p className="font-medium text-luxury-400">Wasabios S.L.</p>
              <p>Valleseco del Norte, Gran Canaria</p>
              <p>Islas Canarias, España</p>
              <p className="font-japanese text-xs">真正な山葵体験</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gradient-gold tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-luxury-400 transition-all duration-300 font-light tracking-wide"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('empresa')}
                  className="text-gray-400 hover:text-luxury-400 transition-all duration-300 font-light tracking-wide"
                >
                  Nuestra Filosofía
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cultivo')}
                  className="text-gray-400 hover:text-luxury-400 transition-all duration-300 font-light tracking-wide"
                >
                  Arte del Cultivo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tecnologia')}
                  className="text-gray-400 hover:text-luxury-400 transition-all duration-300 font-light tracking-wide"
                >
                  Innovación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-luxury-400 transition-all duration-300 font-light tracking-wide"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto zen */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gradient-zen tracking-wide">
              Conexión
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <span className="text-luxury-400">✉</span>
                <span className="font-light">info@wasabios.es</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-luxury-400">☎</span>
                <span className="font-light">+34 928 XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-luxury-400">📍</span>
                <span className="font-light">Gran Canaria, España</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-luxury-400">⏰</span>
                <span className="font-light">Lun-Vie: 9:00-18:00</span>
              </li>
              <li className="flex items-center space-x-3 mt-6">
                <span className="text-zen-400 font-japanese">🎋</span>
                <span className="font-light font-japanese text-zen-400">禅の心で栽培</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-500/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
              <p>&copy; 2024 Wasabios S.L. Todos los derechos reservados.</p>
              <p className="font-japanese text-xs mt-1">真の山葵を世界へ</p>
            </div>
            <div className="flex space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-luxury-400 transition-colors font-light tracking-wide">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-luxury-400 transition-colors font-light tracking-wide">
                Términos de Uso
              </a>
              <a href="#" className="hover:text-luxury-400 transition-colors font-light tracking-wide">
                Certificaciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
