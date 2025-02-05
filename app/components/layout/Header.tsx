import Image from 'next/image';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-32">
          <Image
            src="/main-logo.png"
            alt="Krontiva Logo"
            width={120}
            height={40}
            priority
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header; 