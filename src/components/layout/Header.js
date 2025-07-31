'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import {
  FaCode,
  FaMobile,
  FaShoppingCart,
  FaChartLine,
  FaCloud,
  FaPalette,
  FaLightbulb,
  FaShieldAlt
} from 'react-icons/fa';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    { 
      name: 'Website Development', 
      href: '/services/website-development',
      icon: FaCode,
      description: 'Custom websites with modern technologies',
      color: 'text-blue-600'
    },
    { 
      name: 'Mobile App Development', 
      href: '/services/mobile-app-development',
      icon: FaMobile,
      description: 'Native & cross-platform mobile apps',
      color: 'text-green-600'
    },
    { 
      name: 'E-commerce Development', 
      href: '/services/ecommerce-development',
      icon: FaShoppingCart,
      description: 'Complete online store solutions',
      color: 'text-purple-600'
    },
    { 
      name: 'Digital Marketing', 
      href: '/services/digital-marketing',
      icon: FaChartLine,
      description: 'Data-driven marketing strategies',
      color: 'text-red-600'
    },
    { 
      name: 'DevOps & Cloud Services', 
      href: '/services/devops-cloud',
      icon: FaCloud,
      description: 'Scalable cloud infrastructure',
      color: 'text-indigo-600'
    },
    { 
      name: 'UI/UX Design', 
      href: '/services/ui-ux-design',
      icon: FaPalette,
      description: 'User-centered design experiences',
      color: 'text-pink-600'
    },
    { 
      name: 'Software Consulting', 
      href: '/services/software-consulting',
      icon: FaLightbulb,
      description: 'Expert technology consulting',
      color: 'text-yellow-600'
    },
    { 
      name: 'AMC Services', 
      href: '/services/amc',
      icon: FaShieldAlt,
      description: 'Annual Maintenance & Support Contracts',
      color: 'text-orange-600'
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

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isServicesOpen && !event.target.closest('.services-menu')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Trygon</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group services-menu">
                  {item.hasMegaMenu ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                      >
                        {item.name}
                        <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mega Menu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onMouseLeave={() => setIsServicesOpen(false)}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50"
                          >
                            <div className="grid grid-cols-2 gap-6">
                              {services.map((service, index) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link 
                                    href={service.href}
                                    className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-start space-x-4 border border-transparent hover:border-gray-200"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                      <service.icon className={`w-6 h-6 ${service.color}`} />
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1">
                                        {service.name}
                                      </h3>
                                      <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.description}
                                      </p>
                                    </div>
                                    <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                            
                            {/* View All Services Button */}
                            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                              <Link href="/services" onClick={() => setIsServicesOpen(false)}>
                                <Button className="group">
                                  View All Services
                                  <ChevronRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </Button>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition-all duration-200"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Sliding Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 bg-black/50 z-40 top-0 left-0 w-full h-full"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Sliding Menu */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.3 
                }}
                className="lg:hidden fixed top-0 left-0 h-screen w-screen sm:w-80 sm:max-w-sm bg-white z-50 shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xl">T</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">Trygon</span>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto py-6">
                    <div className="space-y-2 px-6">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          {item.hasMegaMenu ? (
                            <div>
                              <button
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-left"
                              >
                                <span className="font-medium">{item.name}</span>
                                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${
                                  isMobileServicesOpen ? 'rotate-180' : ''
                                }`} />
                              </button>

                              {/* Mobile Services Submenu */}
                              <AnimatePresence>
                                {isMobileServicesOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="ml-4 mt-2 space-y-1">
                                      {services.map((service) => (
                                        <motion.div
                                          key={service.name}
                                          initial={{ x: -20, opacity: 0 }}
                                          animate={{ x: 0, opacity: 1 }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          <Link
                                            href={service.href}
                                            onClick={() => {
                                              setIsMenuOpen(false);
                                              setIsMobileServicesOpen(false);
                                            }}
                                            className="flex items-center py-3 px-4 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 group"
                                          >
                                            <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                                              <service.icon className={`w-4 h-4 ${service.color}`} />
                                            </div>
                                            <div>
                                              <div className="font-medium text-sm">{service.name}</div>
                                              <div className="text-xs text-gray-500">{service.description}</div>
                                            </div>
                                          </Link>
                                        </motion.div>
                                      ))}
                                      
                                      {/* View All Services - Mobile */}
                                      <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                        className="pt-2 mt-2 border-t border-gray-100"
                                      >
                                        <Link
                                          href="/services"
                                          onClick={() => {
                                            setIsMenuOpen(false);
                                            setIsMobileServicesOpen(false);
                                          }}
                                          className="flex items-center py-3 px-4 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
                                        >
                                          <span>View All Services</span>
                                          <ChevronRightIcon className="ml-auto w-4 h-4" />
                                        </Link>
                                      </motion.div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-gray-100 space-y-3">
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-center">
                        Login
                      </Button>
                    </Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full justify-center">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;