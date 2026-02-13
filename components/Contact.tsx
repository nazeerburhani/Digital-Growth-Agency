import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS } from '../constants';
import { Facebook, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
// Changed import from '../App' to '../types' as App.tsx was removed
import { ViewType } from '../types';

interface ContactProps {
  onNavigate: (view: ViewType) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <section id="contact" className="py-24 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-gradient-to-br from-[#1c1e21] to-[#2c3e50] rounded-[80px] p-12 lg:p-24 text-center relative overflow-hidden shadow-[0_100px_100px_-50px_rgba(0,0,0,0.4)]"
      >
        {/* Animated Light Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#0fb9b1]/20 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#ff6b6b]/10 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-sm mb-12 border border-white/10"
          >
            Available for New Projects & Consultations
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[1.05] tracking-tight">
            Ready to <span className="gradient-text-teal">Scale</span> or Start Learning?
          </h2>
          
          <p className="text-2xl text-white/60 mb-16 leading-relaxed max-w-2xl mx-auto font-light">
            Whether you're a brand seeking digital dominance or a student aiming for excellence, the journey starts with a simple conversation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              whileHover={{ y: -10, backgroundColor: "rgba(37, 211, 102, 0.2)" }}
              className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col items-center gap-4 transition-all group"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37, 211, 102, 0.4)]">
                <MessageCircle size={28} />
              </div>
              <span className="text-white font-bold text-lg">WhatsApp Concierge</span>
              <span className="text-white/40 text-sm group-hover:text-white/80 transition-colors">Immediate Response</span>
            </motion.a>

            <motion.a
              href={CONTACT_LINKS.email}
              whileHover={{ y: -10, backgroundColor: "rgba(15, 185, 177, 0.2)" }}
              className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col items-center gap-4 transition-all group"
            >
              <div className="w-14 h-14 bg-[#0fb9b1] rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(15, 185, 177, 0.4)]">
                <Mail size={28} />
              </div>
              <span className="text-white font-bold text-lg">Business Inquiry</span>
              <span className="text-white/40 text-sm group-hover:text-white/80 transition-colors">Open Mailer Desk</span>
            </motion.a>

            <motion.a
              href={CONTACT_LINKS.fbNazeer}
              target="_blank"
              whileHover={{ y: -10, backgroundColor: "rgba(24, 119, 242, 0.2)" }}
              className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col items-center gap-4 transition-all group"
            >
              <div className="w-14 h-14 bg-[#1877F2] rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(24, 119, 242, 0.4)]">
                <Facebook size={28} />
              </div>
              <span className="text-white font-bold text-lg">Direct Facebook</span>
              <span className="text-white/40 text-sm group-hover:text-white/80 transition-colors">Personal Portfolio</span>
            </motion.a>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              onClick={() => onNavigate('project-form')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0fb9b1] text-white px-12 py-6 rounded-[30px] font-black text-2xl flex items-center gap-3 shadow-2xl shadow-teal-500/20 group"
            >
              Work With Nazeer
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;