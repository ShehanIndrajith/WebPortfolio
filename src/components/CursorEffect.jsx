import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 25,
    stiffness: 700,
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Particles state for trail effect
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastAddedTime, setLastAddedTime] = useState(0);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Add particles with throttling
  useEffect(() => {
    const now = Date.now();

    if (now - lastAddedTime > 50 && isVisible) {
      // Add a particle every 50ms
      setParticles((prevParticles) => [
        ...prevParticles.slice(-15),
        { x: mousePosition.x, y: mousePosition.y, id: now },
      ]);
      setLastAddedTime(now);
    }

    // Clean up old particles
    const cleanupInterval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.filter((p) => Date.now() - p.id < 1000)
      );
    }, 500);

    return () => clearInterval(cleanupInterval);
  }, [mousePosition, lastAddedTime, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Main cursor */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mix-blend-screen opacity-70 blur-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Smaller inner cursor */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-white"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trail particles */}
      {particles.map((particle, i) => {
        const size = Math.max(3, 15 * (1 - i / particles.length));
        const opacity = 0.8 * (1 - i / particles.length);
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mix-blend-screen"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity,
              width: size,
              height: size,
            }}
            animate={{
              opacity: 0,
              width: size * 0.5,
              height: size * 0.5,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            style={{
              x: particle.x,
              y: particle.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        );
      })}

      {/* Glow effect */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}
