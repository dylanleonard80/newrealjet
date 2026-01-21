import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Calendar, User } from 'lucide-react';

interface BookingBarProps {
  className?: string;
}

const BookingBar = ({ className = '' }: BookingBarProps) => {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const location = useLocation();

  // Hide on leadership page
  if (location.pathname === '/leadership') {
    return null;
  }

  return (
    <div
      className={`absolute left-0 right-0 z-[45] top-[60px] ${className}`}
    >
      <div className="w-full bg-black/40 backdrop-blur-sm border-t border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center py-4 gap-4 md:gap-0">
            {/* Trip Type Toggle */}
            <div className="flex items-center gap-1 pr-8 border-r border-white/20">
              <button
                onClick={() => setTripType('one-way')}
                className={`relative px-2 py-1 text-xs font-medium tracking-wider uppercase transition-all ${
                  tripType === 'one-way'
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                One Way
                {tripType === 'one-way' && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-white" />
                )}
              </button>
              <span className="text-white/30">/</span>
              <button
                onClick={() => setTripType('round-trip')}
                className={`relative px-2 py-1 text-xs font-medium tracking-wider uppercase transition-all ${
                  tripType === 'round-trip'
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                Round Trip
                {tripType === 'round-trip' && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-white" />
                )}
              </button>
            </div>

            {/* From / To */}
            <div className="flex items-center gap-2 px-8 border-r border-white/20 flex-1">
              <MapPin className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/80 tracking-wide">FROM / TO</span>
            </div>

            {/* Travel Date */}
            <div className="flex items-center gap-2 px-8 border-r border-white/20 flex-1">
              <Calendar className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/80 tracking-wide">TRAVEL DATE</span>
            </div>

            {/* Passengers */}
            <div className="flex items-center gap-2 px-8 flex-1">
              <User className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/80 tracking-wide">PASSENGERS</span>
            </div>

            {/* Request Flight Button */}
            <div className="pl-8">
              <button className="px-8 py-3 border border-white/40 hover:border-white/70 text-white font-medium tracking-wider uppercase text-xs transition-all duration-300 hover:bg-white/5">
                Request Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
