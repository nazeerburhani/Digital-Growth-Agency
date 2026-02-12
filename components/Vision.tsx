
import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_IMAGE_CINEMATIC } from '../constants';

const Vision: React.FC = () => {
  return (
    <section className="py-16 lg:py-32 px-4 sm:px-6 bg-[#1c1e21] overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="text-[#0fb9b1] font-black text-[10px] lg:text-xs uppercase tracking-[0.5em] mb-6 lg:mb-8 text-center lg:text-left">The Core Philosophy</div>
            <h2 className="text-4xl lg:text-8xl font-bold text-white mb-6 lg:mb-10 tracking-tighter leading-[1] lg:leading-[0.95]">
              Innovation <br />Through <span className="gradient-text-teal">Precision.</span>
            </h2>
            <p className="text-lg lg:text-2xl text-white/60 font-light leading-relaxed mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0">
              "My vision is to bridge the gap between technical complexity and human intuition. Every pixel and line of code is crafted to drive one thing: <span className="text-white font-medium">Excellence.</span>"
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <div className="w-12 lg:w-16 h-1 bg-[#0fb9b1]" />
              <div className="text-white font-black text-sm lg:text-xl tracking-widest uppercase">Nazeer Ahmad</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 flex justify-center lg:block"
          >
            <div className="relative z-10 rounded-[30px] lg:rounded-[100px] overflow-hidden shadow-2xl aspect-square border-4 lg:border-[12px] border-white/5 max-w-sm sm:max-w-md lg:max-w-none w-full">
              <img 
                src={FOUNDER_IMAGE_CINEMATIC} 
                alt="Founder Cinematic Portrait" 
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
              />
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 lg:w-80 lg:h-80 bg-[#0fb9b1]/20 rounded-full blur-[60px] lg:blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 lg:w-80 lg:h-80 bg-[#ff6b6b]/10 rounded-full blur-[60px] lg:blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
