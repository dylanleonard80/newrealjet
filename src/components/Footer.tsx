import { Facebook, Instagram, Linkedin } from 'lucide-react';
import nbaaBadge from '@/assets/nbaa-badge.webp';
import wyvernBadge from '@/assets/wyvern-badge.webp';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a]">
      {/* Top Row */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-white">REAL</span>
            <span className="text-[#a78bba]">JET</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-center gap-8">
          <img src={nbaaBadge} alt="Member of NBAA" className="h-12 w-auto" />
          <img src={wyvernBadge} alt="WYVERN Registered Broker" className="h-12 w-auto" />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-8">
        <p className="text-xs text-gray-500 text-center leading-relaxed">
          REAL Jet LLC ("REAL Jet") arranges flights on aircraft operated by FAR Part 135 air carriers, or foreign equivalent ("operators"), who maintain full operational control of charter flights at all times. Operators providing services must meet all FAA or CAA standards, and additional safety standards established by REAL Jet. REAL Jet is not a direct air carrier or direct foreign air carrier. All air services shall be provided by a licensed direct air carrier or direct foreign air carrier.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
