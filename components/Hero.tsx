
import React from 'react';
import { Gavel, Clock, MapPin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBrowse: () => void;
  onParticipate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowse, onParticipate }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-24 pb-12">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(252,252,252,1)_100%)]"></div>
      <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-yellow-400/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[80px] animate-pulse delay-700"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 stagger-in flex flex-col items-center">
        {/* Titolo Principale - Più compatto e leggibile */}
        <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter text-gray-900 mb-6 leading-[0.85] drop-shadow-sm" style={{ animationDelay: '0.1s' }}>
          ASTA D'ARTE <br className="hidden md:block" />
          <span className="font-serif italic text-yellow-500 font-normal">SILENZIOSA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 font-medium" style={{ animationDelay: '0.2s' }}>
          Un'asta d'arte esclusiva dove ogni pennellata diventa speranza. <br className="hidden sm:block" /> Undici visioni uniche presentate dal <span className="text-black font-bold">Liceo Artistico</span> per un futuro di solidarietà.
        </p>

        {/* Pulsanti di Azione - Spazi ottimizzati */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={onBrowse}
            className="group px-10 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-black/20 transition-all flex items-center justify-center gap-4 overflow-hidden relative"
          >
            <span className="relative z-10">Esplora il Catalogo</span>
            <Gavel className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-yellow-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          
          <button 
            onClick={onParticipate}
            className="group px-10 py-5 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Come Donare
          </button>
        </div>

        {/* Dettagli Evento - Più eleganti e meno dispersivi */}
        <div className="w-full max-w-3xl border-t border-gray-100 pt-10 mt-4" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em]">Orario Evento</p>
                <p className="text-base font-black text-gray-900 leading-none mt-1">Ore 22:00</p>
              </div>
            </div>
            
            <div className="hidden sm:block h-12 w-[1px] bg-gray-100"></div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em]">Location</p>
                <p className="text-base font-black text-gray-900 leading-none mt-1">Grand Hotel Salerno</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <button 
              onClick={onBrowse}
              className="flex flex-col items-center gap-3 group"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] font-black text-gray-300 group-hover:text-yellow-500 transition-colors">Scorri le opere</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-gray-200 to-transparent group-hover:from-yellow-500 transition-all"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
