import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Users, Shield, Clock, Heart } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Concierge Mindset',
    description:
      'We believe private aviation should feel personal. No apps to navigate, no complex decisions. Just tell us where you need to be, and we handle the rest.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Safety',
    description:
      'Every aircraft and operator in our network meets the most rigorous industry standards. Your safety and peace of mind are non-negotiable.',
  },
  {
    icon: Clock,
    title: 'Effortless Experience',
    description:
      'From your first inquiry to touchdown, we orchestrate every detail. Private aviation simplified, as it should be.',
  },
  {
    icon: Heart,
    title: 'Relationship-First',
    description:
      'We build lasting relationships, not transactions. We get to know your preferences, anticipate your needs, and deliver consistently.',
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 50,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        eyebrow="Our Story"
        title="About Real Jet"
        subtitle="A new approach to private aviation, founded by industry pioneers who believe flying privately should be effortless."
      />

      {/* Story Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div data-aos="fade-up">
            <span className="text-gold-400 text-xs font-medium tracking-[0.25em] uppercase">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-4 tracking-tight leading-tight uppercase">
              Private aviation as a service, not a self-serve platform.
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-lg text-neutral-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            <p>
              Too many private aviation companies have forgotten what it means to truly serve their
              clients. In an industry obsessed with apps, algorithms, and self-service platforms,
              we've taken a different path.
            </p>
            <p>
              Real Jet was founded by Kenny Dichter and Robert Withers—two pioneers who helped
              create modern private aviation at companies like Marquis Jet and Wheels Up. After
              decades of innovation, they saw an opportunity to return to what matters most: the
              human connection.
            </p>
            <p>
              When you work with Real Jet, you're not navigating a marketplace or selecting from
              confusing options. You're working with experienced aviation professionals who listen
              to your needs, understand your preferences, and find the perfect solution—every time.
            </p>
            <p>
              We call it the concierge approach. Others might call it old-fashioned. We think it's
              simply better.
            </p>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 md:py-28 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-gold-400 text-xs font-medium tracking-[0.25em] uppercase">
              The Real Jet Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-4 tracking-tight uppercase">
              Service over self-service.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
            {/* Other platforms */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-neutral-200">
              <h3 className="text-sm font-medium tracking-[0.15em] text-neutral-400 uppercase mb-6">
                Typical Booking Platforms
              </h3>
              <ul className="space-y-4 text-neutral-500">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-300 mt-1">×</span>
                  Self-navigate hundreds of aircraft options
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-300 mt-1">×</span>
                  Make complex decisions without expertise
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-300 mt-1">×</span>
                  Transactional relationship, different agent each time
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-300 mt-1">×</span>
                  Generic service, no personal touch
                </li>
              </ul>
            </div>

            {/* Real Jet */}
            <div className="bg-neutral-900 rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-sm font-medium tracking-[0.15em] text-gold-300 uppercase mb-6">
                The Real Jet Way
              </h3>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 mt-1">✓</span>
                  Tell us your needs, we find the perfect match
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 mt-1">✓</span>
                  Expert guidance from aviation professionals
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 mt-1">✓</span>
                  Dedicated team that knows your preferences
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 mt-1">✓</span>
                  Personalized service, every flight
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-gold-400 text-xs font-medium tracking-[0.25em] uppercase">
              What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-4 tracking-tight uppercase">
              Our values guide everything we do.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-neutral-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-neutral-900">{value.title}</h3>
                  <p className="mt-2 text-neutral-500 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 md:py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight uppercase">
            Meet the team behind Real Jet.
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Our leadership brings decades of aviation industry experience and innovation.
          </p>
          <Link
            to="/leadership"
            className="inline-block mt-8 px-8 py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300"
          >
            View Leadership
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight uppercase">
            Ready to experience the difference?
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Let's start a conversation about your travel needs.
          </p>
          <a
            href="/"
            className="inline-block mt-8 px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
