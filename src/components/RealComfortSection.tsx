import { useEffect, useRef, useState } from 'react';
import jetInterior from '@/assets/jet-interior.webp';

const RealComfortSection = () => {
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
      className="relative min-h-[80vh] md:min-h-screen flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${jetInterior})`,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl">
            {/* Headline */}
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-[0.3em] uppercase transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Real <span className="italic font-normal">Comfort</span>
            </h2>

            {/* Description */}
            <p
              className={`mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              REAL JET aircraft are all designed for calm, comfort, and control, offering
              updated interiors, thoughtful amenities, and a smooth in-flight experience.
            </p>

            {/* Explore Button */}
            <a
              href="/safety"
              className={`inline-block mt-8 px-12 py-4 border border-white/50 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealComfortSection;
