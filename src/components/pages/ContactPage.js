'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Input, Textarea, Select } from '@/components/ui/Form';
import supabase from '@/lib/supabase';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Check if Supabase is properly configured
      if (!supabase) {
        console.error('Supabase is not properly configured. Please check your environment variables.');
        toast.error('Configuration error. Please contact support.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsSubmitting(false);
        return;
      }

      // Save to Supabase with correct column names
      const { data, error } = await supabase
        .from('quotation_requests')
        .insert([
          {
            fullName: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            companyName: formData.company,
            service: formData.service,
            projectBudget: formData.budget,
            projectDescription: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Error saving form data:', error);
        toast.error('There was an error submitting your form. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsSubmitting(false);
        return;
      }

      console.log('Form data saved successfully:', data);
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      setIsSubmitting(false);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('There was an unexpected error. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone 1',
      content: '+91 (885) 128-5655',
      description: 'Call us during business hours'
    },
    {
      icon: FaPhone,
      title: 'Phone 2',
      content: '+91 (706) 500-9097',
      description: 'Call us during business hours'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@trygon.in',
      description: 'Send us an email anytime'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'WP-501 D, Second floor, Shiv Market, Wazirpur, Wazirpur Village, Ashok Vihar, Delhi, 110052',
      description: 'Visit our office'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
      description: 'Weekend support available'
    }
  ];

  const services = [
    { value: 'website-development', label: 'Website Development' },
    { value: 'mobile-app-development', label: 'Mobile App Development' },
    { value: 'ecommerce-development', label: 'E-commerce Development' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'devops-cloud', label: 'DevOps & Cloud Services' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'software-consulting', label: 'Software Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most websites take 4-8 weeks, while mobile apps typically require 8-16 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance for all our projects.'
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing systems and can help modernize or enhance your current technology stack.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We typically work with milestone-based payments, with 50% upfront and the remainder distributed across project milestones.'
    }
  ];



  return (
    <div className="min-h-screen bg-gray-50">
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
              Let&apos;s Build Something <span className="text-blue-400">Amazing</span> Together
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our expert team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Project</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed proposal.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="Email Address *"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <Input
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label="Service Needed *"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      options={services}
                      required
                    />
                    <Select
                      label="Project Budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      options={budgetRanges}
                    />
                  </div>

                  <Textarea
                    label="Project Description *"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    loading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help you succeed. Reach out through any of these channels 
                  and let&apos;s discuss how we can bring your vision to life.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <info.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/Trygon.in" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/trygon_web" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://in.linkedin.com/company/trygon-technologies" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/trygon_in/" className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in Delhi, India. Contact us at +91 8851285655 to book your FREE consultation call today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.929763186026!2d77.1710780755551!3d28.691747575632395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d048eefffffff%3A0x43844f05939fd14!2sTRYGON%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1753931270104!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? Here are answers to some of the most common questions we receive.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactPage;