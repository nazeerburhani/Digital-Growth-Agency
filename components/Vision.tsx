import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VISION_VISUAL } from '../constants';

const Vision: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]);
  const rotate = useTransform(scrollYProgress, [0.4, 0.6], [5, 0]);

  return (
    <section className="py-60 lg:py-80 bg-[#080808] overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-52 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="text-[#0fb9b1] font-black text-[12px] lg:text-[14px] uppercase tracking-[1em] mb-16 flex items-center justify-center lg:justify-start gap-10">
              <div className="w-20 h-[2px] bg-[#0fb9b1]" />
              Nazeer Ahmad
            </div>
            
            <h2 className="text-7xl md:text-8xl lg:text-[110px] font-bold text-white mb-16 tracking-[-0.07em] leading-[0.85]">
              Precision.<br />
              <span className="gradient-text-teal">Mastery.</span>
            </h2>
            
            <p className="text-2xl lg:text-5xl text-white/50 font-light leading-[1.3] mb-20 max-w-3xl mx-auto lg:mx-0 italic">
              "Fusing absolute technical complexity with human intuition. Every pixel is crafted for <span className="text-white font-medium not-italic underline decoration-[#0fb9b1]/40 underline-offset-[18px]">excellence</span>."
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-12">
              <div className="w-32 h-[2px] bg-gradient-to-r from-[#0fb9b1] to-transparent" />
              <div className="text-white font-black text-3xl tracking-[0.5em] uppercase font-display">Nazeer Ahmad</div>
            </div>
          </motion.div>

          <motion.div
            style={{ scale, rotate }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative order-1 lg:order-2 flex justify-center lg:block"
          >
            <div className="relative z-10 rounded-[120px] lg:rounded-[180px] overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,1)] aspect-square border-[20px] lg:border-[35px] border-white/5 max-w-2xl w-full group">
              <img 
                src={VISION_VISUAL} 
                alt="Cinematic Mastery" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[6s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0fb9b1]/15 to-transparent mix-blend-color" />
            </div>
            
            {/* Ambient Depth Elements */}
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#0fb9b1]/10 rounded-full blur-[160px] -z-10 animate-pulse-slow" />
            <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#ff6b6b]/5 rounded-full blur-[160px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;