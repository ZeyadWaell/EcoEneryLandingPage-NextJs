import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Languages, ChevronDown } from 'lucide-react';
import { languages } from '../utils/languages';
import type { LanguageCode } from '../types/language';

interface LanguageSelectorProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export default function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#2C3E50] text-white px-4 py-2 rounded-full shadow-lg"
        >
          <Globe className="h-5 w-5" />
          <span>{currentLanguage?.nativeName}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl max-h-80 overflow-y-auto w-48"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    onLanguageChange(language.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center justify-between
                    ${currentLang === language.code ? 'bg-gray-50 text-[#2C3E50] font-semibold' : 'text-gray-700'}`}
                >
                  <span>{language.nativeName}</span>
                  <span className="text-sm text-gray-500">{language.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}