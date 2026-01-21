import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import ValueProposition from '@/components/ValueProposition';
import ImageBreakSection from '@/components/ImageBreakSection';
import RealComfortSection from '@/components/RealComfortSection';
import DiscerningFlyerSection from '@/components/DiscerningFlyerSection';
import EventsSection from '@/components/EventsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RealDealSection from '@/components/RealDealSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scrollbar-luxury" style={{ backgroundColor: 'hsl(var(--charcoal-dark))' }}>
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ValueProposition />
      <ImageBreakSection />
      <RealComfortSection />
      <TestimonialsSection />
      <DiscerningFlyerSection />
      <RealDealSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
