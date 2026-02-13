import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { ViewType } from '../types';
import { Rocket } from 'lucide-react';

interface ProcessProps {
  onNavigate: (view: ViewType) => void;
}

const Process: React.FC<ProcessProps> = ({ onNavigate }) => {
  return (
    <section id="process" className="py-40 lg:py-64 bg-[#0a0a0c] px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="section-container">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#0fb9b1] font-black text-[12px] uppercase tracking-[0.8em] mb-10"
          >
            Operational Framework
          </motion.div>
          <h2 className="text-6xl md:text-8xl lg:text-[100px] font-bold text-white mb-10 tracking-tighter leading-none">
            Success <span className="gradient-text-teal">Logistics.</span>
          </h2>
          <p className="text-2xl text-white/30 max-w-2xl mx-auto font-light leading-relaxed">
            A battle-tested 4-step framework designed to take high-stakes projects from zero to market dominance.
          </p>
        </div>

        <div className="relative mb-32">
          {/* Central Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="bg-white/[0.03] p-12 lg:p-14 rounded-[60px] border border-white/5 hover:border-[#0fb9b1]/40 transition-all duration-700 flex flex-col items-center text-center group backdrop-blur-3xl"
              >
                <div className="w-24 h-24 rounded-[35px] bg-[#0fb9b1]/10 text-[#0fb9b1] flex items-center justify-center mb-12 shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:bg-[#0fb9b1] group-hover:text-white">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 36 })}
                </div>
                
                <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.02] -z-10 group-hover:text-[#0fb9b1]/5 transition-colors duration-1000">
                  0{step.id}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/30 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-700">
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
            className="btn-primary"
          >
            Initiate Deployment
            <Rocket size={24} className="animate-pulse" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Process;