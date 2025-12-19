
import React from 'react';
import { motion } from 'framer-motion';
import { Opera } from '../types';
import OperaCard from './OperaCard';
import { OPERE_DATA } from '../data';

interface CollectionProps {
  onSelectOpera: (opera: Opera) => void;
}

const Collection: React.FC<CollectionProps> = ({ onSelectOpera }) => {
  return (
    <section id="collection" className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-3">Esposizione</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900">
              Collezione <br className="sm:hidden" /> <span className="font-serif italic font-normal">2025</span>
            </h3>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-medium leading-relaxed">
            Ogni opera è un pezzo unico numerato, autenticato dal Liceo Artistico per sostenere <span className="text-gray-900 font-bold">famiglie e persone bisognose</span> individuate dal settore <span className="text-gray-900 font-bold">politiche sociali</span> del Comune di Salerno.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {OPERE_DATA.map((opera, index) => (
            <OperaCard 
              key={opera.id} 
              opera={opera} 
              onClick={onSelectOpera} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
