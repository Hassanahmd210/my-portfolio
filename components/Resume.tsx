'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Building scalable web applications with React, Node.js, and cloud technologies.',
      skills: ['React', 'Next.js', 'Node.js', 'AWS', 'MongoDB'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions',
      period: '2021 - 2022',
      description: 'Developed responsive web interfaces and optimized user experiences.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'REST APIs', 'GraphQL'] },
    { category: 'Cloud & Tools', items: ['AWS', 'Docker', 'Git', 'CI/CD', 'MongoDB'] },
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: 'University Name',
      year: '2020',
    },
  ];

  return (
    <section id="resume" className="min-h-screen py-20 px-4 bg-gradient-to-b from-transparent to-blue-500/5">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive overview of my professional experience, skills, and education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Download & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Download Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                <FaDownload className="group-hover:scale-110 transition-transform" />
                Download Resume
              </motion.a>

              {/* Quick Summary */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Summary</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Passionate full-stack developer with expertise in modern web technologies. Creating impactful digital solutions that drive business value.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>📧 email@example.com</p>
                  <p>📍 City, Country</p>
                  <p>🔗 LinkedIn • GitHub</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 space-y-12"
          >
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                <span>Experience</span>
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group bg-slate-800/30 hover:bg-slate-800/60 border border-blue-500/20 hover:border-blue-500/50 rounded-lg p-6 transition-all cursor-default"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-slate-900/50 px-3 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                <span>Skills</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skillGroup, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-slate-800/30 border border-purple-500/20 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-purple-400 mb-4">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill}
                          className="text-gray-300 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-slate-800/30 border border-emerald-500/20 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-emerald-400">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400">{edu.school}</p>
                      </div>
                      <span className="text-sm text-gray-500">{edu.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-8 text-center"
            >
              <p className="text-gray-300 mb-4">
                Want to discuss opportunities or collaborate?
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get In Touch
                <FaExternalLinkAlt />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
