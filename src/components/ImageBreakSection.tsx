import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AircraftCategory {
  category: string;
  passengers: string;
  range: string;
  models: string[];
}

const fleetCategories: AircraftCategory[] = [
  {
    category: 'Turboprop',
    passengers: '6-9',
    range: '1,000-1,800',
    models: ['Beechcraft King Air 350i', 'Pilatus PC-12'],
  },
  {
    category: 'Light Jet',
    passengers: '6-8',
    range: '1,500-2,000',
    models: ['Phenom 300/300E', 'Cessna Citation CJ4', 'Hawker 400XP'],
  },
  {
    category: 'Midsize',
    passengers: '8-10',
    range: '2,500-2,900',
    models: ['Cessna Citation XL/XLS+', 'Hawker 800/900', 'Learjet 60/75'],
  },
  {
    category: 'Super Midsize',
    passengers: '8-12',
    range: '3,000-4,000',
    models: ['Bombardier Challenger 300/350', 'Gulfstream G-280', 'Praetor 600'],
  },
  {
    category: 'Large Cabin',
    passengers: '10-14',
    range: '4,000-5,500',
    models: ['Gulfstream G-400/G-450', 'Challenger 650', 'Falcon 900/2000'],
  },
  {
    category: 'Ultra Long Range',
    passengers: '12-19',
    range: '5,500-7,500+',
    models: ['Gulfstream G-500+', 'Global 5000+', 'Falcon 7X+'],
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

  const currentJet = fleetCategories[currentIndex];
  const prevIndex = currentIndex === 0 ? fleetCategories.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === fleetCategories.length - 1 ? 0 : currentIndex + 1;

  return (
    <section className="py-20 md:py-28 bg-[#E7E7E7] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-800 tracking-[0.15em] uppercase">
            The Right Jet, <em className="italic">Every Time.</em>
          </h2>
          <div className="w-24 h-px bg-neutral-400 mx-auto my-8" />
          <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">
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
                  : 'opacity-20 scale-90'
              }`}
            >
              <img
                src={jetImages[prevIndex]}
                alt={fleetCategories[prevIndex].category}
                className="w-full h-auto object-contain grayscale"
              />
            </div>

            {/* Current Jet */}
            <div
              className={`w-72 md:w-96 lg:w-[450px] transition-all duration-500 ease-out ${
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
                  : 'opacity-20 scale-90'
              }`}
            >
              <img
                src={jetImages[nextIndex]}
                alt={fleetCategories[nextIndex].category}
                className="w-full h-auto object-contain grayscale"
              />
            </div>
          </div>
        </div>

        {/* Navigation & Info */}
        <div className="max-w-xl mx-auto text-center">
          {/* Category with arrows */}
          <div className="flex items-center justify-center gap-12 mb-8">
            <button
              onClick={goToPrevious}
              className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Previous jet category"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3
              className={`text-xl md:text-2xl font-medium text-neutral-800 tracking-[0.15em] uppercase italic transition-all duration-300 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {currentJet.category}
            </h3>
            <button
              onClick={goToNext}
              className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Next jet category"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Specs */}
          <div
            className={`space-y-2 mb-8 transition-all duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <p className="text-sm text-neutral-700">
              <span className="font-semibold italic tracking-wide">PASSENGERS</span>
              <span className="ml-4">{currentJet.passengers}</span>
            </p>
            <p className="text-sm text-neutral-700">
              <span className="font-semibold italic tracking-wide">RANGE (MILES)</span>
              <span className="ml-4">{currentJet.range}</span>
            </p>
          </div>

          {/* Models */}
          <div
            className={`mb-10 transition-all duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {currentJet.models.map((model) => (
              <p key={model} className="text-sm text-neutral-600 leading-relaxed">
                {model}
              </p>
            ))}
          </div>

          {/* Explore Button */}
          <a
            href="/safety"
            className="inline-block px-12 py-3 border border-neutral-400 text-neutral-700 text-sm tracking-[0.15em] uppercase hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition-all duration-300"
          >
            Explore
          </a>
        </div>

        {/* Bottom indicator bars */}
        <div className="flex justify-center gap-1 mt-16">
          {fleetCategories.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 ${
                index === currentIndex ? 'bg-neutral-500 w-12' : 'bg-neutral-300 w-12'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageBreakSection;
