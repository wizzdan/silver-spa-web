
import React, { useState, useEffect } from 'react';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { UserIcon } from './icons/UserIcon';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-brand-gold">
          Silver Beauty Spa
        </div>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Salons', 'Products', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                scrolled ? 'text-brand-cream hover:text-brand-gold' : 'text-brand-black hover:text-brand-gold'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className={`transition-colors duration-300 ${scrolled ? 'text-brand-cream hover:text-brand-gold' : 'text-brand-black hover:text-brand-gold'}`}>
            <ShoppingCartIcon />
          </button>
          <button className={`transition-colors duration-300 ${scrolled ? 'text-brand-cream hover:text-brand-gold' : 'text-brand-black hover:text-brand-gold'}`}>
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
