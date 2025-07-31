'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaEye, 
  FaBullseye, 
  FaHeart, 
  FaUsers, 
  FaAward, 
  FaRocket,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const AboutPage = () => {
  const values = [
    {
      icon: FaEye,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
    },
    {
      icon: FaBullseye,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed client expectations every time.'
    },
    {
      icon: FaHeart,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through dedicated service.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients and within our team to achieve outstanding results.'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-Founder',
      bio: 'Visionary leader with 10+ years in tech innovation and business development.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack architect specializing in scalable solutions and emerging technologies.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Designer',
      bio: 'Creative director with expertise in UI/UX design and brand development.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Emily Johnson',
      role: 'Project Manager',
      bio: 'Agile expert ensuring smooth project delivery and client satisfaction.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      bio: 'Backend specialist with expertise in cloud architecture and DevOps.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Director',
      bio: 'Digital marketing strategist driving growth through innovative campaigns.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started in December 2019 with a vision to help businesses establish their digital presence.'
    },
    {
      year: '2020',
      title: 'Digital Marketing Focus',
      description: 'Specialized in comprehensive digital marketing solutions for small and medium businesses.'
    },
    {
      year: '2021',
      title: 'Government Projects',
      description: 'Successfully delivered our first government projects, establishing credibility in the public sector.'
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded globally, serving international clients and building a diverse portfolio.'
    },
    {
      year: '2023',
      title: 'Certified Excellence',
      description: 'Team achieved certifications in digital marketing and became recognized experts in Delhi.'
    },
    {
      year: '2024',
      title: 'Milestone Achievement',
      description: 'Reached 1000+ domestic projects with an 89% success ratio, establishing market leadership.'
    }
  ];

  const achievements = [
    { number: '1000+', label: 'Domestic Projects' },
    { number: '50+', label: 'International Projects' },
    { number: '10+', label: 'Government Projects' },
    { number: '89%', label: 'Success Ratio' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Trygon Technologies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              One of the top digital marketing companies in Delhi. We're a small but passionate team 
              of certified experts helping businesses establish their digital presence since December 2019.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaBullseye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To find simple, effective, cost-efficient marketing strategies and techniques to help 
                  small-scale businesses establish their digital presence. We help new business 
                  entrepreneurs by compiling and analyzing their websites with timely, reasonable solutions.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <FaEye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To establish ourselves as a leading digital marketing agency globally. We aim to be 
                  the trusted partner for businesses worldwide, providing UX/UI design, mobile app 
                  development, website development, SEO, SMO, PPC, and social media marketing services.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              design, and business strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center group">
                  <div className="relative mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href={member.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to an industry leader, here's how we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100 font-medium text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help you achieve your business goals with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className='bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 px-6 py-3 text-base flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2' size="lg">
                Start Your Project <FaRocket className="ml-2" />
              </Link>
              <Link href="/portfolio" className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 px-6 py-3 text-base flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2' variant="outline" size="lg">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;