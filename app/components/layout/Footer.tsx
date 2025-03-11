import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#18181B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-h4 font-display font-bold">Contact</h3>
            <div className="space-y-2 text-gray-300 font-display">
              <p>The Octagon</p>
              <p>Independence Avenue</p>
              <p>Accra Central</p>
              <p>0303921265</p>
              <p>info@krontiva.africa</p>
            </div>
          </div>

          {/* Menu Links */}
          <div className="space-y-4">
            <h3 className="text-h4 font-display font-bold">Menu</h3>
            <nav className="space-y-2">
              <Link 
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors font-display"
              >
                About
              </Link>
              <Link 
                href="/projects"
                className="block text-gray-300 hover:text-white transition-colors font-display"
              >
                Projects
              </Link>
              <Link 
                href="/services"
                className="block text-gray-300 hover:text-white transition-colors font-display"
              >
                Services
              </Link>
              <Link 
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors font-display"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h3 className="text-h4 font-display font-bold">Map</h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.988761888557!2d-0.19967!3d5.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a01071a1d35%3A0xba37dfc2c1ae2a3c!2sThe%20Octagon%2C%20Accra%20Central%2C%20Ghana!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Copyright */}
            <p className="text-gray-400 font-display">
              Copyright &copy; {new Date().getFullYear()} Krontiva Africa. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="space-y-4 md:space-y-0">
              <h3 className="text-h4 font-display font-bold md:hidden">Socials</h3>
              <div className="flex items-center gap-4">
                <Link 
                  href="https://www.facebook.com/krontiva" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://www.instagram.com/krontiva/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/krontiva/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors font-display"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors font-display"
              >
                Terms
              </Link>
              <Link 
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors font-display"
              >
                Cookie Consent
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add Cookie Consent */}
    </footer>
  );
};

export default Footer; 