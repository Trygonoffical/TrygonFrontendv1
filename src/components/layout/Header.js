'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDownIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import {
  FaCode,
  FaMobile,
  FaShoppingCart,
  FaCloud,
  FaPalette,
  FaLightbulb,
  FaShieldAlt
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      name: 'Website Development', 
      href: '/services/website-development',
      icon: FaCode,
      description: 'Custom websites with modern technologies',
      color: 'text-blue-400'
    },
    { 
      name: 'Mobile App Development', 
      href: '/services/mobile-app-development',
      icon: FaMobile,
      description: 'Native & cross-platform mobile apps',
      color: 'text-green-400'
    },
    { 
      name: 'E-commerce Development', 
      href: '/services/ecommerce-development',
      icon: FaShoppingCart,
      description: 'Complete online store solutions',
      color: 'text-purple-400'
    },
    { 
      name: 'DevOps & Cloud Services', 
      href: '/services/devops-cloud',
      icon: FaCloud,
      description: 'Scalable cloud infrastructure',
      color: 'text-indigo-400'
    },
    { 
      name: 'UI/UX Design', 
      href: '/services/ui-ux-design',
      icon: FaPalette,
      description: 'User-centered design experiences',
      color: 'text-pink-400'
    },
    { 
      name: 'Software Consulting', 
      href: '/services/software-consulting',
      icon: FaLightbulb,
      description: 'Expert technology consulting',
      color: 'text-yellow-400'
    },
    { 
      name: 'AMC Services', 
      href: '/services/amc',
      icon: FaShieldAlt,
      description: 'Annual Maintenance & Support Contracts',
      color: 'text-orange-400'
    }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasMegaMenu: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Desktop Floating Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 hidden lg:block`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`
            glass rounded-full px-6 py-3 flex justify-between items-center
            transition-all duration-300
            ${scrolled ? 'bg-gray-900/90 shadow-lg shadow-blue-500/10' : 'bg-transparent border-transparent'}
          `}>
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
               <Image src="/assets/logo/logo3.png" alt="Trygon" width={120} height={40} className="h-10 w-auto" />
            </Link>

            {/* Navigation */}
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasMegaMenu ? (
                    <div 
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="relative"
                    >
                      <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center group-hover:bg-white/5 rounded-full">
                        {item.name}
                        <ChevronDownIcon className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform" />
                      </button>

                      {/* Mega Menu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] glass-card rounded-2xl p-6 overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-4">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="group/item flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                  <div className={`p-2 rounded-lg bg-gray-800 group-hover/item:bg-gray-700 transition-colors ${service.color}`}>
                                    <service.icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-semibold text-gray-200 group-hover/item:text-blue-400 transition-colors">
                                      {service.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center space-x-3">
               <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Top Bar (Logo only) */}
      <div className="lg:hidden fixed top-0 w-full z-[40] bg-background/80 backdrop-blur-md border-b border-white/5 px-4 py-4 flex items-center justify-center">
        <Link href="/">
          <Image src="/assets/logo/logo3.png" alt="Trygon" width={150} height={40} />
        </Link>
      </div>
    </>
  );
};

export default Header;