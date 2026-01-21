import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface BookingBarProps {
  className?: string;
}

const BookingBar = ({ className = '' }: BookingBarProps) => {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`absolute left-0 right-0 z-[45] top-[68px] transition-all duration-500 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
          <div
            className={`rounded-xl overflow-hidden transition-all duration-500 ${
              isScrolled
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl'
            }`}
          >
            {/* Trip Type Toggle & Form */}
            <div className="flex flex-col md:flex-row">
              {/* Trip Type Toggle */}
              <div className="flex border-b md:border-b-0 md:border-r border-white/10">
                <button
                  onClick={() => setTripType('one-way')}
                  className={`flex-1 md:flex-none px-6 py-3 text-[10px] font-semibold tracking-[0.15em] uppercase transition-all ${
                    tripType === 'one-way'
                      ? 'bg-purple-400 text-white'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                  }`}
                >
                  One Way
                </button>
                <button
                  onClick={() => setTripType('round-trip')}
                  className={`flex-1 md:flex-none px-6 py-3 text-[10px] font-semibold tracking-[0.15em] uppercase transition-all ${
                    tripType === 'round-trip'
                      ? 'bg-purple-400 text-white'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                  }`}
                >
                  Round Trip
                </button>
              </div>

              {/* Form Fields */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-5">
                {/* From */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 px-4 py-2.5">
                  <label className="block text-[8px] text-white/40 uppercase tracking-[0.2em] mb-0.5">
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="w-full bg-transparent text-white text-xs font-medium placeholder-white/30 focus:outline-none"
                  />
                </div>

                {/* To */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 px-4 py-2.5">
                  <label className="block text-[8px] text-white/40 uppercase tracking-[0.2em] mb-0.5">
                    To
                  </label>
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="w-full bg-transparent text-white text-xs font-medium placeholder-white/30 focus:outline-none"
                  />
                </div>

                {/* Travel Date */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 px-4 py-2.5">
                  <label className="block text-[8px] text-white/40 uppercase tracking-[0.2em] mb-0.5">
                    Date
                  </label>
                  <input
                    type="text"
                    placeholder="Select Date"
                    className="w-full bg-transparent text-white text-xs font-medium placeholder-white/30 focus:outline-none"
                  />
                </div>

                {/* Passengers */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 px-4 py-2.5">
                  <label className="block text-[8px] text-white/40 uppercase tracking-[0.2em] mb-0.5">
                    Passengers
                  </label>
                  <div className="relative">
                    <select className="w-full bg-transparent text-white text-xs font-medium appearance-none focus:outline-none cursor-pointer">
                      <option value="" className="bg-neutral-900">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
                        <option key={num} value={num} className="bg-neutral-900">
                          {num}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-white/50 pointer-events-none" />
                  </div>
                </div>

                {/* Request Flight Button */}
                <div className="col-span-2 md:col-span-1 p-2 flex items-center justify-center">
                  <button className="w-full bg-purple-400 hover:bg-purple-300 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 uppercase tracking-[0.1em] text-[10px]">
                    Request Flight
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
