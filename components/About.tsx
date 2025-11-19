
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-24">
      {/* Brand Story Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070" 
                alt="Interior" 
                className="rounded-sm shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-brand-gold/30 z-0 hidden md:block"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-brand-burgundy uppercase tracking-widest font-semibold text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mt-4 mb-8">A Sanctuary of Style</h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Founded on the principles of excellence and elegance, Silver Beauty Spa was established to provide a premium grooming haven in Kenya. We believe that beauty is an art form, and our facility is the canvas where you are the masterpiece.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From our imported Italian spa chairs to our curated selection of premium organic products, every detail has been meticulously chosen to ensure your comfort and satisfaction. Whether you are here for a quick trim or a full day of pampering, we promise an experience that transcends the ordinary.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-12 opacity-50 invert" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-dark py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif text-brand-cream">Meet The Artisans</h2>
             <p className="text-gray-500 mt-4 max-w-xl mx-auto">Our team of highly trained professionals brings global techniques and local warmth to every appointment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group bg-brand-black border border-gray-800 hover:border-brand-gold transition-colors duration-500 overflow-hidden rounded-sm">
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-brand-cream text-sm">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif text-brand-gold mb-1">{member.name}</h3>
                  <p className="text-brand-burgundy text-xs uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
