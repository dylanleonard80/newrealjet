import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ImageBreakSection from '@/components/ImageBreakSection';
import RealComfortSection from '@/components/RealComfortSection';
import DiscerningFlyerSection from '@/components/DiscerningFlyerSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RealDealSection from '@/components/RealDealSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scrollbar-luxury" style={{ backgroundColor: 'hsl(var(--charcoal-dark))' }}>
      <Header />
      <HeroSection />
      <ValueProposition />
      <ImageBreakSection />
      <RealComfortSection />
      <DiscerningFlyerSection />
      <TestimonialsSection />
      <RealDealSection />
      <Footer />
    </div>
  );
};

export default Index;
