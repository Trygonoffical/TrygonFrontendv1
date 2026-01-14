"use client"
import Button from '@/components/ui/Button';
import { SimpleInput as Input, SimpleTextarea as Textarea, SimpleSelect as Select } from '@/components/ui/Form';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from '@/lib/supabase';
import { motion } from 'framer-motion';

const QuickConnectForm = () => {
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContactInputChange = (e) => {
        setContactFormData({
          ...contactFormData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleContactSubmit = async (e) => {
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
            .from('contact_details')
            .insert([
              {
                full_name: contactFormData.name,
                email: contactFormData.email,
                service: contactFormData.service,
                description: contactFormData.message,
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
          setContactFormData({
            name: '',
            email: '',
            service: '',
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

      

  return (
    /* Contact Form */
    <motion.div 
    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
    }}
  >
    <h3 className="text-2xl font-semibold mb-6 text-center">Book Free Consultant</h3>
    <form onSubmit={handleContactSubmit} className="space-y-4">
      <Input 
        name="name"
        placeholder="Your Name" 
        value={contactFormData.name}
        onChange={handleContactInputChange}
        className="bg-white/20 border-white/30 text-white placeholder-white/80 focus:bg-white/30 focus:border-white/50" 
        required
      />
      <Input 
        name="email"
        type="email" 
        placeholder="Email Address" 
        value={contactFormData.email}
        onChange={handleContactInputChange}
        className="bg-white/20 border-white/30 text-white placeholder-white/80 focus:bg-white/30 focus:border-white/50" 
        required
      />
      <Select 
        name="service"
        placeholder="Select Service"
        value={contactFormData.service}
        onChange={handleContactInputChange}
        className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-white/50"
        options={[
          { value: 'web-dev', label: 'Website Development' },
          { value: 'mobile-dev', label: 'Mobile App Development' },
          { value: 'ecommerce', label: 'E-commerce Development' },
          { value: 'digital-marketing', label: 'Digital Marketing' },
          { value: 'devops', label: 'DevOps & Cloud' },
          { value: 'ui-ux', label: 'UI/UX Design' }
        ]}
        required
      />
      <Textarea 
        name="message"
        placeholder="Tell us about your project..." 
        value={contactFormData.message}
        onChange={handleContactInputChange}
        rows={3}
        className="bg-white/20 border-white/30 text-white placeholder-white/80 focus:bg-white/30 focus:border-white/50"
        required
      />
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button type="submit" className="w-full" loading={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>
    </form>
  </motion.div>
  )
}

export default QuickConnectForm