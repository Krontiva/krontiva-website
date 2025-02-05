"use client";

import Image from 'next/image';
import { useState } from 'react';
import Menu02Icon from '../ui/icons/menu-02-stroke-rounded';
import { Sheet } from '../ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-green-400 transition-colors"
        >
          <Menu02Icon className="w-8 h-8 text-white" />
        </button>
      </div>
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header; 