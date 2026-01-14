'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTrophy, FaUsers, FaRocket, FaGlobe } from 'react-icons/fa';

const AchievementsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const achievements = [
    { icon: FaTrophy, number: "50+", label: "Awards Won", color: "text-yellow-400" },
    { icon: FaUsers, number: "500+", label: "Happy Clients", color: "text-blue-400" },
    { icon: FaRocket, number: "1000+", label: "Projects Delivered", color: "text-green-400" },
    { icon: FaGlobe, number: "25+", label: "Countries Served", color: "text-purple-400" }
  ];

  if (!isClient) return null;

  return (
    <section className="py-20 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#030712] z-[-2]"></div>
        <div className="absolute inset-0 bg-blue-900/10 z-[-1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl text-center group cursor-pointer border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="mb-4">
                <achievement.icon className={`w-10 h-10 mx-auto ${achievement.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
              </div>
              <motion.div
                className="text-4xl lg:text-5xl font-bold mb-2 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {achievement.number}
              </motion.div>
              <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;