import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, CheckCircle2, MessageSquare, Mail, Phone, ExternalLink, Check } from 'lucide-react';
import { CONTACT_LINKS } from '../constants';

interface ProjectFormProps {
  onBack: () => void;
}

type SubmitStatus = 'idle' | 'sending' | 'success';

const ProjectForm: React.FC<ProjectFormProps> = ({ onBack }) => {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: 'Web Development & Architecture',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('sending');
    
    // Simulate API delay
    setTimeout(() => {
      // Mailto fallback construction
      const subject = encodeURIComponent(`Growth Inquiry: ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProgram: ${formData.program}\n\nMessage: ${formData.message}`
      );
      window.location.href = `mailto:${CONTACT_LINKS.emailRaw}?subject=${subject}&body=${body}`;
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#f8faf9] flex items-center justify-center px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl w-full bg-white p-12 lg:p-16 rounded-[60px] shadow-2xl text-center border border-gray-100"
        >
          <div className="w-24 h-24 bg-[#0fb9b1] rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-[0_20px_40px_rgba(15,185,177,0.3)]">
            <Check size={48} strokeWidth={3} />
          </div>
          <h2 className="text-4xl font-bold text-[#1c1e21] mb-6 tracking-tight">Strategy Activated.</h2>
          <p className="text-[#6b7280] text-lg mb-12 font-light leading-relaxed">
            Your inquiry has been logged. Nazeer Ahmad's bureau will reach out to you within 24 operational hours.
          </p>
          <button 
            onClick={onBack}
            className="w-full bg-[#1c1e21] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#0fb9b1] transition-all shadow-xl"
          >
            Return to Studio
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf9] py-8 lg:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-[#6b7280] hover:text-[#0fb9b1] font-bold mb-8 transition-colors group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <div className="bg-white rounded-[40px] lg:rounded-[60px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row min-h-[700px]">
          {/* Form Side */}
          <div className="flex-[1.4] p-8 lg:p-16">
            <header className="mb-10">
              <span className="text-[#0fb9b1] font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Application Gateway</span>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1c1e21] mb-3 tracking-tight">Let's Build Your <span className="gradient-text-teal">Future.</span></h1>
              <p className="text-[#6b7280] text-base lg:text-lg font-light">Select your path—be it digital growth or academic mastery.</p>
            </header>

            <form className="space-y-6 lg:space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base text-[#1c1e21] placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base text-[#1c1e21] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Interest / Program Selection</label>
                <div className="relative">
                  <select 
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base appearance-none cursor-pointer text-[#1c1e21]"
                  >
                    <optgroup label="Digital Growth Services">
                      <option>Web Development & Architecture</option>
                      <option>E-commerce Brand Launch</option>
                      <option>Performance Marketing Scaling</option>
                      <option>SaaS Platform Engineering</option>
                      <option>UI/UX Design Strategy</option>
                    </optgroup>
                    <optgroup label="Quranic Sciences">
                      <option>Quran with Tajweed (Beginner)</option>
                      <option>Quran with Tajweed (Advanced)</option>
                      <option>Hifz-ul-Quran (Full Memorization)</option>
                      <option>Tafseer-ul-Quran (Detailed Study)</option>
                      <option>Arabic Language & Linguistics</option>
                      <option>Seerah of the Prophet (PBUH)</option>
                    </optgroup>
                    <optgroup label="Academic Excellence (STEM)">
                      <option>Mathematics Mastery (K-12)</option>
                      <option>Physics Excellence (O/A Levels)</option>
                      <option>Advanced Chemistry</option>
                      <option>Computing & Robotics</option>
                      <option>General Science & STEM Discovery</option>
                    </optgroup>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ArrowLeft className="-rotate-90" size={16} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Additional Context</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your background, goals, or current learning stage..."
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base resize-none text-[#1c1e21] placeholder:text-gray-400"
                ></textarea>
              </div>

              <motion.button
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(15, 185, 177, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-[#0fb9b1] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl transition-all ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}`}
              >
                {status === 'sending' ? (
                  <>Initializing Bureau Response...</>
                ) : (
                  <>
                    Launch Inquiry
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex-1 bg-[#121417] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            <Sparkles className="absolute -top-10 -right-10 w-48 h-48 text-white/5" />
            
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#0fb9b1] rounded-full" />
                Partner Benefits
              </h3>
              <ul className="space-y-7">
                {[
                  { title: "Global Pedigree", desc: "7+ years of elite digital engineering." },
                  { title: "Custom Roadmap", desc: "Tailored curriculum for every student." },
                  { title: "Cutting-edge Tech", desc: "Built with the latest architectural standards." },
                  { title: "ROI Focused", desc: "Data-driven growth strategies that convert." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0fb9b1]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="text-[#0fb9b1]" size={14} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm lg:text-base leading-none mb-1.5">{item.title}</p>
                      <p className="text-white/40 text-xs lg:text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 space-y-5 pt-12 border-t border-white/10 mt-auto">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0fb9b1]">Direct Assistance</p>
              
              <div className="grid grid-cols-1 gap-3">
                <motion.a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="bg-white/5 hover:bg-[#25D366] transition-all p-5 rounded-2xl flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#25D366]">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 group-hover:text-white/60 uppercase tracking-tighter">Concierge</p>
                      <p className="text-sm font-bold">WhatsApp Support</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/20 group-hover:text-white" />
                </motion.a>

                <motion.a
                  href={CONTACT_LINKS.email}
                  whileHover={{ x: 4 }}
                  className="bg-white/5 hover:bg-[#0fb9b1] transition-all p-5 rounded-2xl flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0fb9b1]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 group-hover:text-white/60 uppercase tracking-tighter">Email Bureau</p>
                      <p className="text-sm font-bold">Launch Mailer</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/20 group-hover:text-white" />
                </motion.a>
              </div>

              <div className="flex items-center gap-2 text-[9px] text-white/20 font-bold uppercase tracking-widest justify-center">
                <Phone size={10} />
                Strategic Support Available 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;