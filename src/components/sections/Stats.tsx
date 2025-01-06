import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, DollarSign } from 'lucide-react';

interface StatsProps {
  lang: 'en' | 'ar';
}

export default function Stats({ lang }: StatsProps) {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8 text-[#2C3E50]" />,
      value: "40%",
      labelEn: "Average Fuel Savings",
      labelAr: "متوسط توفير الوقود"
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#2C3E50]" />,
      value: "30%",
      labelEn: "Emissions Reduction",
      labelAr: "تخفيض الانبعاثات"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#2C3E50]" />,
      value: "1000+",
      labelEn: "Vehicles Equipped",
      labelAr: "مركبة مجهزة"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="inline-block p-3 rounded-full bg-gray-50 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#2C3E50] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">
                {lang === 'en' ? stat.labelEn : stat.labelAr}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}