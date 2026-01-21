import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import kennyPhoto from '@/assets/kenny-dichter.webp';
import robertPhoto from '@/assets/robert-withers.webp';

const leaders = [
  {
    name: 'Kenny Dichter',
    title: 'REAL Jet Founder & Chairman',
    initials: 'KD',
    image: kennyPhoto,
    highlight: 'Pioneer in Private Aviation',
    bio: [
      'Kenny Dichter is a pioneer in private aviation, celebrated for reshaping the industry through innovation, accessibility, and brand-building at scale. As the visionary behind both Wheels Up and Marquis Jet, two of the most disruptive companies in modern aviation. He was named one of the "Top 100 Power Players in Private Aviation" by Business Jet Traveler, recognizing his influence in expanding the category and creating billions in enterprise value through public and private aviation ventures.',
      'Kenny launched Marquis Jet in 2001, which became the leading private jet card provider before being acquired by NetJets/Berkshire Hathaway. In 2013, he founded Wheels Up, which went public in 2021 and became one of the largest private aviation companies in the world.',
      'In 2025, he launched REAL JET, a next-generation brokerage built to deliver frictionless access to premium aircraft for Fortune 500 corporate flight departments. With a proven track record of scaling high-trust platforms and a reputation for visionary execution, Kenny continues to lead the evolution of private aviation.',
    ],
    achievements: [
      'Founded Marquis Jet (acquired by NetJets)',
      'Founded Wheels Up (NYSE: UP)',
      'Top 100 Power Players in Private Aviation',
    ],
  },
  {
    name: 'Robert Withers',
    title: 'REAL Jet President',
    initials: 'RW',
    image: robertPhoto,
    highlight: 'Two Decades in Aviation Leadership',
    bio: [
      'Robert Withers is a seasoned executive in the air transportation industry, currently serving as the President of REAL JET. With a career spanning over two decades, Robert has a unique blend of experiences, including serving as Co-Founder and Executive Vice President at Wheels Up, and a notable role as Vice President of Sports Marketing at Marquis Jet and serving as an MLB agent at Aces.',
      'His educational background includes a degree in Political Science from Yale University, which complements his strategic approach to business. Robert\'s leadership skills and deep industry knowledge have positioned him as a key player in the air travel sector. He is known for his ability to navigate complex business environments and drive innovation in service offerings. Outside of his professional endeavors, Robert is likely to have interests in sports and travel, given his background and current role.',
    ],
    achievements: [
      'Co-Founder, Wheels Up',
      'EVP at Wheels Up',
      'Yale University Graduate',
    ],
  },
];

const Leadership = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 50,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Real Leaders In Private Aviation"
        subtitle="REAL Jet is led by the pioneers who created the Jet Card and Jet Membership categories—shaping modern private aviation from the ground up. That experience translates into smarter decisions, higher standards, and a level of insight no other brokerage can match."
      />

      {/* Leaders Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={`${index > 0 ? 'mt-24 pt-24 border-t border-neutral-200' : ''}`}
            >
              <div
                className="grid md:grid-cols-3 gap-10 md:gap-16"
                data-aos="fade-up"
              >
                {/* Left: Photo & Quick Info */}
                <div className="md:col-span-1">
                  <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-neutral-100 shadow-xl mx-auto md:mx-0">
                    <AvatarImage src={leader.image} alt={leader.name} className="object-cover" />
                    <AvatarFallback className="text-3xl md:text-4xl font-serif bg-neutral-100 text-neutral-600">
                      {leader.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mt-6 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-serif text-neutral-900">
                      {leader.name}
                    </h2>
                    <p className="text-gold-400 font-medium mt-1">{leader.title}</p>
                    <p className="text-neutral-500 text-sm mt-2">{leader.highlight}</p>
                  </div>

                  {/* Achievements */}
                  <div className="mt-8 hidden md:block">
                    <h3 className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase mb-4">
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {leader.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-sm text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Bio */}
                <div className="md:col-span-2">
                  <div className="space-y-5">
                    {leader.bio.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-neutral-600 leading-relaxed text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Mobile Achievements */}
                  <div className="mt-8 md:hidden">
                    <h3 className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase mb-4">
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {leader.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-sm text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-6 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight uppercase">
            Ready to experience the difference?
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Let our team craft a personalized aviation solution for you.
          </p>
          <a
            href="/"
            className="inline-block mt-8 px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
