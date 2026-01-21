import { ScanEye, Plane, Play } from 'lucide-react';

const PreviewSection = () => {
  return (
    <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide mb-6 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              NEW FEATURE
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight uppercase">
              Preview your flight
              <span className="text-neutral-500"> before you book.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
              Immerse yourself in 360° aircraft cabin tours. Explore seating
              configurations, check amenities, and experience the luxury of
              private aviation with our VR-ready virtual tour.
            </p>
            <div className="space-y-4">
              <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white group-hover:scale-110 transition duration-300">
                  <ScanEye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">360° Cabin Tours</h4>
                  <p className="text-sm text-neutral-500">
                    Explore every seat and amenity virtually.
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white group-hover:scale-110 transition duration-300">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Aircraft Specifications</h4>
                  <p className="text-sm text-neutral-500">
                    Range, capacity, speed, and performance details.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative" data-aos="zoom-in-up" data-aos-duration="1100">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-neutral-800">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80" 
                alt="Private jet interior" 
                className="w-full h-[600px] object-cover opacity-60 group-hover:opacity-40 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/20" />
              <div className="absolute top-8 right-8 bg-neutral-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg transform group-hover:-translate-y-2 transition duration-500 delay-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="text-neutral-400">Aircraft</p>
                    <p className="font-semibold text-white">Gulfstream G650</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 hover:bg-white/20 transition duration-300 group-hover:w-24 group-hover:h-24">
                  <Play className="w-6 h-6" />
                </div>
                <p className="mt-6 text-sm font-medium tracking-widest uppercase text-white/60">
                  Start Virtual Tour
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-semibold">Gulfstream G650</h3>
                    <p className="text-neutral-400 text-sm mt-1">
                      Range: 7,000 nm • Seats: 8-16 passengers
                    </p>
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-700 border-2 border-neutral-800" />
                    <div className="w-10 h-10 rounded-full bg-neutral-600 border-2 border-neutral-800" />
                    <div className="w-10 h-10 rounded-full bg-neutral-500 border-2 border-neutral-800 flex items-center justify-center text-xs font-bold">
                      12+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
