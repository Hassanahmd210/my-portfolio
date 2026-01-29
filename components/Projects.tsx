'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered SaaS Platform',
    description:
      'Enterprise SaaS platform with AI-driven analytics, real-time dashboard, and advanced reporting. Built with Next.js, TypeScript, and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'AI/ML', 'PostgreSQL', 'AWS'],
    image: '/images/project1.jpg',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Tool',
    description:
      'Live collaboration platform with WebSocket integration, real-time sync, and team workspaces. Similar to Figma/Notion.',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    image: '/images/project2.jpg',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Mobile E-Commerce App',
    description: 'Cross-platform mobile app with payment integration, push notifications, and AR product preview.',
    tags: ['React Native', 'Firebase', 'Stripe', 'AR'],
    image: '/images/project3.jpg',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'DevOps Dashboard',
    description: 'Comprehensive dashboard for monitoring cloud infrastructure, CI/CD pipelines, and system metrics.',
    tags: ['React', 'GraphQL', 'Docker', 'Kubernetes'],
    image: '/images/project4.jpg',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Blockchain Wallet',
    description: 'Secure crypto wallet with multi-chain support, DeFi integration, and advanced security features.',
    tags: ['Web3', 'Solidity', 'React', 'Ethers.js'],
    image: '/images/project5.jpg',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Data Visualization Platform',
    description: 'Interactive data visualization tool with 50+ chart types and real-time data streaming.',
    tags: ['D3.js', 'React', 'Python', 'WebSocket'],
    image: '/images/project6.jpg',
    github: '#',
    live: '#',
    featured: false,
  },
];

const FeaturedProject = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-blue-500/30 h-full"
  >
    {/* Gradient overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 pointer-events-none"
    />

    {/* Animated border */}
    <motion.div
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ backgroundSize: '200% 200%' }}
    />

    <div className="relative p-8 h-full flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">{project.title}</h3>
        <p className="text-gray-400 line-clamp-2">{project.description}</p>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mb-6"
      >
        {project.tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full hover:border-blue-500/60 transition-colors duration-300"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-4 mt-auto"
      >
        <motion.a
          href={project.github}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
        >
          <FaGithub size={20} />
          <span>Code</span>
        </motion.a>
        <motion.a
          href={project.live}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <FaExternalLinkAlt size={20} />
          <span>Live</span>
        </motion.a>
      </motion.div>
    </div>
  </motion.div>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-72 rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
    >
      {/* Background gradient animation */}
      <motion.div
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600"
      />

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
            {project.description}
          </p>
        </div>

        <div className="space-y-3">
          {/* Tags preview */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                className="px-2 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Arrow indicator */}
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-blue-400 text-sm font-semibold"
          >
            View Project <FaArrowRight size={14} />
          </motion.div>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 -z-10 blur-xl group-hover:opacity-30 transition-opacity duration-300"
      />
    </motion.div>
  );
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative projects built with cutting-edge technologies
          </p>
        </motion.div>

        {/* Featured projects grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </motion.div>

        {/* All projects grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regularProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
