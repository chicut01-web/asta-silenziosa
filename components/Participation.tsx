
import React, { useState } from 'react';
import { Heart, CheckCircle, Copy, Banknote, Users } from 'lucide-react';

const Participation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const iban = "IT61F0306909606100000136373";

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to" className="py-40 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-6">Guida al Dono</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-8">
              Il Valore <br /> <span className="font-serif italic font-normal">del Tuo Gesto</span>
            </h3>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg mb-12">
              L'intero ricavato dell'asta sarà destinato al supporto di <span className="text-black font-bold">famiglie e persone bisognose</span>, individuate attraverso il settore <span className="text-black font-bold">politiche sociali</span> del Comune di Salerno.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center art-shadow">
                <span className="w-8 h-8 flex items-center justify-center"><Heart className="text-blue-600" /></span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Solidarietà Territoriale</p>
                <p className="text-sm text-gray-400 font-medium">Uniti per la comunità di Salerno</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-[40px] art-shadow border border-white relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-extrabold text-gray-900 mb-3">Compila il Biglietto</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">Ogni partecipante troverà una busta bianca sul proprio tavolo. Scrivi il tuo <span className="text-black font-bold">Nome e Cognome</span>, il numero delll'opera scelta e l'importo della tua offerta.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[40px] art-shadow border border-white relative overflow-hidden group">
               <div className="relative z-10 flex gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-extrabold text-gray-900 mb-3">Inserisci nella Busta</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">Una volta compilato, inserisci il biglietto nella busta predisposta e depositala nell’urna delle offerte. La tua offerta rimarrà segreta fino al termine dell’asta.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] art-shadow border border-white relative overflow-hidden group">
               <div className="relative z-10 flex gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-extrabold text-gray-900 mb-3">L'Aggiudicazione</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">A fine asta le buste verranno aperte: chi avrà presentato <span className="text-black font-bold">l'offerta più alta</span> si aggiudicherà l'opera d'arte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking section */}
        <div className="bg-[#111] text-white rounded-[60px] p-8 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -mr-60 -mt-60"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-md">
                <Banknote className="w-4 h-4 text-yellow-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Informazioni Bancarie</span>
              </div>
              <h4 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight">Sostieni <br /> Salerno</h4>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                Il tuo contributo andrà direttamente a finanziare aiuti concreti per i cittadini più fragili del nostro territorio.
              </p>
            </div>

            <div 
              className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl cursor-pointer hover:bg-white/10 transition-all duration-500 group"
              onClick={handleCopyIBAN}
            >
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] uppercase font-bold text-yellow-400/50 tracking-[0.2em] block mb-2">Beneficiario</label>
                  <p className="text-3xl font-extrabold">Moby Dick ETS</p>
                </div>
                
                <div>
                  <label className="text-[10px] uppercase font-bold text-yellow-400/50 tracking-[0.2em] block mb-2">Codice IBAN</label>
                  <div className="flex items-center justify-between gap-4 group/iban">
                    <p className="text-xl md:text-2xl font-mono tracking-tighter break-all">{iban}</p>
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover/iban:bg-yellow-400 group-hover/iban:text-black transition-all">
                      {copied ? <CheckCircle className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-yellow-400/50 tracking-[0.2em] block mb-1">Causale suggerita</label>
                    <p className="text-lg font-bold">Donazione</p>
                  </div>
                  <div className="hidden sm:block">
                     <p className="text-[10px] italic text-gray-500">Tocca per copiare IBAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participation;
