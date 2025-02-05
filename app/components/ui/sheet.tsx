"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CancelSquareIcon from "./icons/cancel-square-stroke-rounded";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const galleryImages = [
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
  "/gallery/image3.jpeg",
  "/gallery/image4.jpeg",
];

export const Sheet = ({ isOpen, onClose }: SheetProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900 z-[9999]"
          style={{ position: 'fixed', zIndex: 9999 }}
        >
          <div className="h-full flex flex-col lg:flex-row">
            {/* Left Side - Navigation */}
            <div className="w-full lg:w-1/2 p-6 lg:p-20">
              <div className="mb-8 lg:mb-16">
                <h2 className="text-h4 font-display text-green-500">Menu</h2>
              </div>
              <nav className="flex flex-col space-y-4 lg:space-y-8">
                <Link
                  href="/about"
                  className="text-h3 lg:text-h2 font-display text-white hover:text-green-400 transition-colors"
                  onClick={onClose}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-h3 lg:text-h2 font-display text-white hover:text-green-400 transition-colors"
                  onClick={onClose}
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  className="text-h3 lg:text-h2 font-display text-white hover:text-green-400 transition-colors"
                  onClick={onClose}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-h3 lg:text-h2 font-display text-white hover:text-green-400 transition-colors"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right Side - Gallery */}
            <div className="w-full lg:w-1/2 p-6 lg:p-20 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white hover:text-green-400 transition-colors"
              >
                <CancelSquareIcon className="w-8 h-8 text-white" />
              </button>
              <h2 className="text-h4 font-display text-green-500 mb-6 lg:mb-8">
                Slideshow of our projects
              </h2>
              <Link 
                href="/gallery" 
                className="grid grid-cols-2 gap-3 lg:gap-4 h-[calc(100%-6rem)]"
                onClick={onClose}
              >
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-square overflow-hidden rounded-lg group"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-display text-b2 lg:text-b1">
                        View Project
                      </span>
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 