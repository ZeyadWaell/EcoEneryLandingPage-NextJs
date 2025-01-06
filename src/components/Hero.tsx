import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Droplet, Battery } from 'lucide-react';
import Button from './ui/Button';
import { translations } from '../utils/i18n';

interface HeroProps {
  lang: 'en' | 'ar';
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className="relative pt-24 pb-16 overflow-hidden" dir={dir}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] to-[#2C3E50] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button variant="primary" className="animate-float">
              {t.cta.primary}
            </Button>
            <Button variant="secondary" className="animate-float" style={{ animationDelay: '0.2s' }}>
              {t.cta.secondary}
            </Button>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 text-white" />,
                title: "40%",
                description: lang === 'en' ? 'Cost Savings' : 'توفير في التكلفة'
              },
              {
                icon: <Droplet className="h-10 w-10 text-white" />,
                title: lang === 'en' ? 'Eco-Friendly' : 'صديق للبيئة',
                description: lang === 'en' ? 'Reduced emissions' : 'انبعاثات أقل'
              },
              {
                icon: <Battery className="h-10 w-10 text-white" />,
                title: lang === 'en' ? 'Easy Setup' : 'تركيب سهل',
                description: lang === 'en' ? 'Quick installation' : 'تركيب سريع'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="glass-effect rounded-xl p-6 card-hover"
              >
                <div className="flex flex-col items-center">
                  {stat.icon}
                  <h3 className="text-2xl font-semibold mt-4 mb-2 text-white">
                    {stat.title}
                  </h3>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}