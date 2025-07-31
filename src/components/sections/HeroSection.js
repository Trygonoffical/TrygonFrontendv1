'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import {
  FaCode,
  FaMobile,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaTrophy,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaTags
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { SimpleInput as Input, SimpleTextarea as Textarea, SimpleSelect as Select } from '@/components/ui/Form';

const HeroSection = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');

  // Fix hydration by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Transform Your Business with",
      subtitle: "Expert IT Solutions",
      typewriterWords: ["Innovation", "Excellence", "Growth", "Success"],
      description: "From web development to digital marketing, we deliver innovative technology solutions that drive growth and success.",
      type: "contact",
      ctaText: "Get Free Quote",
      features: ["Free Consultation", "24/7 Support", "Expert Team"]
    },
    {
      id: 2,
      title: "Build Stunning Websites",
      subtitle: "That Converts ", // Visitors to Customers
      typewriterWords: ["Modern", "Responsive", "Fast", "Optimized"],
      description: "Custom web development with modern technologies, responsive design, and optimized performance that drives results.",
      type: "website",
      ctaText: "View Web Projects",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      stats: { projects: "200+", satisfaction: "99%", speed: "3x Faster" }
    },
    {
      id: 3,
      title: "Mobile Apps That",
      subtitle: "Users Love & Businesses Need",
      typewriterWords: ["Native", "Cross-Platform", "Powerful", "Intuitive"],
      description: "Native and cross-platform mobile applications with stunning UI/UX and powerful functionality.",
      type: "mobile",
      ctaText: "View App Portfolio",
      features: ["iOS & Android", "Native Performance", "App Store Ready"],
      stats: { downloads: "1M+", rating: "4.9★", apps: "50+" }
    },
    {
      id: 4,
      title: "Complete Digital",
      subtitle: "Transformation Solutions",
      typewriterWords: ["Scalable", "Secure", "Cloud-Ready", "Future-Proof"],
      description: "End-to-end digital services including e-commerce, DevOps, cloud infrastructure, and digital marketing.",
      type: "services",
      ctaText: "Explore All Services",
      features: ["Full Stack", "Cloud Ready", "Scalable Solutions"],
      stats: { clients: "500+", countries: "25+", years: "5+" }
    },
    // {
    //   id: 5,
    //   title: "Find Everything You Need",
    //   subtitle: "Search Our Services & Resources",
    //   typewriterWords: ["Services", "Portfolio", "Blogs", "Solutions"],
    //   description: "Quickly discover our services, browse our portfolio, read our latest blogs, or find any information you need.",
    //   type: "search",
    //   ctaText: "Start Searching",
    //   features: ["Smart Search", "Instant Results", "All Categories"]
    // }
  ];

  const searchCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'services', label: 'Services' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'blog', label: 'Blog Posts' },
    { value: 'team', label: 'Team' },
    { value: 'contact', label: 'Contact Info' }
  ];

  // Auto-scroll for hero slides
  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // Slower for search slide
    return () => clearInterval(interval);
  }, [isClient, heroSlides.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    // This would integrate with your search functionality
    console.log('Searching for:', searchQuery, 'in category:', searchCategory);
    // Redirect to search results page or filter content
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient && [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-20"
            style={{
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'}, transparent)`,
              left: `${i * 30}%`,
              top: `${i * 25}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Slides Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="overflow-hidden rounded-3xl">
          {isClient && (
            <motion.div
              className="flex"
              animate={{ x: `-${currentHeroSlide * 100}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {heroSlides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                    {/* Left Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-center lg:text-left"
                    >
                      <motion.h1 
                        className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
                        key={`title-${slide.id}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {slide.title}
                        <motion.span 
                          className="text-blue-400 block"
                          style={{
                            background: "linear-gradient(90deg, #60A5FA, #A78BFA, #34D399, #60A5FA)",
                            backgroundSize: "200% 200%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {slide.subtitle}
                        </motion.span>
                      </motion.h1>

                      {/* Typewriter Effect for Keywords */}
                      {slide.typewriterWords && (
                        <motion.div 
                          className="text-2xl lg:text-3xl font-semibold mb-6 text-yellow-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          <Typewriter
                            options={{
                              strings: slide.typewriterWords,
                              autoStart: true,
                              loop: true,
                              delay: 75,
                              deleteSpeed: 50,
                            }}
                          />
                        </motion.div>
                      )}
                      
                      <motion.p 
                        className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        {slide.description}
                      </motion.p>

                      {/* Features */}
                      <motion.div 
                        className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        {slide.features.map((feature, i) => (
                          <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                            <FaCheckCircle className="inline w-4 h-4 mr-2 text-green-400" />
                            {feature}
                          </span>
                        ))}
                      </motion.div>

                      {/* Stats for non-contact and non-search slides */}
                      {slide.stats && (
                        <motion.div 
                          className="grid grid-cols-3 gap-4 mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                        >
                          {Object.entries(slide.stats).map(([key, value], i) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl lg:text-3xl font-bold text-blue-400">{value}</div>
                              <div className="text-sm text-blue-200 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      >
                        <Link href={
                          slide.type === 'contact' ? '/contact' : 
                          slide.type === 'website' ? '/services/website-development' : 
                          slide.type === 'mobile' ? '/services/mobile-app-development' :
                          slide.type === 'search' ? '/search' :
                          '/services'
                        }>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="lg" className="w-full sm:w-auto">
                              {slide.ctaText}
                              <FaArrowRight className="ml-2" />
                            </Button>
                          </motion.div>
                        </Link>
                        <Link href="/portfolio">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button variant="outline" size="lg" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-blue-900">  
                              View Portfolio
                            </Button>
                          </motion.div>
                        </Link>
                      </motion.div>
                    </motion.div>
                    
                    {/* Right Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative"
                    >
                      {slide.type === 'contact' ? (
                        /* Contact Form */
                        <motion.div 
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                          }}
                        >
                          <h3 className="text-2xl font-semibold mb-6 text-center">Quick Contact</h3>
                                                      <form className="space-y-4">
                              <Input placeholder="Your Name" className="bg-white/20 border-white/30 text-white placeholder-white/80 focus:bg-white/30 focus:border-white/50" />
                              <Input type="email" placeholder="Email Address" className="bg-white/20 border-white/30 text-white placeholder-white/80 focus:bg-white/30 focus:border-white/50" />
                              <Select 
                                placeholder="Select Service"
                                className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-white/50"
                                options={[
                                  { value: 'web-dev', label: 'Website Development' },
                                  { value: 'mobile-dev', label: 'Mobile App Development' },
                                  { value: 'ecommerce', label: 'E-commerce Development' },
                                  { value: 'digital-marketing', label: 'Digital Marketing' },
                                  { value: 'devops', label: 'DevOps & Cloud' },
                                  { value: 'ui-ux', label: 'UI/UX Design' }
                                ]}
                              />
                              <Textarea 
                                placeholder="Tell us about your project..." 
                                rows={3}
                                className="bg-white/20 border-white/30 text-white placeholder-white/80 focus:bg-white/30 focus:border-white/50"
                              />
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button type="submit" className="w-full">
                                Send Message
                              </Button>
                            </motion.div>
                          </form>
                        </motion.div>
                      ) : slide.type === 'search' ? (
                        /* Search Interface */
                        <motion.div 
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        >
                          <div className="text-center mb-6">
                            <motion.div
                              className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center"
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <FaSearch className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-2">Smart Search</h3>
                            <p className="text-blue-100">Find exactly what you&apos;re looking for</p>
                          </div>
                          
                          <form onSubmit={handleSearch} className="space-y-4">
                            <div className="relative">
                              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                              <Input 
                                placeholder="Search services, portfolio, blogs..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-white/20 border-white/30 text-white placeholder-white/80 pl-12 focus:bg-white/30 focus:border-white/50"
                              />
                            </div>
                            
                            <Select 
                              value={searchCategory}
                              onChange={(e) => setSearchCategory(e.target.value)}
                              className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-white/50"
                              options={searchCategories}
                            />
                            
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <motion.button
                                type="button"
                                className="bg-white/10 border border-white/20 rounded-lg p-2 hover:bg-white/20 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaTags className="w-4 h-4 mx-auto mb-1" />
                                <div>Services</div>
                              </motion.button>
                              <motion.button
                                type="button"
                                className="bg-white/10 border border-white/20 rounded-lg p-2 hover:bg-white/20 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaRocket className="w-4 h-4 mx-auto mb-1" />
                                <div>Portfolio</div>
                              </motion.button>
                              <motion.button
                                type="button"
                                className="bg-white/10 border border-white/20 rounded-lg p-2 hover:bg-white/20 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaFilter className="w-4 h-4 mx-auto mb-1" />
                                <div>Blogs</div>
                              </motion.button>
                            </div>
                            
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button type="submit" className="w-full">
                                <FaSearch className="mr-2" />
                                Search Now
                              </Button>
                            </motion.div>
                          </form>
                        </motion.div>
                      ) : (
                        /* Visual Content for other slides */
                        <motion.div 
                          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        >
                          <div className="text-center">
                            <motion.div
                              className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center"
                              animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              {slide.type === 'website' && <FaCode className="w-16 h-16 text-white" />}
                              {slide.type === 'mobile' && <FaMobile className="w-16 h-16 text-white" />}
                              {slide.type === 'services' && <FaRocket className="w-16 h-16 text-white" />}
                            </motion.div>
                            
                            <h3 className="text-2xl font-bold mb-4">
                              {slide.type === 'website' && 'Web Development'}
                              {slide.type === 'mobile' && 'Mobile Apps'}
                              {slide.type === 'services' && 'All Services'}
                            </h3>
                            
                            <p className="text-blue-100 mb-6">
                              {slide.type === 'website' && 'Modern, responsive websites that convert visitors into customers with cutting-edge technology.'}
                              {slide.type === 'mobile' && 'Native iOS & Android apps with stunning UI and powerful functionality that users love.'}
                              {slide.type === 'services' && 'Complete digital transformation with our full suite of technology services.'}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              {slide.type === 'website' && (
                                <>
                                  <div className="bg-white/10 rounded-lg p-3">
                                    <FaCode className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                                    <div>Custom Code</div>
                                  </div>
                                  <div className="bg-white/10 rounded-lg p-3">
                                    <FaRocket className="w-6 h-6 mx-auto mb-2 text-green-400" />
                                    <div>Fast Loading</div>
                                  </div>
                                </>
                              )}
                              {slide.type === 'mobile' && (
                                <>
                                  <div className="bg-white/10 rounded-lg p-3">
                                    <FaMobile className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                                    <div>iOS & Android</div>
                                  </div>
                                  <div className="bg-white/10 rounded-lg p-3">
                                    <FaStar className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                                    <div>5-Star Rating</div>
                                  </div>
                                </>
                              )}
                              {slide.type === 'services' && (
                                <>
                                  <div className="bg-white/10 rounded-lg p-3">
                                    <FaGlobe className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                                    <div>Global Reach</div>
                                  </div>
                                  <div className="bg-white/10 rounded-lg p-3">
                                    <FaTrophy className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                                    <div>Award Winning</div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentHeroSlide(index)}
              className={`group relative`}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentHeroSlide ? 'bg-blue-400 scale-125' : 'bg-white/40 hover:bg-white/60'
              }`} />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {slide.type === 'contact' && 'Contact Us'}
                {slide.type === 'website' && 'Web Development'}
                {slide.type === 'mobile' && 'Mobile Apps'}
                {slide.type === 'services' && 'All Services'}
                {slide.type === 'search' && 'Search'}
              </div>
            </button>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
        >
          <FaChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
        >
          <FaChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;