'use client';

import { useEffect, useRef, useState } from 'react';

interface CircularGalleryProps {
  words: string[];
  textColor?: string;
  borderRadius?: number;
  scrollEase?: number;
  bend?: number;
}

export default function CircularGallery({
  words,
  textColor = '#60a5fa',
  borderRadius = 0.05,
  scrollEase = 0.02,
  bend = 3,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cycle through words
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '200px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px',
      }}
    >
      {/* Circular arrangement of words */}
      <div
        style={{
          position: 'relative',
          width: '300px',
          height: '300px',
        }}
      >
        {words.map((word, index) => {
          const angle = (index / words.length) * Math.PI * 2;
          const radius = 100;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          // Calculate distance from current index
          const distance =
            Math.min(
              Math.abs(index - currentIndex),
              words.length - Math.abs(index - currentIndex)
            ) / words.length;
          
          const isActive = index === currentIndex;
          const opacity = isActive ? 1 : Math.max(0.1, 1 - distance * 2);
          const scale = isActive ? 1.2 : 0.8 + distance * 0.4;

          return (
            <div
              key={word}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fontSize: isActive ? '2rem' : '1.2rem',
                fontWeight: 'bold',
                color: textColor,
                whiteSpace: 'nowrap',
                textShadow: isActive 
                  ? `0 0 20px ${textColor}80` 
                  : 'none',
                filter: isActive ? 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))' : 'none',
              }}
            >
              {word}
            </div>
          );
        })}
      </div>

      {/* Center dot indicator */}
      <div
        style={{
          position: 'absolute',
          width: '8px',
          height: '8px',
          backgroundColor: textColor,
          borderRadius: '50%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 15px ${textColor}80`,
          zIndex: 10,
        }}
      />

      {/* Progress indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
        }}
      >
        {words.map((_, index) => (
          <div
            key={index}
            style={{
              width: index === currentIndex ? '12px' : '6px',
              height: '6px',
              backgroundColor:
                index === currentIndex
                  ? textColor
                  : `${textColor}40`,
              borderRadius: '3px',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
