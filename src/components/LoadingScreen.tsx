import React from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#2C3E50] flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="text-white text-4xl font-bold gradient-text flex flex-col items-center"
      >
        <img src="/../../images/test.png" alt="Logo" className="mb-4 w-72 h-72" /> {/* Adjust the size as needed */}
      </motion.div>
    </div>
  );
}
