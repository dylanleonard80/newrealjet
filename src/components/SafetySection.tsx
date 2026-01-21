import { ShieldCheck, Users, Award } from 'lucide-react';
import safetyBg from '@/assets/safety.webp';

const SafetySection = () => {
  return (
    <section 
      className="py-24 md:py-32 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${safetyBg})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-neutral-900/85" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white uppercase">
            REAL SAFETY STANDARDS
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8" />
          <p className="text-neutral-300 max-w-3xl mx-auto text-lg">
            At Real Jet, safety, transparency, and compliance with FAA regulations are our highest priorities. 
            We partner exclusively with ARGUS and WYVERN rated operators and adhere strictly to IS-BAO (Stage 3) safety protocols, 
            representing the gold standard in business aviation safety.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Insurance Requirements */}
          <div className="bg-[#E7E7E7] rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">INSURANCE REQUIREMENTS</h3>
            </div>
            <div className="w-12 h-0.5 bg-amber-500 mb-6" />
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <span>All partners must carry a minimum of <strong className="text-neutral-800">$50 million</strong> in liability insurance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <span>REAL Jet carries an additional <strong className="text-neutral-800">$50 million</strong> non-owned aircraft liability policy for supplemental protection</span>
              </li>
            </ul>
          </div>

          {/* Flight Crew Standards */}
          <div className="bg-[#E7E7E7] rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">FLIGHT CREW STANDARDS</h3>
            </div>
            <div className="w-12 h-0.5 bg-amber-500 mb-6" />
            
            <div className="grid grid-cols-2 gap-6">
              {/* Captains */}
              <div>
                <h4 className="font-semibold text-neutral-800 mb-3">Captains (PICs)</h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>3,000 total hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>1,500 PIC hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>250 hours in type</span>
                  </li>
                </ul>
              </div>
              
              {/* First Officers */}
              <div>
                <h4 className="font-semibold text-neutral-800 mb-3">First Officers (SICs)</h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>1,000 total hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>500 PIC hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Operational Excellence */}
          <div className="bg-[#E7E7E7] rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">OPERATIONAL EXCELLENCE</h3>
            </div>
            <div className="w-12 h-0.5 bg-amber-500 mb-6" />
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <span>Each flight undergoes a comprehensive <strong className="text-neutral-800">feasibility review</strong> by our operations team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <span>Our leadership brings over <strong className="text-neutral-800">60 years of combined FAA Part 135</strong> operational experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
