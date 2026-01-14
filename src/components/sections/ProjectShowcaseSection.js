'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const ProjectShowcaseSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Homofix Company",
      category: "Home Services Platform",
      image: "/assets/projects/feature/homofix.png",
      description: "Complete Home Cleaning Services dashboard with AI-powered recommendations and automated scheduling.",
      tech: ["Next.js", "AWS", "PostgreSQL", "Python"],
      results: "100% Sales Growth",
      link: "https://www.homofixcompany.com/"
    },
    {
      id: 2,
      title: "Herbal Power India",
      category: "E-commerce & MLM",
      image: "/assets/projects/feature/herbalpower.png",
      description: "A comprehensive health supplement business platform with multi-level marketing capabilities.",
      tech: ["Next.js", "Python", "VPS"],
      results: "1M+ Downloads",
      link: "https://herbalpowerindia.com/"
    },
    {
      id: 3,
      title: "Just Start",
      category: "Startup Ecosystem",
      image: "/assets/projects/feature/juststart.png",
      description: "A digital platform connecting startups with hospitals and healthcare providers for growth.",
      tech: ["Laravel", "MySQL"],
      results: "50+ Hospitals",
      link: "https://juststart.co.in"
    },
    {
      id: 4,
      title: "Beautify Professionals",
      category: "Beauty E-commerce",
      image: "/assets/projects/feature/silkenauraprofessionals.png",
      description: "Exclusive platform for beauticians and stylists to source professional-grade products.",
      tech: ["Angular", "Laravel", "MySQL"],
      results: "10+ Product Lines",
      link: "https://silkenauraprofessionals.com/"
    }
  ];

  // Auto-scroll for projects
  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isClient, projects.length]);

  if (!isClient) return null;

  return (
    <section className="py-24 bg-[#050b14] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've transformed businesses through innovative digital solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-gray-900/50 border border-white/5 backdrop-blur-sm">
            <motion.div
              className="flex"
              animate={{ x: `-${currentProject * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 mb-6 uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-8">
                         <div>
                            <div className="text-3xl font-bold text-green-400 mb-1">{project.results}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Key Impact</div>
                         </div>
                        <Link href={project.link} target="_blank">
                          <Button className="group bg-white text-gray-900 hover:bg-gray-200 border-none">
                            View Live
                            <FaExternalLinkAlt className="ml-2 w-3 h-3 group-hover:scale-110 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden group/image"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-blue-500 w-12' : 'bg-gray-700 w-6 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;