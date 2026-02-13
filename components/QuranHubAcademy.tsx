import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Star, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  ChevronDown,
  Users,
  Trophy,
  Activity,
  UserCheck
} from 'lucide-react';
import { ACADEMY_STATS, ACADEMY_PROCESS, ACADEMY_FAQS, ACADEMY_FEATURES, CONTACT_LINKS } from '../constants';

interface QuranHubAcademyProps {
  onBack: () => void;
  onInquiry: () => void;
}

const QuranHubAcademy: React.FC<QuranHubAcademyProps> = ({ onBack, onInquiry }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const courses = [
    {
      title: "Quranic Excellence",
      icon: <BookOpen className="w-10 h-10 lg:w-12 lg:h-12" />,
      items: ["Advanced Tajweed", "Memorization Mastery", "Tafseer Sciences", "Arabic Linguistics"],
      rating: 5.0,
      color: "bg-[#0fb9b1]/10 text-[#0fb9b1]",
      desc: "Merging sacred tradition with modern psychological learning frameworks."
    },
    {
      title: "Academic Precision",
      icon: <GraduationCap className="w-10 h-10 lg:w-12 lg:h-12" />,
      items: ["Physics (O/A Levels)", "Pure Mathematics", "STEM Foundations", "Advanced Chemistry"],
      rating: 4.9,
      color: "bg-[#ff6b6b]/10 text-[#ff6b6b]",
      desc: "Rigorous scientific inquiry designed for absolute concept mastery."
    },
    {
      title: "Digital Sovereignty",
      icon: <Globe className="w-10 h-10 lg:w-12 lg:h-12" />,
      items: ["Software Engineering", "UI/UX Architecture", "Marketing Logic", "Algorithmic Growth"],
      rating: 4.8,
      color: "bg-blue-500/10 text-blue-500",
      desc: "Empowering students with the engineering skills of the 21st century."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-20 lg:py-28 px-6 overflow-hidden">
      <div className="section-container">
        {/* Nav */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-white/30 hover:text-[#0fb9b1] font-bold mb-16 lg:mb-24 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#0fb9b1] transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="uppercase tracking-[0.4em] text-[10px]">Bureau Studio</span>
        </motion.button>

        {/* Header */}
        <header className="mb-24 lg:mb-40 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#ff6b6b]/5 text-[#ff6b6b] font-black text-[9px] uppercase tracking-[0.5em] mb-10 border border-[#ff6b6b]/10 backdrop-blur-md"
          >
            <Sparkles size={14} />
            The Academy of Excellence
          </motion.div>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
            QuranHub <span className="gradient-text-coral">Academy.</span>
          </h1>
          <p className="text-lg lg:text-2xl text-white/30 font-light leading-relaxed max-w-2xl mx-auto">
            A premium holistic ecosystem bridging spiritual depth with modern academic precision for global leaders.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-24 lg:mb-40">
           {ACADEMY_STATS.map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass p-8 lg:p-10 rounded-[40px] text-center"
             >
               <div className="text-4xl lg:text-5xl font-bold text-[#ff6b6b] mb-2 tracking-tighter">{stat.value}</div>
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">{stat.label}</div>
             </motion.div>
           ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24 lg:mb-40">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 lg:p-12 rounded-[50px] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] hover:border-[#0fb9b1]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-700 relative overflow-hidden"
            >
              <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-[28px] ${course.color} flex items-center justify-center mb-10 shadow-2xl transition-all duration-700 group-hover:scale-110`}>
                {course.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-5 tracking-tight group-hover:text-[#0fb9b1] transition-colors">{course.title}</h3>
              <p className="text-white/30 mb-8 text-base font-light leading-relaxed">{course.desc}</p>
              <div className="space-y-4 mb-10">
                {course.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-[#0fb9b1] opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-base text-white/50 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-[#ff6b6b]">
                  <Star size={16} fill="currentColor" />
                  <span className="font-black text-lg">5.0</span>
                </div>
                <div className="flex items-center gap-2 text-white/10 text-[9px] font-black uppercase tracking-[0.3em]">
                   Verified Track
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features / Why Choose Us */}
        <div className="mb-24 lg:mb-40">
           <div className="text-center mb-16">
              <span className="text-[#0fb9b1] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Our DNA</span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">Why Global Families <br /><span className="text-white/20">Choose QuranHub.</span></h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ACADEMY_FEATURES.map((feature, i) => (
                <div key={i} className="glass p-10 rounded-[40px] hover:border-[#0fb9b1]/20 transition-all">
                  <div className="w-14 h-14 bg-[#0fb9b1]/10 rounded-2xl flex items-center justify-center text-[#0fb9b1] mb-8">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-white/30 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Methodology / Process */}
        <div className="bg-white rounded-[80px] lg:rounded-[120px] p-12 lg:p-32 text-black mb-24 lg:mb-40 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0fb9b1]/5 rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-24">
                <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter mb-8 leading-none">The Path to <span className="gradient-text-teal">Mastery.</span></h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed">Our rigorous onboarding ensures every learner is perfectly aligned with their intellectual potential.</p>
             </div>
             <div className="space-y-20 relative">
                {/* Connector Line */}
                <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 hidden sm:block" />
                {ACADEMY_PROCESS.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1 text-center lg:text-left">
                       <h4 className="text-2xl lg:text-3xl font-bold mb-4">{step.title}</h4>
                       <p className="text-lg text-gray-500 font-light leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="relative z-10 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-black text-xl shadow-2xl">
                       0{i + 1}
                    </div>
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-24 lg:mb-40">
           <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4">Bureau <span className="text-white/20">Insights.</span></h2>
              <p className="text-white/30">Answering your questions about elite academic development.</p>
           </div>
           <div className="space-y-4">
              {ACADEMY_FAQS.map((faq, i) => (
                <div key={i} className="glass rounded-[30px] overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    <ChevronDown size={20} className={`transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-8 text-white/40 leading-relaxed font-light"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#0c0c0d] rounded-[60px] lg:rounded-[100px] p-12 lg:p-24 text-white relative overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,1)] border border-white/5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b6b]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl lg:text-7xl font-bold mb-10 tracking-tighter leading-none">Global <br className="hidden lg:block" />Enrollment Open.</h2>
            <p className="text-base lg:text-lg text-white/30 mb-12 leading-relaxed font-light max-w-2xl">
              Secure a seat in the bureau's most prestigious academic programs. Our specialists are ready to architect your legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <motion.button 
                onClick={onInquiry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ff6b6b] text-white px-12 py-6 rounded-3xl font-black text-xl lg:text-2xl flex items-center justify-center gap-6 shadow-[0_20px_40px_rgba(255,107,107,0.3)] group"
              >
                Inquiry Desk
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-500" />
              </motion.button>
              <a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                className="btn-outline text-xl px-12 py-6 rounded-3xl"
              >
                WhatsApp Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranHubAcademy;