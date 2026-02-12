
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { ViewType } from '../App';

interface PortfolioProps {
  onNavigate: (view: ViewType) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ff6b6b] font-bold text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2"
            >
              <Sparkles size={12} />
              Recent Case Studies
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#121417] mb-5 tracking-tighter leading-none">
              Featured <span className="gradient-text-teal">Works.</span>
            </h2>
            <p className="text-base lg:text-lg text-[#6b7280] font-light leading-relaxed">
              Precision-engineered systems for education and high-growth commerce.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 8 }}
            onClick={() => onNavigate('all-projects')}
            className="flex items-center gap-3 text-[#0fb9b1] font-bold text-sm uppercase tracking-widest group"
          >
            Archive 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onNavigate('all-projects')}
              className="group relative rounded-[24px] lg:rounded-[40px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all border border-gray-100 bg-[#fdfdfd]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 lg:p-10 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[#0fb9b1] font-bold text-[9px] uppercase tracking-[0.2em] mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#121417] tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#121417] group-hover:bg-[#0fb9b1] group-hover:text-white transition-colors border border-gray-100">
                    <ExternalLink size={18} />
                  </div>
                </div>
                <p className="text-[#6b7280] font-light text-sm lg:text-base leading-relaxed line-clamp-2">
                  {project.desc}
                </p>
              </div>

              {/* Advanced Overlay Touch */}
              <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none rounded-[inherit]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;