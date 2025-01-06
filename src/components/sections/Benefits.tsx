import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Leaf, BarChart, Clock } from 'lucide-react';
import { translations } from '../../utils/i18n';
import { AnimatedCard } from '../AnimatedCard';

interface BenefitsProps {
  lang: 'en' | 'ar';
}

export default function Benefits({ lang }: BenefitsProps) {
  const t = translations[lang].benefits;
  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-white" />,
      title: t.items[0].title,
      description: t.items[0].description
    },
    {
      icon: <Leaf className="h-12 w-12 text-white" />,
      title: t.items[1].title,
      description: t.items[1].description
    },
    {
      icon: <BarChart className="h-12 w-12 text-white" />,
      title: t.items[2].title,
      description: t.items[2].description
    },
    {
      icon: <Clock className="h-12 w-12 text-white" />,
      title: t.items[3].title,
      description: t.items[3].description
    }
  ];

  return (
    <section id ="benefits" className="py-20 bg-[#2C3E50]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
          {t.title}
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}