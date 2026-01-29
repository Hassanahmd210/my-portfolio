'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface Mouse {
  x: number;
  y: number;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mouse, setMouse] = useState<Mouse>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas animation for code patterns
  useEffect(() => {
    if (!canvasRef.current || !mounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;

      const gridSize = 100;
      for (let x = 0; x < canvas.width; x += gridSize) {
        const offset = Math.sin(time * 0.001 + x * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        const offset = Math.sin(time * 0.001 + y * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
      }

      // Draw interactive particles that follow mouse
      const mouseX = mouse.x;
      const mouseY = mouse.y;

      particles.forEach((particle) => {
        const px = (particle.x / 100) * canvas.width;
        const py = (particle.y / 100) * canvas.height;

        // Calculate distance to mouse
        const dx = mouseX - px;
        const dy = mouseY - py;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Draw particle
        const brightness = Math.max(0, 1 - distance / 300);
        ctx.fillStyle = `rgba(96, 165, 250, ${particle.opacity + brightness * 0.5})`;
        ctx.beginPath();
        ctx.arc(px, py, particle.size + brightness * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
          if (i <= particle.id) continue;
          const otherParticle = particles[i];
          const opx = (otherParticle.x / 100) * canvas.width;
          const opy = (otherParticle.y / 100) * canvas.height;

          const pdx = opx - px;
          const pdy = opy - py;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 150) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.2 * (1 - pdist / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(opx, opy);
            ctx.stroke();
          }
        }
      });

      // Draw pulsing circle around mouse (interactive)
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(time * 0.005) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 50 + Math.sin(time * 0.003) * 20, 0, Math.PI * 2);
      ctx.stroke();

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particles, mouse, mounted]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Canvas for interactive animations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
      />

      {/* Gradient orbs with complex animations */}
      <motion.div
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, 50, 100, 0, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -100, 0, 50, 0],
          y: [0, -50, -100, 0, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, 50, 100, 0, 0],
          y: [0, 100, 0, -50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 2 }}
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
      />

      {/* Aurora-like wave effect */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/5 to-cyan-600/0 opacity-30"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Code-like floating text patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {['React', 'TypeScript', 'Next.js', 'Tailwind', 'WebGL', 'API', 'Cloud', 'DevOps'].map((text, idx) => (
          <motion.div
            key={text}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0, 0.15, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 15 + idx,
              repeat: Infinity,
              ease: 'linear',
              delay: idx * 0.5,
            }}
            className="absolute text-sm font-mono text-blue-400"
            style={{
              left: `${10 + idx * 10}%`,
              top: `${20 + idx * 8}%`,
            }}
          >
            {'<' + text + ' />'}
          </motion.div>
        ))}
      </div>

      {/* Pulsing tech orbs */}
      {[0, 1, 2].map((idx) => (
        <motion.div
          key={`orb-${idx}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: idx * 0.5,
          }}
          className="absolute w-32 h-32 rounded-full border border-blue-400/30 backdrop-blur-sm"
          style={{
            left: `${20 + idx * 30}%`,
            top: `${30 + idx * 20}%`,
            boxShadow: `0 0 ${30 + idx * 10}px rgba(59, 130, 246, ${0.3 + idx * 0.1})`,
          }}
        />
      ))}

      {/* Animated grid lines (diagonal) */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.svg>

      {/* Glowing cursor trail effect on mouse move */}
      <motion.div
        animate={{
          x: mouse.x,
          y: mouse.y,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="absolute w-8 h-8 rounded-full border-2 border-blue-400/50 pointer-events-none"
      />

      {/* Radial gradient spotlight effect */}
      <motion.div
        animate={{
          x: mouse.x - 100,
          y: mouse.y - 100,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute w-64 h-64 rounded-full opacity-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
}
