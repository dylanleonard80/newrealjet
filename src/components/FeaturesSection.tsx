import { Wifi, Bath, Armchair, Luggage, UtensilsCrossed, User, VolumeX, PawPrint } from 'lucide-react';
import interiorImage from '@/assets/interior.webp';

const cabinFeatures = [
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Bath, label: 'Private lavatory' },
  { icon: Armchair, label: 'Fully reclining seats' },
  { icon: Luggage, label: 'Ample luggage space' },
  { icon: UtensilsCrossed, label: 'Curated catering' },
  { icon: User, label: 'Flight attendant - select aircraft' },
  { icon: VolumeX, label: 'Quiet cabin' },
  { icon: PawPrint, label: 'Pet-friendly' },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* What is Real Jet? */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <h2 className="text-sm font-semibold tracking-widest text-foreground uppercase mb-4">
            What is Real Jet?
            <span className="block w-12 h-0.5 bg-amber-500 mt-2" />
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
            Real Jet is a curated private aviation service designed for discerning travelers who demand the highest safety standards, exceptional service, and seamless experiences. We connect you with premium aircraft and trusted operators worldwide.
          </p>
        </div>

        {/* Why Real Jet? */}
        <div className="mb-16 md:mb-20" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-sm font-semibold tracking-widest text-foreground uppercase mb-4">
            Why Real Jet?
            <span className="block w-12 h-0.5 bg-amber-500 mt-2" />
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
            Experience effortless private flying with our partner-first approach. Our dedicated concierge team handles every detail—from booking to landing—so you can focus on what matters most. No membership fees, no hidden costs, just exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start" data-aos="fade-up" data-aos-delay="200">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={interiorImage}
              alt="Luxury private jet cabin interior"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right: Features List */}
          <div className="space-y-10">
            {/* Features Bullet List */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-foreground uppercase mb-4">
                Features:
                <span className="block w-8 h-0.5 bg-amber-500 mt-2" />
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                  <span>24/7 global access to 1,500+ premium aircraft</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                  <span>Flexible, commitment-free booking model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                  <span>Industry leading safety standards</span>
                </li>
              </ul>
            </div>

            {/* Standard Cabin Features */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-foreground uppercase mb-6">
                Standard Cabin Features:
                <span className="block w-8 h-0.5 bg-amber-500 mt-2" />
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cabinFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
