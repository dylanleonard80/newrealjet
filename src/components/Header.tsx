import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Plane } from 'lucide-react';

const navLinks = [
  { href: '/safety', label: 'Safety' },
  { href: '/leadership', label: 'Leadership' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1a1a1a] border-b border-white/[0.05]'
            : 'bg-[#1a1a1a]'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          {/* Left side - Menu + Logo */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Text Logo */}
            <Link to="/" className="relative z-10 flex items-center">
              <span className="text-2xl font-bold tracking-wider">
                <span className="text-white">REAL</span>
                <span className="text-[#a78bba]">JET</span>
              </span>
            </Link>
          </div>

          {/* Right side - Social Icons + Contact */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-4">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Us */}
            <a
              href="#contact"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Plane className="w-5 h-5 rotate-[-45deg]" />
              <span className="text-sm font-medium tracking-wider uppercase">Contact Us</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ backgroundColor: '#1a1a1a' }}
      >
        {/* Decorative gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at top right, #a78bba, transparent 60%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center gap-8">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl font-light tracking-wide transition-colors ${
                location.pathname === '/'
                  ? 'text-[#a78bba]'
                  : 'text-white hover:text-[#a78bba]'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-light tracking-wide transition-colors ${
                  location.pathname === link.href
                    ? 'text-[#a78bba]'
                    : 'text-white hover:text-[#a78bba]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-12 px-10 py-4 border border-white/40 hover:border-white/70 text-white text-lg font-medium tracking-wider uppercase transition-all hover:bg-white/5"
          >
            Request Flight
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
