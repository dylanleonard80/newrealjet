import { useEffect, useState } from 'react';
import { Send, Phone, CheckCircle2, Plane, ArrowRight, MapPin, Users, Calendar } from 'lucide-react';
import QuoteRequestModal from '@/components/QuoteRequestModal';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const triggers = [1, 2, 3].map(step => {
        const element = document.getElementById(`trigger-step-${step}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          return {
            step,
            visible: rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4
          };
        }
        return {
          step,
          visible: false
        };
      });
      const visibleTrigger = triggers.find(t => t.visible);
      if (visibleTrigger) {
        setActiveStep(visibleTrigger.step);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="how-it-works" className="bg-neutral-50 relative py-24 lg:py-0 lg:min-h-screen scroll-mt-20">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
    }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          {/* LEFT: Fixed in viewport on desktop */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:mb-0 lg:flex lg:items-center w-full h-[500px] mb-12 relative">
            <div className="w-full lg:h-[600px] relative">
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-400/20 rounded-full blur-[100px] -z-10" />

              {/* Main Card Container */}
              <div className="relative w-full h-full">
                {/* Stacked card background effect */}
                <div className="bg-neutral-200 -z-20 border-neutral-300/50 border rounded-3xl absolute inset-0 translate-x-3 translate-y-3" />
                <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-3xl bg-neutral-100 border border-neutral-200/50 -z-10" />

                {/* Image 1 - Submit Request */}
                <div className={`absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white transition-all duration-700 ease-out ${activeStep === 1 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'}`}>
                  <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80" className="w-full h-full object-cover" alt="Private jet on tarmac" />

                  <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-2">
                    <Send className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-semibold text-neutral-800">
                      Request Submitted
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-neutral-100/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-2 text-neutral-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-semibold">NYC</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        <div className="flex items-center gap-2 text-neutral-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-semibold">Miami</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-neutral-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Dec 15, 2024</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" />
                          <span>4 passengers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image 2 - Flight Expert */}
                <div className={`absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white transition-all duration-700 ease-out ${activeStep === 2 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'}`}>
                  <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" className="w-full h-full object-cover" alt="Private aviation lounge" />

                  <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-semibold text-neutral-800">
                      Expert Assigned
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/60">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <Plane className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-neutral-900">
                          Citation XLS+ Recommended
                        </p>
                        <p className="text-xs text-neutral-500 font-medium">
                          Midsize Jet • 8 seats • 2,100 nm range
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image 3 - Confirmed */}
                <div className={`absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white transition-all duration-700 ease-out ${activeStep === 3 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'}`}>
                  <img src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1600&q=80" className="w-full h-full object-cover" alt="Private jet interior" />

                  <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-semibold text-neutral-800">
                      Confirmed
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-neutral-100/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-md">
                            <Plane className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                              Departure
                            </p>
                            <p className="text-sm font-bold text-neutral-900">
                              Dec 15, 9:00 AM
                            </p>
                          </div>
                        </div>
                        <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wide">
                          Confirmed
                        </div>
                      </div>

                      <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-neutral-900 h-full w-full rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Scrollable container */}
          <div className="w-full lg:w-1/2 lg:pt-24 lg:pb-24">
            <div className="space-y-4 mb-20 lg:mb-32 pt-12 lg:pt-0">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15] uppercase" data-aos="fade-up">
                Book your flight  
                <span className="text-neutral-400"> in three steps.</span>
              </h2>
              <p className="text-lg text-neutral-500 font-normal max-w-md leading-relaxed">
                Skip the complexity. Our flight experts handle everything so you can focus on your journey.
              </p>
            </div>

            <div className="relative pl-2 lg:ml-8 border-l border-neutral-200">
              <div id="trigger-step-1" className="relative pl-12 pb-32 min-h-[50vh] flex flex-col justify-center group">
                <div className={`absolute left-[-21px] top-12 md:top-1/2 md:-translate-y-1/2 flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold shadow-lg ring-4 ring-neutral-50 transition-all duration-500 z-10 ${activeStep === 1 ? 'bg-neutral-900 text-white border-neutral-900 scale-110' : 'bg-white text-neutral-500 border-neutral-200 scale-100'}`}>
                  1
                </div>
                <div className="transition-all duration-300">
                  <h4 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                    Share Your Trip Details
                  </h4>
                  <p className="text-neutral-500 mt-4 leading-relaxed max-w-md text-lg">
                    Tell us where you're going, when you need to fly, and how many passengers. Submit your request in under a minute—no account required, no commitment.
                  </p>
                </div>
              </div>

              <div id="trigger-step-2" className="relative pl-12 pb-32 min-h-[50vh] flex flex-col justify-center group">
                <div className={`absolute left-[-21px] top-12 md:top-1/2 md:-translate-y-1/2 flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold shadow-sm ring-4 ring-neutral-50 transition-all duration-500 z-10 ${activeStep === 2 ? 'bg-neutral-900 text-white border-neutral-900 scale-110' : 'bg-white text-neutral-500 border-neutral-200 scale-100'}`}>
                  2
                </div>
                <div className="transition-all duration-300">
                  <h4 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                    Speak with a Flight Expert
                  </h4>
                  <p className="text-neutral-500 mt-4 leading-relaxed max-w-md text-lg">
                    A dedicated Real Jet specialist will contact you the same day to discuss aircraft options, pricing, and tailor every detail to your needs.
                  </p>
                </div>
              </div>

              <div id="trigger-step-3" className="relative pl-12 pb-24 min-h-[50vh] flex flex-col justify-center group">
                <div className={`absolute left-[-21px] top-12 md:top-1/2 md:-translate-y-1/2 flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold shadow-sm ring-4 ring-neutral-50 transition-all duration-500 z-10 ${activeStep === 3 ? 'bg-neutral-900 text-white border-neutral-900 scale-110' : 'bg-white text-neutral-500 border-neutral-200 scale-100'}`}>
                  3
                </div>
                <div className="transition-all duration-300">
                  <h4 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                    You're Booked
                  </h4>
                  <p className="text-neutral-500 mt-4 leading-relaxed max-w-md text-lg">
                    Once confirmed, receive your complete flight itinerary. Arrive at the private terminal 15 minutes before departure—we handle the rest.
                  </p>

                  <div className="mt-8">
                    <button 
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-neutral-900 rounded-full hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 group"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteRequestModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </section>;
};
export default HowItWorksSection;