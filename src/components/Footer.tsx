import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/logo.webp';
import wyvernBadge from '@/assets/wyvern-badge.webp';
import nbaaBadge from '@/assets/nbaa-badge.webp';

const Footer = () => {
  const handleGetStarted = () => {
    window.location.href = '/';
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <footer className="relative" style={{ backgroundColor: 'hsl(var(--charcoal-dark))' }}>
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <img src={logo} alt="Real Jet" className="h-8 mb-6" />
            <p className="text-[hsl(var(--cream-muted))] text-sm leading-relaxed max-w-xs">
              Private aviation, simplified. Concierge-level service for discerning travelers
              who value their time.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[hsl(var(--cream-muted))] hover:border-[hsl(var(--champagne))/0.4] hover:text-[hsl(var(--champagne))] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Certification Badges */}
            <div className="flex items-center gap-4 mt-8">
              <img src={wyvernBadge} alt="WYVERN Registered Broker" className="h-16 w-auto" />
              <img src={nbaaBadge} alt="Member of NBAA" className="h-10 w-auto" />
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-medium tracking-[0.25em] text-[hsl(var(--cream-muted))] uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/fleet', label: 'Fleet' },
                { href: '/safety', label: 'Safety' },
                { href: '/leadership', label: 'Leadership' },
                { href: '/about', label: 'About' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[hsl(var(--cream-muted))] hover:text-[hsl(var(--cream))] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-medium tracking-[0.25em] text-[hsl(var(--cream-muted))] uppercase mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/blog', label: 'Insights' },
                { href: '#', label: 'FAQ' },
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[hsl(var(--cream-muted))] hover:text-[hsl(var(--cream))] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-medium tracking-[0.25em] text-[hsl(var(--cream-muted))] uppercase mb-6">
              Get Started
            </h4>
            <p className="text-sm text-[hsl(var(--cream-muted))] mb-6">
              Ready to experience the Real Jet difference? Our team is standing by.
            </p>
            <button
              onClick={handleGetStarted}
              className="group w-full sm:w-auto btn-luxury bg-[hsl(var(--champagne))] text-[hsl(var(--charcoal-dark))] rounded-full font-medium hover:bg-[hsl(var(--champagne-light))] flex items-center justify-center gap-2"
            >
              Request Consultation
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[hsl(var(--cream-muted))] text-xs">
            © {new Date().getFullYear()} Real Jet. All rights reserved.
          </p>
          <p className="text-[hsl(var(--cream-muted))]/50 text-xs">
            Private aviation services arranged by Real Jet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
