
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, CheckCircle2, MessageSquare, Mail, Phone } from 'lucide-react';
import { CONTACT_LINKS } from '../constants';

interface ProjectFormProps {
  onBack: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#f8faf9] py-8 lg:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-[#6b7280] hover:text-[#0fb9b1] font-bold mb-8 transition-colors group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <div className="bg-white rounded-[40px] lg:rounded-[60px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="flex-[1.5] p-8 lg:p-16">
            <header className="mb-10">
              <span className="text-[#0fb9b1] font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Application Gateway</span>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1c1e21] mb-3 tracking-tight">Let's Build Your <span className="gradient-text-teal">Future.</span></h1>
              <p className="text-[#6b7280] text-base lg:text-lg font-light">Select your path—be it digital growth or academic mastery.</p>
            </header>

            <form className="space-y-6 lg:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Interest / Service Needed</label>
                <select className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base appearance-none cursor-pointer">
                  <optgroup label="Digital Growth Services">
                    <option>Web Development & Architecture</option>
                    <option>E-commerce Brand Launch</option>
                    <option>Performance Marketing Scaling</option>
                  </optgroup>
                  <optgroup label="QuranHub Academic Programs">
                    <option>Quran with Tajweed (Beginner to Advanced)</option>
                    <option>Hifz-ul-Quran (Memorization Program)</option>
                    <option>Islamic Studies & Fiqh</option>
                    <option>Mathematics Mastery (K-12)</option>
                    <option>Physics Excellence (O/A Levels)</option>
                    <option>General Science & STEM</option>
                  </optgroup>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#1c1e21] uppercase tracking-wider">Project / Learning Details</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your background, goals, or current learning stage..."
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#0fb9b1] focus:ring-4 focus:ring-[#0fb9b1]/5 outline-none transition-all text-base"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(15, 185, 177, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#0fb9b1] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl"
              >
                Submit Inquiry
                <Send size={18} />
              </motion.button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex-1 bg-gradient-to-br from-[#1c1e21] to-[#2c3e50] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col">
            <Sparkles className="absolute -top-10 -right-10 w-40 h-40 text-white/5" />
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">Partnership Value</h3>
              <ul className="space-y-6 flex-1">
                {[
                  "7+ years of global excellence",
                  "Personalized curriculum design",
                  "Elite industry-standard tech stack",
                  "Data-driven growth & scaling"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0fb9b1] shrink-0 mt-1" size={18} />
                    <span className="text-white/80 text-sm lg:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 lg:mt-auto pt-8 border-t border-white/10 space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Direct Support</p>
                
                <motion.a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/10 backdrop-blur-md hover:bg-[#0fb9b1] transition-all p-4 rounded-xl flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center text-white shadow-lg">
                    <MessageSquare size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white/60 group-hover:text-white/80 uppercase tracking-tighter">Chat Now</p>
                    <p className="text-sm font-bold">WhatsApp Concierge</p>
                  </div>
                </motion.a>

                <motion.a
                  href={CONTACT_LINKS.email}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all p-4 rounded-xl flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#0fb9b1] rounded-lg flex items-center justify-center text-white shadow-lg">
                    <Mail size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white/60 group-hover:text-white/80 uppercase tracking-tighter">Send Email</p>
                    <p className="text-sm font-bold truncate max-w-[140px]">{CONTACT_LINKS.emailRaw}</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-2 text-[10px] text-white/30 font-bold uppercase tracking-widest justify-center pt-2">
                  <Phone size={10} />
                  Available 24/7 for Elite Partners
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
