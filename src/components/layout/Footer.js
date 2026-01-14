'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'E-commerce Development', href: '/services/ecommerce-development' },
    { name: 'DevOps & Cloud', href: '/services/devops-cloud' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Software Consulting', href: '/services/software-consulting' },
    { name: 'AMC Services', href: '/services/amc' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-black/80 text-white backdrop-blur-md border-t border-white/5 relative z-10" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/assets/logo/logo3.png" alt="Trygon Technologies" width={150} height={150} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              One of the top digital marketing companies in Delhi, delivering innovative 
              UX/UI design, mobile app development, website development, SEO, and digital 
              marketing services to help businesses establish their digital presence.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/Trygon.in" target="_blank">
                <FaFacebook className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors" />
              </Link>
              <Link href="https://twitter.com/trygon_web" target="_blank">
                <FaTwitter className="w-5 h-5 text-gray-500 hover:text-blue-400 cursor-pointer transition-colors" />
              </Link>
              <Link href="https://in.linkedin.com/company/trygon-technologies" target="_blank">
                <FaLinkedin className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/trygon_in/" target="_blank">
                <FaInstagram className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <HiLocationMarker className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  WP-501 D, Second floor, Shiv Market, Wazirpur, Wazirpur Village, Ashok Vihar, Delhi, 110052
                </span>
              </div>
              <Link href="tel:+918851285655" className="flex items-center group">
                <HiPhone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">+91 (885) 128-5655</span>
              </Link>
              <Link href="tel:+917065009097" className="flex items-center group">
                <HiPhone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">+91 (706) 500-9097</span>
              </Link>
              <Link href="mailto:info@trygon.in" className="flex items-center group">
                <HiMail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">info@trygon.in</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Trygon Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;