
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { ViewType } from '../App';
import { Rocket } from 'lucide-react';

interface ProcessProps {
  onNavigate: (view: ViewType) => void;
}

const Process: React.FC<ProcessProps> = ({ onNavigate }) => {
  return (
    <section id="process" className="py-24 bg-[#eef7f5] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c1e21] mb-6">Our Success <span className="text-[#ff6b6b]">Framework</span></h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            A battle-tested 4-step process designed to take projects from initial vision to massive scale.
          </p>
        </div>

        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-[#0fb9b1] -translate-y-1/2 hidden lg:block origin-left z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 rounded-[36px] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0fb9b1] text-white flex items-center justify-center mb-8 shadow-lg shadow-teal-100 group-hover:rotate-[15deg] transition-transform">
                  {step.icon}
                </div>
                <div className="absolute top-4 right-8 text-6xl font-black text-gray-50 -z-10 group-hover:text-[#eef7f5] transition-colors">
                  0{step.id}
                </div>
                <h3 className="text-2xl font-bold text-[#1c1e21] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={() => onNavigate('project-form')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0fb9b1] text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 shadow-xl shadow-teal-500/10"
          >
            Start Your Journey
            <Rocket size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Process;
