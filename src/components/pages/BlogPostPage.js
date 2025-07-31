'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaArrowLeft,
  FaArrowRight,
  FaShareAlt,
  FaEye,
  FaTag,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaHeart
} from 'react-icons/fa';
import Button from '@/components/ui/Button';

const BlogPostPage = ({ slug }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  // Sample blog post data - in a real app, you'd fetch this based on the slug
  const blogPost = {
    id: 1,
    title: "The Future of Web Development: AI Integration",
    content: `
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Artificial Intelligence is revolutionizing the way we approach web development. From automated code generation to intelligent user experiences, AI is becoming an integral part of modern web development workflows.
        </p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What's Changing in Web Development?</h2>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          The integration of AI in web development is not just a trend—it's a fundamental shift that's reshaping how we build, deploy, and maintain web applications. Here are the key areas where AI is making the biggest impact:
        </p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Automated Code Generation</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          AI-powered tools like GitHub Copilot and ChatGPT are helping developers write code faster and more efficiently. These tools can generate entire functions, suggest optimizations, and even help debug complex issues.
        </p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Intelligent User Interfaces</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Modern web applications are incorporating AI to create more personalized and intuitive user experiences. From chatbots to recommendation engines, AI is making websites smarter and more responsive to user needs.
        </p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Performance Optimization</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          AI algorithms can analyze user behavior patterns and automatically optimize website performance, load times, and resource allocation to provide the best possible user experience.
        </p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Business Impact</h2>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          For businesses, AI integration in web development means faster time-to-market, reduced development costs, and more sophisticated user experiences that drive engagement and conversions.
        </p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 rounded-r-lg">
          <p class="text-gray-700 italic text-lg">
            "AI is not replacing developers—it's empowering them to build better, faster, and more innovative web solutions."
          </p>
        </blockquote>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started with AI in Web Development</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          If you're looking to integrate AI into your web development process, here are some practical steps to get started:
        </p>
        
        <ul class="list-disc pl-6 mb-6 text-gray-700">
          <li class="mb-2">Experiment with AI-powered development tools like GitHub Copilot</li>
          <li class="mb-2">Integrate chatbots or virtual assistants into your websites</li>
          <li class="mb-2">Use AI for automated testing and quality assurance</li>
          <li class="mb-2">Implement AI-driven analytics for better user insights</li>
          <li class="mb-2">Consider AI-powered content management systems</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          The future of web development will be increasingly AI-driven. As these technologies continue to evolve, we can expect even more sophisticated tools and capabilities that will transform how we build and interact with web applications.
        </p>
        
        <p class="text-gray-700 leading-relaxed">
          At Trygon, we're already incorporating AI technologies into our development processes to deliver cutting-edge solutions for our clients. Contact us to learn how AI can transform your web development projects.
        </p>
      </div>
    `,
    author: "Alex Thompson",
    authorImage: "/api/placeholder/60/60",
    authorBio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies and AI integration.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    slug: "future-web-development-ai-integration",
    image: "/api/placeholder/1200/600",
    tags: ["AI", "Web Development", "Future Tech", "Automation"],
    views: 1250,
    likes: 89
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: "React 18 New Features: What Developers Need to Know",
      excerpt: "Explore the latest features in React 18 including concurrent rendering...",
      slug: "react-18-new-features-developers-guide",
      image: "/api/placeholder/300/200",
      category: "Development",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Mobile-First Design: Best Practices for 2024",
      excerpt: "Learn the essential principles of mobile-first design...",
      slug: "mobile-first-design-best-practices-2024",
      image: "/api/placeholder/300/200",
      category: "Design",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Cloud Migration Strategy: A Complete Guide",
      excerpt: "Step-by-step guide to successfully migrate your applications...",
      slug: "cloud-migration-strategy-complete-guide",
      image: "/api/placeholder/300/200",
      category: "Cloud",
      readTime: "10 min read"
    }
  ];

  useEffect(() => {
    setLikes(blogPost.likes);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${blogPost.title}`;

  return (
    <div className="min-h-screen bg-white ">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Article Meta Overlay */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold mt-4 mb-4">
                {blogPost.title}
              </h1>
              <div className="flex items-center text-sm opacity-90">
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                <span className="mx-3">•</span>
                <FaClock className="w-4 h-4 mr-2" />
                <span>{blogPost.readTime}</span>
                <span className="mx-3">•</span>
                <FaEye className="w-4 h-4 mr-2" />
                <span>{blogPost.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
                {blogPost.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                    <FaTag className="w-3 h-3 mr-2" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-8">
                <div className="flex items-start">
                  <img
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {blogPost.author}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {blogPost.authorBio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Like & Share */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Enjoying this article?</h3>
                  
                  {/* Like Button */}
                  <button
                    onClick={handleLike}
                    className={`w-full flex items-center justify-center py-3 px-4 rounded-lg border-2 transition-all duration-200 mb-4 ${
                      isLiked 
                        ? 'border-red-500 bg-red-50 text-red-600' 
                        : 'border-gray-300 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <FaHeart className={`w-5 h-5 mr-2 ${isLiked ? 'text-red-500' : 'text-gray-400'}`} />
                    {likes} Likes
                  </button>

                  {/* Share Buttons */}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 mb-3">Share this article:</p>
                    
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <FaTwitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                    
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-2 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <FaFacebook className="w-4 h-4 mr-2" />
                      Facebook
                    </a>
                    
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-2 px-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                    >
                      <FaLinkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Table of Contents could go here */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-blue-600 hover:text-blue-700">What's Changing</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-700">Business Impact</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-700">Getting Started</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-700">Looking Ahead</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our expert team help you implement the latest technologies in your web development projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;