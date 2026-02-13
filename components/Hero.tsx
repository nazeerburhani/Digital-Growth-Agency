import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { HERO_VISUAL } from '../constants';
import { ViewType } from '../types';

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-48 pb-40 lg:py-0 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] bg-[#0fb9b1]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ff6b6b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container w-full grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-center relative z-10">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-5 px-9 py-4 rounded-full bg-white/[0.04] border border-white/10 text-[#0fb9b1] text-[12px] font-black uppercase tracking-[0.6em] mb-14 lg:mb-20 shadow-3xl backdrop-blur-3xl"
          >
            <Sparkles size={18} className="text-[#ff6b6b] animate-pulse" />
            Bureau of Strategic Growth
          </motion.div>
          
          <h1 className="text-6xl sm:text-8xl lg:text-[90px] xl:text-[110px] font-bold mb-12 lg:mb-16 text-white leading-[1] tracking-[-0.06em]">
            Engineering <span className="gradient-text-teal">Mastery</span><br />
            Architecting <span className="text-legacy italic">Legacy.</span>
          </h1>
          
          <p className="text-white/40 text-xl md:text-3xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-20 lg:mb-24 px-4 sm:px-0">
            High-performance digital systems for global scale & academic excellence at the forefront of the <span className="text-white/80 font-medium underline underline-offset-[16px] decoration-[#0fb9b1]/40">QuranHub Academy</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 w-full max-w-[480px] sm:max-w-none px-6 sm:px-0">
            <motion.button 
              onClick={() => onNavigate('project-form')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto"
            >
              Initiate Growth
              <ArrowRight size={24} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.button 
              onClick={() => onNavigate('quranhub-academy')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline w-full sm:w-auto"
            >
              Enter Academy
              <Play size={20} fill="currentColor" className="shrink-0" />
            </motion.button>
          </div>

          {/* Luxury Signature Bar */}
          <div className="mt-24 lg:mt-36 flex items-center justify-center lg:justify-start gap-12 md:gap-20 w-full opacity-40">
            <div className="flex flex-col gap-3 items-center lg:items-start">
               <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white/30">Established</span>
               <span className="text-sm font-bold text-white/80 tracking-widest">MMXVII</span>
            </div>
            <div className="w-[1px] h-14 bg-white/10" />
            <div className="flex flex-col gap-3 items-center lg:items-start">
               <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white/30">Founder & CEO</span>
               <span className="text-sm font-bold text-[#0fb9b1] tracking-widest uppercase">Nazeer Ahmad</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
          style={{ scale }}
          className="relative w-full max-w-[580px] lg:max-w-none mx-auto lg:mx-0 mt-20 lg:mt-0 px-8 sm:px-0"
        >
          <div className="relative bg-gradient-to-br from-white/15 to-transparent rounded-[120px] lg:rounded-[160px] p-5 lg:p-8 shadow-[0_120px_200px_rgba(0,0,0,1)] border border-white/20 backdrop-blur-3xl overflow-hidden group">
            <div className="relative rounded-[100px] lg:rounded-[140px] overflow-hidden aspect-[4/5] bg-black">
              <motion.img 
                src={HERO_VISUAL} 
                alt="Growth Architecture" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[12s] grayscale hover:grayscale-0 contrast-[1.15] brightness-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            </div>

            <div className="absolute top-1/2 -left-16 -translate-y-1/2 animate-float hidden 2xl:block">
               <div className="bg-[#050505]/95 backdrop-blur-3xl text-white px-10 py-10 rounded-[50px] border border-white/15 shadow-4xl flex flex-col items-center gap-4">
                 <div className="text-[#0fb9b1] font-black text-5xl tracking-tighter">7+</div>
                 <div className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30">Years Mastery</div>
               </div>
            </div>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-max sm:translate-x-0 sm:left-auto sm:right-16 animate-float">
              <div className="bg-[#0fb9b1] text-white px-14 py-8 rounded-[40px] flex items-center gap-6 shadow-[0_40px_80px_rgba(15,185,177,0.4)] border border-white/30">
                <Sparkles size={24} className="animate-pulse" />
                <span className="font-black text-[14px] uppercase tracking-[0.5em]">Nazeer Ahmad</span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#0fb9b1]/10 rounded-full blur-[160px] -z-10 animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;