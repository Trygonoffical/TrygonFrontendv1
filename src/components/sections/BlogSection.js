'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaEye, FaCalendarAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const BlogSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: AI Integration",
      excerpt: "Discover how artificial intelligence is revolutionizing web development and what it means for businesses in 2024.",
      author: "Alex Thompson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Web Development", "Future Tech"]
    },
    {
      id: 2,
      title: "Mobile-First Design: Best Practices for 2024",
      excerpt: "Learn the essential principles of mobile-first design and how it can boost your conversion rates significantly.",
      author: "Sarah Wilson",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Design",
      image: "/api/placeholder/400/250",
      tags: ["Mobile Design", "UX", "Conversion"]
    },
    {
      id: 3,
      title: "E-commerce Security: Protecting Your Customers",
      excerpt: "Essential security measures every e-commerce business should implement to protect customer data and build trust.",
      author: "Mike Roberts",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Security",
      image: "/api/placeholder/400/250",
      tags: ["Security", "E-commerce", "Privacy"]
    }
  ];

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
            Latest <span className="text-blue-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our experts
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
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <Link href={`/blog/${post.id}`}>
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
      </div>
    </section>
  );
};

export default BlogSection;