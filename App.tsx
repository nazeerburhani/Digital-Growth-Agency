
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
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
import { MessageCircle } from 'lucide-react';
import { CONTACT_LINKS } from './constants';

export type ViewType = 'home' | 'project-form' | 'detailed-services' | 'all-projects' | 'quranhub-academy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const navigateTo = (view: ViewType) => setCurrentView(view);

  const pageVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 1.02 }
  };

  const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };

  return (
    <div className="relative antialiased selection:bg-[#0fb9b1] selection:text-white scroll-smooth min-h-screen bg-[#f8faf9]">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#0fb9b1] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Floating WhatsApp Action */}
      <motion.a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm"
      >
        <MessageCircle size={32} />
      </motion.a>

      <Header onNavigate={navigateTo} currentView={currentView} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Hero onNavigate={navigateTo} />
              <Services onNavigate={navigateTo} />
              <QuranHub onNavigate={navigateTo} />
              <Portfolio onNavigate={navigateTo} />
              <Vision />
              <AboutFounder onNavigate={navigateTo} />
              <Process onNavigate={navigateTo} />
              <Testimonials />
              <Contact onNavigate={navigateTo} />
            </motion.div>
          )}

          {currentView === 'project-form' && (
            <motion.div
              key="form"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ProjectForm onBack={() => navigateTo('home')} />
            </motion.div>
          )}

          {currentView === 'detailed-services' && (
            <motion.div
              key="services"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <DetailedServices onBack={() => navigateTo('home')} onContact={() => navigateTo('project-form')} />
            </motion.div>
          )}

          {currentView === 'all-projects' && (
            <motion.div
              key="portfolio"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <FullPortfolio onBack={() => navigateTo('home')} />
            </motion.div>
          )}

          {currentView === 'quranhub-academy' && (
            <motion.div
              key="academy"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <QuranHubAcademy onBack={() => navigateTo('home')} onInquiry={() => navigateTo('project-form')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div 
                className="flex items-center gap-2 mb-6 cursor-pointer"
                onClick={() => navigateTo('home')}
              >
                <div className="w-12 h-12 bg-[#0fb9b1] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-teal-500/20">D</div>
                <span className="text-3xl font-bold tracking-tight text-[#1c1e21]">Digital Growth</span>
              </div>
              <p className="text-[#6b7280] text-xl max-w-sm leading-relaxed font-light">
                Engineering premium digital experiences and academic excellence. Your partner in scaling tomorrow's leaders.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-[#1c1e21] mb-8 uppercase tracking-[0.2em] text-sm">Experience</h4>
              <ul className="space-y-5 text-[#6b7280] text-lg">
                <li><button onClick={() => navigateTo('home')} className="hover:text-[#0fb9b1] transition-colors">The Ecosystem</button></li>
                <li><button onClick={() => navigateTo('detailed-services')} className="hover:text-[#0fb9b1] transition-colors">Our Expertise</button></li>
                <li><button onClick={() => navigateTo('all-projects')} className="hover:text-[#0fb9b1] transition-colors">Case Archive</button></li>
                <li><button onClick={() => navigateTo('quranhub-academy')} className="hover:text-[#0fb9b1] transition-colors">QuranHub Academy</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1c1e21] mb-8 uppercase tracking-[0.2em] text-sm">Contact</h4>
              <ul className="space-y-5 text-[#6b7280] text-lg">
                <li><a href={CONTACT_LINKS.fbNazeer} target="_blank" className="hover:text-[#0fb9b1] transition-colors">Nazeer Ahmad FB</a></li>
                <li><a href={CONTACT_LINKS.fbQuranHub} target="_blank" className="hover:text-[#0fb9b1] transition-colors">QuranHub Academy FB</a></li>
                <li><a href={CONTACT_LINKS.whatsapp} target="_blank" className="hover:text-[#0fb9b1] transition-colors">WhatsApp Concierge</a></li>
                <li><a href={CONTACT_LINKS.email} className="hover:text-[#0fb9b1] transition-colors">Partner with Us</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-sm text-[#6b7280] font-medium uppercase tracking-wider">
              Designed with Precision by <span className="text-[#1c1e21] font-black underline decoration-[#0fb9b1] decoration-2">Nazeer Ahmad</span>
            </p>
            <p className="text-sm text-[#9ca3af] font-medium">
              © {new Date().getFullYear()} Nazeer Digital Agency. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
