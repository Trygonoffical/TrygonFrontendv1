'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
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
      category: "Home Cleaning Services",
      image: "/assets/projects/feature/homofix.png",
      description: "Complete Home Cleaning Services with AI-powered recommendations and Automation",
      tech: ["Next.js", "AWS", "postgres", "Python"],
      results: "100% Sales Growth",
      link: "https://www.homofixcompany.com/"
    },
    {
      id: 2,
      title: "Herbal Power India",
      category: "E-commerce and MLM Web App",
      image: "/assets/projects/feature/herbalpower.png",
      description: "Herbal Power Marketing Private Limited exists beyond being a standard health supplement business",
      tech: ["Next.js", "Python", "VPS"],
      results: "1M+ Downloads",
      link: "https://herbalpowerindia.com/"
    },
    {
      id: 3,
      title: "Just Start",
      category: "Startup Ecosystem Site",
      image: "/assets/projects/feature/juststart.png",
      description: "Just Start is a platform that helps startups grow and succeed",
      tech: ["Laravel", "MySQL"],
      results: "50+ Hospitals",
      link: "https://juststart.co.in"
    },
    {
      id: 4,
      title: "Beautify Professionals",
      category: "E-commerce Web App",
      image: "/assets/projects/feature/silkenauraprofessionals.png",
      description: "Beautify Professionals is a platform that helps beauticians and stylists grow and succeed",
      tech: ["Angular", "Laravel", "MySQL"],
      results: "10+ Products",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest work and see how we&apos;ve helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentProject * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center p-8">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-8">
                        <div className="text-2xl font-bold text-green-600">
                          {project.results}
                        </div>
                        <Link href={project.link} target="_blank">
                          <Button className="group">
                            View Project
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <FaPlay className="text-white w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-blue-600 w-8' : 'bg-gray-300'
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