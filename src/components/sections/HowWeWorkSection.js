'use client';

import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaPencilRuler, 
  FaCode, 
  FaRocket, 
  FaChartLine, 
  FaArrowRight 
} from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Discover',
    icon: FaSearch,
    description: 'We dive deep into your requirements, market gaps, and user needs to define a clear roadmap.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20'
  },
  {
    id: 2,
    title: 'Design',
    icon: FaPencilRuler,
    description: 'Our team architects scalable systems and crafts intuitive, high-fidelity UI/UX prototypes.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20'
  },
  {
    id: 3,
    title: 'Build',
    icon: FaCode,
    description: 'We write clean, efficient code using modern stacks, ensuring performance and maintainability.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20'
  },
  {
    id: 4,
    title: 'Launch',
    icon: FaRocket,
    description: 'Rigorous testing and seamless deployment pipelines (CI/CD) bring your product to life securely.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20'
  },
  {
    id: 5,
    title: 'Scale',
    icon: FaChartLine,
    description: 'We monitor analytics, optimize performance, and iterate to help your product grow.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  }
];

const HowWeWorkSection = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A systematic approach to building world-class digital products.
          </p>
        </div>

        <div className="relative">
          {/* Scroll Container for Mobile */}
          <div className="flex lg:grid lg:grid-cols-5 gap-6 lg:gap-4 overflow-x-auto pb-8 lg:pb-0 scrollbar-hide snap-x">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] lg:min-w-0 snap-center flex-1"
              >
                <div className={`
                    h-full p-6 rounded-2xl border bg-white/[0.02] backdrop-blur-sm
                    hover:bg-white/[0.04] transition-all duration-300 group
                    flex flex-col relative overflow-hidden
                    ${step.border}
                `}>
                  
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    0{step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${step.bg} ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Mobile Arrow (Visual cue) */}
                  {index !== steps.length - 1 && (
                     <div className="lg:hidden absolute bottom-6 right-6 text-white/20">
                        <FaArrowRight className="w-4 h-4" />
                     </div>
                  )}
                  
                  {/* Desktop Connector Line Overlay - only decoration */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10 z-0"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
