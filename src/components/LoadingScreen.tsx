import React from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-[#2C3E50] to-[#1A242F] flex items-center justify-center">
      {/* Animated Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        {/* Animated Logo with a Glow */}
        <motion.img
          src="/../../images/test.png"
          alt="Logo"
          className="w-28 h-28 mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        {/* Vibrant Loading Text */}
        <motion.div
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
        </motion.div>
      </motion.div>
    </div>
  );
}
