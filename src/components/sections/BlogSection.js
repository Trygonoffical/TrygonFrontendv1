'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createClient } from '@supabase/supabase-js';
import { FaArrowRight, FaEye, FaCalendarAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Form';
import { getFeaturedPosts } from '@/data/blogData';

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
}

// Only create Supabase client if both variables are present
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

const BlogSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setBlogPosts(getFeaturedPosts());
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubscribing(true);
    
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
        setIsSubscribing(false);
        return;
      }

      // Check if email already exists
      const { data: existingSubscriber, error: checkError } = await supabase
        .from('subscribe')
        .select('email')
        .eq('email', email)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Error checking existing subscriber:', checkError);
        toast.error('There was an error processing your subscription. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsSubscribing(false);
        return;
      }

      if (existingSubscriber) {
        toast.info('You are already subscribed to our newsletter!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsSubscribing(false);
        return;
      }

      // Save to Supabase
      const { data, error } = await supabase
        .from('subscribe')
        .insert([
          {
            email: email,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Error saving subscription:', error);
        toast.error('There was an error subscribing you. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsSubscribing(false);
        return;
      }

      console.log('Subscription saved successfully:', data);
      toast.success('Successfully subscribed to our newsletter! We\'ll keep you updated with the latest tech insights.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      setIsSubscribing(false);
      setEmail(''); // Reset form
      
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
      setIsSubscribing(false);
    }
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <FaEye className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="group">
                      Read More
                      <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" className="group">
              View All Articles
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Newsletter Signup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Latest <span className="text-yellow-300">Tech Insights</span>
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly updates on technology trends, development tips, and industry insights delivered to your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-white/70"
              required
            />
            <Button 
              type="submit" 
              className="whitespace-nowrap"
              loading={isSubscribing}
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
            </Button>
          </form>
        </motion.div> */}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default BlogSection;