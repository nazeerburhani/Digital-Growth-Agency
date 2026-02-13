import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe, BookOpen, Layers, Target, Mail } from 'lucide-react';
import { ViewType } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'Philosophy', 
      view: 'home' as ViewType, 
      label: 'OUR VISION', 
      desc: 'The core values driving our digital and pedagogical strategy.',
      icon: <Target size={20} className="text-[#0fb9b1]" />
    },
    { 
      name: 'Strategy', 
      view: 'detailed-services' as ViewType, 
      label: 'BUREAU SERVICES', 
      desc: 'High-performance engineering and conversion growth engines.',
      icon: <Globe size={20} className="text-[#0fb9b1]" />
    },
    { 
      name: 'Academy', 
      view: 'quranhub-academy' as ViewType, 
      label: 'QURANHUB PORTAL', 
      desc: 'World-class spiritual and academic mastery programs.',
      icon: <BookOpen size={20} className="text-[#0fb9b1]" />
    },
    { 
      name: 'Archive', 
      view: 'all-projects' as ViewType, 
      label: 'CASE CATALOG', 
      desc: 'A showcase of precision-engineered digital transformations.',
      icon: <Layers size={20} className="text-[#0fb9b1]" />
    },
  ];

  const handleNav = (view: ViewType) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          isScrolled || isMenuOpen
            ? 'py-4 md:py-6 bg-black/80 backdrop-blur-2xl border-b border-white/[0.05]' 
            : 'py-8 md:py-10 bg-transparent'
        }`}
      >
        <div className="section-container flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-11 h-11 md:w-12 md:h-12 bg-white text-black rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all group-hover:bg-[#0fb9b1] group-hover:text-white">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white leading-none">
                Growth <span className="text-[#0fb9b1]">Studio</span>
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 mt-1.5 hidden md:block">Engineering Legacy</span>
            </div>
          </motion.div>

          {/* Desktop Nav - Visible on Laptop and Large Desktop */}
          <nav className="hidden lg:flex items-center gap-14">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.view)}
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative py-2 ${
                  currentView === item.view ? 'text-[#0fb9b1]' : 'text-white/30 hover:text-white'
                }`}
              >
                {item.name}
                {currentView === item.view && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#0fb9b1]"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions & Hamburger */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('project-form')}
              className="hidden md:flex bg-white text-black px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#0fb9b1] hover:text-white transition-all shadow-xl"
            >
              Contact Desk
            </button>
            
            <button 
              className="p-3.5 text-white bg-white/5 rounded-2xl border border-white/10 backdrop-blur-3xl active:scale-90 transition-all hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}><X size={22} /></motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}><Menu size={22} /></motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Modern Refined Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-[500px] bg-[#050505] border-l border-white/5 z-[120] p-10 md:p-16 flex flex-col shadow-[-60px_0_120px_rgba(0,0,0,0.8)]"
            >
              <div className="flex justify-between items-center mb-20">
                <div className="text-[10px] font-black uppercase tracking-[0.6em] text-[#0fb9b1]">Menu Catalog</div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-full bg-white/5 text-white/40 hover:text-white transition-colors border border-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-grow space-y-12">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                    onClick={() => handleNav(item.view)}
                    className="flex items-start gap-8 group w-full text-left"
                  >
                    <div className="w-14 h-14 rounded-[22px] bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all group-hover:bg-[#0fb9b1] group-hover:text-white shadow-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] mb-2 group-hover:text-[#0fb9b1] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-3xl font-display font-bold text-white mb-3 group-hover:translate-x-2 transition-transform tracking-tighter">
                        {item.name}
                      </div>
                      <p className="text-sm text-white/40 font-light leading-relaxed max-w-[280px]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Bottom Catalog Actions */}
              <div className="mt-auto space-y-6 pt-12 border-t border-white/5">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNav('project-form')}
                  className="w-full flex items-center justify-between p-8 rounded-3xl bg-white text-black hover:bg-[#0fb9b1] hover:text-white group transition-all duration-500 shadow-2xl"
                >
                  <div className="flex items-center gap-5">
                    <Mail size={22} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-black text-[12px] uppercase tracking-[0.4em]">Start Inquiry</span>
                  </div>
                  <ArrowRight size={20} className="text-black/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.button>
                
                <div className="flex items-center gap-5 px-2 text-[9px] font-black text-white/10 uppercase tracking-[0.6em] text-center w-full justify-center">
                   <div className="w-10 h-[1px] bg-white/5" />
                   EST. MM XVII
                   <div className="w-10 h-[1px] bg-white/5" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;