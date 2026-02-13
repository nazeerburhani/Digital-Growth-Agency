
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ViewType } from '../App';

interface ServicesProps {
  onNavigate: (view: ViewType) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0fb9b1] font-black text-[10px] uppercase tracking-[0.4em] mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-[#1c1e21] mb-5 tracking-tighter"
          >
            Strategic <span className="gradient-text-teal">Expertise.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base lg:text-xl text-[#6b7280] max-w-xl mx-auto leading-relaxed font-light"
          >
            Engineering advanced growth systems to transform your vision into a measurable digital legacy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => onNavigate('detailed-services')}
              className="cursor-pointer p-8 lg:p-10 rounded-[32px] bg-[#f8faf9] border border-gray-100 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0fb9b1]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#0fb9b1] group-hover:text-white transition-all duration-300">
                <div className="scale-75 lg:scale-90">{service.icon}</div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#1c1e21] mb-4 group-hover:text-[#0fb9b1] transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-[#6b7280] leading-relaxed mb-8 font-light">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-[#0fb9b1] font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                Read More <span className="text-lg leading-none">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
