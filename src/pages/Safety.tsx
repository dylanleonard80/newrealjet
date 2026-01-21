import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import safetyHero from '@/assets/safety-hero.webp';
import travelConfidence from '@/assets/travel-confidence.webp';
import flightCrew from '@/assets/flight-crew.webp';
import { Shield, Award, FileCheck, Plane } from 'lucide-react';

const Safety = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [pioneersVisible, setPioneersVisible] = useState(false);
  const [crewVisible, setCrewVisible] = useState(false);
  const [protectionVisible, setProtectionVisible] = useState(false);

  const pioneersRef = useRef<HTMLDivElement>(null);
  const crewRef = useRef<HTMLDivElement>(null);
  const protectionRef = useRef<HTMLDivElement>(null);

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

    const protectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProtectionVisible(true);
    }, observerOptions);

    if (pioneersRef.current) pioneersObserver.observe(pioneersRef.current);
    if (crewRef.current) crewObserver.observe(crewRef.current);
    if (protectionRef.current) protectionObserver.observe(protectionRef.current);

    return () => {
      pioneersObserver.disconnect();
      crewObserver.disconnect();
      protectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Real Peace of Mind */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background Image with Ken Burns effect */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out ${
            heroVisible ? 'scale-110' : 'scale-100'
          }`}
          style={{ backgroundImage: `url(${safetyHero})` }}
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
                Real <span className="italic font-normal text-purple-300">Peace Of Mind</span>
              </h1>
              <p
                className={`mt-8 text-lg text-white/75 leading-relaxed max-w-lg transition-all duration-1000 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Every journey begins with trust. Our commitment to safety isn't just a standard—it's the foundation of everything we do.
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
      <section ref={pioneersRef} className="py-28 md:py-36 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

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
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-purple-300 block mb-4">
                60+ Years Experience
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide uppercase leading-tight">
                Travel With <br />
                <span className="italic font-normal">Confidence</span>
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed max-w-md">
                Every trip undergoes a comprehensive feasibility review conducted by a
                team with over 60 years of combined FAA Part 135 experience.
              </p>
              <a
                href="/fleet"
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-neutral-900 transition-all duration-500 group"
              >
                Explore Our Fleet
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Quote Bar */}
        <div className="relative z-10 bg-neutral-900/90 backdrop-blur-md py-10 px-8 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-purple-500" />
              <p className="text-white/90 text-xl md:text-2xl italic font-light">
                "Safety is our first, second and third priority."
              </p>
            </div>
            <p className="text-white/50 text-sm tracking-wider">
              <span className="font-medium text-white/70">Kenny Dichter</span>
              <span className="mx-2">·</span>
              Founder & Chairman
            </p>
          </div>
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
              <div className="flex items-center gap-3 mb-5">
                <Plane className="w-5 h-5 text-purple-600" />
                <h3 className="text-sm font-semibold text-neutral-900 tracking-wide uppercase">
                  Captains (PICs)
                </h3>
              </div>
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
              <div className="flex items-center gap-3 mb-5">
                <Plane className="w-5 h-5 text-purple-600" />
                <h3 className="text-sm font-semibold text-neutral-900 tracking-wide uppercase">
                  First Officers (SICs)
                </h3>
              </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-transparent to-transparent lg:w-24" />
          </div>
        </div>
      </section>

      {/* Insurance & Certifications */}
      <section ref={protectionRef} className="py-28 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              protectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-purple-600 block mb-6">
              Complete Coverage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 tracking-wide uppercase">
              Industry-Leading <em className="italic font-normal">Protection</em>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-10" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'ARGUS Rated',
                description: 'All operators in our network maintain ARGUS Platinum or Gold certification',
              },
              {
                icon: Shield,
                title: 'WYVERN Wingman',
                description: 'Comprehensive third-party safety audits and continuous verification',
              },
              {
                icon: FileCheck,
                title: '$50M+ Coverage',
                description: 'All operators carry minimum $50 million in liability insurance',
              },
              {
                icon: Plane,
                title: 'FAA Part 135',
                description: 'Full compliance with FAA commercial aviation regulations',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group p-8 bg-neutral-50 hover:bg-neutral-900 rounded-2xl transition-all duration-500 cursor-default ${
                  protectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <item.icon className="w-8 h-8 text-purple-600 group-hover:text-purple-400 mb-6 transition-colors duration-500" />
                <h3 className="text-lg font-medium text-neutral-900 group-hover:text-white mb-3 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 md:py-36 px-8 bg-neutral-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-purple-400 block mb-6">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide uppercase">
            Questions About Our Safety Standards?
          </h2>
          <p className="mt-6 text-white/50 text-lg">
            Our team is happy to discuss our safety protocols in detail.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-3 mt-10 px-10 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wider uppercase hover:bg-purple-500 hover:text-white transition-all duration-500 group"
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Safety;
