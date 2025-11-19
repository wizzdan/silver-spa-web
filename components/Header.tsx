
import React, { useState, useEffect } from 'react';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { UserIcon } from './icons/UserIcon';
import { PageView } from '../types';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'About', view: 'about' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/30 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-white tracking-tighter">
            SILVER <span className="text-brand-gold">BEAUTY</span>
          </h1>
          <p className="text-[0.6rem] md:text-[0.7rem] text-brand-gold uppercase tracking-[0.3em] group-hover:text-brand-white transition-colors text-center md:text-left pl-1">
            Spa & Barber
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`text-xs tracking-[0.15em] uppercase transition-all duration-300 relative group py-2 ${
                currentView === item.view ? 'text-brand-gold' : 'text-brand-cream hover:text-brand-gold'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-brand-gold transition-all duration-300 ${currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => onNavigate('booking')}
            className="hidden md:block bg-brand-burgundy hover:bg-brand-gold text-white text-xs font-bold py-3 px-6 rounded-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
          >
            Book Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-black border-b border-brand-gold/30 overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className="text-left text-brand-cream hover:text-brand-gold uppercase tracking-widest text-sm py-2 border-b border-gray-800"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('booking')}
            className="mt-4 bg-brand-gold text-brand-black font-bold py-3 px-6 rounded-sm uppercase tracking-widest w-full"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
