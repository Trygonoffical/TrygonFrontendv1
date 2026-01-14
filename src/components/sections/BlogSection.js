'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight, FaEye, FaCalendarAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { getFeaturedPosts } from '@/data/blogData';

const BlogSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setIsClient(true);
    setBlogPosts(getFeaturedPosts());
  }, []);

  if (!isClient) return null;

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Insights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trends, strategies, and success stories from the digital world.
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
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEye className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                   {post.tags.slice(0, 3).map((tag, i) => (
                     <span key={i} className="text-[10px] text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700">
                       #{tag}
                     </span>
                   ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                     <span className="text-sm text-gray-400 font-medium">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                     <span className="text-blue-400 hover:text-white transition-colors text-sm font-semibold flex items-center">
                        Read More <FaArrowRight className="ml-2 w-3 h-3" />
                     </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 px-8 py-3 rounded-full">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
};

export default BlogSection;