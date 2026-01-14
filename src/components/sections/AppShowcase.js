'use client';

import { motion } from 'framer-motion';
import { FaMobile, FaApple, FaGooglePlay, FaArrowRight } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const AppShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-800 rounded-full px-4 py-1.5 text-blue-400 text-sm font-medium"
            >
              <FaMobile className="w-4 h-4" />
              <span>Mobile-First Approach</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Your Business in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Every Pocket</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              We craft native and cross-platform mobile apps that deliver seamless performance and exceptional user experiences. From iOS to Android, we build apps that users love.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaApple className="text-xl text-white" />
                 </div>
                 <div>
                    <div className="text-sm text-gray-400">Native</div>
                    <div className="text-white font-semibold">iOS Apps</div>
                 </div>
              </div>

               <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaGooglePlay className="text-xl text-white" />
                 </div>
                 <div>
                    <div className="text-sm text-gray-400">Native</div>
                    <div className="text-white font-semibold">Android</div>
                 </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
            >
                <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-4 text-lg">
                    Build Your App
                    <FaArrowRight className="ml-2" />
                </Button>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="lg:w-1/2 relative z-10">
            <div className="relative w-full max-w-[400px] mx-auto">
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-10 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden md:block"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium text-sm">99.9% Crash Free</span>
                    </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-5 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden md:block"
                >
                     <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">User Rating</span>
                        <div className="flex items-center text-yellow-400 space-x-1">
                            <span>★★★★★</span>
                            <span className="text-white font-bold ml-1">5.0</span>
                        </div>
                    </div>
                </motion.div>

                {/* Phone Frame */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                   whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="relative z-10 bg-gray-900 border-[8px] border-gray-800 rounded-[3rem] overflow-hidden shadow-2xl h-[700px]"
                >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-2xl z-20"></div>

                    {/* Screen Content */}
                    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-gray-900 to-black relative">
                        {/* App UI Placeholder */}
                        <div className="p-6 pt-16 space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                                <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 bg-white/10 rounded w-1/2"></div>
                                <div className="h-8 bg-blue-500/80 rounded w-3/4"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-32 bg-white/5 rounded-2xl"></div>
                                <div className="h-32 bg-white/5 rounded-2xl"></div>
                            </div>
                             <div className="h-40 bg-purple-500/20 rounded-2xl border border-purple-500/30 p-4">
                                 <div className="h-full flex items-center justify-center text-purple-300 font-mono text-xs">
                                     High Performance
                                     Chart Component
                                 </div>
                             </div>
                             <div className="space-y-3">
                                 <div className="h-16 bg-white/5 rounded-xl"></div>
                                 <div className="h-16 bg-white/5 rounded-xl"></div>
                                 <div className="h-16 bg-white/5 rounded-xl"></div>
                             </div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-[3rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
