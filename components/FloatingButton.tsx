
import React from 'react';

const FloatingButton: React.FC = () => {
  return (
    <button className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-brand-gold text-brand-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg z-40 uppercase tracking-wider transition-all duration-300 hover:bg-brand-black hover:text-brand-cream transform hover:scale-105 active:scale-95 text-xs md:text-sm">
      Book Salon Appointment
    </button>
  );
};

export default FloatingButton;
