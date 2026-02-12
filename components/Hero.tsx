
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, ShieldCheck } from 'lucide-react';
import { FOUNDER_IMAGE_1 } from '../constants';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-20 lg:pt-0 pb-12 overflow-hidden px-4 sm:px-8">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-[#f1f7f6] -z-10 rounded-b-[40px] lg:rounded-b-none lg:rounded-l-[100px]" />
      
      <motion.div 
        style={{ y: y1 }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 80, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-[10%] left-[5%] w-[180px] h-[180px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-[#0fb9b1]/5 to-[#ff6b6b]/5 rounded-full blur-[80px] -z-10" 
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0fb9b1] font-bold text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm border border-teal-50"
          >
            <Star size={9} fill="currentColor" className="text-[#ff6b6b]" />
            Growth Architect
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.2] mb-5 text-[#121417] tracking-tighter">
            Engineering <span className="gradient-text-teal">Mastery.</span> <br className="hidden lg:block" /> Scaling <span className="italic font-light text-[#ff6b6b]">Innovation.</span>
          </h1>
          
          <p className="text-sm lg:text-lg text-[#6b7280] mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
            Premium web engineering and strategic digital growth for industry leaders. Home of the <span className="text-[#0fb9b1] font-semibold">QuranHub Academy</span> ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <motion.button 
              onClick={() => onNavigate('project-form')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#121417] text-white px-7 py-3.5 rounded-xl lg:rounded-2xl font-bold text-base flex items-center justify-center gap-3 group shadow-xl"
            >
              Start Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              onClick={() => onNavigate('quranhub-academy')}
              whileHover={{ scale: 1.02, backgroundColor: '#fdfdfd' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border border-gray-100 bg-white/50 backdrop-blur-sm text-[#121417] px-7 py-3.5 rounded-xl lg:rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all"
            >
              Academy
              <Play size={16} className="fill-current" />
            </motion.button>
          </div>

          <div className="mt-10 lg:mt-16 flex justify-center lg:justify-start items-center gap-8 lg:gap-10 text-[#9ca3af]">
            {[
              { val: "250+", lab: "Works" },
              { val: "10K+", lab: "Users" },
              { val: "7+", lab: "Years" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <span className="text-xl lg:text-2xl font-bold text-[#121417] tracking-tight">{stat.val}</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] mt-1 text-gray-400">{stat.lab}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative order-1 lg:order-2 px-4 lg:px-0"
        >
          <motion.div 
            style={{ y: y2 }}
            className="relative z-10 rounded-[24px] lg:rounded-[48px] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-50 border-4 lg:border-[6px] border-white max-w-[240px] sm:max-w-xs lg:max-w-sm mx-auto"
          >
            <img 
              src={FOUNDER_IMAGE_1} 
              alt="Nazeer Ahmad" 
              className="w-full h-full object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 lg:-top-6 -right-0 lg:-right-3 bg-white p-3 lg:p-4 rounded-[18px] lg:rounded-[24px] shadow-2xl z-20 border border-gray-50 flex items-center gap-3"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#0fb9b1] rounded-lg flex items-center justify-center text-white shadow-lg">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-[#121417] font-bold text-xs lg:text-sm tracking-tight leading-none">Verified</div>
              <div className="text-[8px] text-[#0fb9b1] font-bold uppercase tracking-widest mt-1">Partner</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
