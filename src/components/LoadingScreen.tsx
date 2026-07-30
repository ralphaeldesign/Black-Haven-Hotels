import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown } from 'lucide-react';

interface LoadingScreenProps {
  onFinished?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinished) onFinished();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-white select-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-gradient-to-b from-[#181610] to-[#0A0A0A] shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <Crown className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-t border-b border-[#D4AF37]"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif-luxury tracking-[0.2em] text-amber-100 uppercase mb-2">
              Black Haven
            </h1>
            <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-light">
              Hotel & Suites • Mayfair
            </p>

            <div className="w-48 h-[2px] bg-neutral-800 rounded-full mt-8 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>
            
            <p className="text-neutral-500 text-xs mt-4 tracking-widest font-light">
              CURATING YOUR SANCTUARY...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
