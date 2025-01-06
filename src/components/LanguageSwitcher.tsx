import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'ar';
  onToggle: () => void;
}

export default function LanguageSwitcher({ currentLang, onToggle }: LanguageSwitcherProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-8 right-8 z-50 flex gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="flex items-center gap-2 bg-[#2C3E50] text-white px-4 py-2 rounded-full shadow-lg"
      >
        <Globe className="h-5 w-5" />
        <span>{currentLang === 'en' ? 'عربي' : 'English'}</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="flex items-center gap-2 bg-white border-2 border-[#2C3E50] text-[#2C3E50] px-4 py-2 rounded-full shadow-lg"
      >
        <Languages className="h-5 w-5" />
        <span>{currentLang === 'en' ? 'النسخة العربية' : 'English Version'}</span>
      </motion.button>
    </motion.div>
  );
}