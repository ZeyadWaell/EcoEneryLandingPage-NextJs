import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { translations } from '../../utils/i18n';

interface ContactProps {
  lang: 'en' | 'ar';
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await emailjs.send(
        'service_z0pj92j', // Service ID
        'template_klhy9ye', // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'f8z0JD-GcZS_FQVdf' // Public Key
      );

      console.log('Email sent:', response);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error: any) {
      console.error('EmailJS error:', error.text || error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-6">{t.title}</h2>
        <p className="text-gray-600 text-center mb-8">{t.subtitle}</p>

        <form className="space-y-6" dir={dir} onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
              placeholder="Enter your message"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 text-lg font-semibold text-white bg-[#2C3E50] rounded-lg shadow-lg hover:bg-[#34495E] focus:ring-4 focus:ring-[#2C3E50]/50"
          >
            Send Message
          </Button>
        </form>

        {/* Status Message */}
        <p className="text-center text-sm text-gray-600 mt-4">{status}</p>
      </motion.div>

      {/* Footer Section */}
      <footer className="bg-[#2C3E50] text-white py-6 mt-12 text-center h-full w-full">
        <p className="text-sm">&copy; {new Date().getFullYear()} EcoEnergy. All rights reserved.</p>
      </footer>
    </section>
  );
}
