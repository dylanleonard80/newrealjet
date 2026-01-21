import { useEffect, useRef, useState } from 'react';
import safetyArticle from '@/assets/safety-article.webp';
import interiorArticle from '@/assets/interior-article.webp';

const articles = [
  {
    title: 'Safety Breakthroughs & Standards in the Age of AI',
    excerpt: 'With the advent of artificial intelligence, the private aviation industry has had some significant..',
    image: safetyArticle,
    featured: true,
  },
  {
    title: 'Interior Innovations: The Science of Comfort',
    excerpt: 'The latest developments in private jet interiors are less concerned with pure aesthetics as they are with...',
    image: interiorArticle,
    featured: true,
  },
  {
    title: 'Charter vs. Membership: What Makes Sense Today',
    excerpt: "The private aviation market has changed fast. We break down how today's...",
    featured: false,
  },
  {
    title: 'How Experienced Flyers Choose the Right Aircraft',
    excerpt: 'From passenger count to range, cabin layout, and safety history, selecting the right jet...',
    featured: false,
  },
];

const RealDealSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredArticles = articles.filter((a) => a.featured);
  const sideArticles = articles.filter((a) => !a.featured);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#f5f5f5]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-[0.15em] uppercase">
            The <em className="italic">Real Deal</em>
          </h2>
          <p className="mt-4 text-neutral-600">
            Industry information, updates and happenings from the world of private aviation
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Articles (Left 2 columns) */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <article
                key={article.title}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 leading-tight mb-3 group-hover:text-purple-700 transition-colors">
                  {article.title}
                </h3>
                {/* Excerpt */}
                <p className="text-neutral-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* Side Articles (Right column) */}
          <div className="space-y-10">
            {sideArticles.map((article, index) => (
              <article
                key={article.title}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${350 + index * 100}ms` }}
              >
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 leading-tight mb-3 group-hover:text-purple-700 transition-colors">
                  {article.title}
                </h3>
                {/* Excerpt */}
                <p className="text-neutral-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealDealSection;
