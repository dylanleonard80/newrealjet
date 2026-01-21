import { useEffect, useRef, useState } from 'react';

const partners = [
  'NetJets',
  'Flexjet',
  'VistaJet',
  'Wheels Up',
  'XO',
  'Sentient Jet',
];

const TrustedBySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 border-b border-white/[0.04]"
      style={{ backgroundColor: 'hsl(var(--charcoal-dark))' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <p
          className={`text-[10px] font-medium tracking-[0.3em] uppercase text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ color: 'hsl(var(--cream-muted))' }}
        >
          Partnered with Industry Leaders
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-20">
          {partners.map((partner, index) => (
            <span
              key={partner}
              className={`text-xl md:text-2xl font-serif font-light tracking-tight transition-all duration-1000 cursor-default ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                color: 'hsl(var(--cream-muted) / 0.3)',
                transitionDelay: `${100 + index * 80}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'hsl(var(--champagne))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'hsl(var(--cream-muted) / 0.3)';
              }}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
