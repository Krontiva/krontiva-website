import Link from 'next/link';
import ArrowRight from '../ui/icons/ArrowRight';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-d2 font-display font-bold text-white mb-6">
            We&apos;re an industry leading <span className="text-green-500">transformation</span> company
          </h1>
          <p className="text-b1 font-display text-gray-300 mb-8">
            Drive your business confidently into the future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Explore
            <ArrowRight className="w-5 h-5 ml-2 text-b2 font-display text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 