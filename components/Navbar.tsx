
import React from 'react';

interface NavbarProps {
  onBrowse: () => void;
  onParticipate: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBrowse, onParticipate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-5">
        <div className="glass art-shadow rounded-2xl md:rounded-full px-4 md:px-6 py-2 md:py-3 flex justify-between items-center border border-white/50 ring-1 ring-black/5">
          <div className="flex items-center gap-3">
            {/* Logo Container */}
            <div 
              className="w-9 h-9 md:w-11 md:h-11 bg-white border border-gray-100 flex items-center justify-center rounded-lg md:rounded-xl overflow-hidden shadow-inner group cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <img 
                src="https://i.imgur.com/udX3N9P.jpeg$0" 
                alt="Logo Mostra" 
                className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="hidden xs:block">
              <h1 className="text-[10px] md:text-xs font-black uppercase tracking-tighter text-gray-900 leading-none">Liceo Artistico</h1>
              <p className="text-[7px] md:text-[8px] text-yellow-600 font-bold uppercase tracking-[0.2em] mt-0.5">Asta Silenziosa</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-5">
            <button 
              onClick={onBrowse}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-full transition-all"
            >
              Opere
            </button>
            <button 
              onClick={onParticipate}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-full transition-all"
            >
              Partecipa
            </button>
            
            <div className="h-4 w-[1px] bg-gray-200 mx-1"></div>
            
            <div className="px-4 py-2 rounded-full bg-black text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors cursor-default shadow-lg shadow-black/10 hidden sm:block">
              Moby Dick ETS
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
