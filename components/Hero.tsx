
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { FOUNDER_IMAGE_1 } from '../constants';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden px-6 lg:px-12">
      <div className="absolute top-0 right-0 w-full lg:w-[40%] h-full bg-[#f1f7f6] -z-10 rounded-bl-[100px]" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-teal-50 text-[#0fb9b1] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Sparkles size={12} className="text-[#ff6b6b]" />
            Growth Engineering
          </div>
          
          <h1 className="text-5xl lg:text-[100px] font-bold leading-[0.95] mb-8 tracking-tighter">
            Elevate <br />
            <span className="gradient-text-teal">Digital</span> <br />
            <span className="italic font-light">Presence.</span>
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-md font-light leading-relaxed">
            Architecting high-performance digital systems and pedagogical excellence at <span className="text-[#0fb9b1] font-medium">QuranHub Academy</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={() => onNavigate('project-form')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#121417] text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all hover:bg-[#0fb9b1]"
            >
              Start Project
              <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              onClick={() => onNavigate('quranhub-academy')}
              whileHover={{ scale: 1.05, backgroundColor: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-100 bg-white/50 backdrop-blur-sm text-[#121417] px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
            >
              Explore Academy
              <Play size={18} fill="currentColor" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <motion.div 
            style={{ y }}
            className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] aspect-[4/5] border-[12px] border-white max-w-md mx-auto"
          >
            <img 
              src={FOUNDER_IMAGE_1} 
              alt="Nazeer Ahmad" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0fb9b1]/10 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
