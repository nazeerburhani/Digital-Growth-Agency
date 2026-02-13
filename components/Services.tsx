
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ViewType } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (view: ViewType) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-40 lg:py-64 bg-[#050505] relative overflow-hidden">
      <div className="section-container">
        <div className="reveal mb-32 lg:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#0fb9b1] font-black text-[12px] uppercase tracking-[0.8em] mb-10 flex items-center gap-8"
          >
            <div className="w-16 h-[2px] bg-[#0fb9b1]" />
            Bureau Intelligence
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-tighter leading-none text-white"
            >
              Precision <br />
              <span className="gradient-text-teal">Growth Engines.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="text-white/30 max-w-2xl text-xl lg:text-3xl font-light leading-relaxed"
            >
              We bypass conventional models to architect cinematic digital ecosystems that define industry standards.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => onNavigate('detailed-services')}
              className="luxury-service-card group"
            >
              {/* Background Image Layer */}
              <div 
                className="luxury-card-img" 
                style={{ backgroundImage: `url(${service.image})` }} 
              />
              
              {/* Glass Overlay Layer */}
              <div className="luxury-card-overlay" />
              
              {/* Content Layer */}
              <div className="relative z-10 p-12 lg:p-16 h-full flex flex-col">
                <div className="luxury-icon-box">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-10 h-10 transition-all group-hover:scale-110" })}
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-white group-hover:text-[#0fb9b1] transition-colors duration-500 leading-tight tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-white/40 text-lg lg:text-xl mb-12 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-700 flex-grow">
                  {service.description}
                </p>
                
                <div className="luxury-card-link">
                  Deep Dive <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
