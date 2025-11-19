
import React from 'react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 animate-pulse-slow" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          animation: "kenburns 20s infinite alternate"
        }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/90"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
          <span className="text-brand-gold uppercase tracking-[0.5em] text-xs md:text-sm border-b border-brand-gold pb-2">
            Refining Elegance Since 2010
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-cream mb-6 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Timeless <span className="italic text-brand-gold">Beauty</span> <br/> & Grooming
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Experience the pinnacle of luxury at Silver Beauty Spa. Expert styling, rejuvenating therapies, and premium care for the modern individual.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={onBookNow}
            className="bg-brand-gold text-brand-black hover:bg-brand-white font-semibold py-4 px-10 rounded-sm uppercase tracking-widest transition-all duration-300 min-w-[200px]"
          >
            Book Appointment
          </button>
          <button className="border border-brand-cream text-brand-cream hover:border-brand-gold hover:text-brand-gold font-semibold py-4 px-10 rounded-sm uppercase tracking-widest transition-all duration-300 min-w-[200px] backdrop-blur-sm bg-brand-black/20">
            View Services
          </button>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
