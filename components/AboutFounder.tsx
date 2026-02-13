import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_VISUAL } from '../constants';
import { ViewType } from '../types';
import { ArrowRight, Sparkles, UserCheck } from 'lucide-react';

interface AboutFounderProps {
  onNavigate: (view: ViewType) => void;
}

const AboutFounder: React.FC<AboutFounderProps> = ({ onNavigate }) => {
  return (
    <section id="founder" className="py-24 lg:py-36 bg-[#0a0a0c] text-white px-6 overflow-hidden rounded-[50px] lg:rounded-[100px] mx-4 lg:mx-12 my-20 border border-white/5 relative">
      {/* Decorative Aura */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-[1px] bg-indigo-500" />
              <span className="text-indigo-400 font-black text-[11px] uppercase tracking-[0.6em]">Visionary Leadership</span>
            </div>
            
            <h2 className="text-6xl lg:text-[88px] font-bold mb-10 tracking-tighter leading-none text-white">
              Nazeer <span className="text-white/20">Ahmad</span>
            </h2>
            
            <p className="text-xl lg:text-3xl text-white/50 mb-14 leading-relaxed font-light italic max-w-xl">
              "Fusing absolute technical mastery with human intuition. Every system we architect is built for a single state: <span className="text-white font-medium not-italic">Excellence.</span>"
            </p>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-16">
              {[
                { label: "Systems", val: "Web Architectures", accent: "from-indigo-500" },
                { label: "Marketing", val: "Precision Growth", accent: "from-blue-400" },
                { label: "Pedagogy", val: "QuranHub Mastery", accent: "from-purple-500" },
                { label: "Engineering", val: "UI/UX Strategy", accent: "from-slate-400" }
              ].map((item, i) => (
                <div key={i} className="group cursor-default border-l border-white/10 pl-6 hover:border-indigo-500 transition-all duration-500">
                  <div className="text-[10px] font-black text-indigo-400/60 uppercase tracking-[0.4em] mb-3 group-hover:text-indigo-400 transition-colors">{item.label}</div>
                  <div className="text-xl lg:text-2xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">{item.val}</div>
                  <div className={`mt-3 h-[2px] w-0 bg-gradient-to-r ${item.accent} to-transparent group-hover:w-full transition-all duration-700`} />
                </div>
              ))}
            </div>

            <motion.button 
              onClick={() => onNavigate('project-form')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden bg-white text-black px-12 py-6 rounded-3xl font-black text-[12px] uppercase tracking-[0.4em] transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-4">
                Consultation Desk
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Ultra-Premium Image Container */}
            <div className="relative rounded-[60px] lg:rounded-[90px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)] aspect-[4/5] bg-white/[0.02] max-w-[450px] w-full border border-white/10 group">
              <img 
                src={ABOUT_VISUAL} 
                alt="Visionary Leadership" 
                className="w-full h-full object-cover transition-all duration-[4s] grayscale hover:grayscale-0 contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
              
              {/* High-End Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[40px] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-[1px] bg-indigo-500" />
                   <div className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400">Chief Architect</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2 tracking-tight">Nazeer Ahmad</div>
                <div className="text-xs text-white/40 font-light tracking-wide">Bureau Founder • Est. 2017</div>
              </div>
            </div>
            
            {/* Status Floating Badge */}
            <div className="absolute -top-6 -right-6 lg:-right-10 bg-indigo-600 text-white px-8 py-5 rounded-[30px] shadow-2xl border border-white/20 flex flex-col items-center gap-1 animate-float">
               <UserCheck className="mb-1" size={24} />
               <span className="font-black text-xs uppercase tracking-widest text-center">Verified <br/>Mastery</span>
            </div>

            {/* Backdrop Light Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 rounded-full blur-[140px] -z-10 animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;