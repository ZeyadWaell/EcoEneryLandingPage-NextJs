import React from 'react';
import { Wrench } from 'lucide-react';
import Button from './ui/Button';
import LanguageToggle from './LanguageToggle';
import { translations } from '../utils/i18n';

interface NavbarProps {
  lang: 'en' | 'ar';
  onLanguageChange: () => void;
}

export default function Navbar({ lang, onLanguageChange }: NavbarProps) {
  const t = translations[lang].nav;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-16 items-center ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-[#2C3E50]" />
            <span className="text-xl font-bold text-[#2C3E50]">EcoEnergy</span>
          </div>
          
          <div className={`hidden md:flex items-center space-x-8 ${dir === 'rtl' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <a href="#features" className="text-gray-600 hover:text-[#2C3E50]">{t.features}</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#2C3E50]">{t.benefits}</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#2C3E50]">{t.howItWorks}</a>
            <LanguageToggle currentLang={lang} onToggle={onLanguageChange} />
            <Button variant="primary">{t.getStarted}</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}