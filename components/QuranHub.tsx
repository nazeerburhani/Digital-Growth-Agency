
import React from 'react';
import { motion } from 'framer-motion';
import { QURAN_SUBJECTS, CONTACT_LINKS } from '../constants';
import { CheckCircle2, Users, GraduationCap, Award, Calendar, ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface QuranHubProps {
  onNavigate: (view: ViewType) => void;
}

const QuranHub: React.FC<QuranHubProps> = ({ onNavigate }) => {
  return (
    <section id="quranhub" className="py-20 lg:py-28 bg-[#f5faf9] px-5 sm:px-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white rounded-full blur-[80px] opacity-40" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm text-[#0fb9b1] font-bold text-[10px] mb-6 border border-teal-50">
              <Calendar size={12} />
              Academic Session 2024-25
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-[#121417] mb-6 tracking-tight leading-[1.1]">
              Bridging <span className="text-[#0fb9b1]">Faith</span> & <br className="hidden lg:block" />Academic Excellence.
            </h2>
            
            <p className="text-base lg:text-lg text-[#6b7280] mb-10 leading-relaxed font-light px-2 lg:px-0">
              The premium education system combining world-class Quranic studies with core academic mastery (Physics, Math, Science).
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Students", value: "1.2K+", icon: <Users size={16} /> },
                { label: "Faculty", value: "45+", icon: <Award size={16} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-teal-50 shadow-sm flex flex-col items-center lg:items-start group transition-all hover:border-[#0fb9b1]/30">
                  <div className="w-8 h-8 rounded-lg bg-[#f0f9f8] text-[#0fb9b1] flex items-center justify-center mb-3 group-hover:bg-[#0fb9b1] group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-[#121417] leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <motion.button 
                onClick={() => onNavigate('quranhub-academy')}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#ff6b6b] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-red-200/50 flex items-center justify-center gap-2"
              >
                Enroll Now
                <ArrowRight size={18} />
              </motion.button>
              <motion.a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                className="bg-white text-[#121417] px-8 py-4 rounded-xl font-bold text-base border border-gray-100 flex items-center justify-center gap-2"
              >
                WhatsApp Inquiry
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 mt-8 lg:mt-0">
            {QURAN_SUBJECTS.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onNavigate('quranhub-academy')}
                className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 flex flex-col items-center text-center group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0f9f8] text-[#0fb9b1] flex items-center justify-center mb-4 group-hover:bg-[#0fb9b1] group-hover:text-white transition-all">
                  {subject.icon}
                </div>
                <h3 className="text-sm lg:text-base font-bold text-[#121417] tracking-tight">{subject.name}</h3>
                <div className="mt-2 text-[9px] font-bold text-[#9ca3af] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Detail
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