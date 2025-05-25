
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompanySection from '@/components/CompanySection';
import CultivationSection from '@/components/CultivationSection';
import TechnologySection from '@/components/TechnologySection';
import ProductGallery from '@/components/ProductGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/47b3289f-4ed1-4883-9255-44413206deba.png',
      '/lovable-uploads/605e445a-8bfe-4325-90b4-0a05fb70b188.png'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Wasabios",
      "description": "Primer cultivo de wasabi auténtico en España",
      "url": "https://wasabios.com",
      "logo": "https://wasabios.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valleseco",
        "addressRegion": "Gran Canaria",
        "addressCountry": "ES"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <CompanySection />
      <CultivationSection />
      <TechnologySection />
      <ProductGallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
