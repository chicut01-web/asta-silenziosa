
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gavel, Clock, MapPin, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onBrowse: () => void;
  onParticipate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowse, onParticipate }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const titleWord = "ASTA D'ARTE".split("");
  const italicWord = "SILENZIOSA".split("");

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-32 pb-16">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(252,252,252,1)_100%)]"></div>
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-400/10 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]), opacity }}
        className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center w-full">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white art-shadow border border-yellow-500/20 rounded-full overflow-hidden group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-yellow-600" />
            </motion.div>
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-yellow-700">
              20 di opportunità
            </p>
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent w-1/3 -skew-x-12"
            />
          </div>
        </motion.div>

        {/* Cinematic Title Reveal */}
        <div className="mb-10 select-none">
          <h1 className="text-6xl md:text-[8.5rem] font-black tracking-tighter text-gray-900 leading-[0.8] drop-shadow-sm flex flex-wrap justify-center gap-x-6">
            <motion.span className="flex">
              {titleWord.map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                >
                  {l === " " ? "\u00A0" : l}
                </motion.span>
              ))}
            </motion.span>
            <br className="hidden md:block w-full" />
            <motion.span className="font-serif italic text-yellow-500 font-normal flex">
              {italicWord.map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                >
                  {l}
                </motion.span>
              ))}
            </motion.span>
          </h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-medium">
            Un progetto di <span className="text-black font-bold">Moby Dick ETS</span> in collaborazione con il <span className="text-black font-bold">Liceo Artistico Sabatini Menna di Salerno</span>, nell'ambito delle micro azioni natalizie 2025 promosse da <span className="text-black font-bold">Sodalis CSV Salerno</span>. Undici opere uniche per trasformare l'arte in un <span className="text-black font-bold">gesto concreto di solidarietà</span>.
          </p>
        </motion.div>

        {/* Interactive Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBrowse}
            className="group w-full sm:w-auto px-14 py-6 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all flex items-center justify-center gap-4 overflow-hidden relative"
          >
            <span className="relative z-10">Esplora il Catalogo</span>
            <Gavel className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <motion.div 
              className="absolute inset-0 bg-yellow-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -5, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
            onClick={onParticipate}
            className="group w-full sm:w-auto px-14 py-6 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            Come Partecipare
          </motion.button>
        </motion.div>

        {/* Feature Grid with Hover Parallax */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full max-w-5xl border-t border-gray-100 pt-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 items-center">
            {[
              { icon: Calendar, label: "Data", value: "19 Dicembre 2025", color: "text-yellow-600", bg: "bg-yellow-50" },
              { icon: Clock, label: "Orario", value: "Ore 20:00", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: MapPin, label: "Location", value: "Grand Hotel Salerno", color: "text-gray-600", bg: "bg-gray-50" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.3em] mb-1">{item.label}</p>
                  <p className="text-lg font-black text-gray-900 leading-none">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
