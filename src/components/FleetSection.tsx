import { Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fleetData = [
  {
    category: "Turboprop",
    models: ["Beechcraft King Air 350i", "Pilatus PC-12"]
  },
  {
    category: "Light Jet",
    models: ["Phenom 300/300E", "Cessna Citation CJ4", "Pilatus PC-24", "Hawker 400XP"]
  },
  {
    category: "Midsize Jet",
    models: ["Cessna Citation XL/XLS+", "Hawker 800/900", "Learjet 60/75", "Praetor 500"]
  },
  {
    category: "Super Midsize Jet",
    models: ["Bombardier Challenger 300/350/3500", "Gulfstream G-280", "Embraer Praetor 600", "Cessna Citation Longitude"]
  },
  {
    category: "Large Cabin Jet",
    models: ["Gulfstream G-400/G-450", "Bombardier Challenger 650", "Dassault Falcon 900/2000"]
  },
  {
    category: "Ultra Long Range",
    models: ["Gulfstream G-500+", "Bombardier Global 5000+", "Dassault Falcon 7X+"]
  }
];

const FleetSection = () => {
  return (
    <section id="fleet" className="bg-[#E7E7E7] py-20 lg:py-28 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 uppercase">
            Sample Aircraft Types
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            We'll match you with the best jet, operator, and value for your needs.
          </p>
          <Button 
            variant="outline" 
            className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-8"
            onClick={() => {
              const fleetGrid = document.getElementById('fleet-grid');
              fleetGrid?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Fleet
          </Button>
        </div>

        {/* Fleet Grid */}
        <div 
          id="fleet-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-32"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {fleetData.map((aircraft, index) => (
            <div 
              key={aircraft.category}
              className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={150 + index * 50}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Plane className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900">{aircraft.category}</h3>
              </div>
              <ul className="space-y-2">
                {aircraft.models.map((model) => (
                  <li key={model} className="text-neutral-600 text-sm flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
