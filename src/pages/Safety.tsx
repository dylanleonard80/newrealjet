import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import peaceOfMind from '@/assets/peace-of-mind.webp';
import travelConfidence from '@/assets/travel-confidence.webp';
import flightCrew from '@/assets/flight-crew.webp';

const Safety = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [pioneersVisible, setPioneersVisible] = useState(false);
  const [crewVisible, setCrewVisible] = useState(false);

  const pioneersRef = useRef<HTMLDivElement>(null);
  const crewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 100);

    const observerOptions = { threshold: 0.2 };

    const pioneersObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPioneersVisible(true);
    }, observerOptions);

    const crewObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCrewVisible(true);
    }, observerOptions);

    if (pioneersRef.current) pioneersObserver.observe(pioneersRef.current);
    if (crewRef.current) crewObserver.observe(crewRef.current);

    return () => {
      pioneersObserver.disconnect();
      crewObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      <Header />

      {/* Hero Section - Real Peace of Mind */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background Image with Ken Burns effect */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out ${
            heroVisible ? 'scale-110' : 'scale-100'
          }`}
          style={{ backgroundImage: `url(${peaceOfMind})` }}
        />

        {/* Sophisticated Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%),
              linear-gradient(180deg, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-16 pb-20 md:pb-28 pt-40">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-2xl">
              <div
                className={`w-12 h-px bg-purple-400 mb-8 transition-all duration-1000 ${
                  heroVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'
                }`}
              />
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.08em] uppercase leading-tight transition-all duration-1000 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Real <span className="italic font-normal">Peace Of Mind</span>
              </h1>
              <p
                className={`mt-8 text-lg text-white/75 leading-relaxed max-w-lg transition-all duration-1000 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                REAL JET aircraft are all designed for calm, comfort, and control, offering updated interiors, thoughtful amenities, and a smooth in-flight experience.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
            heroVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Pioneers in Safety */}
      <section ref={pioneersRef} className="py-28 md:py-36 bg-[#E7E7E7] relative overflow-hidden">
  
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              pioneersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-purple-600 block mb-6">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 tracking-wide uppercase">
              Pioneers In <em className="italic font-normal">Safety</em>
            </h2>
          </div>

          <div
            className={`w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto my-10 transition-all duration-1000 ${
              pioneersVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />

          <p
            className={`text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ${
              pioneersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            REAL Jet is WYVERN certified, meeting one of the most rigorous independent safety standards in private aviation.
            Every flight is vetted against the highest benchmarks for pilot training, aircraft maintenance,
            operational discipline, and safety management—so you can fly with complete confidence.
          </p>

          {/* Trust badges */}
          <div
            className={`flex justify-center gap-12 mt-14 transition-all duration-1000 ${
              pioneersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            {['WYVERN', 'ARGUS', 'IS-BAO'].map((badge) => (
              <div key={badge} className="text-center">
                <div className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
                  {badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel with Confidence - Full bleed image section */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${travelConfidence})`,
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.75) 100%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 pb-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide uppercase leading-tight whitespace-nowrap">
                Travel With <span className="italic font-normal">Confidence</span>
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed max-w-md">
                Every trip undergoes a comprehensive feasibility review conducted by a
                team with over 60 years of combined FAA Part 135 experience.
              </p>
              <a
                href="/leadership"
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-neutral-900 transition-all duration-500 group"
              >
                Meet Our Team
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#A9A3D0' }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl italic font-light text-white leading-relaxed">
            "Safety is our first, second and third priority."
          </p>
          <div className="w-24 h-px bg-white/40 mx-auto my-8" />
          <p className="text-white/90 text-sm tracking-wide">
            -Kenny Dichter, REAL Jet Founder & Chairman
          </p>
        </div>
      </section>

      {/* Flight Crew Standards */}
      <section ref={crewRef} className="bg-neutral-50">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left: Content */}
          <div className="px-8 md:px-16 lg:px-20 py-20 md:py-28 flex flex-col justify-center">
            <div
              className={`transition-all duration-1000 ${
                crewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-purple-600 block mb-4">
                Elite Standards
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-900 tracking-wide uppercase">
                Flight Crew Standards
              </h2>
              <div className="w-12 h-px bg-purple-400 my-8" />
            </div>

            {/* Captains */}
            <div
              className={`mb-10 transition-all duration-1000 ${
                crewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-sm font-semibold text-neutral-900 tracking-wide uppercase mb-5">
                Captains (PICs)
              </h3>
              <ul className="space-y-3 text-neutral-600 ml-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Minimum 3,000 total flight hours
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  At least 1,500 hours of PIC time
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  250 hours in aircraft type
                </li>
              </ul>
            </div>

            {/* First Officers */}
            <div
              className={`transition-all duration-1000 ${
                crewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-sm font-semibold text-neutral-900 tracking-wide uppercase mb-5">
                First Officers (SICs)
              </h3>
              <ul className="space-y-3 text-neutral-600 ml-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Minimum 1,000 total flight hours
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  At least 500 hours of PIC time
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`relative min-h-[400px] lg:min-h-full overflow-hidden transition-all duration-1000 ${
              crewVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${flightCrew})`,
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Safety;
