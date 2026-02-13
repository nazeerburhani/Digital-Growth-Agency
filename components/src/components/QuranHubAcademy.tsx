
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, GraduationCap, Award, CheckCircle2, Star, Globe, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface QuranHubAcademyProps {
  onBack: () => void;
  onInquiry: () => void;
}

const QuranHubAcademy: React.FC<QuranHubAcademyProps> = ({ onBack, onInquiry }) => {
  const courses = [
    {
      title: "Quranic Excellence",
      icon: <BookOpen className="w-10 h-10" />,
      items: ["Tajweed Mastery", "Hifz Program", "Translation", "Arabic Grammar"],
      rating: 5.0,
      color: "bg-[#eef7f5] text-[#0fb9b1]"
    },
    {
      title: "STEM Mastery",
      icon: <GraduationCap className="w-10 h-10" />,
      items: ["Advanced Physics", "Pure Mathematics", "General Sciences", "Chemistry"],
      rating: 4.9,
      color: "bg-[#fff1f1] text-[#ff6b6b]"
    },
    {
      title: "Digital Edge",
      icon: <Globe className="w-10 h-10" />,
      items: ["CS Fundamentals", "Internet Safety", "Digital Arts", "Creative Coding"],
      rating: 4.8,
      color: "bg-[#f0f5ff] text-[#3b82f6]"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-[#6b7280] hover:text-[#0fb9b1] font-bold mb-16 lg:mb-24 transition-colors group"
        >
          <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
          <span className="uppercase tracking-widest text-[11px]">Return Home</span>
        </motion.button>
        <header className="mb-24 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#ff6b6b]/5 rounded-full text-[#ff6b6b] font-black text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-10 border border-[#ff6b6b]/10"
          >
            <Sparkles size={14} />
            Academic Revolution
          </motion.div>
          <h1 className="text-6xl lg:text-[120px] font-bold text-[#1c1e21] mb-10 tracking-tighter leading-[0.9] lg:leading-none">
            QuranHub <span className="gradient-text-coral">Academy.</span>
          </h1>
          <p className="text-xl lg:text-3xl text-[#6b7280] font-light leading-relaxed max-w-4xl mx-auto">
            A premium holistic education system bridging spiritual depth with academic precision for the next generation of leaders.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-36">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-10 lg:p-14 rounded-[50px] lg:rounded-[80px] bg-[#f8faf9] border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className={`w-24 h-24 rounded-3xl ${course.color} flex items-center justify-center mb-12 shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                {course.icon}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1c1e21] mb-10 tracking-tight">{course.title}</h3>
              <div className="space-y-5 mb-12">
                {course.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-[#0fb9b1] opacity-60" />
                    <span className="text-lg lg:text-xl text-[#6b7280] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-10 border-t border-gray-200/40">
                <div className="flex items-center gap-1 text-[#ff6b6b]">
                  <Star size={18} fill="currentColor" />
                  <span className="font-black text-xl">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  <Award size={14} />
                  Elite Tier
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-[#1c1e21] rounded-[60px] lg:rounded-[100px] p-12 lg:p-32 text-white relative overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b6b]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl lg:text-[80px] font-bold mb-10 tracking-tighter leading-none">Global <br className="hidden lg:block" />Faculty Hub</h2>
              <p className="text-xl lg:text-2xl text-white/50 mb-14 leading-relaxed font-light">
                Our educators are elite specialists from top global institutions, ensuring every student receives world-class mentorship.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-5xl lg:text-7xl font-bold text-[#ff6b6b] tracking-tighter mb-2">45+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Expert Mentors</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-7xl font-bold text-[#ff6b6b] tracking-tighter mb-2">99%</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Student Success</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.button 
                onClick={onInquiry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ff6b6b] text-white px-12 py-7 rounded-[40px] font-black text-2xl lg:text-3xl flex items-center gap-5 shadow-2xl shadow-red-500/20"
              >
                Enroll Your Child
                <ArrowRight size={32} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranHubAcademy;
