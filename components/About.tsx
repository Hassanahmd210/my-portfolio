'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'GitHub Stars', value: '1K+' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-12 font-space">~$ whoami</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect p-8 card-hover">
                <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-7xl font-bold gradient-text">
                    👨‍💻
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg mb-6 leading-relaxed font-poppins">
                <span className="font-code text-cyan-400">const hassan =</span> {"{"}
                <span className="text-emerald-400">// caffeine-powered developer</span>
              </p>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed font-poppins">
                turning ideas into <span className="gradient-text font-bold">reality</span> with React, Node.js, and pure stubbornness. 
                I believe good code is like good coffee – strong, smooth, and keeps you awake at 3 AM. 
                Also, I promise my stack traces are less messy than my desk. 
                <span className="text-yellow-400">maybe</span> 😅
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn-primary mb-8 font-space"
              >
                {isExpanded ? '← collapse' : 'expand →'}
              </motion.button>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-300 space-y-3 mb-8 font-mono text-sm"
                >
                  <p>🧠 brain.skills = ["React", "Node.js", "TypeScript", "AWS"]</p>
                  <p>🎵 spotify.current = "lo-fi beats & debugging"</p>
                  <p>🍕 productivity_fuel = coffee + pizza + memes</p>
                  <p>🎯 Currently: Building innovative solutions and mentoring junior developers</p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 text-center card-hover"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
