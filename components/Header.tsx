
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface HeaderProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', view: 'home' as ViewType },
    { name: 'Services', view: 'detailed-services' as ViewType },
    { name: 'Academy', view: 'quranhub-academy' as ViewType },
    { name: 'Portfolio', view: 'all-projects' as ViewType },
  ];

  const handleNavClick = (view: ViewType, hash?: string) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[95] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 lg:py-4' 
            : 'bg-transparent py-5 lg:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0fb9b1] rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-bold text-xl lg:text-2xl shadow-xl shadow-teal-500/20"
            >
              D
            </motion.div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-[#1c1e21] group-hover:text-[#0fb9b1] transition-colors">
              Digital <span className="text-[#0fb9b1]">Growth</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-10 font-bold uppercase tracking-widest text-[11px]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.view)}
                className={`transition-all relative group py-2 ${
                  currentView === item.view ? 'text-[#0fb9b1]' : 'text-[#1c1e21]/60 hover:text-[#0fb9b1]'
                }`}
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#0fb9b1]"
                  initial={false}
                  animate={{ width: currentView === item.view ? '100%' : '0%' }}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('project-form')}
              className="hidden sm:flex bg-[#1c1e21] text-white px-6 lg:px-8 py-2.5 lg:py-3.5 rounded-xl lg:rounded-2xl font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#0fb9b1] transition-colors"
            >
              Contact
            </motion.button>
            
            <button 
              className="lg:hidden p-2.5 rounded-xl bg-gray-50 text-[#1c1e21] hover:bg-gray-100 transition-colors border border-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] sm:w-[60%] bg-white z-[96] lg:hidden shadow-2xl p-8 pt-24 flex flex-col"
            >
              <div className="space-y-6 flex-1">
                <p className="text-[#0fb9b1] font-black text-[10px] uppercase tracking-[0.3em] mb-10">Navigation</p>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.view)}
                    className={`flex items-center justify-between w-full text-4xl font-bold tracking-tighter transition-colors ${
                      currentView === item.view ? 'text-[#0fb9b1]' : 'text-[#1c1e21]'
                    }`}
                  >
                    {item.name}
                    <ArrowRight size={24} className={currentView === item.view ? 'opacity-100' : 'opacity-20'} />
                  </button>
                ))}
              </div>

              <div className="mt-auto space-y-6 pt-10 border-t border-gray-100">
                <button
                  onClick={() => handleNavClick('project-form')}
                  className="w-full bg-[#1c1e21] text-white py-6 rounded-[30px] font-black text-xl flex items-center justify-center gap-3 shadow-2xl"
                >
                  Start Project
                </button>
                <div className="flex justify-center gap-6">
                  {['FB', 'WA', 'IG'].map(s => (
                    <span key={s} className="text-xs font-black text-gray-300 tracking-widest">{s}</span>
                  ))}
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
