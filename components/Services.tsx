import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ViewType } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ServicesProps {
  onNavigate: (view: ViewType) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section className="py-40 lg:py-60 px-6 bg-[#050505] relative overflow-hidden">
      <div className="section-container">
        <div className="mb-24 lg:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0fb9b1] font-black text-[11px] uppercase tracking-[0.7em] mb-8 flex items-center gap-6"
          >
            <div className="w-14 h-[1px] bg-[#0fb9b1]" />
            Elite Bureau Capabilities
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none"
            >
              Strategic <br />
              <span className="gradient-text-teal">Impact Engines.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="text-white/30 max-w-xl text-xl lg:text-2xl font-light leading-relaxed"
            >
              We bypass conventional agency models to architect high-performance digital systems that dominate their niche.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1 }}
              onClick={() => onNavigate('detailed-services')}
              className="group bg-white/[0.02] border border-white/5 p-12 lg:p-16 rounded-[60px] cursor-pointer relative overflow-hidden flex flex-col h-full hover:bg-white/[0.05] transition-all duration-700 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0fb9b1]/10 rounded-full blur-[100px] group-hover:bg-[#0fb9b1]/15 transition-colors duration-700" />
              
              <div className="w-20 h-20 rounded-[30px] bg-white/[0.05] border border-white/10 flex items-center justify-center mb-12 group-hover:bg-[#0fb9b1] group-hover:text-white transition-all duration-700 shadow-3xl">
                <div className="scale-125">{service.icon}</div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight group-hover:text-[#0fb9b1] transition-colors duration-500 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-white/30 text-lg lg:text-xl mb-14 font-light leading-relaxed group-hover:text-white/50 transition-colors duration-500 flex-grow">
                {service.description}
              </p>
              
              <div className="flex items-center gap-4 text-[#0fb9b1] font-bold text-[11px] uppercase tracking-[0.5em] group-hover:translate-x-3 transition-transform duration-700">
                Deep Dive <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;