'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TechStackMarquee from '@/components/sections/TechStackMarquee';
import ServicesSection from '@/components/sections/ServicesSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import AppShowcase from '@/components/sections/AppShowcase';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ProjectShowcaseSection from '@/components/sections/ProjectShowcaseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []); 

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712]">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Loading experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <HeroSection />
      <TechStackMarquee />
      <ServicesSection />
      <HowWeWorkSection />
      <AppShowcase />
      <AchievementsSection />
      <ProjectShowcaseSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default HomePage;