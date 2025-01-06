import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { translations } from '../../utils/i18n';

interface ContactProps {
  lang: 'en' | 'ar';
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="contact" className="py-20 bg-gray-50">
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

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#2C3E50]" />
              <div>
                <h3 className="text-lg font-semibold text-[#2C3E50]">{t.phone}</h3>
                <p className="text-gray-600">+966 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#2C3E50]" />
              <div>
                <h3 className="text-lg font-semibold text-[#2C3E50]">{t.email}</h3>
                <p className="text-gray-600">contact@ecoenergy.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#2C3E50]" />
              <div>
                <h3 className="text-lg font-semibold text-[#2C3E50]">{t.address}</h3>
                <p className="text-gray-600">{t.addressDetails}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            dir={dir}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.form.name}
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2C3E50] focus:ring-[#2C3E50]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.form.email}
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2C3E50] focus:ring-[#2C3E50]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t.form.message}
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2C3E50] focus:ring-[#2C3E50]"
              />
            </div>
            <Button variant="primary" className="w-full">
              {t.form.submit}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}