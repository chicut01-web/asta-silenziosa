
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm font-bold text-gray-900">Moby Dick ETS</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            In collaborazione con Liceo Artistico Sabatini Menna
          </p>
        </div>
        
        <p className="text-xs text-gray-400 text-center md:text-left">
          © 2025 Progetto di Moby Dick ETS. Realizzato con il sostegno di Sodalis CSV Salerno.
        </p>
        
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Sostieni il Territorio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
