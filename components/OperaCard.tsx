
import React from 'react';
import { Plus } from 'lucide-react';
import { Opera } from '../types';

interface OperaCardProps {
  opera: Opera;
  onClick: (opera: Opera) => void;
}

const OperaCard: React.FC<OperaCardProps> = ({ opera, onClick }) => {
  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onClick={() => onClick(opera)}
    >
      <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-white art-shadow mb-6">
        <img 
          src={opera.imageUrl} 
          alt={opera.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        
        {/* Overlay info on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
            <Plus className="w-8 h-8 text-black" />
          </div>
        </div>

        <div className="absolute top-6 left-6">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-extrabold tracking-[0.2em] text-black uppercase shadow-sm">
            {opera.type}
          </div>
        </div>
      </div>
      
      <div className="px-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
            {opera.title}
          </h3>
          <p className="text-xl font-bold text-gray-900">{opera.basePrice}€</p>
        </div>
        <p className="text-xs text-gray-400 font-medium tracking-tight line-clamp-2">
          {opera.description}
        </p>
      </div>
    </div>
  );
};

export default OperaCard;
