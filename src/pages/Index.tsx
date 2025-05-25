
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompanySection from '@/components/CompanySection';
import CultivationSection from '@/components/CultivationSection';
import TechnologySection from '@/components/TechnologySection';
import ProductGallery from '@/components/ProductGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
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
