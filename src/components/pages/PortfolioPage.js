'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaFilter,
  FaArrowRight,
  FaStar,
  FaCalendar,
  FaUser
} from 'react-icons/fa';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Image from 'next/image';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'website', name: 'Websites', count: 8 },
    { id: 'mobile', name: 'Mobile Apps', count: 2 },
    { id: 'ecommerce', name: 'E-commerce', count: 2 },
    { id: 'marketing', name: 'Digital Marketing', count: 3 },
    { id: 'ai', name: 'AI & Automation', count: 2 },
    // { id: 'startup', name: 'Startup Solutions', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Homofix Company',
      categories: ['website', 'ai', 'marketing'],
      description: 'Complete Home Cleaning Services with AI-powered recommendations and Automation.',
      image: '/assets/projects/feature/homofix.png',
      technologies: ["Next.js", "AWS", "postgres", "Python"],
      client: 'Homofix Technologies Private Limited',
      duration: '3 months',
      year: '2024',
      featured: true,
      testimonial: 'Exceptional work! Our new website increased our lead generation by 150%.',
      liveUrl: 'https://www.homofixcompany.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Herbal Power India',
      categories: ['ecommerce', 'website', 'marketing'],
      description: 'Complete online grocery platform with real-time inventory and delivery tracking.',
      image: '/assets/projects/feature/herbalpower.png',
      technologies: ['Next.js', 'Python', 'VPS'],
      client: 'Herbal Power Marketing Private Limited',
      duration: '3 months',
      year: '2024',
      featured: true,
      testimonial: 'The platform handles 1000+ orders daily seamlessly.',
      liveUrl: 'https://herbalpowerindia.com/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Just Start',
      categories: ['website', 'ai'],
      description: 'Just Start is a platform that helps startups grow and succeed.',
      image: '/assets/projects/feature/juststart.png',
      technologies: ['Laravel', 'MySQL'],
      client: 'Just Start',
      duration: '3 weeks',
      year: '2024',
      featured: true,
      testimonial: 'Just Start is a platform that helps startups grow and succeed.',
      liveUrl: 'https://juststart.co.in',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Creative Agency Hub',
      categories: ['website', 'marketing'],
      description: 'Stunning portfolio website with smooth animations and interactive galleries.',
      image: '/assets/projects/feature/digitalhub.png',
      technologies: ['Wordpress', 'php', 'MySQL'],
      client: 'W3 Marketers',
      duration: '1 week',
      year: '2024',
      featured: false,
      testimonial: 'W3 Marketers is a digital marketing agency that helps businesses grow and succeed.',
      liveUrl: 'https://w3marketers.com/',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Beautify Professionals',
      categories: ['website', 'marketing'],
      description: 'Beautify Professionals is a platform that helps beauticians and stylists grow and succeed.',
      image: '/assets/projects/feature/silkenauraprofessionals.png',
      technologies: ['Angular', 'Laravel', 'MySQL'],
      client: 'Beautify Professionals',
      duration: '1 week',
      year: '2025',
      featured: false,
      testimonial: 'Beautify Professionals is a platform that helps beauticians and stylists grow and succeed.',
      liveUrl: 'https://silkenauraprofessionals.com/',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Homfix Company Expert App',
      categories: ['mobile', 'ai'],
      description: 'Complete Home Cleaning Services with AI-powered recommendations and Automation.',
      image: '/assets/projects/feature/homofixexpert.png',
      technologies: ['Flutter', 'Firebase', 'GraphQL', 'Python'],
      client: 'Homfix Company',
      duration: '1 month',
      year: '2024',
      featured: false,
      testimonial: 'Increased our team productivity by 40%.',
      liveUrl: 'https://play.google.com/store/search?q=homofix+company+expert&c=apps&hl=en_IN',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Physiotherapist and Chiropractor',
      categories: ['website', 'marketing'],
      description: 'Physiotherapist and Chiropractor is a platform that helps physiotherapists and chiropractors grow and succeed.',
      image: '/assets/projects/feature/idealspineposture.png',
      technologies: ['Wordpress', 'php', 'MySQL'],
      client: 'Physiotherapist and Chiropractor',
      duration: '1 week',
      year: '2024',
      featured: false,
      testimonial: 'Physiotherapist and Chiropractor is a platform that helps physiotherapists and chiropractors grow and succeed.',
      liveUrl: 'https://idealspineposture.com/',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Beauty Salon in Edmonton',
      categories: ['website', 'marketing'],
      description: 'Beauty Salon in Edmonton is a platform that helps beauty salons grow and succeed.',
      image: '/assets/projects/feature/salon.png',
      technologies: ['Wordpress', 'php', 'MySQL'],
      client: 'Beauty Salon in Edmonton',
      duration: '1 week',
      year: '2024',
      featured: false,
      testimonial: 'Beauty Salon in Edmonton is a platform that helps beauty salons grow and succeed.',
      liveUrl: 'https://www.mystylesalon22.com/',
      githubUrl: '#'
    },
    {
      id: 9,
      title: 'HAIR RELAXER TREATMENT',
      categories: ['website', 'marketing'],
      description: 'Velorine Professional is a platform that helps beauticians and stylists grow and succeed.',
      image: '/assets/projects/feature/beauty.png',
      technologies: ['Wordpress', 'php', 'MySQL'],
      client: 'Velorine Professional',
      duration: '1 week',
      year: '2025',
      featured: false,
      testimonial: 'Beautify Professionals is a platform that helps beauticians and stylists grow and succeed.',
      liveUrl: 'https://velorineprofessional.com/',
      githubUrl: '#'
    },
    {
      id: 10,
      title: 'Homfix Company Customer App',
      categories: ['mobile', 'ecommerce'],
      description: 'Complete Home Cleaning Services with AI-powered recommendations and Automation.',
      image: '/assets/projects/feature/homofixcustomerapp.png',
      technologies: ['Flutter', 'Firebase', 'GraphQL', 'Python'],
      client: 'Homfix Company',
      duration: '1 month',
      year: '2024',
      featured: false,
      testimonial: 'Increased our team productivity by 40%.',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.homofix.homo_fix&hl=en_IN',
      githubUrl: '#'
    },
    {
      id: 11,
      title: 'Nurturing Serenity Educations',
      categories: ['website'],
      description: 'Nurturing Serenity Educations dedicated to fostering the holistic development of individuals, starting from a young age.',
      image: '/assets/projects/feature/dr.png',
      technologies: ['Wordpress', 'php', 'MySQL'],
      client: 'Nurturing Serenity Educations',
      duration: '1 week',
      year: '2025',
      featured: false,
      testimonial: 'Nurturing Serenity Educations is a platform that helps individuals grow and succeed.',
      liveUrl: 'https://nurturingserenityeducations.com/',
      githubUrl: '#'
    },
    {
      id: 12,
      title: 'Tour and Travel',
      categories: ['website'],
      description: 'Tour and Travel is a platform that helps individuals grow and succeed.',
      image: '/assets/projects/feature/travel.png',
      technologies: ['Laravel', 'php', 'MySQL'],
      client: 'Tour and Travel',
      duration: '1 week',
      year: '2025',
      featured: false,
      testimonial: 'Tour and Travel is a platform that helps individuals grow and succeed.',
      liveUrl: 'https://traveloserv.com/',
      githubUrl: '#'
    }
  ];

  // Calculate category counts dynamically
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return projects.length;
    return projects.filter(project => project.categories.includes(categoryId)).length;
  };

  // Update categories with dynamic counts
  const categoriesWithCounts = categories.map(cat => ({
    ...cat,
    count: getCategoryCount(cat.id)
  }));

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory));

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-blue-400">Portfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore our collection of successful projects and see how we&apos;ve helped 
              businesses transform their digital presence and achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcase of our most impactful projects that demonstrate our expertise 
              and commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer overflow-hidden h-full">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Link href={project.liveUrl} target="_blank" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </Link>
                        <a href={project.githubUrl} target="_blank" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <FaGithub className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex flex-wrap gap-1 mb-1">
                        {project.categories.map((cat, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-2 py-1 rounded-full capitalize font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <FaUser className="w-3 h-3 mr-1" />
                          {project.client}
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-start">
                          <FaStar className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700 italic">&quot;{project.testimonial}&quot;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              All <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Browse through our complete portfolio and filter by project type to see our expertise in action.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categoriesWithCounts.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="group cursor-pointer overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap gap-1 mb-1">
                        {project.categories.map((cat, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-2 py-1 rounded-full capitalize font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                      <span>{project.client}</span>
                      <span>{project.duration}</span>
                    </div>
                    
                    <Link href={project.liveUrl} target="_blank" className="flex items-center text-blue-600 font-medium text-sm pt-2">
                      View Details <FaArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Start your project today and become our next featured case study.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:border-blue-600 hover:bg-blue-600">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;