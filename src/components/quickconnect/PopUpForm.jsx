"use client"
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import { SimpleInput as Input, SimpleTextarea as Textarea, SimpleSelect as Select } from '@/components/ui/Form';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
// import {Button as Button2} from '@/components/ui/Button';
const PopUpForm = ({ webbtn = false  , btntxt = 'Book Free Consultant'}) => {
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isDialogOpen, setIsDialogOpen] = useState(false);
      const [showButton, setShowButton] = useState(false);

    // Scroll detection effect
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Show button when user scrolls down more than 300px
        setShowButton(scrollTop > 300);
      };

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openDialog = () => {
      setIsDialogOpen(true);
    };

    const closeDialog = () => {
      setIsDialogOpen(false);
      // Reset form when closing
      setContactFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    };

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
            .from('quotation_requests')
            .insert([
              {
                fullName: contactFormData.name,
                email: contactFormData.email,
                service: contactFormData.service,
                projectDescription: contactFormData.message,
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
          
          // Close dialog and reset form data
          closeDialog();
          
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
    <>
      {/* Book Free Consultant Button - Only show when scrolled and webbtn is false */}
      <AnimatePresence>
        {showButton && !webbtn && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={openDialog}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                Book Free Consultant
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {webbtn && (
      <Button size="lg" variant="secondary" className="w-full sm:w-auto"  onClick={openDialog}>
          {btntxt} <FaArrowRight className="ml-2" />
      </Button>
      )}
      {/* Dialog with Form */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title="Book Free Consultant"
        className="max-h-[90vh] overflow-y-auto"
      >
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
      </Dialog>

      {/* Toast Container */}
      <ToastContainer />
    </>
  )
}

export default PopUpForm