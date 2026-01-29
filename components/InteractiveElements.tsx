'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
}

export default function InteractiveElements() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const particleIdRef = useRef(0);
  const textIdRef = useRef(0);

  const colors = ['#60a5fa', '#06b6d4', '#a855f7', '#ec4899', '#f59e0b', '#10b981'];

  // Click particle effect
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('[data-no-particles]')) return;

      const clickX = e.clientX;
      const clickY = e.clientY;
      const clickedText = Math.random() > 0.7 ? ['Great!', 'Nice!', 'Cool!', '✨', '🎉', 'Awesome!'][Math.floor(Math.random() * 6)] : null;

      // Create particles
      const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
        id: particleIdRef.current++,
        x: clickX,
        y: clickY,
        vx: (Math.cos((i / 12) * Math.PI * 2) * 6),
        vy: (Math.sin((i / 12) * Math.PI * 2) * 6),
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      // Add floating text
      if (clickedText) {
        setFloatingTexts((prev) => [
          ...prev,
          {
            id: textIdRef.current++,
            x: clickX,
            y: clickY,
            text: clickedText,
          },
        ]);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.2, // gravity
            life: p.life - 0.03,
          }))
          .filter((p) => p.life > 0)
      );

      setFloatingTexts((prev) =>
        prev
          .map((t) => ({
            ...t,
            y: t.y - 2,
          }))
          .filter((_, i) => i === 0 ? true : floatingTexts[i]?.y > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [floatingTexts]);

  // Render particles using canvas for performance
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(render);
    };

    render();
  }, [particles]);

  return (
    <>
      {/* Particle Canvas */}
      <canvas
        id="particle-canvas"
        className="fixed inset-0 pointer-events-none z-20"
      />

      {/* Floating Texts */}
      {floatingTexts.map((text) => (
        <motion.div
          key={text.id}
          initial={{ opacity: 1, y: text.y }}
          animate={{ opacity: 0, y: text.y - 50 }}
          transition={{ duration: 1 }}
          className="fixed pointer-events-none text-xl font-bold gradient-text"
          style={{ left: text.x, top: text.y, zIndex: 25 }}
        >
          {text.text}
        </motion.div>
      ))}

      {/* Floating Resume Button */}
      <FloatingResumeButton />
    </>
  );
}

// Floating Resume Button
function FloatingResumeButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      className="fixed bottom-8 right-8 z-30 cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      data-no-particles
    >
      {/* Pulsing outer ring */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full border-2 border-blue-400/50"
      />

      {/* Resume Button */}
      <motion.a
        href="https://drive.google.com/your-resume-link" // Replace with your actual Drive link
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-2xl font-bold text-white shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-400/75 transition-shadow"
      >
        📄
      </motion.a>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-20 right-0 bg-slate-900/95 border border-emerald-400 rounded-lg px-4 py-2 text-sm text-white whitespace-nowrap backdrop-blur-xl"
        >
          Download My Resume
        </motion.div>
      )}
    </motion.div>
  );
}
