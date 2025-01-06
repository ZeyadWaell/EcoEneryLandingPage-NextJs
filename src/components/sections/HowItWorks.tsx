import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, CheckCircle } from 'lucide-react';
import { translations } from '../../utils/i18n';

interface HowItWorksProps {
  lang: 'en' | 'ar';
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = translations[lang].howItWorks;
  const steps = [
    {
      icon: <Settings className="h-12 w-12 text-[#2C3E50]" />,
      title: t.steps[0].title,
      description: t.steps[0].description
    },
    {
      icon: <Wrench className="h-12 w-12 text-[#2C3E50]" />,
      title: t.steps[1].title,
      description: t.steps[1].description
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-[#2C3E50]" />,
      title: t.steps[2].title,
      description: t.steps[2].description
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-[#2C3E50]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}