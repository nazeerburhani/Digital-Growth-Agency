import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { CONTACT_LINKS } from './constants';
import { ViewType } from './types';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuranHub from './components/QuranHub';
import Portfolio from './components/Portfolio';
import Vision from './components/Vision';
import AboutFounder from './components/AboutFounder';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ProjectForm from './components/ProjectForm';
import DetailedServices from './components/DetailedServices';
import FullPortfolio from './components/FullPortfolio';
import QuranHubAcademy from './components/QuranHubAcademy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const navigateTo = (view: ViewType) => setCurrentView(view);

  return (
    <div className="relative min-h-screen bg-[#050505] font-sans overflow-x-hidden">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden text-white/5 opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#0fb9b1]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#ff6b6b]/5 rounded-full blur-[150px]" />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0fb9b1] to-[#ff6b6b] origin-left z-[110]"
        style={{ scaleX }}
      />

      <Header onNavigate={navigateTo} currentView={currentView} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentView === 'home' && (
              <>
                <Hero onNavigate={navigateTo} />
                <Services onNavigate={navigateTo} />
                <Portfolio onNavigate={navigateTo} />
                <Vision />
                <QuranHub onNavigate={navigateTo} />
                <AboutFounder onNavigate={navigateTo} />
                <Process onNavigate={navigateTo} />
                <Testimonials />
                <Contact onNavigate={navigateTo} />
              </>
            )}

            {currentView === 'project-form' && <ProjectForm onBack={() => navigateTo('home')} />}
            {currentView === 'detailed-services' && <DetailedServices onBack={() => navigateTo('home')} onContact={() => navigateTo('project-form')} />}
            {currentView === 'all-projects' && <FullPortfolio onBack={() => navigateTo('home')} />}
            {currentView === 'quranhub-academy' && <QuranHubAcademy onBack={() => navigateTo('home')} onInquiry={() => navigateTo('project-form')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-[#080808] border-t border-white/[0.03] py-24 px-8 sm:px-12 relative z-10">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="md:col-span-2">
              <div 
                className="flex items-center gap-4 mb-8 cursor-pointer group"
                onClick={() => navigateTo('home')}
              >
                <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center font-black text-2xl shadow-2xl transition-all group-hover:scale-110 group-hover:bg-[#0fb9b1] group-hover:text-white">N</div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-black tracking-tighter text-white">Growth <span className="text-[#0fb9b1]">Bureau</span></span>
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 mt-1.5">Mastery Engineering</span>
                </div>
              </div>
              <p className="text-white/30 text-xl max-w-sm font-light leading-relaxed mb-10">
                Engineering high-performance digital systems and academic mastery for the global vanguard.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-[0.6em] text-white/20 mb-10">Navigation</h4>
              <ul className="space-y-5 text-white/40 font-medium text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-[#0fb9b1] transition-colors uppercase tracking-widest">Philosophy</button></li>
                <li><button onClick={() => navigateTo('detailed-services')} className="hover:text-[#0fb9b1] transition-colors uppercase tracking-widest">Strategy</button></li>
                <li><button onClick={() => navigateTo('quranhub-academy')} className="hover:text-[#0fb9b1] transition-colors uppercase tracking-widest">Academy</button></li>
                <li><button onClick={() => navigateTo('all-projects')} className="hover:text-[#0fb9b1] transition-colors uppercase tracking-widest">Archive</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-[0.6em] text-white/20 mb-10">Bureau Direct</h4>
              <ul className="space-y-5 text-white/40 font-medium text-sm">
                <li><a href={CONTACT_LINKS.fbNazeer} target="_blank" rel="noreferrer" className="hover:text-[#0fb9b1] uppercase tracking-widest">Facebook Archive</a></li>
                <li><a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#0fb9b1] uppercase tracking-widest">WhatsApp Concierge</a></li>
                <li><a href={CONTACT_LINKS.email} className="hover:text-[#0fb9b1] uppercase tracking-widest">Bureau Mail</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-20 mt-20 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-white/20 font-black uppercase tracking-[0.6em]">
             <p>© {new Date().getFullYear()} Nazeer Ahmad. Crafted for the top 0.1%.</p>
             <p>Legacy Architected Globally</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;