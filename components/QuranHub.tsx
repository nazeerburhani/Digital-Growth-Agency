import React from 'react';
import { motion } from 'framer-motion';
import { QURAN_SUBJECTS, CONTACT_LINKS } from '../constants';
import { Users, Award, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { ViewType } from '../types';

interface QuranHubProps {
  onNavigate: (view: ViewType) => void;
}

const QuranHub: React.FC<QuranHubProps> = ({ onNavigate }) => {
  return (
    <section id="quranhub" className="py-24 lg:py-32 bg-[#080808] px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0fb9b1]/5 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#0fb9b1] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
              <Calendar size={12} className="text-[#ff6b6b]" />
              Academic Session 2024-25
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Nurturing <br />
              <span className="text-[#0fb9b1]">Faith</span> & <span className="text-[#ff6b6b]">Intellect.</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/30 mb-12 leading-relaxed font-light">
              A premium holistic education hub merging world-class Quranic studies with core academic mastery in STEM subjects.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { label: "Active Learners", value: "1.2K+", icon: <Users size={18} /> },
                { label: "Expert Faculty", value: "45+", icon: <Award size={18} /> },
              ].map((stat, i) => (
                <div key={i} className="glass p-8 rounded-[32px] group transition-all hover:bg-white/[0.04]">
                  <div className="w-10 h-10 rounded-xl bg-[#0fb9b1]/10 text-[#0fb9b1] flex items-center justify-center mb-6 group-hover:bg-[#0fb9b1] group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 tracking-tighter">{stat.value}</div>
                  <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.button 
                onClick={() => onNavigate('quranhub-academy')}
                className="bg-[#ff6b6b] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_15px_30px_rgba(255,107,107,0.2)] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
              >
                Enrollment Hub
                <ArrowRight size={20} />
              </motion.button>
              <a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Direct Inquiry
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {QURAN_SUBJECTS.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => onNavigate('quranhub-academy')}
                className="glass-card p-8 lg:p-10 rounded-[40px] flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0fb9b1]/5 text-[#0fb9b1] flex items-center justify-center mb-6 group-hover:bg-[#0fb9b1] group-hover:text-white transition-all duration-500 group-hover:-translate-y-1">
                  <div className="scale-110">{subject.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#0fb9b1] transition-colors">{subject.name}</h3>
                <div className="mt-3 text-[9px] font-black text-white/20 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Mastery Syllabus
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