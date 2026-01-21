import { useState } from 'react';
import { Users, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface AircraftCategory {
  category: string;
  tagline: string;
  description: string;
  passengers: string;
  range: string;
  flightTime: string;
  models: string[];
  idealFor: string;
}

const fleetCategories: AircraftCategory[] = [
  {
    category: 'Turboprop',
    tagline: 'Efficient Versatility',
    description:
      'Efficient and versatile aircraft ideal for shorter trips and smaller airports. The perfect balance of economy and capability.',
    passengers: '6-9',
    range: '1,000-1,800 nm',
    flightTime: '2-4 hours',
    models: ['Beechcraft King Air 350i', 'Pilatus PC-12'],
    idealFor: 'Regional trips, accessing smaller airports',
  },
  {
    category: 'Light Jet',
    tagline: 'Speed & Efficiency',
    description:
      'Fast, efficient jets perfect for trips up to 4 hours. Excellent for business travelers who value time and efficiency.',
    passengers: '6-8',
    range: '1,500-2,000 nm',
    flightTime: '2-4 hours',
    models: ['Phenom 300/300E', 'Cessna Citation CJ4', 'Pilatus PC-24', 'Hawker 400XP'],
    idealFor: 'Coast-to-coast trips, quick business travel',
  },
  {
    category: 'Midsize Jet',
    tagline: 'The Sweet Spot',
    description:
      'The sweet spot of private aviation. Spacious cabins with stand-up headroom and coast-to-coast range.',
    passengers: '7-9',
    range: '2,000-3,000 nm',
    flightTime: '3-5 hours',
    models: ['Cessna Citation XL/XLS+', 'Hawker 800/900', 'Learjet 60/75', 'Praetor 500'],
    idealFor: 'Cross-country flights, group business travel',
  },
  {
    category: 'Super Midsize',
    tagline: 'Transcontinental Range',
    description:
      'Exceptional range and comfort with spacious stand-up cabins. Nonstop transcontinental capability.',
    passengers: '8-12',
    range: '3,000-4,000 nm',
    flightTime: '4-6 hours',
    models: [
      'Bombardier Challenger 300/350',
      'Gulfstream G-280',
      'Embraer Praetor 600',
      'Cessna Citation Longitude',
    ],
    idealFor: 'Transcontinental flights, larger groups',
  },
  {
    category: 'Large Cabin',
    tagline: 'Executive Class',
    description:
      'Executive-class comfort with spacious interiors, full galleys, and private lavatories. Ideal for international travel.',
    passengers: '10-14',
    range: '4,000-5,500 nm',
    flightTime: '5-8 hours',
    models: [
      'Gulfstream G-400/G-450',
      'Bombardier Challenger 650',
      'Dassault Falcon 900/2000',
    ],
    idealFor: 'International trips, executive delegations',
  },
  {
    category: 'Ultra Long Range',
    tagline: 'Global Reach',
    description:
      'The pinnacle of private aviation. Connect any two cities in the world nonstop with unparalleled luxury.',
    passengers: '12-19',
    range: '5,500-7,500+ nm',
    flightTime: '8-14 hours',
    models: ['Gulfstream G-500+', 'Bombardier Global 5000+', 'Dassault Falcon 7X+'],
    idealFor: 'Intercontinental flights, VIP transport',
  },
];

const jetImages = [
  'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
  'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80',
  'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&q=80',
  'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
  'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80',
  'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&q=80',
];

const ImageBreakSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const goToPrevious = () => {
    if (isAnimating) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? fleetCategories.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === fleetCategories.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentJet = fleetCategories[currentIndex];
  const prevIndex = currentIndex === 0 ? fleetCategories.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === fleetCategories.length - 1 ? 0 : currentIndex + 1;

  return (
    <section className="py-20 md:py-28 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-neutral-900 tracking-wide uppercase">
            The Right Jet, <em className="italic">Every Time.</em>
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto my-8" />
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Our experienced team matches you and your passengers with the safest, most appropriate aircraft
            for your trip—every time. No over- or under-shooting, just the right solution for your needs.
          </p>
        </div>

        {/* Jet Carousel */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Previous Jet (faded) */}
            <div
              className={`hidden md:block w-48 lg:w-64 transition-all duration-500 ease-out ${
                isAnimating
                  ? slideDirection === 'right'
                    ? 'opacity-0 -translate-x-8'
                    : 'opacity-50 translate-x-8 scale-95'
                  : 'opacity-30 scale-90'
              }`}
            >
              <img
                src={jetImages[prevIndex]}
                alt={fleetCategories[prevIndex].category}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Current Jet */}
            <div
              className={`w-72 md:w-96 lg:w-[500px] transition-all duration-500 ease-out ${
                isAnimating
                  ? 'opacity-0 scale-95'
                  : 'opacity-100 scale-100'
              }`}
            >
              <img
                src={jetImages[currentIndex]}
                alt={currentJet.category}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Next Jet (faded) */}
            <div
              className={`hidden md:block w-48 lg:w-64 transition-all duration-500 ease-out ${
                isAnimating
                  ? slideDirection === 'left'
                    ? 'opacity-0 translate-x-8'
                    : 'opacity-50 -translate-x-8 scale-95'
                  : 'opacity-30 scale-90'
              }`}
            >
              <img
                src={jetImages[nextIndex]}
                alt={fleetCategories[nextIndex].category}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Navigation & Info */}
        <div className="max-w-2xl mx-auto">
          {/* Category with arrows */}
          <div className="flex items-center justify-center gap-8 mb-4">
            <button
              onClick={goToPrevious}
              className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Previous jet category"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-center">
              <span
                className={`text-xs font-medium tracking-[0.25em] uppercase text-purple-600 transition-all duration-300 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {currentJet.tagline}
              </span>
              <h3
                className={`text-2xl md:text-3xl font-serif font-medium text-neutral-900 tracking-wider uppercase min-w-[250px] transition-all duration-300 ${
                  isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {currentJet.category}
              </h3>
            </div>
            <button
              onClick={goToNext}
              className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Next jet category"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Description */}
          <p
            className={`text-center text-neutral-600 leading-relaxed mb-8 transition-all duration-300 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {currentJet.description}
          </p>

          {/* Specs Grid */}
          <div
            className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-300 delay-75 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="text-center p-4 bg-white rounded-xl border border-neutral-200">
              <Users className="w-5 h-5 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-serif text-neutral-900">{currentJet.passengers}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Passengers</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-neutral-200">
              <MapPin className="w-5 h-5 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-serif text-neutral-900">{currentJet.range.split(' ')[0]}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Range</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-neutral-200">
              <Clock className="w-5 h-5 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-serif text-neutral-900">{currentJet.flightTime.split(' ')[0]}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Flight Time</div>
            </div>
          </div>

          {/* Models */}
          <div
            className={`mb-6 transition-all duration-300 delay-100 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
              Sample Aircraft
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {currentJet.models.map((model) => (
                <span
                  key={model}
                  className="px-3 py-1.5 text-sm text-neutral-600 bg-white rounded-full border border-neutral-200"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div
            className={`text-center mb-10 transition-all duration-300 delay-150 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-sm text-neutral-500">
              <span className="text-purple-600 font-medium">Ideal for:</span> {currentJet.idealFor}
            </p>
          </div>

          {/* Explore Button */}
          <div className="text-center">
            <a
              href="/fleet"
              className="px-12 py-4 border border-neutral-900 text-neutral-900 text-sm font-medium tracking-[0.2em] uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 inline-block"
            >
              View Full Fleet
            </a>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {fleetCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-purple-600 w-6' : 'bg-neutral-300 w-2'
              }`}
              aria-label={`Go to ${cat.category}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageBreakSection;
