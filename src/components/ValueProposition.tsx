import { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Unmatched Experience',
    description: '20+ years shaping private aviation, with over 2 million safe take-offs and landings.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        {/* Shield with plane */}
        <path d="M32 4L8 16v16c0 14 10 24 24 28 14-4 24-14 24-28V16L32 4z" />
        <circle cx="32" cy="32" r="12" />
        <path d="M32 24v16M26 32h12" />
        <path d="M28 28l4-4 4 4" />
      </svg>
    ),
  },
  {
    title: 'The Right Jet, Every Time',
    description: 'Every flight matched to your passengers, route, and safety standards.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        {/* Target with plane */}
        <circle cx="32" cy="32" r="20" />
        <circle cx="32" cy="32" r="10" />
        <line x1="32" y1="4" x2="32" y2="12" />
        <line x1="32" y1="52" x2="32" y2="60" />
        <line x1="4" y1="32" x2="12" y2="32" />
        <line x1="52" y1="32" x2="60" y2="32" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Freedom Without Commitment',
    description: 'Private aviation without long-term contracts or forced commitments.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        {/* Open padlock */}
        <rect x="16" y="28" width="32" height="28" rx="4" />
        <path d="M24 28V18c0-6 4-10 8-10s8 4 8 10" />
        <circle cx="32" cy="42" r="4" />
        <line x1="32" y1="46" x2="32" y2="50" />
      </svg>
    ),
  },
];

const ValueProposition = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 50%, #1a1a1a 100%)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-[0.3em] uppercase transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Experience Matters
          </h2>

          {/* Divider line */}
          <div
            className={`w-24 h-px bg-purple-400/60 mx-auto mt-8 mb-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />

          <p
            className={`text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            REAL Jet was founded by the team that created the Jet Card at Marquis Jet and co-founded the
            Jet Membership model at Wheels Up. After more than two decades shaping private aviation,
            we saw the market shift—and built a better solution for today's traveler.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-purple-300/70">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-white tracking-[0.15em] uppercase mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="/about"
            className="inline-block px-10 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
          >
            Learn More About Real Jet
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
