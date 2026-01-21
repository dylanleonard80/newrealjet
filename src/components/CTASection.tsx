import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
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
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--charcoal-dark))' }}
    >
      {/* Dramatic gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--champagne) / 0.08), transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 0%, hsl(var(--champagne) / 0.04), transparent 40%)
          `,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <span
          className={`eyebrow block mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Ready to Fly?
        </span>

        {/* Headline */}
        <h2
          className={`font-serif font-light text-[hsl(var(--cream))] leading-[1.1] transition-all duration-1000 uppercase ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Your journey starts with{' '}
          <span className="italic text-[hsl(var(--champagne))]">a conversation.</span>
        </h2>

        {/* Subtext */}
        <p
          className={`mt-8 body-large max-w-xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Tell us about your travel needs, and our team will craft a personalized solution.
          No commitment required.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group btn-luxury bg-[hsl(var(--champagne))] text-[hsl(var(--charcoal-dark))] rounded-full font-medium hover:bg-[hsl(var(--champagne-light))] flex items-center gap-2"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <Link
            to="/about"
            className="px-8 py-4 border border-white/[0.15] text-[hsl(var(--cream))] rounded-full font-medium hover:border-[hsl(var(--champagne))/0.5] hover:text-[hsl(var(--champagne))] transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
};

export default CTASection;
