
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Participation from './components/Participation';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { Opera } from './types';

const App: React.FC = () => {
  const [selectedOpera, setSelectedOpera] = useState<Opera | null>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Offset migliorato per visibilità ottimale
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBrowse = () => scrollTo('collection');
  const handleParticipate = () => scrollTo('how-to');

  return (
    <div className={`min-h-screen transition-colors duration-700 bg-[#fafafa] ${selectedOpera ? 'overflow-hidden' : ''}`}>
      <Navbar onBrowse={handleBrowse} onParticipate={handleParticipate} />
      
      <main className="relative">
        <Hero 
          onBrowse={handleBrowse} 
          onParticipate={handleParticipate} 
        />
        
        <Collection 
          onSelectOpera={(opera) => setSelectedOpera(opera)} 
        />
        
        <Participation />
      </main>
      
      <Footer />

      {/* Modern Detailed Modal */}
      <Modal 
        opera={selectedOpera} 
        onClose={() => setSelectedOpera(null)}
        onBid={handleParticipate}
      />
    </div>
  );
};

export default App;
