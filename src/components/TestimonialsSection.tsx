import { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#A9A3D0' }}
    >
      {/* Dramatic background accent */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 20% 50%, hsl(var(--champagne) / 0.08), transparent),
            radial-gradient(ellipse 40% 60% at 80% 50%, hsl(var(--champagne) / 0.05), transparent)
          `,
        }}
      />

      {/* Decorative quote marks */}
      <div
        className={`absolute top-16 left-1/2 -translate-x-1/2 text-[300px] md:text-[400px] font-serif leading-none select-none pointer-events-none transition-all duration-1500 ${
          isVisible ? 'opacity-[0.03]' : 'opacity-0'
        }`}
        style={{ color: 'hsl(var(--champagne))' }}
      >
        "
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Quote */}
        <blockquote
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-light text-[hsl(var(--cream))] leading-[1.3] tracking-tight">
            Thanks so much for everything! Very smooth trip home. Crew and customs were{' '}
            <span className="italic">great!!</span>
          </p>
        </blockquote>

        {/* Attribution */}
        <div
          className={`mt-12 md:mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-12 h-px bg-[hsl(var(--champagne))/0.4] mx-auto mb-8" />
          <p className="text-lg font-serif text-[hsl(var(--cream))]">Pam V</p>
          <p className="mt-1 text-sm text-[hsl(var(--cream-muted))] tracking-wide">
            REAL Jet Customer
          </p>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </section>
  );
};

export default TestimonialsSection;
