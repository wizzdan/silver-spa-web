
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PageView } from './types';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onBookNow={() => setCurrentView('booking')} />
            <div className="bg-brand-black">
               <Services limit={true} onChangeView={setCurrentView} />
            </div>
            {/* Testimonials Preview */}
            <section className="py-20 bg-brand-dark border-t border-gray-900 text-brand-cream relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
              <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-serif text-center text-brand-gold mb-12">Client Whispers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-brand-black p-8 rounded-sm border border-gray-800 hover:border-brand-burgundy transition-colors duration-500">
                       <div className="flex text-brand-gold mb-4">
                         {[...Array(t.rating)].map((_, i) => (
                           <span key={i}>★</span>
                         ))}
                       </div>
                       <p className="italic text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
                       <div className="flex justify-between items-center border-t border-gray-800 pt-4">
                         <span className="font-serif text-brand-cream">{t.name}</span>
                         <span className="text-xs text-gray-500 uppercase tracking-widest">{t.date}</span>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Contact simple={true} />
          </>
        );
      case 'services':
        return <Services limit={false} onChangeView={setCurrentView} />;
      case 'about':
        return <About />;
      case 'gallery':
        return <Gallery />;
      case 'booking':
        return <Booking />;
      case 'contact':
        return <Contact simple={false} />;
      default:
        return <Hero onBookNow={() => setCurrentView('booking')} />;
    }
  };

  return (
    <div className="bg-brand-black text-brand-cream font-sans min-h-screen flex flex-col">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
