'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#68a063' },
        { name: 'Database', icon: FaDatabase, color: '#13aa52' },
        { name: 'Docker', icon: FaDocker, color: '#2496ed' },
        { name: 'AWS', icon: FaAws, color: '#ff9900' },
      ],
    },
    {
      category: 'Tools & Other',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#f1502f' },
        { name: 'REST APIs', icon: FaNode, color: '#68a063' },
        { name: 'GraphQL', icon: FaNode, color: '#e10098' },
        { name: 'CI/CD', icon: FaGitAlt, color: '#f1502f' },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">Skills & Technologies</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            I work with modern technologies and tools to build scalable, performant applications
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={item}
                className="glass-effect p-8 card-hover"
              >
                <h3 className="text-xl font-bold gradient-text mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <Icon size={24} style={{ color: skill.color }} />
                        <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency Bars */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold gradient-text mb-8">Proficiency</h3>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { name: 'Frontend Development', level: 95 },
                { name: 'Backend Development', level: 90 },
                { name: 'Full-Stack Architecture', level: 88 },
                { name: 'Cloud Deployment', level: 85 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-semibold">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
