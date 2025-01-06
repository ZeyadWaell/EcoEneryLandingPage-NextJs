import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1597739239353-50270a473397?auto=format&fit=crop&q=80",
    title: "Fuel Efficiency"
  },
  {
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    title: "Engine Performance"
  },
  {
    url: "https://images.unsplash.com/photo-1540320865252-e4abf9e80004?auto=format&fit=crop&q=80",
    title: "Cost Savings"
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return (prev + 1) % images.length;
    });
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black/30 flex items-center justify-between">
        <button
          onClick={() => navigate('prev')}
          className="p-2 m-4 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => navigate('next')}
          className="p-2 m-4 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white text-2xl font-bold">{images[currentIndex].title}</h3>
      </div>
    </div>
  );
}