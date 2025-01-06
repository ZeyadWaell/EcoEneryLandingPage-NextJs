import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/sections/Benefits';
import HowItWorks from './components/sections/HowItWorks';
import Stats from './components/sections/Stats';
import ImageSlider from './components/ImageSlider';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import LanguageSelector from './components/LanguageSelector';
import Background from './components/Background';
import type { LanguageCode } from './types/language';
import { languages } from './utils/languages';
import { LoadingScreen } from './components/LoadingScreen';
import { MainContent } from './components/MainContent';

export default function App() {
  const [lang, setLang] = useState<LanguageCode>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const language = languages.find(l => l.code === lang);
    if (language) {
      document.documentElement.dir = language.dir;
      document.documentElement.lang = language.code;
    }
    setTimeout(() => setIsLoading(false), 1500);
  }, [lang]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <MainContent lang={lang} setLang={setLang} />
      )}
    </AnimatePresence>
  );
}