import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Plane } from 'lucide-react';

const upcomingEvents = [
  {
    name: 'Super Bowl LX',
    location: 'San Francisco, CA',
    date: 'February 9, 2026',
    image: 'https://images.unsplash.com/photo-1461896836934- voices?w=800&q=80',
    flightTime: '~5 hrs from NYC',
    highlight: true,
  },
  {
    name: 'Art Basel Miami',
    location: 'Miami Beach, FL',
    date: 'December 4-8, 2026',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    flightTime: '~3 hrs from NYC',
    highlight: false,
  },
  {
    name: 'Kentucky Derby',
    location: 'Louisville, KY',
    date: 'May 2, 2026',
    image: 'https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?w=800&q=80',
    flightTime: '~2 hrs from NYC',
    highlight: false,
  },
  {
    name: 'The Masters',
    location: 'Augusta, GA',
    date: 'April 9-12, 2026',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
    flightTime: '~2.5 hrs from NYC',
    highlight: false,
  },
  {
    name: 'Monaco Grand Prix',
    location: 'Monte Carlo',
    date: 'May 21-24, 2026',
    image: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&q=80',
    flightTime: '~8 hrs from NYC',
    highlight: false,
  },
  {
    name: 'Coachella',
    location: 'Indio, CA',
    date: 'April 10-19, 2026',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
    flightTime: '~5.5 hrs from NYC',
    highlight: false,
  },
];

const EventsSection = () => {
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
      style={{ backgroundColor: 'hsl(var(--charcoal-dark))' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--champagne) / 0.15), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span
              className={`eyebrow block mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Upcoming Events
            </span>
            <h2
              className={`font-serif font-light text-[hsl(var(--cream))] leading-[1.1] transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Fly to the world's{' '}
              <span className="text-gradient-gold italic">premier events.</span>
            </h2>
          </div>
          <p
            className={`mt-6 md:mt-0 text-[hsl(var(--cream-muted))] max-w-md transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Skip the commercial chaos. Arrive refreshed and ready for the moments that matter.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.name}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${event.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-[hsl(20_12%_8%)] border border-white/[0.06] hover:border-[hsl(var(--champagne))/0.3] transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${event.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20_12%_8%)] via-transparent to-transparent" />

                  {/* Flight time badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                    <Plane className="w-3 h-3 text-[hsl(var(--champagne))]" />
                    <span className="text-[10px] text-white font-medium">{event.flightTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-normal text-[hsl(var(--cream))] mb-3 group-hover:text-[hsl(var(--champagne))] transition-colors duration-300">
                    {event.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--cream-muted))]">
                      <MapPin className="w-4 h-4 text-[hsl(var(--champagne))/0.7]" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--cream-muted))]">
                      <Calendar className="w-4 h-4 text-[hsl(var(--champagne))/0.7]" />
                      {event.date}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 text-sm text-[hsl(var(--champagne))] hover:text-[hsl(var(--champagne-light))] transition-colors duration-300"
                    >
                      Request Quote
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-[hsl(var(--cream-muted))] mb-6">
            Have a specific destination in mind?
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[hsl(var(--champagne))/0.3] text-[hsl(var(--champagne))] rounded-full hover:bg-[hsl(var(--champagne))/0.1] transition-all duration-300"
          >
            Plan Your Trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
