'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectShowcaseSection from '@/components/sections/ProjectShowcaseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  // Fix hydration by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []); 

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading amazing experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsSection />
      <ServicesSection />
      <ProjectShowcaseSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default HomePage;