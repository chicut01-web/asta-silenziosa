
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface NavbarProps {
  onBrowse: () => void;
  onParticipate: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBrowse, onParticipate }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[150] pointer-events-none"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[3px] bg-yellow-500 origin-left z-[160]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className={`
          glass rounded-[28px] md:rounded-full px-5 py-3 
          flex justify-between items-center border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)]
          transition-all duration-700 pointer-events-auto
          ${scrolled ? 'bg-white/90 translate-y-[-10px] scale-[0.98] shadow-[0_20px_40px_rgba(0,0,0,0.08)]' : 'bg-white/40'}
        `}>
          
          {/* Brand - Liceo Sabatini Menna */}
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white border border-gray-100 flex items-center justify-center rounded-2xl overflow-hidden shadow-sm cursor-pointer ring-4 ring-black/5" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <img 
                src="https://i.imgur.com/udX3N9P.jpeg" 
                alt="Logo Liceo" 
                className="w-full h-full object-contain p-1"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xs font-black uppercase tracking-tighter text-gray-900 leading-none">Liceo Sabatini Menna</h1>
              <p className="text-[8px] text-yellow-600 font-bold uppercase tracking-[0.25em] mt-1">Asta Silenziosa 2025</p>
            </div>
          </div>
          
          {/* Nav Links */}
          <div className="flex items-center gap-2">
            {['Opere', 'Partecipa'].map((item, i) => (
              <motion.button 
                key={item}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.04)" }}
                whileTap={{ scale: 0.95 }}
                onClick={i === 0 ? onBrowse : onParticipate}
                className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-black px-6 py-2.5 rounded-full transition-all"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Right Brand - Moby Dick */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 bg-white border border-gray-100 flex items-center justify-center rounded-2xl overflow-hidden shadow-sm ring-4 ring-black/5">
              <img 
                src="https://i.imgur.com/jLxdbGd.png" 
                alt="Logo Moby Dick" 
                className="w-full h-full object-contain p-1"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
