
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plus, Maximize2 } from 'lucide-react';
import { Opera } from '../types';

interface OperaCardProps {
  opera: Opera;
  onClick: (opera: Opera) => void;
}

const OperaCard: React.FC<OperaCardProps> = ({ opera, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(opera)}
      style={{
        perspective: "1000px"
      }}
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] mb-8 ring-1 ring-black/5 cursor-pointer"
      >
        <motion.img 
          src={opera.imageUrl} 
          alt={opera.title}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          style={{ transform: "translateZ(0px)" }}
        />
        
        {/* Advanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[1px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl"
              style={{ transform: "translateZ(50px)" }}
            >
              <Maximize2 className="w-6 h-6 text-black" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8 text-white" style={{ transform: "translateZ(30px)" }}>
            <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 mb-1">Visualizza Dettagli</p>
            <h4 className="text-2xl font-bold tracking-tight">Esplora Opera</h4>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-8 left-8" style={{ transform: "translateZ(40px)" }}>
          <motion.div 
            whileHover={{ y: -2 }}
            className="bg-white/95 backdrop-blur-xl px-4 py-1.5 rounded-2xl text-[10px] font-black tracking-[0.25em] text-black uppercase shadow-lg border border-white/50"
          >
            {opera.type}
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="px-4"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="flex justify-between items-end mb-3">
          <h3 className="text-2xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors tracking-tight">
            {opera.title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Da</span>
            <p className="text-2xl font-black text-gray-900 leading-none">{opera.basePrice}€</p>
          </div>
        </div>
        <div className="h-px w-full bg-gray-100 mb-3 group-hover:w-full w-12 transition-all duration-700"></div>
        <p className="text-sm text-gray-400 font-medium leading-relaxed line-clamp-2">
          {opera.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default OperaCard;
