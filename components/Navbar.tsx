'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👤' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '💼' },
    { name: 'Contact', href: '#contact', icon: '✉️' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourprofile', label: 'GitHub', delay: 0.1 },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn', delay: 0.2 },
    { icon: FaTwitter, href: 'https://twitter.com/yourprofile', label: 'Twitter', delay: 0.3 },
  ];

  // Handle scroll visibility and active section
  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);

      // Detect active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        type: 'spring',
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.2,
      y: -4,
      boxShadow: '0 0 15px rgba(96, 165, 250, 0.6)',
    },
  };

  return (
    <>
      {/* Floating Bottom Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
className="fixed bottom-6 left-[32%] -translate-x-1/2 z-50"      >
        {/* Main Navigation Bar */}
        <motion.div
          className="relative"
          layout
        >
          <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-secondary/60 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/20"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)',
            }}
          >
            {/* Navigation Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              {links.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    custom={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, type: 'spring', stiffness: 100 } }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group flex flex-col items-center justify-center"
                  >
                    {/* Icon for mobile, text for desktop */}
                    <motion.div
                      className={`
                        relative px-3 py-2 rounded-lg font-poppins font-semibold text-sm transition-all duration-300
                        hidden sm:block
                        ${isActive ? 'text-cyan-300' : 'text-gray-300 hover:text-blue-400'}
                      `}
                      layout
                    >
                      {link.name}
                      
                      {/* Animated active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 rounded-lg bg-blue-500/20 border border-cyan-400/50"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.9 }}
                        />
                      )}

                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-md"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Icon for mobile only */}
                    <motion.div
                      className={`
                        sm:hidden px-2 py-2 rounded-lg text-lg
                        ${isActive ? 'text-cyan-300' : 'text-gray-300'}
                      `}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.div>

                    {/* Animated underline */}
                    {/* <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    /> */}
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <motion.div
              className="hidden sm:block h-6 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mx-2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3 }}
            />

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map(({ icon: Icon, href, label, delay }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={delay}
                  variants={socialIconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap={{ scale: 0.85 }}
                  className="p-2 rounded-lg text-blue-400 hover:text-cyan-300 transition-colors duration-300 relative group"
                  aria-label={label}
                >
                  <Icon size={18} />
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-900/90 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: -5 }}
                  >
                    {label}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Glow background effect */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Mobile indicator - show only on small screens */}
        <motion.div
          className="flex sm:hidden justify-center mt-2 gap-1 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {links.map((link) => (
            <motion.div
              key={link.name}
              className={`h-1 rounded-full transition-all ${
                activeSection === link.href.slice(1) ? 'w-3 bg-cyan-400' : 'w-1.5 bg-blue-500/50'
              }`}
            />
          ))}
        </motion.div>
      </motion.nav>

      {/* Spacer for bottom padding on mobile */}
      <div className="h-20 sm:h-0" />
    </>
  );
}
