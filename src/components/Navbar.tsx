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
    <nav className="fixed w-full bg-blue text-white backdrop-blur-lg z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-16 items-center ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src="/../../images/test.png" alt="Logo" className="w-12 h-12" />
            <span className="text-xl font-bold text-white">EcoEnergy</span>
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:flex items-center space-x-8 ${dir === 'rtl' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <a href="#testimonialss" className="text-gray-300 hover:text-white transition duration-300">
              {t.features}
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition duration-300">
              {t.benefits}
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition duration-300">
              {t.howItWorks}
            </a>

          </div>
          <Button
  href="#contact"
  variant="primary"
>
  {t.getStarted}
</Button>   
        </div>
      </div>
    </nav>
  );
}
