import Link from 'next/link';
import ArrowRight from '../ui/icons/ArrowRight';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900 relative flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            We're an industry leading transformation company
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Drive your business confidently into the future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Explore
            <ArrowRight className="w-5 h-5 ml-2 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 