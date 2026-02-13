
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_LINKS } from './constants';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuranHub from './components/QuranHub';
import Portfolio from './components/Portfolio';
import AboutFounder from './components/AboutFounder';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ProjectForm from './components/ProjectForm';
import DetailedServices from './components/DetailedServices';
import FullPortfolio from './components/FullPortfolio';
import QuranHubAcademy from './components/QuranHubAcademy';
import Vision from './components/Vision';

export type ViewType = 'home' | 'project-form' | 'detailed-services' | 'all-projects' | 'quranhub-academy';

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

  const viewVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="relative min-h-screen">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#0fb9b1] origin-left z-[100]"
        style={{ scaleX }}
      />

      <motion.a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[90] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm"
      >
        <MessageCircle size={30} />
      </motion.a>

      <Header onNavigate={navigateTo} currentView={currentView} />
      
      <main className="pt-20 lg:pt-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            variants={viewVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {currentView === 'home' && (
              <>
                <Hero onNavigate={navigateTo} />
                <Services onNavigate={navigateTo} />
                <QuranHub onNavigate={navigateTo} />
                <Portfolio onNavigate={navigateTo} />
                <Vision />
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

      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div 
                className="flex items-center gap-3 mb-6 cursor-pointer group"
                onClick={() => navigateTo('home')}
              >
                <div className="w-10 h-10 bg-[#0fb9b1] rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">D</div>
                <span className="text-2xl font-bold tracking-tight">Digital Growth</span>
              </div>
              <p className="text-gray-500 text-lg max-w-sm font-light">
                Premium digital experiences and academic mastery. Engineering the leaders of tomorrow.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Expertise</h4>
              <ul className="space-y-4 text-gray-600">
                <li><button onClick={() => navigateTo('detailed-services')} className="hover:text-[#0fb9b1] transition-colors">Development</button></li>
                <li><button onClick={() => navigateTo('all-projects')} className="hover:text-[#0fb9b1] transition-colors">Portfolio</button></li>
                <li><button onClick={() => navigateTo('quranhub-academy')} className="hover:text-[#0fb9b1] transition-colors">QuranHub Academy</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Connect</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href={CONTACT_LINKS.fbNazeer} target="_blank" className="hover:text-[#0fb9b1]">Facebook</a></li>
                <li><a href={CONTACT_LINKS.whatsapp} target="_blank" className="hover:text-[#0fb9b1]">WhatsApp</a></li>
                <li><a href={CONTACT_LINKS.email} className="hover:text-[#0fb9b1]">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
             <p>© {new Date().getFullYear()} Nazeer Ahmad. Crafted with precision.</p>
             <p className="uppercase tracking-widest font-bold text-[10px]">Scale Your Vision</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
