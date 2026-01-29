'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import CircularGallery from './CircularGallery';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const words = ['Developer', 'Designer', 'Creator', 'Innovator', 'Student'];
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -100, 0] }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
          animate={{ y: [`${particle.y}%`, `${particle.y - 100}%`], opacity: [0, 1, 0] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity }}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Enhanced avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="inline-block mb-6"
          >
            <div className="relative w-32 h-32 mb-8 mx-auto">
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1"
              >
                <div className="w-full h-full bg-slate-900 rounded-full" />
              </motion.div>

              {/* Inner circle */}
              <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-28 h-28 bg-slate-900 rounded-full flex items-center justify-center text-3xl font-bold gradient-text">
                  YN
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-space"
          >
            yo, it's <span className="gradient-text">hassan</span>
          </motion.h1>

          {/* Subtitle with sarcasm */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 font-mono mb-4"
          >
            {"// turning coffee into code since 2020"}
          </motion.p>

          {/* Circular Gallery for Words */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 text-center mb-4 font-poppins">
              I'm a committed
            </p>
            <CircularGallery 
              words={words} 
              textColor="#60a5fa"
              bend={3}
              scrollEase={0.02}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-poppins"
          >
            Building things that actually <span className="text-emerald-400 font-code">work()</span> • debugging my life one commit at a time • probably overthinking this right now 🤖
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary font-space font-bold"
            >
              see my projects →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary font-space font-bold"
            >
              let's chat /dev/null →
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className="text-blue-400 animate-pulse" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
