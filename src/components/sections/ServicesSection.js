'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaChartLine,
  FaArrowRight,
  FaReact,
  FaAws,
  FaFigma,
  FaNodeJs,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFlutter, SiSwift, SiGooglecloud, SiGoogleanalytics } from 'react-icons/si';

// Mockup Components for the Visual Side
const WebMockup = () => (
  <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-700/50 p-4 shadow-2xl relative overflow-hidden flex flex-col">
    <div className="flex items-center gap-2 mb-4 border-b border-slate-700/50 pb-3">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <div className="ml-4 h-4 w-2/3 bg-slate-800 rounded-full" />
    </div>
    <div className="flex-1 flex gap-4">
      <div className="w-1/4 h-full bg-slate-800/30 rounded-lg animate-pulse" />
      <div className="flex-1 space-y-3">
        <div className="w-full h-32 bg-slate-800/50 rounded-lg" />
        <div className="flex gap-3">
          <div className="w-1/2 h-20 bg-slate-800/30 rounded-lg" />
          <div className="w-1/2 h-20 bg-slate-800/30 rounded-lg" />
        </div>
        <div className="w-full h-24 bg-slate-800/30 rounded-lg" />
      </div>
    </div>
    {/* Floating Badge */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="absolute bottom-6 right-6 bg-blue-600 px-4 py-2 rounded-lg shadow-lg text-white font-mono text-xs"
    >
      <span className="text-blue-200">status:</span> "deployed"
    </motion.div>
  </div>
);

const MobileMockup = () => (
  <div className="w-full h-full flex justify-center items-center p-4">
    <div className="w-[180px] sm:w-[200px] h-[340px] sm:h-[380px] bg-slate-950 border-4 border-slate-700 rounded-[2rem] shadow-2xl overflow-hidden relative">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl z-10" />
      
      {/* Screen Content */}
      <div className="w-full h-full bg-slate-900 pt-8 px-4 flex flex-col gap-3">
        <div className="w-full h-8 bg-slate-800 rounded-lg mb-2" />
        <div className="w-full aspect-video bg-indigo-900/30 rounded-xl" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-24 bg-slate-800/50 rounded-xl" />
          <div className="h-24 bg-slate-800/50 rounded-xl" />
        </div>
        <div className="mt-auto mb-4 w-full h-12 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
          Get Started
        </div>
      </div>
      
      {/* Floating Element */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-20 -right-8 bg-slate-800 p-3 rounded-lg shadow-xl border border-slate-700"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
          <div className="text-[10px] text-gray-300">
            <div className="font-bold">Payment Sent</div>
            <div>$450.00</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const DesignMockup = () => (
    <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-700/50 p-6 relative overflow-hidden">
        {/* Color Palette */}
        <div className="flex gap-2 mb-6">
            <div className="w-12 h-12 rounded-full bg-purple-500 shadow-lg shadow-purple-500/20" />
            <div className="w-12 h-12 rounded-full bg-pink-500 shadow-lg shadow-pink-500/20" />
            <div className="w-12 h-12 rounded-full bg-orange-500 shadow-lg shadow-orange-500/20" />
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center text-slate-500">+</div>
        </div>
        
        {/* Interface Elements */}
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <div className="text-xs text-slate-500 font-mono">BUTTON PRIMARY</div>
                <div className="h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg" />
            </div>
            <div className="space-y-2">
                <div className="text-xs text-slate-500 font-mono">CARD COMPONENT</div>
                <div className="h-24 bg-slate-800 rounded-lg border border-slate-700 shadow-sm" />
            </div>
        </div>

        {/* Cursor */}
        <motion.div 
            animate={{ x: [0, 50, 20, 0], y: [0, 20, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 pointer-events-none"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-md">
                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" fill="currentColor" stroke="white"/>
            </svg>
            <div className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-sm ml-4 mt-2 font-bold">You</div>
        </motion.div>
    </div>
);

const CloudMockup = () => (
    <div className="w-full h-full flex items-center justify-center relative">
        <div className="relative z-10 grid grid-cols-3 gap-4">
             {/* Server Icons */}
             {[1, 2, 3].map((i) => (
                 <motion.div 
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-20 bg-slate-800 rounded-lg border border-slate-600 flex flex-col items-center justify-center gap-2 shadow-xl"
                 >
                     <div className="w-12 h-1 bg-green-500/50 rounded-full" />
                     <div className="w-12 h-1 bg-green-500/50 rounded-full" />
                     <div className="w-12 h-1 bg-green-500/50 rounded-full" />
                 </motion.div>
             ))}
        </div>
        {/* Connections */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        </div>
        
         <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-4 right-10 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full flex items-center gap-2"
        >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-slate-300 font-mono">UPTIME: 99.99%</span>
        </motion.div>
    </div>
);

const GrowthMockup = () => (
    <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-700/50 p-6 flex flex-col justify-end relative overflow-hidden">
        {/* BG Grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Bars */}
        <div className="flex items-end justify-between gap-2 h-40 relative z-10 px-2">
            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-emerald-900 to-emerald-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                />
            ))}
        </div>

        {/* Floating Stat */}
        <div className="absolute top-6 left-6">
            <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Total Revenue</div>
            <div className="text-2xl font-bold text-white flex items-center gap-2">
                $124,500 
                <span className="text-emerald-400 text-sm bg-emerald-400/10 px-2 py-0.5 rounded-md flex items-center">
                    +24% <FaArrowRight className="w-3 h-3 ml-1 -rotate-45" />
                </span>
            </div>
        </div>
    </div>
);


const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('web');

  const services = {
    web: {
      id: 'web',
      title: 'Web Development',
      icon: FaCode,
      description: 'Building fast, scalable, and secure web applications tailored to your business needs.',
      tech: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
      mockup: WebMockup,
      color: 'blue'
    },
    mobile: {
      id: 'mobile',
      title: 'Mobile Apps',
      icon: FaMobileAlt,
      description: 'Native and cross-platform solutions that provide seamless user experiences.',
      tech: [
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Swift', icon: SiSwift },
        { name: 'React Native', icon: FaReact },
      ],
      mockup: MobileMockup,
      color: 'purple'
    },
    design: {
      id: 'design',
      title: 'UI/UX Design',
      icon: FaPaintBrush,
      description: 'User-centric design that converts. We craft beautiful, accessible interfaces.',
      tech: [
        { name: 'Figma', icon: FaFigma },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
      mockup: DesignMockup,
      color: 'pink'
    },
    cloud: {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: FaCloud,
      description: 'Scalable infrastructure you can trust. We automate deployment pipelines and manage your servers.',
      tech: [
        { name: 'AWS', icon: FaAws },
        { name: 'Google Cloud', icon: SiGooglecloud },
        { name: 'Docker', icon: FaCloud },
      ],
      mockup: CloudMockup,
      color: 'cyan'
    },
    growth: {
      id: 'growth',
      title: 'Growth & Marketing',
      icon: FaChartLine,
      description: 'Data-driven marketing strategies. We integrate advanced analytics to ensure your product reaches the right audience.',
      tech: [
        { name: 'Analytics', icon: SiGoogleanalytics },
        { name: 'SEO', icon: FaChartLine },
      ],
      mockup: GrowthMockup,
      color: 'emerald'
    }
  };

  const activeService = services[activeTab];

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trust to data sices oupatgsimny, pollinsert herauting covet of htat beem or hoeets
          </p>
        </div>

        {/* ================= MOBILE VIEW (Accordion) ================= */}
        <div className="lg:hidden flex flex-col gap-4">
          {Object.values(services).map((service) => {
            const isOpen = activeTab === service.id;
            return (
              <div key={service.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveTab(isOpen ? null : service.id)}
                  className={`w-full flex items-center justify-between p-6 transition-colors ${
                    isOpen ? 'bg-white/5 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <service.icon className={`w-5 h-5 ${isOpen ? `text-${service.color}-400` : ''}`} />
                    <span className="text-lg font-semibold">{service.title}</span>
                  </div>
                  {isOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5 bg-black/20"
                    >
                      <div className="p-6 space-y-6">
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {service.description}
                        </p>
                        
                        {/* Tech Stack Pills Mobile */}
                        <div className="flex flex-wrap gap-2">
                           {service.tech.map((tech) => (
                             <div key={tech.name} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs text-{service.color}-400">
                               <tech.icon className="w-3 h-3" />
                               {tech.name}
                             </div>
                           ))}
                        </div>

                        {/* Mobile Mockup View (Scaled Down) */}
                        <div className="relative h-[250px] w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/5">
                            <div className="absolute inset-0 flex items-center justify-center transform scale-75 origin-center">
                                <service.mockup />
                            </div>
                        </div>

                        <Link href="/services" className="block">
                           <button className={`w-full py-3 rounded-xl font-semibold bg-${service.color}-600/20 text-${service.color}-400 border border-${service.color}-600/50 flex items-center justify-center gap-2`}>
                             Learn More <FaArrowRight />
                           </button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>


        {/* ================= DESKTOP VIEW (Tabs) ================= */}
        <div className="hidden lg:flex flex-row gap-12">
            
            {/* Navigation (Left) */}
            <div className="w-1/4 flex flex-col gap-2">
                {Object.values(services).map((service) => (
                    <button
                        key={service.id}
                        onClick={() => setActiveTab(service.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                            activeTab === service.id 
                            ? 'bg-white text-slate-900 shadow-lg scale-[1.02]' 
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        <service.icon className={`w-5 h-5 ${activeTab === service.id ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-400'}`} />
                        <span className="font-semibold">{service.title}</span>
                    </button>
                ))}
            </div>

            {/* Content Area (Right) */}
            <div className="w-3/4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 grid grid-cols-2 gap-12 items-center min-h-[500px]"
                    >
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">{activeService.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {activeService.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                <div className="flex flex-wrap gap-3">
                                    {activeService.tech.map((tech) => (
                                        <div key={tech.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                                            <tech.icon className={`w-4 h-4 ${activeTab === activeService.id ? `text-${activeService.color}-400` : ''}`} />
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/services">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-colors"
                                >
                                    Learn More <FaArrowRight />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Visual Mockup Area */}
                        <div className="h-[400px] w-full relative">
                            {/* Decorative Background Blob */}
                            <div className={`absolute inset-0 bg-${activeService.color}-500/20 blur-[60px] rounded-full transform scale-75`} />
                            
                            {/* Mockup Container */}
                            <div className="relative z-10 w-full h-full">
                                <activeService.mockup />
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
