'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/50 border-t border-blue-500/30 backdrop-blur-md">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text mb-3"
              >
                &lt;YourName /&gt;
              </motion.h3>
              <p className="text-gray-400">
                Crafting exceptional digital experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    className="cursor-pointer"
                  >
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: 'https://github.com/yourprofile', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
                  { icon: FaTwitter, href: 'https://twitter.com/yourprofile', label: 'Twitter' },
                  { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-blue-400 hover:text-cyan-300 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />

          {/* Bottom Section */}
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} Your Name. All rights reserved.</p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <FaArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
