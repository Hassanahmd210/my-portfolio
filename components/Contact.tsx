'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheck, FaTimes, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactLinks = [
    { icon: FaEnvelope, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com', color: 'from-blue-500 to-cyan-500' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile', color: 'from-blue-600 to-blue-400' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/yourprofile', href: 'https://github.com/yourprofile', color: 'from-gray-600 to-gray-400' },
    { icon: FaTwitter, label: 'Twitter', value: '@yourhandle', href: 'https://twitter.com/yourhandle', color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactLinks.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 block"
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-r ${contact.color}`}
                  />

                  <div className="relative flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${contact.color}`}
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        {contact.label}
                      </p>
                      <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                        {contact.value}
                      </p>
                    </div>

                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-blue-500/30 p-8"
          >
            {/* Animated gradient border */}
            <motion.div
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              style={{ backgroundSize: '200% 200%' }}
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Your Name <span className="text-blue-400">*</span>
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/20 focus:shadow-lg focus:shadow-blue-500/50 transition-all"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Email Address <span className="text-blue-400">*</span>
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/20 focus:shadow-lg focus:shadow-blue-500/50 transition-all"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Your Message <span className="text-blue-400">*</span>
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/20 focus:shadow-lg focus:shadow-blue-500/50 transition-all resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block"
                    >
                      ⚙️
                    </motion.span>
                  ) : submitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <FaCheck size={18} /> Message Sent!
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.div>

              {/* Status message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-semibold"
                >
                  <FaCheck size={16} /> Thank you! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
