import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "محمد أحمد",
    nameEn: "Mohammed Ahmed",
    role: "مالك أسطول شاحنات",
    roleEn: "Fleet Owner",
    text: "وفرت أكثر من 40% من تكاليف الوقود. استثمار رائع!",
    textEn: "Saved over 40% on fuel costs. Great investment!"
  },
  {
    name: "سارة العلي",
    nameEn: "Sarah Al-Ali",
    role: "صاحبة شركة نقل",
    roleEn: "Transport Company Owner",
    text: "تحسن ملحوظ في أداء المحركات وتوفير كبير في التكاليف",
    textEn: "Noticeable improvement in engine performance and significant cost savings"
  }
];

interface TestimonialsProps {
  lang: 'en' | 'ar';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  return (
    <section id = "testimonials" className="py-20 bg-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {lang === 'en' ? 'Customer Success Stories' : 'قصص نجاح عملائنا'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <Quote className="h-8 w-8 text-[#2C3E50] mb-4" />
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? testimonial.textEn : testimonial.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">
                    {lang === 'en' ? testimonial.nameEn : testimonial.name}
                  </h4>
                  <p className="text-gray-500">
                    {lang === 'en' ? testimonial.roleEn : testimonial.role}
                  </p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}