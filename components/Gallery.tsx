
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const categories = ['All', 'Nails', 'Massage', 'Hair', 'Barber'];
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="bg-brand-black min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-brand-gold mb-4">Visual Excellence</h2>
          <p className="text-gray-500">A glimpse into our world of beauty.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full border ${
                filter === cat 
                  ? 'bg-brand-gold border-brand-gold text-brand-black' 
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(item => (
            <div key={item.id} className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-gold font-serif text-2xl italic mb-2">{item.title}</p>
                  <p className="text-brand-cream text-xs uppercase tracking-widest">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
