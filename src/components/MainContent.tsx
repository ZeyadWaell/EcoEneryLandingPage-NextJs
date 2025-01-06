import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import Benefits from './sections/Benefits';
import HowItWorks from './sections/HowItWorks';
import Stats from './sections/Stats';
import ImageSlider from './ImageSlider';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import LanguageSelector from './LanguageSelector';
import ParallaxBackground from './ParallaxBackground';
import type { LanguageCode } from '../types/language';

interface MainContentProps {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}

export function MainContent({ lang, setLang }: MainContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      
      <div className="relative z-10">
        <Navbar lang={lang} onLanguageChange={() => {}} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Hero lang={lang} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Stats lang={lang} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
        </motion.div>

        <Benefits lang={lang} />
        <HowItWorks lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </div>

      <LanguageSelector 
        currentLang={lang} 
        onLanguageChange={setLang}
      />
    </motion.div>
  );
}