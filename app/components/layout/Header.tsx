"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu02Icon from '../ui/icons/menu-02-stroke-rounded';
import { Sheet, SheetContent, SheetTitle } from '../ui/sheet';
import { ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { 
    name: 'About',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Jobs', href: '/jobs' },
      { name: 'News', href: '/news' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  exit: { 
    opacity: 0,
    x: -20,
    transition: { duration: 0.3 }
  }
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2 }
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-32">
          <Image
            src="/logo.png"
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
          <Menu02Icon className="w-8 h-8 text-black" />
        </button>
      </div>
      <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <SheetContent className="backdrop-blur-lg bg-black/95">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <AnimatePresence mode="wait">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center"
                >
                  {'items' in item ? (
                    <div className="relative">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="text-4xl font-display font-bold text-white transition-all duration-300 hover:text-green-400 inline-flex items-center gap-2"
                      >
                        {item.name}
                        <ChevronDown 
                          className={`w-8 h-8 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col gap-4 mt-4"
                          >
                            {item.items?.map((subItem) => (
                              <motion.div
                                key={subItem.name}
                                variants={menuItemVariants}
                              >
                                <Link
                                  href={subItem.href}
                                  className="text-2xl font-display font-medium text-gray-400 transition-all duration-300 hover:text-green-400 hover:translate-x-2 inline-block"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-4xl font-display font-bold text-white transition-all duration-300 hover:text-green-400 hover:translate-x-2 inline-block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header; 