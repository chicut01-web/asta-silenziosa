
import React from 'react';
import { X, Ruler, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { Opera } from '../types';
import { OPERE_DATA } from '../data';

interface ModalProps {
  opera: Opera | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const Modal: React.FC<ModalProps> = ({ opera, onClose, onNavigate }) => {
  if (!opera) return null;

  const currentIndex = OPERE_DATA.findIndex(o => o.id === opera.id);
  const total = OPERE_DATA.length;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-[500px] max-h-[95vh] rounded-[32px] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Header bar from screenshot */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <p className="text-sm font-bold text-gray-900">
            Opera {currentIndex + 1} <span className="text-gray-400 font-medium italic">di {total}</span>
          </p>
          <div className="w-9"></div> {/* Spacer for symmetry */}
        </div>

        <div className="overflow-y-auto flex-1">
          {/* Image */}
          <div className="w-full bg-gray-50 flex items-center justify-center overflow-hidden">
            <img 
              src={opera.imageUrl} 
              alt={opera.title}
              className="w-full h-auto object-contain max-h-[300px]"
            />
          </div>

          <div className="p-8">
            {/* Type badge */}
            <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-gray-400 text-[9px] font-bold uppercase tracking-wider mb-4">
              {opera.type}
            </span>

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              {opera.title}
            </h2>

            {/* Description with yellow bar */}
            <div className="flex gap-4 mb-8">
              <div className="w-1 bg-yellow-400 flex-shrink-0"></div>
              <p className="text-sm text-gray-500 leading-relaxed py-1">
                {opera.description}
              </p>
            </div>

            {/* Info blocks: Dimensions and Price */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f9f9f9] p-5 rounded-2xl border border-gray-50">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Ruler className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Dimensioni</span>
                </div>
                <p className="text-sm font-bold text-gray-900">{opera.dimensions}</p>
              </div>

              <div className="bg-[#f9f9f9] p-5 rounded-2xl border border-gray-50">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Base d'asta</span>
                </div>
                <p className="text-xl font-extrabold text-gray-900">{opera.basePrice}€</p>
              </div>
            </div>

            {/* Blue CTA box from screenshot */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 text-center">
              <p className="text-[11px] font-bold text-blue-700 leading-relaxed">
                Interessato? Richiedi il modulo cartaceo per fare un'offerta.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-6 border-t border-gray-100 bg-white grid grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate('prev')}
            className="flex items-center justify-center gap-2 py-4 px-6 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-2xl font-bold text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Precedente
          </button>
          
          <button 
            onClick={() => onNavigate('next')}
            className="flex items-center justify-center gap-2 py-4 px-6 bg-[#1a1a1a] hover:bg-black text-white rounded-2xl font-bold text-sm transition-all"
          >
            Successiva
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
