
import React from 'react';
import { X, Gavel, Info } from 'lucide-react';
import { Opera } from '../types';

interface ModalProps {
  opera: Opera | null;
  onClose: () => void;
  onBid: () => void;
}

const Modal: React.FC<ModalProps> = ({ opera, onClose, onBid }) => {
  if (!opera) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-12">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white md:text-black md:bg-gray-100 md:hover:bg-gray-200 transition-all flex items-center justify-center"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image side */}
        <div className="w-full md:w-1/2 bg-gray-100 overflow-hidden h-[300px] md:h-auto">
          <img 
            src={opera.imageUrl} 
            alt={opera.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content side */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col overflow-y-auto">
          <div className="mb-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-50 text-yellow-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-yellow-100">
              {opera.type}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
              {opera.title}
            </h2>
            <div className="w-12 h-1 bg-yellow-400 mb-8"></div>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              {opera.description}
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Base d'asta attuale</p>
              <p className="text-4xl font-extrabold text-gray-900">{opera.basePrice}€</p>
            </div>
            
            <button 
              onClick={() => {
                onBid();
                onClose();
              }}
              className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              Fai la tua offerta
              <Gavel className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
