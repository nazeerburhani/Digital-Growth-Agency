
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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[95] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-[#0fb9b1] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-500/20">D</div>
            <span className="text-xl font-bold tracking-tight text-[#1c1e21]">
              Digital <span className="text-[#0fb9b1]">Growth</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.view)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative group ${
                  currentView === item.view ? 'text-[#0fb9b1]' : 'text-gray-400 hover:text-[#1c1e21]'
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

          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('project-form')}
              className="hidden sm:block bg-[#1c1e21] text-white px-7 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-xl hover:bg-[#0fb9b1] transition-all"
            >
              Start Project
            </button>
            <button 
              className="lg:hidden p-2 text-[#1c1e21]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[96] p-10 flex flex-col justify-center"
          >
            <button 
              className="absolute top-8 right-8 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-5xl font-bold tracking-tighter"
                >
                  {item.name}
                  <ArrowRight size={32} className="text-[#0fb9b1]" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
