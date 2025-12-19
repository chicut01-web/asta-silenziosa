
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, CheckCircle, Copy, Banknote } from 'lucide-react';

const Participation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const iban = "IT61F0306909606100000136373";

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to" className="py-48 px-4 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[11px] font-black text-yellow-500 uppercase tracking-[0.4em] mb-8">Guida al Dono</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-10 leading-[0.9]">
              Il Valore <br /> <span className="font-serif italic font-normal text-gray-400">del Tuo Gesto</span>
            </h3>
            <p className="text-2xl text-gray-400 leading-relaxed max-w-lg mb-14 font-medium">
              L'intero ricavato dell'asta sarà destinato al supporto di <span className="text-black font-bold">famiglie e persone bisognose</span>, individuate attraverso il settore <span className="text-black font-bold">politiche sociali</span> del Comune di Salerno.
            </p>
            
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-8"
            >
              <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white">
                <Heart className="w-10 h-10 text-red-500 fill-red-50 animate-pulse" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-xl tracking-tight">Solidarietà Territoriale</p>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">Comunità di Salerno</p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="space-y-8">
            {[
              { num: 1, title: "Compila il Biglietto", desc: "Ogni partecipante troverà una busta bianca sul proprio tavolo. Scrivi il tuo Nome e Cognome, il numero dell'opera scelta e l'importo della tua offerta." },
              { num: 2, title: "Inserisci nella Busta", desc: "Una volta compilato, inserisci il biglietto nella busta predisposta e depositala nell’urna delle offerte. La tua offerta rimarrà segreta fino al termine dell’asta." },
              { num: 3, title: "L'Aggiudicazione", desc: "A fine asta le buste verranno aperte: chi avrà presentato l'offerta più alta si aggiudicherà l'opera d'arte." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white p-10 md:p-12 rounded-[48px] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-white relative overflow-hidden group"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-50 rounded-full group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
                <div className="relative z-10 flex gap-8">
                  <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-xl transform group-hover:rotate-6 transition-transform">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{step.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium text-lg">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium Banking section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="bg-[#0a0a0a] text-white rounded-[70px] p-10 md:p-24 relative overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.4)]"
        >
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px]"
          />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full mb-10 backdrop-blur-2xl border border-white/10"
              >
                <Banknote className="w-5 h-5 text-yellow-400" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Banking Experience</span>
              </motion.div>
              <h4 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">Sostieni <br className="hidden md:block" /> <span className="text-yellow-500">Salerno</span></h4>
              <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-md font-medium">
                Il tuo contributo andrà direttamente a finanziare aiuti concreti per i cittadini più fragili del nostro territorio.
              </p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 border border-white/10 rounded-[56px] p-10 md:p-14 backdrop-blur-3xl cursor-pointer transition-all duration-700 group relative overflow-hidden ring-1 ring-white/10"
              onClick={handleCopyIBAN}
            >
              <div className="space-y-10 relative z-10">
                <div>
                  <label className="text-[11px] uppercase font-black text-yellow-500/60 tracking-[0.4em] block mb-4">Beneficiario</label>
                  <p className="text-4xl md:text-5xl font-black tracking-tight">Moby Dick ETS</p>
                </div>
                
                <div>
                  <label className="text-[11px] uppercase font-black text-yellow-500/60 tracking-[0.4em] block mb-4">Codice IBAN</label>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <p className="text-xl md:text-2xl font-mono tracking-tighter break-all bg-black/40 px-6 py-6 rounded-3xl border border-white/10 w-full font-bold group-hover:border-yellow-500/50 transition-colors">
                      {iban}
                    </p>
                    <motion.div 
                      animate={copied ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
                      className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(234,179,8,0.3)] transition-all group-hover:bg-yellow-400"
                    >
                      {copied ? <CheckCircle className="w-8 h-8" /> : <Copy className="w-8 h-8" />}
                    </motion.div>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <label className="text-[11px] uppercase font-black text-yellow-500/60 tracking-[0.4em] block mb-2">Causale suggerita</label>
                    <p className="text-2xl font-black tracking-tight">Donazione</p>
                  </div>
                  <motion.p 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xs italic text-gray-500 font-bold uppercase tracking-widest hidden sm:block"
                  >
                    Tocca per copiare
                  </motion.p>
                </div>
              </div>
              
              {/* Reflected Light Effect */}
              <motion.div 
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] pointer-events-none"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Participation;
