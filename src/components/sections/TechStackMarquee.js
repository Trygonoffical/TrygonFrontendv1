'use client';

import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, 
  FaApple, FaAndroid, FaVuejs, FaAngular, FaFigma 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiFlutter, 
  SiMongodb, SiPostgresql, SiFirebase, SiKubernetes, 
  SiGraphql, SiSupabase 
} from 'react-icons/si';

const TechStackMarquee = () => {
  const technologies = [
    { icon: FaReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaPython, name: 'Python' },
    { icon: SiFlutter, name: 'Flutter' },
    { icon: FaAws, name: 'AWS' },
    { icon: FaDocker, name: 'Docker' },
    { icon: SiKubernetes, name: 'Kubernetes' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiFirebase, name: 'Firebase' },
    { icon: FaApple, name: 'iOS' },
    { icon: FaAndroid, name: 'Android' },
    { icon: SiSupabase, name: 'Supabase' },
    { icon: SiGraphql, name: 'GraphQL' },
    { icon: FaVuejs, name: 'Vue.js' },
    { icon: FaAngular, name: 'Angular' },
    { icon: FaFigma, name: 'Figma' },
  ];

  return (
    <section className="py-10 bg-[#030712] border-y border-white/5 overflow-hidden">
      <div className="relative w-full max-w-[100vw]">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>

        <div className="flex w-max animate-marquee">
          {/* First Copy */}
          <div className="flex space-x-12 px-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-2 group min-w-[80px]">
                <tech.icon className="w-10 h-10 text-gray-600 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-xs text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">{tech.name}</span>
              </div>
            ))}
          </div>
          
          {/* Second Copy for Infinite Loop */}
          <div className="flex space-x-12 px-6">
            {technologies.map((tech, index) => (
              <div key={`copy-${index}`} className="flex flex-col items-center justify-center space-y-2 group min-w-[80px]">
                <tech.icon className="w-10 h-10 text-gray-600 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-xs text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStackMarquee;
