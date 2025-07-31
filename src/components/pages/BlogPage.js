'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaArrowRight,
  FaSearch,
  FaTag,
  FaEye
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Form';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: AI Integration",
      excerpt: "Discover how artificial intelligence is revolutionizing web development and what it means for businesses in 2024. From automated code generation to intelligent user experiences.",
      content: "Full blog post content here...",
      author: "Alex Thompson",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      slug: "future-web-development-ai-integration",
      image: "/api/placeholder/600/300",
      tags: ["AI", "Web Development", "Future Tech", "Automation"],
      views: 1250
    },
    {
      id: 2,
      title: "Mobile-First Design: Best Practices for 2024",
      excerpt: "Learn the essential principles of mobile-first design and how it can boost your conversion rates significantly. Complete guide with practical examples.",
      content: "Full blog post content here...",
      author: "Sarah Wilson",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Design",
      slug: "mobile-first-design-best-practices-2024",
      image: "/api/placeholder/600/300",
      tags: ["Mobile Design", "UX", "Conversion", "Best Practices"],
      views: 980
    },
    {
      id: 3,
      title: "E-commerce Security: Protecting Your Customers",
      excerpt: "Essential security measures every e-commerce business should implement to protect customer data and build trust. A comprehensive security checklist.",
      content: "Full blog post content here...",
      author: "Mike Roberts",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Security",
      slug: "ecommerce-security-protecting-customers",
      image: "/api/placeholder/600/300",
      tags: ["Security", "E-commerce", "Privacy", "Trust"],
      views: 1420
    },
    {
      id: 4,
      title: "React 18 New Features: What Developers Need to Know",
      excerpt: "Explore the latest features in React 18 including concurrent rendering, automatic batching, and Suspense improvements that will change how you build apps.",
      content: "Full blog post content here...",
      author: "Emily Chen",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Development",
      slug: "react-18-new-features-developers-guide",
      image: "/api/placeholder/600/300",
      tags: ["React", "JavaScript", "Frontend", "Development"],
      views: 2100
    },
    {
      id: 5,
      title: "Cloud Migration Strategy: A Complete Guide",
      excerpt: "Step-by-step guide to successfully migrate your applications to the cloud. Learn about different cloud providers, costs, and migration strategies.",
      content: "Full blog post content here...",
      author: "David Kumar",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud",
      slug: "cloud-migration-strategy-complete-guide",
      image: "/api/placeholder/600/300",
      tags: ["Cloud", "Migration", "AWS", "DevOps"],
      views: 1680
    },
    {
      id: 6,
      title: "SEO Trends 2024: What's Changing in Search",
      excerpt: "Stay ahead of the curve with the latest SEO trends and algorithm updates. Learn how AI and user experience are reshaping search rankings.",
      content: "Full blog post content here...",
      author: "Lisa Johnson",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Marketing",
      slug: "seo-trends-2024-search-algorithm-changes",
      image: "/api/placeholder/600/300",
      tags: ["SEO", "Digital Marketing", "Search", "Trends"],
      views: 1890
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Design', label: 'Design' },
    { value: 'Development', label: 'Development' },
    { value: 'Security', label: 'Security' },
    { value: 'Cloud', label: 'Cloud' },
    { value: 'Marketing', label: 'Marketing' }
  ];

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Latest <span className="text-yellow-400">Insights</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, development tips, and digital insights from our expert team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-4 text-gray-600">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Post Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm text-gray-600 flex items-center">
                      <FaEye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaCalendarAlt className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <FaClock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex items-center">
                          <FaTag className="w-2 h-2 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover mr-3"
                        />
                        <span className="text-sm text-gray-600">By {post.author}</span>
                      </div>
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
          ) : (
            /* No Results */
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button size="lg" className="group">
                Load More Articles
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with Latest <span className="text-blue-400">Tech Insights</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get weekly updates on technology trends, development tips, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
              />
              <Button className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;