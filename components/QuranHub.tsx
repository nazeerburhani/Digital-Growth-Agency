import React from 'react';
import { motion } from 'framer-motion';
import { QURAN_SUBJECTS, CONTACT_LINKS } from '../constants';
import { Users, Award, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { ViewType } from '../types';

interface QuranHubProps {
  onNavigate: (view: ViewType) => void;
}

const QuranHub: React.FC<QuranHubProps> = ({ onNavigate }) => {
  return (
    <section id="quranhub" className="py-40 lg:py-64 bg-[#080808] relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#0fb9b1]/5 to-transparent pointer-events-none" />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/[0.03] border border-white/10 text-[#0fb9b1] font-black text-[11px] uppercase tracking-[0.6em] mb-12">
              <ShieldCheck size={16} className="text-[#ff6b6b]" />
              Strategic Academy
            </div>
            
            <h2 className="text-6xl lg:text-[90px] xl:text-[110px] font-bold text-white mb-10 tracking-tighter leading-[0.9] font-display">
              Unity of <br />
              <span className="gradient-text-teal">Knowledge.</span>
            </h2>
            
            <p className="text-2xl lg:text-3xl text-white/30 mb-16 leading-relaxed font-light italic max-w-xl">
              "We fuse the depth of spiritual tradition with the precision of modern scientific inquiry to forge global thinkers."
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-20">
              {[
                { label: "Global Learners", value: "12,400+", icon: <Users /> },
                { label: "Elite Courses", value: "48+", icon: <Award /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.02] p-12 rounded-[50px] border border-white/5 group hover:bg-white/[0.06] transition-all duration-700">
                  <div className="w-14 h-14 rounded-2xl bg-[#0fb9b1]/10 text-[#0fb9b1] flex items-center justify-center mb-8 group-hover:bg-[#0fb9b1] group-hover:text-white transition-all duration-500">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">{stat.label}</div>
                </div>
              ))}
            </div>

            <motion.button 
              onClick={() => onNavigate('quranhub-academy')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-max"
            >
              Enter Academy Portal
              <ArrowRight size={22} />
            </motion.button>
          </motion.div>

          {/* Subjects Grid - SaaS Inspired */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {QURAN_SUBJECTS.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 1.2 }}
                onClick={() => onNavigate('quranhub-academy')}
                className="group relative bg-[#0a0a0a] p-12 lg:p-14 rounded-[70px] border border-white/5 hover:border-[#0fb9b1]/40 transition-all duration-700 cursor-pointer overflow-hidden"
              >
                {/* Subtle Glow Effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0fb9b1]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-[30px] bg-white/[0.03] text-[#0fb9b1] flex items-center justify-center mb-10 group-hover:bg-[#0fb9b1] group-hover:text-white transition-all duration-700 group-hover:scale-110 shadow-2xl border border-white/5">
                    {React.cloneElement(subject.icon as React.ReactElement, { size: 36 })}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight leading-none">{subject.name}</h3>
                  <p className="text-white/20 text-sm font-black tracking-[0.3em] uppercase group-hover:text-[#0fb9b1] transition-colors">{subject.desc}</p>
                </div>

                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-700">
                  <Sparkles size={20} className="text-[#ff6b6b]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranHub;