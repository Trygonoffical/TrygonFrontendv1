'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  FaCode,
  FaMobile,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaTrophy,
  FaTimes
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { SimpleInput as Input, SimpleTextarea as Textarea, SimpleSelect as Select } from '@/components/ui/Form';
import supabase from '@/lib/supabase';

// Device Mockups for First Slide
const LaptopMockup = () => (
    <div className="relative w-[400px] h-[240px] bg-slate-900 rounded-t-xl border-2 border-slate-700 border-b-0 shadow-2xl overflow-hidden">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-600 rounded-full" />
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <div className="w-16 h-2 bg-slate-800 rounded-full" />
                </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-2">
                <div className="col-span-1 bg-slate-900/50 rounded-lg p-2 space-y-1">
                    {[1,2,3].map(i => (
                        <div key={i} className="h-1 w-full bg-slate-800 rounded-full" />
                    ))}
                </div>
                <div className="col-span-2 space-y-2">
                     <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 p-2 rounded-lg border border-blue-500/10">
                        <div className="text-[8px] text-blue-400">REVENUE</div>
                        <div className="text-sm font-bold text-white">$124,500</div>
                     </div>
                     <div className="grid grid-cols-2 gap-2">
                         <div className="h-12 bg-slate-900 rounded-lg border border-slate-800 flex items-end justify-between px-1 pb-1">
                              {[40,70,50,90].map((h,i) => (
                                  <div key={i} style={{height: `${h}%`}} className="w-1 bg-slate-700 rounded-t-sm" />
                              ))}
                         </div>
                         <div className="h-12 bg-slate-900 rounded-lg border border-slate-800" />
                     </div>
                </div>
            </div>
        </div>
    </div>
);

const PhoneMockup = () => (
    <div className="absolute -right-2 -bottom-6 w-[100px] h-[200px] bg-slate-950 rounded-[1.5rem] border-4 border-slate-800 shadow-2xl overflow-hidden transform rotate-[-5deg]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-800 rounded-b-lg" />
        <div className="w-full h-full bg-slate-900 pt-5 px-2 flex flex-col gap-2">
             <div className="w-full aspect-square bg-blue-600/10 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full opacity-80" />
             </div>
             <div className="space-y-1">
                 <div className="h-2 w-2/3 bg-slate-800 rounded-full" />
                 <div className="h-1 w-full bg-slate-800/50 rounded-full" />
             </div>
             <div className="mt-auto mb-2 bg-blue-600 w-full py-1 rounded-md text-[8px] text-center font-bold text-white">
                 Confirm
             </div>
        </div>
    </div>
);

const QuoteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            if (!supabase) throw new Error("Supabase not configured");
            const { error } = await supabase.from('contact_details').insert([{
                full_name: formData.name,
                email: formData.email,
                service: formData.service,
                description: formData.message,
                created_at: new Date().toISOString()
            }]);
            if (error) throw error;
            toast.success("Request sent successfully!");
            onClose();
            setFormData({ name: '', email: '', service: '', message: '' });
        } catch (error) {
            console.error(error);
            toast.error("Failed to send request.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0B0F19] border border-white/10 rounded-2xl p-8 shadow-2xl z-10"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                            <FaTimes />
                        </button>
                        <h3 className="text-2xl font-bold text-white mb-2">Get a Quote</h3>
                        <p className="text-gray-400 mb-6 text-sm">Tell us about your project and we'll get back to you within 24 hours.</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                             <Input 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required
                                className="bg-white/5 border-white/10 text-white focus:border-blue-500 py-3"
                             />
                             <Input 
                                name="email" 
                                type="email"
                                placeholder="Work Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required
                                className="bg-white/5 border-white/10 text-white focus:border-blue-500 py-3"
                             />
                             <Select 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                options={[
                                    { value: 'web-dev', label: 'Web Development' },
                                    { value: 'mobile-app', label: 'Mobile App' },
                                    { value: 'ui-ux', label: 'UI/UX Design' },
                                    { value: 'cloud', label: 'Cloud & DevOps' }
                                ]}
                                className="bg-white/5 border-white/10 text-white focus:border-blue-500 py-3"
                             />
                             <Textarea 
                                name="message" 
                                placeholder="Project Brief..." 
                                value={formData.message} 
                                onChange={handleChange} 
                                rows={3}
                                className="bg-white/5 border-white/10 text-white focus:border-blue-500 py-3"
                             />
                             <Button type="submit" loading={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold">
                                Submit Request
                             </Button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const HeroSection = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "We build scalable",
      subtitle: "digital products",
      subtitle2: "for startups & growing businesses",
      description: "Web, Mobile, Cloud & Growth — built to scale.",
      type: "main",
      ctaText: "Get a Quote",
      secondaryCta: "View Work",
      features: ["Verified Expert", "Fast Delivery"]
    },
    {
      id: 2,
      title: "Websites That",
      subtitle: "Defy Expectations",
      description: "Custom web development with modern technologies, responsive design, and optimized performance.",
      type: "website",
      ctaText: "View Projects",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      stats: { projects: "200+", satisfaction: "99%", speed: "3x Faster" }
    },
    {
      id: 3,
      title: "Mobile Apps",
      subtitle: "Users Love",
      description: "Native and cross-platform mobile applications with stunning UI/UX and powerful functionality.",
      type: "mobile",
      ctaText: "App Portfolio",
      features: ["iOS & Android", "Native Performance", "App Store Ready"],
      stats: { downloads: "1M+", rating: "4.9★", apps: "50+" }
    }
  ];
  
  useEffect(() => {
    if (!isClient || isPaused) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isClient, heroSlides.length, isPaused]);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[#030712]">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {heroSlides.map((slide, index) => {
               if (index !== currentHeroSlide) return null;
               return (
                <motion.div 
                  key={slide.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="col-span-1"
                >
                  <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                    <span className="text-sm text-blue-200 font-medium">Available for new projects</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                    {slide.title}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                      {slide.subtitle}
                    </span>
                    {slide.subtitle2 && (
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        {slide.subtitle2}
                      </span>
                    )}
                  </h1>

                  <div className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                    {slide.description}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-10">
                     {slide.features.map((feature, i) => (
                        <span key={i} className="flex items-center text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                          <FaCheckCircle className="text-blue-500 mr-2" />
                          {feature}
                        </span>
                     ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {slide.type === 'main' ? (
                      <>
                        <Button 
                          onClick={() => setIsModalOpen(true)}
                          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all"
                        >
                          {slide.ctaText}
                        </Button>
                        <Link href="/portfolio">
                           <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-8 py-4 rounded-xl text-lg backdrop-blur-sm">
                             {slide.secondaryCta}
                           </Button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href={slide.type === 'contact' ? '/contact' : '/services'}>
                          <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all">
                            {slide.ctaText}
                            <FaArrowRight className="ml-2" />
                          </Button>
                        </Link>
                        <Link href="/portfolio">
                           <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-8 py-4 rounded-xl text-lg backdrop-blur-sm">
                             View Work
                           </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </motion.div>
               );
            })}

            {/* Right Content - Visual or Stats */}
            <div className="col-span-1 relative mt-10 lg:mt-0">
               <div className="relative z-10">
                  {heroSlides[currentHeroSlide].type === 'main' ? (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-[400px] flex items-center justify-center"
                     >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-2 bg-slate-800 rounded-b-xl shadow-2xl hidden lg:block" />
                        <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[80px] h-1 bg-slate-900 rounded-b-md hidden lg:block" />
                        <LaptopMockup />
                        <PhoneMockup />
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -left-4 top-10 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg hidden lg:flex"
                        >
                            <FaRocket className="text-white text-xl" />
                        </motion.div>
                     </motion.div>
                  ) : (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-[400px] w-full flex items-center justify-center"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
                        <div className="glass-card p-8 rounded-3xl border border-white/10 w-full max-w-sm transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                           <div className="flex items-center space-x-4 mb-6">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                 <FaTrophy className="text-white text-xl" />
                              </div>
                              <div>
                                 <h4 className="text-white font-bold text-lg">Excellence</h4>
                                 <p className="text-gray-400 text-sm">Top Rated Agency</p>
                              </div>
                           </div>
                           <div className="space-y-3">
                              <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                              <div className="h-2 bg-white/10 rounded-full w-full"></div>
                              <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                           </div>
                           <div className="mt-6 flex justify-between items-center">
                              <div className="flex -space-x-2">
                                 <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900"></div>
                                 <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-900"></div>
                                 <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-900 flex items-center justify-center text-[10px] text-white">50+</div>
                              </div>
                              <div className="text-green-400 text-sm font-bold">98% Success</div>
                           </div>
                        </div>
                        <div className="absolute -right-4 top-10 glass-card p-4 rounded-2xl border border-white/10 animate-float">
                            <FaMobile className="text-3xl text-blue-400" />
                        </div>
                        <div className="absolute -left-4 bottom-20 glass-card p-4 rounded-2xl border border-white/10 animate-float" style={{ animationDelay: '1s' }}>
                            <FaCode className="text-3xl text-purple-400" />
                        </div>
                     </motion.div>
                  )}
               </div>
            </div>
          </div>
          
          {/* Navigation Indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, idx) => (
                 <button 
                    key={idx}
                    onClick={() => setCurrentHeroSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${currentHeroSlide === idx ? 'bg-blue-500 w-8' : 'bg-gray-600'}`}
                 />
              ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;