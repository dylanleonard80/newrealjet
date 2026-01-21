import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-right-aircraft-size',
    title: 'How to Choose the Right Aircraft Size for Your Trip',
    excerpt:
      'Understanding the different categories of private jets and when each makes the most sense for your travel needs.',
    category: 'Travel Tips',
    date: 'January 15, 2025',
    readTime: '5 min read',
  },
  {
    slug: 'understanding-private-aviation-safety',
    title: 'Understanding Private Aviation Safety Standards',
    excerpt:
      'What ARGUS, WYVERN, and IS-BAO ratings mean and why they matter when selecting a private aviation provider.',
    category: 'Safety',
    date: 'January 10, 2025',
    readTime: '7 min read',
  },
  {
    slug: 'charter-vs-fractional-ownership',
    title: 'Charter vs. Fractional Ownership: Which Is Right for You?',
    excerpt:
      'A comprehensive guide to the different ways you can access private aviation and how to determine the best fit.',
    category: 'Industry Insights',
    date: 'January 5, 2025',
    readTime: '8 min read',
  },
  {
    slug: 'flying-to-major-events',
    title: 'Flying Private to Major Events: What You Need to Know',
    excerpt:
      'Tips for booking private aviation to high-demand events like the Super Bowl, Masters, and Art Basel.',
    category: 'Travel Tips',
    date: 'December 28, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'pet-friendly-private-aviation',
    title: 'Pet-Friendly Private Aviation: A Complete Guide',
    excerpt:
      'Everything you need to know about traveling with your pets on private aircraft, from policies to best practices.',
    category: 'Travel Tips',
    date: 'December 20, 2024',
    readTime: '5 min read',
  },
  {
    slug: 'empty-leg-flights-explained',
    title: 'Empty Leg Flights: Opportunities and Considerations',
    excerpt:
      'Understanding empty leg flights, their benefits, limitations, and how to take advantage of these opportunities.',
    category: 'Industry Insights',
    date: 'December 15, 2024',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Travel Tips', 'Safety', 'Industry Insights'];

const Blog = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 50,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      <Header />
      <PageHero
        eyebrow="Resources"
        title="Insights & Education"
        subtitle="Expert perspectives on private aviation, travel tips, and industry insights to help you fly smarter."
      />

      {/* Category Filter */}
      <section className="py-8 px-6 bg-neutral-50 border-b border-neutral-100 sticky top-[72px] z-30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Placeholder Image */}
                  <div className="aspect-[16/10] bg-neutral-100 rounded-xl mb-5 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span className="text-neutral-400 text-sm">{post.category}</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="text-gold-500 font-medium">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200 mb-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-neutral-500 leading-relaxed mb-4">{post.excerpt}</p>

                  {/* Date & Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-gold-500 transition-colors">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight uppercase">
            Stay informed.
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Get private aviation insights delivered to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-neutral-500">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
