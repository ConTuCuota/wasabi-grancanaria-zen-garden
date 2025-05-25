
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario con delay realista
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Mensaje enviado con éxito! ✨",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });
    
    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "🏔️",
      title: "Ubicación Premium",
      info: "Valleseco del Norte, Gran Canaria",
      detail: "Montañas zen a 800m de altitud",
      japanese: "高地栽培地"
    },
    {
      icon: "📧",
      title: "Email Corporativo",
      info: "info@wasabios.es",
      detail: "Respuesta en 24h máximo",
      japanese: "企業メール"
    },
    {
      icon: "📞",
      title: "Teléfono Directo",
      info: "+34 928 XXX XXX",
      detail: "Atención personalizada",
      japanese: "直接電話"
    },
    {
      icon: "🕐",
      title: "Horario Zen",
      info: "Lun-Vie: 9:00-18:00",
      detail: "Sáb: 10:00-14:00",
      japanese: "営業時間"
    }
  ];

  const distributionChannels = [
    { icon: "🏪", text: "Restaurantes Michelin y alta gastronomía", japanese: "高級レストラン" },
    { icon: "🍣", text: "Especialistas auténticos en cocina japonesa", japanese: "日本料理専門店" },
    { icon: "🛒", text: "Delicatessen premium y gourmet selectos", japanese: "高級食材店" },
    { icon: "👨‍🍳", text: "Chefs profesionales y escuelas culinarias", japanese: "プロシェフ" },
    { icon: "🎌", text: "Importadores especializados en productos japoneses", japanese: "日本食品輸入業者" },
    { icon: "🌟", text: "Distribuidores premium internacionales", japanese: "国際高級流通業者" }
  ];

  return (
    <section id="contacto" className="py-24 bg-dark-zen relative overflow-hidden zen-pattern">
      {/* Elementos zen de fondo avanzados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-luxury-500/40 to-transparent rounded-full blur-3xl animate-zen-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-zen-500/40 to-transparent rounded-full blur-3xl animate-zen-breathe" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-luxury-400/30 to-transparent rounded-full blur-2xl animate-ripple"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="font-japanese text-zen-400 text-lg tracking-wider mb-4 text-medium-contrast">
            お問い合わせ
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 tracking-wider animate-luxury-glow">
            Contacto Premium
          </h2>
          <p className="text-xl md:text-2xl text-high-contrast max-w-4xl mx-auto leading-relaxed font-light">
            ¿Interesado en nuestro <span className="text-gradient-zen font-medium">wasabi premium auténtico</span>? 
            Conecta con nosotros para descubrir la <span className="text-gradient-gold font-medium">experiencia gastronómica más exclusiva</span> 
            de Europa y acceder a nuestros productos de máxima calidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulario de contacto mejorado */}
          <div className="animate-slide-in-left">
            <Card className="luxury-card border-none shadow-luxury hover-lift">
              <CardContent className="p-10">
                <h3 className="text-3xl font-semibold text-gradient-gold mb-8 tracking-wide">
                  Solicitar Información Exclusiva
                </h3>
                <div className="font-japanese text-zen-400 text-sm tracking-wider mb-8 text-medium-contrast">
                  専用お問い合わせフォーム
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-high-contrast mb-3">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-dark-900/50 border-luxury-400/30 text-high-contrast focus:border-luxury-400 focus:ring-luxury-400/20 transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-high-contrast mb-3">
                        Email Corporativo *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark-900/50 border-luxury-400/30 text-high-contrast focus:border-luxury-400 focus:ring-luxury-400/20 transition-all duration-300"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-high-contrast mb-3">
                        Teléfono de Contacto
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-dark-900/50 border-luxury-400/30 text-high-contrast focus:border-luxury-400 focus:ring-luxury-400/20 transition-all duration-300"
                        placeholder="+34 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-high-contrast mb-3">
                        Empresa / Restaurante
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-dark-900/50 border-luxury-400/30 text-high-contrast focus:border-luxury-400 focus:ring-luxury-400/20 transition-all duration-300"
                        placeholder="Nombre de tu establecimiento"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-high-contrast mb-3">
                      Mensaje Detallado *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-dark-900/50 border-luxury-400/30 text-high-contrast focus:border-luxury-400 focus:ring-luxury-400/20 transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto gastronómico, volúmenes necesarios, experiencia con wasabi, y cómo podemos colaborar para elevar tu oferta culinaria..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold py-4 text-lg shadow-luxury transition-all duration-300 hover:scale-105 tracking-wide premium-glow relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud Premium'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Información de contacto mejorada */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-gradient-gold mb-8 tracking-wide">
                  Información Corporativa
                </h3>
                <div className="font-japanese text-zen-400 text-sm tracking-wider mb-8 text-medium-contrast">
                  企業情報
                </div>
                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="luxury-card border-none shadow-zen hover-lift group">
                      <CardContent className="p-6 flex items-center space-x-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gradient-gold text-lg mb-1">{item.title}</h4>
                          <p className="text-high-contrast font-medium">{item.info}</p>
                          <p className="text-medium-contrast text-sm">{item.detail}</p>
                          <div className="font-japanese text-zen-400 text-xs mt-1">{item.japanese}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="luxury-card border-none shadow-luxury hover-lift">
                <CardContent className="p-8 bg-zen-gradient text-white">
                  <h4 className="text-2xl font-semibold mb-6 tracking-wide">
                    🏔️ Visitas Exclusivas VIP
                  </h4>
                  <div className="font-japanese text-zen-200 text-sm tracking-wider mb-4">
                    VIP施設見学
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Organizamos experiencias gastronómicas únicas en nuestras instalaciones zen. 
                    Descubre de primera mano el proceso artesanal más sofisticado de Europa 
                    para el cultivo de wasabi auténtico en un entorno místico único.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-zen-100">
                      <span>📅</span>
                      <span className="font-semibold">Reservas exclusivas con cita previa</span>
                    </div>
                    <div className="flex items-center space-x-3 text-zen-100">
                      <span>👨‍🍳</span>
                      <span className="font-semibold">Degustación con chef especializado</span>
                    </div>
                    <div className="flex items-center space-x-3 text-zen-100">
                      <span>🎌</span>
                      <span className="font-semibold">Ceremonia tradicional japonesa</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card border-none shadow-zen hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-semibold text-gradient-zen mb-6 tracking-wide">
                    🌐 Canales de Distribución Premium
                  </h4>
                  <div className="font-japanese text-zen-400 text-sm tracking-wider mb-6 text-medium-contrast">
                    高級流通チャネル
                  </div>
                  <div className="space-y-4">
                    {distributionChannels.map((channel, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 glassmorphism rounded-xl hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl">{channel.icon}</span>
                        <div className="flex-1">
                          <span className="text-medium-contrast text-sm leading-relaxed">{channel.text}</span>
                          <div className="font-japanese text-zen-400 text-xs mt-1">{channel.japanese}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to action mejorado */}
        <div className="text-center mt-20">
          <div className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto hover-lift">
            <h3 className="text-3xl font-display font-semibold text-gradient-gold mb-6 tracking-wide">
              Únete a la Revolución del Wasabi Auténtico
            </h3>
            <div className="font-japanese text-zen-400 text-sm tracking-wider mb-6">
              本格わさび革命に参加
            </div>
            <p className="text-lg text-high-contrast mb-8 leading-relaxed">
              Sé parte de la experiencia gastronómica más exclusiva de Europa. 
              Eleva tu cocina con el único wasabi auténtico cultivado en España.
            </p>
            <Button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gold-luxury hover:opacity-90 text-dark-900 font-semibold px-12 py-4 text-lg shadow-luxury transition-all duration-300 hover:scale-105 tracking-wide premium-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Comenzar Experiencia Premium</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <p className="text-soft-contrast text-sm mt-4 tracking-wider">
              Disponibilidad limitada - Solo para establecimientos selectos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
