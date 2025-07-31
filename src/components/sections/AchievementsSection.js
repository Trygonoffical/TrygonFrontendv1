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
    { icon: FaTrophy, number: "50+", label: "Awards Won", color: "text-yellow-500" },
    { icon: FaUsers, number: "500+", label: "Happy Clients", color: "text-blue-500" },
    { icon: FaRocket, number: "1000+", label: "Projects Delivered", color: "text-green-500" },
    { icon: FaGlobe, number: "25+", label: "Countries Served", color: "text-purple-500" }
  ];

  if (!isClient) return null;

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-blue-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for our excellence and commitment to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <div className="mb-4">
                <achievement.icon className={`w-12 h-12 mx-auto ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <motion.div
                className="text-4xl lg:text-5xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {achievement.number}
              </motion.div>
              <div className="text-gray-300 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;