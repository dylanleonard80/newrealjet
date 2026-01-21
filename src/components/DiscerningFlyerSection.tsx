import { useEffect, useRef, useState } from 'react';
import discerningFlyerImage from '@/assets/discerning-flyer.webp';

const DiscerningFlyerSection = () => {
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
      className="relative min-h-[80vh] flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={discerningFlyerImage}
          alt="Family walking to private jet"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg,
              rgba(0,0,0,0.7) 0%,
              rgba(0,0,0,0.4) 50%,
              rgba(0,0,0,0.2) 100%
            ),
            linear-gradient(180deg,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.3) 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Text Content */}
            <div className="max-w-xl">
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-[0.2em] leading-tight transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="whitespace-nowrap">Designed For The</span>
                <br />
                <span className="italic font-normal whitespace-nowrap">Discerning Flyer</span>
              </h2>

              <p
                className={`mt-6 text-white/80 leading-relaxed text-base md:text-lg transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                REAL Jet serves experienced private travelers who know what "good"
                looks like. Our clients value rigorous safety vetting, white-glove service,
                and access without obligation—and that's exactly what we deliver.
              </p>
            </div>

            {/* Explore Button */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="/about"
                className="inline-flex items-center justify-center px-12 py-4 border border-white/40 hover:border-white text-white font-medium uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:bg-white/10"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscerningFlyerSection;
