import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.webp';

const navLinks = [
  { href: '/fleet', label: 'Fleet' },
  { href: '/safety', label: 'Safety' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/about', label: 'About' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleGetStarted = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[hsl(var(--charcoal-dark))/0.95] backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img src={logo} alt="Real Jet" className="h-7 md:h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm tracking-wide transition-colors duration-300 link-underline ${
                  location.pathname === link.href
                    ? 'text-[hsl(var(--cream))]'
                    : 'text-[hsl(var(--cream-muted))] hover:text-[hsl(var(--cream))]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleGetStarted}
              className="hidden sm:block btn-luxury bg-[hsl(var(--champagne))] text-[hsl(var(--charcoal-dark))] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[hsl(var(--champagne-light))] transition-all duration-300"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2 text-[hsl(var(--cream))]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: 'hsl(var(--charcoal-dark))' }}
      >
        {/* Decorative gradient */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(var(--champagne) / 0.1), transparent 60%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center gap-8">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-serif font-light tracking-tight transition-colors ${
                location.pathname === '/'
                  ? 'text-[hsl(var(--champagne))]'
                  : 'text-[hsl(var(--cream))] hover:text-[hsl(var(--champagne))]'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-serif font-light tracking-tight transition-colors ${
                  location.pathname === link.href
                    ? 'text-[hsl(var(--champagne))]'
                    : 'text-[hsl(var(--cream))] hover:text-[hsl(var(--champagne))]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleGetStarted();
            }}
            className="mt-12 btn-luxury bg-[hsl(var(--champagne))] text-[hsl(var(--charcoal-dark))] px-10 py-4 rounded-full text-lg font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
