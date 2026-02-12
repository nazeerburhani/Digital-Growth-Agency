
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Filter } from 'lucide-react';
import { PROJECTS } from '../constants';

interface FullPortfolioProps {
  onBack: () => void;
}

const FullPortfolio: React.FC<FullPortfolioProps> = ({ onBack }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'EdTech Platform', 'SaaS Development', 'E-commerce System', 'Performance Dashboard'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f8faf9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-[#6b7280] hover:text-[#0fb9b1] font-bold mb-16 transition-colors group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <header className="mb-20">
          <h1 className="text-6xl md:text-9xl font-bold text-[#1c1e21] mb-10 tracking-tighter">Case <span className="gradient-text-coral">Archive.</span></h1>
          <p className="text-2xl text-[#6b7280] max-w-2xl font-light leading-relaxed mb-12">
            A deep dive into our most successful digital transformations and high-impact educational launches.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <Filter size={18} className="text-[#6b7280] mr-4" />
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                  filter === c 
                    ? 'bg-[#1c1e21] text-white shadow-xl' 
                    : 'bg-white text-[#6b7280] hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[48px] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-[#1c1e21] px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2">
                      View Live <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
                <div className="p-10 flex-1">
                  <span className="text-[#0fb9b1] font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-[#1c1e21] mb-4 tracking-tight group-hover:text-[#0fb9b1] transition-colors">{project.title}</h3>
                  <p className="text-[#6b7280] font-light leading-relaxed mb-8">
                    Implementing scalable architecture and data-driven marketing hooks for consistent growth.
                  </p>
                  <div className="pt-8 border-t border-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#9ca3af]">Live Now</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#9ca3af]">EST. 2024</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default FullPortfolio;
