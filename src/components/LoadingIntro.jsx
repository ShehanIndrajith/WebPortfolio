import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LoadingIntro({ onComplete }) {
  const [startProgress, setStartProgress] = useState(false);

  // Wait 2 seconds before starting progress bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartProgress(true);
    }, 2000); // 2s delay before progress starts
    return () => clearTimeout(timer);
  }, []);

  // Complete loading after progress bar finishes (3s)
  useEffect(() => {
    if (startProgress) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000); // Progress bar duration
      return () => clearTimeout(timer);
    }
  }, [startProgress, onComplete]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { when: 'afterChildren', staggerChildren: 0.05, staggerDirection: -1, duration: 0.8 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const progressVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%', transition: { duration: 3, ease: 'easeInOut' } },
  };

  // Text splits
  const nameText = 'Shehan Indrajith';
  const titleText = 'Developer Portfolio';
  const nameLetters = nameText.split('');
  const titleLetters = titleText.split('');

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative">
        {/* Animated circles background */}
        <motion.div className="absolute -z-10" initial={{ scale: 0 }} animate={{ scale: 1.5 }} transition={{ duration: 2, ease: 'easeOut' }}>
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl" />
        </motion.div>

        <motion.div className="absolute -z-10 -left-10 -top-10" initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}>
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl" />
        </motion.div>

        {/* Name animation */}
        <div className="mb-4 overflow-hidden">
          <motion.div className="flex justify-center">
            {nameLetters.map((letter, index) => (
              <motion.span key={`name-${index}`} className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500" variants={letterVariants}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Title animation */}
        <div className="overflow-hidden">
          <motion.div className="flex justify-center">
            {titleLetters.map((letter, index) => (
              <motion.span key={`title-${index}`} className="text-xl md:text-2xl font-light text-slate-300" variants={letterVariants}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Code brackets animation */}
        <div className="flex justify-center mt-8 space-x-16">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="text-3xl md:text-4xl text-purple-400 font-mono">
            {'</>'}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: [0, 360] }} transition={{ delay: 1, duration: 0.8, type: 'spring' }} className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="text-3xl md:text-4xl text-pink-400 font-mono">
            {'{}'}
          </motion.div>
        </div>

        {/* Loading bar */}
        <div className="mt-12 w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          {startProgress && (
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              variants={progressVariants}
              initial="hidden"
              animate="visible"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
