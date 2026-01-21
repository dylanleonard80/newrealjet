import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-neutral-50 px-6">
        <div className="text-center max-w-md">
          <span className="text-gold-400 text-xs font-medium tracking-[0.25em] uppercase">
            Page Not Found
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-neutral-900 mt-4">404</h1>
          <p className="mt-6 text-neutral-500 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors duration-300"
            >
              Return Home
            </Link>
            <Link
              to="/safety"
              className="px-8 py-4 border border-neutral-300 text-neutral-700 rounded-full font-medium hover:border-neutral-400 transition-colors duration-300"
            >
              View Safety
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
