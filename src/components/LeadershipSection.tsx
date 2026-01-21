import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const leaders = [
  {
    name: 'Kenny Dichter',
    title: 'Founder & Chairman',
    initials: 'KD',
    bio: [
      'Kenny Dichter is a pioneer in private aviation, celebrated for reshaping the industry through innovation, accessibility, and brand-building. Business Jet Traveler named Kenny "Top 100 Power Players in Private Aviation."',
      'Kenny launched Marquis Jet in 2001 with an entirely new business model—offering fractional jet card access to NetJets\' fleet—making private aviation accessible to a broader audience. Marquis Jet was later acquired by NetJets (a Berkshire Hathaway company).',
      'In 2013, Kenny founded Wheels Up, another groundbreaking venture, democratizing private flying through innovative membership and fleet-sharing models. Wheels Up went public in 2021.',
      'In 2025, Kenny launched REAL JET—the first platform dedicated to Fortune 500 corporate flight departments, revolutionizing how enterprise aviation is managed.'
    ]
  },
  {
    name: 'Robert Withers',
    title: 'President',
    initials: 'RW',
    bio: [
      'Robert Withers is a veteran aviation industry leader, with 22 years in aviation sales and operations, and a proven track record for innovation, operational expertise, and building global client relationships.',
      'At Wheels Up, Robert was a Co-Founder and Executive Vice President of Sales. He created the company\'s "Flight Desk," one of the industry\'s leading charter operations. Prior to Wheels Up, Robert played a key role in growing Marquis Jet. He began his career at eBizJets (now Sentient), where he developed commercial relationships with 200+ aircraft operators.',
      'Robert\'s notable charter accomplishments include organizing the first-ever African tour for a former US President and managing the air charter program for a renowned K-Pop group\'s international concerts.',
      'Robert graduated from Yale and played varsity football at both Yale and Boston College. He and his wife Carter live in Atlanta.'
    ]
  }
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 bg-neutral-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight uppercase">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            The visionaries behind Real Jet's mission to transform corporate aviation.
          </p>
        </div>

        <div className="space-y-16">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="flex flex-col md:flex-row gap-8 items-start"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-lg">
                  <AvatarFallback className="text-2xl md:text-3xl font-semibold bg-neutral-200 text-neutral-700">
                    {leader.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {leader.name}
                </h3>
                <p className="text-amber-600 font-medium mb-4">
                  {leader.title}
                </p>
                <div className="space-y-4">
                  {leader.bio.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-neutral-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
