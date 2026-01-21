import derbyImage from "@/assets/derby.webp";
import superbowlImage from "@/assets/superbowl.webp";

const DestinationsSection = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 uppercase" data-aos="fade-up">
            Popular Right Now
          </h2>
          <p className="text-neutral-500 mt-3">
            Fly private to the season's most anticipated events.
          </p>
        </div>
        <button className="text-neutral-900 font-semibold border-b border-neutral-900 hover:text-neutral-600 hover:border-neutral-600 transition pb-1">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Miami - Ultra Music Festival */}
        <div className="relative overflow-hidden rounded-2xl group h-96" data-aos="fade-up" data-aos-delay="100">
          <img 
            src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=3840&q=80" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0"
            alt="Miami"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              Ultra Music Festival · Mar 27-29
            </p>
            <h4 className="text-2xl font-semibold tracking-tight">Miami</h4>
          </div>
        </div>
        
        {/* Palm Springs - Coachella */}
        <div className="relative overflow-hidden rounded-2xl group h-96" data-aos="fade-up" data-aos-delay="200">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=3840&q=80" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0"
            alt="Palm Springs"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              Coachella · Apr 10-12
            </p>
            <h4 className="text-2xl font-semibold tracking-tight">Palm Springs</h4>
          </div>
        </div>
        
        {/* San Francisco - Super Bowl LX (Featured) */}
        <div className="relative overflow-hidden rounded-2xl group h-96 md:col-span-2" data-aos="fade-up" data-aos-delay="300">
          <img 
            src={superbowlImage}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0"
            alt="San Francisco"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              Super Bowl LX · Feb 8
            </p>
            <h4 className="text-2xl font-semibold tracking-tight">San Francisco</h4>
          </div>
        </div>

        {/* Louisville - Kentucky Derby */}
        <div className="relative overflow-hidden rounded-2xl group h-96 md:col-span-2" data-aos="fade-up" data-aos-delay="400">
          <img 
            src={derbyImage} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0"
            alt="Louisville"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              Kentucky Derby · May 2
            </p>
            <h4 className="text-2xl font-semibold tracking-tight">Louisville</h4>
          </div>
        </div>

        {/* Los Angeles - Grammy Awards */}
        <div className="relative overflow-hidden rounded-2xl group h-96 md:col-span-2" data-aos="fade-up" data-aos-delay="500">
          <img 
            src="https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=3840&q=80" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0"
            alt="Los Angeles"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              Grammy Awards · Feb 1
            </p>
            <h4 className="text-2xl font-semibold tracking-tight">Los Angeles</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
