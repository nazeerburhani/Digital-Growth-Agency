
import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_IMAGE_2 } from '../constants';
import { ViewType } from '../App';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutFounderProps {
  onNavigate: (view: ViewType) => void;
}

const AboutFounder: React.FC<AboutFounderProps> = ({ onNavigate }) => {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-white px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-50 border-[8px] lg:border-[12px] border-gray-50/50">
              <img 
                src={FOUNDER_IMAGE_2} 
                alt="Nazeer Ahmad - Founder" 
                className="w-full h-full object-cover transition-all duration-[2s] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-white/50 whitespace-nowrap z-20">
              <div className="flex items-center gap-2">
                <Sparkles className="text-[#0fb9b1]" size={16} />
                <span className="text-[#1c1e21] font-bold text-sm lg:text-base tracking-tight">Growth Architect</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-[#ff6b6b] font-black text-[9px] lg:text-[10px] uppercase tracking-[0.4em] mb-4 block">The Visionary</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1c1e21] mb-6 tracking-tighter leading-none">Nazeer Ahmad</h2>
            <p className="text-base lg:text-lg text-[#6b7280] mb-8 leading-relaxed font-light">
              For 7+ years, I've engineered scalable digital systems and educational platforms that bridge technology with human growth. My approach is data-driven, yet soul-focused.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-10">
              {[
                "Web Architectures",
                "Advanced Marketing",
                "QuranHub EdTech",
                "UI/UX Engineering"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0fb9b1]" />
                  <span className="text-[#1c1e21] font-bold text-sm lg:text-base tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100 mb-10">
              {[
                { label: "Revenue", value: "$5M+" },
                { label: "Students", value: "10K+" },
                { label: "Active", value: "1.2K" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl lg:text-2xl font-bold text-[#0fb9b1] tracking-tighter">{stat.value}</div>
                  <div className="text-[8px] lg:text-[9px] text-[#6b7280] uppercase tracking-widest font-black mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <motion.button 
              onClick={() => onNavigate('project-form')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1c1e21] text-white px-8 py-4 rounded-xl lg:rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-xl mx-auto lg:mx-0"
            >
              Consult Now
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
