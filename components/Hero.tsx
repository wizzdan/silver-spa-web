
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="absolute inset-0 bg-brand-black opacity-50"></div>
      <div className="relative z-10 px-4 text-brand-cream">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight">Experience Timeless Beauty</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore our premium salons offering authentic beauty experiences.
        </p>
        <button className="bg-brand-gold text-brand-black font-semibold py-2 px-6 text-sm md:py-3 md:px-8 md:text-base rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-brand-cream hover:shadow-lg transform hover:-translate-y-1">
          Book Your Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
