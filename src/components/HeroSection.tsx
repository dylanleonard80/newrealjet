import { useEffect, useState } from 'react';
import heroVideo from '@/assets/hero-video.webm';
import BookingBar from './BookingBar';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={heroVideo}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover"
          style={{
            transform: `translate(-50%, -50%) ${isLoaded ? 'scale(1.05)' : 'scale(1)'}`,
            transition: 'transform 20s ease-out',
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(10,8,6,0.4) 0%,
              rgba(10,8,6,0.2) 40%,
              rgba(10,8,6,0.7) 100%
            )
          `,
        }}
      />

      {/* Mobile Booking Bar */}
      <BookingBar className="md:hidden" />

      {/* Bottom Content */}
      <div className="relative z-10 mt-auto px-6 md:px-12 pb-16 md:pb-20 pt-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl">
            {/* FLY REAL Headline */}
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-tight uppercase transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Fly <span className="text-gradient-gold italic">Real.</span>
            </h1>

            {/* Description */}
            <p
              className={`mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              Real Jet aircraft are all designed for calm, comfort, and control, offering updated interiors, thoughtful amenities, and a smooth in-flight experience.
            </p>

            {/* Explore Button */}
            <div
              className={`mt-8 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <a
                href="/fleet"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-white/60 text-white font-medium uppercase tracking-wider text-sm rounded-full transition-all duration-300 hover:bg-white/10"
              >
                Explore
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-3 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;
