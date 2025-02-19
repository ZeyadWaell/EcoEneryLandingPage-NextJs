import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}


export function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      }}
      className="glass-effect rounded-xl p-6 transform transition-all duration-300"
    >
      {children}
    </motion.div>
  );
}
