import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'en' | 'ar';
  onToggle: () => void;
}

export default function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <button 
      onClick={onToggle}
      className="flex items-center space-x-2 text-[#2C3E50] hover:text-[#34495E]"
    >
      <Globe className="h-5 w-5" />
      <span>{currentLang === 'en' ? 'عربي' : 'English'}</span>
    </button>
  );
}