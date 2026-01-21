import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import kennyPhoto from '@/assets/kenny-dichter.webp';
import robertPhoto from '@/assets/robert-withers.webp';
import safetyArticle from '@/assets/safety-article.webp';
import interiorArticle from '@/assets/interior-article.webp';

const leaders = [
  {
    name: 'KENNY DICHTER',
    title: 'REAL Jet Founder & Chairman',
    image: kennyPhoto,
    bio: [
      'Kenny Dichter is a pioneer in private aviation, celebrated for reshaping the industry through innovation, accessibility, and brand-building at scale. As the visionary behind both Wheels Up and Marquis Jet, two of the most disruptive companies in modern aviation. He was named one of the "Top 100 Power Players in Private Aviation" by Business Jet Traveler, recognizing his influence in expanding the category and creating billions in enterprise value through public and private aviation ventures.',
      'Kenny launched Marquis Jet in 2001, which became the leading private jet card provider before being acquired by NetJets/Berkshire Hathaway. In 2013, he founded Wheels Up, which went public in 2021 and became one of the largest private aviation companies in the world.',
      'In 2025, he launched REAL JET, a next-generation brokerage built to deliver frictionless access to premium aircraft for Fortune 500 corporate flight departments. With a proven track record of scaling high-trust platforms and a reputation for visionary execution, Kenny continues to lead the evolution of private aviation.',
    ],
  },
  {
    name: 'ROBERT WITHERS',
    title: 'REAL Jet President',
    image: robertPhoto,
    bio: [
      'Robert Withers is a seasoned executive in the air transportation industry, currently serving as the President of REAL JET. With a career spanning over two decades, Robert has a unique blend of experiences, including serving as Co-Founder and Executive Vice President at Wheels Up, and a notable role as Vice President of Sports Marketing at Marquis Jet and serving as an MLB agent at Aces.',
      'His educational background includes a degree in Political Science from Yale University, which complements his strategic approach to business. Robert\'s leadership skills and deep industry knowledge have positioned him as a key player in the air travel sector. He is known for his ability to navigate complex business environments and drive innovation in service offerings. Outside of his professional endeavors, Robert is likely to have interests in sports and travel, given his background and current role.',
    ],
  },
];

const Leadership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 border-t-4 border-[#A9A3D0]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light text-neutral-800 tracking-[0.15em] uppercase">
            Real Leaders In Private Aviation
          </h1>
          <div className="w-24 h-px bg-[#A9A3D0] mx-auto my-8" />
          <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            REAL Jet is led by the pioneers who created the Jet Card and Jet Membership categories—shaping modern private aviation from the ground up. That experience translates into smarter decisions, higher standards, and a level of insight no other brokerage can match.
          </p>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={`${index > 0 ? 'mt-20' : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-10">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-48 h-56 object-cover object-top"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-neutral-800 tracking-wide">
                    {leader.name}
                  </h2>
                  <p className="text-sm italic text-neutral-600 mt-1">
                    {leader.title}
                  </p>

                  <div className="mt-6 space-y-4">
                    {leader.bio.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-neutral-600 leading-relaxed text-sm"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#A9A3D0' }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-2xl md:text-3xl italic font-light text-white leading-relaxed">
            "People will forget what you say, and what you do, but they will remember how you make them feel."
          </p>
          <div className="w-24 h-px bg-white/40 mx-auto my-8" />
          <p className="text-white/90 text-sm tracking-wide">
            -Kenny Dichter, REAL Jet Founder & Chairman
          </p>
        </div>
      </section>

      {/* The Real Deal Section */}
      <section className="py-20 px-6 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-[0.15em] uppercase">
              The <span className="text-neutral-500">Real Deal</span>
            </h2>
            <p className="text-neutral-500 mt-4">
              Industry information, updates and happenings from the world of private aviation
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Article 1 - Large with image */}
            <div className="md:row-span-2">
              <img
                src={safetyArticle}
                alt="Safety Breakthroughs"
                className="w-full h-64 object-cover"
              />
              <h3 className="text-lg font-semibold text-neutral-800 mt-4 leading-tight">
                Safety Breakthroughs & Standards in the Age of AI
              </h3>
              <p className="text-sm text-neutral-500 mt-2">
                With the advent of artificial intelligence, the private aviation industry has had some significant...
              </p>
            </div>

            {/* Article 2 - Large with image */}
            <div className="md:row-span-2">
              <img
                src={interiorArticle}
                alt="Interior Innovations"
                className="w-full h-64 object-cover"
              />
              <h3 className="text-lg font-semibold text-neutral-800 mt-4 leading-tight">
                Interior Innovations: The Science of Comfort
              </h3>
              <p className="text-sm text-neutral-500 mt-2">
                The latest developments in private jet interiors are less concerned with pure aesthetics as they are with...
              </p>
            </div>

            {/* Article 3 - Text only */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 leading-tight">
                Charter vs. Membership: What Makes Sense Today
              </h3>
              <p className="text-sm text-neutral-500 mt-2">
                The private aviation market has changed fast. We break down how today's...
              </p>
            </div>

            {/* Article 4 - Text only */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 leading-tight">
                How Experienced Flyers Choose the Right Aircraft
              </h3>
              <p className="text-sm text-neutral-500 mt-2">
                From passenger count to range, cabin layout, and safety history, selecting the right jet...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
