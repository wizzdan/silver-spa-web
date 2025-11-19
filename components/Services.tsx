
import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { PageView } from '../types';

interface ServicesProps {
  limit?: boolean;
  onChangeView: (view: PageView) => void;
}

const Services: React.FC<ServicesProps> = ({ limit, onChangeView }) => {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);

  const displayedCategories = limit ? SERVICE_CATEGORIES.slice(0, 3) : SERVICE_CATEGORIES;

  return (
    <section className="py-24 bg-brand-dark relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-black/50 hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-burgundy uppercase tracking-widest font-semibold text-sm">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mt-4 mb-6">Curated Services</h2>
          <div className="w-24 h-1 bg-brand-burgundy mx-auto"></div>
        </div>

        {limit ? (
            // Grid Layout for Home Page Preview
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {displayedCategories.map((category) => (
               <div 
                 key={category.id} 
                 className="group relative overflow-hidden cursor-pointer h-[500px]"
                 onClick={() => onChangeView('services')}
               >
                 <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-all duration-500 z-10"></div>
                 <img 
                   src={category.image} 
                   alt={category.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-brand-black to-transparent">
                   <h3 className="text-2xl font-serif text-brand-cream mb-2">{category.title}</h3>
                   <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 text-sm">
                     {category.description}
                   </p>
                   <span className="text-brand-gold uppercase tracking-widest text-xs border-b border-brand-gold pb-1">Explore Menu</span>
                 </div>
               </div>
             ))}
           </div>
        ) : (
            // Detailed Tabbed Layout for Services Page
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Categories */}
                <div className="lg:w-1/4">
                    <div className="sticky top-32 space-y-2 bg-brand-black p-6 border border-gray-800 rounded-sm">
                        {SERVICE_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full text-left py-4 px-6 text-sm uppercase tracking-widest transition-all duration-300 border-l-2 ${
                                    activeCategory === cat.id 
                                    ? 'border-brand-gold text-brand-gold bg-brand-dark' 
                                    : 'border-transparent text-gray-400 hover:text-brand-cream hover:bg-gray-900'
                                }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:w-3/4">
                    {SERVICE_CATEGORIES.map((cat) => (
                         <div 
                            key={cat.id} 
                            className={`transition-opacity duration-500 ${activeCategory === cat.id ? 'block opacity-100' : 'hidden opacity-0'}`}
                         >
                             <div className="relative h-64 md:h-80 mb-12 rounded-sm overflow-hidden">
                                 <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                     <h3 className="text-4xl md:text-5xl font-serif text-brand-cream">{cat.title}</h3>
                                 </div>
                             </div>

                             <div className="grid grid-cols-1 gap-8">
                                 {cat.items.map((item, idx) => (
                                     <div key={idx} className="flex justify-between items-baseline border-b border-gray-800 pb-6 group hover:border-brand-gold/50 transition-colors">
                                         <div className="pr-8">
                                             <h4 className="text-xl font-serif text-brand-cream group-hover:text-brand-gold transition-colors">{item.name}</h4>
                                             <p className="text-gray-500 text-sm mt-2 max-w-md">{item.description}</p>
                                             <span className="text-brand-burgundy text-xs mt-2 block">{item.duration}</span>
                                         </div>
                                         <div className="whitespace-nowrap">
                                             <span className="text-xl font-semibold text-brand-gold">{item.price}</span>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                             
                             <div className="mt-12 text-center">
                                <button 
                                    onClick={() => onChangeView('booking')}
                                    className="bg-brand-burgundy text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-black transition-colors duration-300"
                                >
                                    Book {cat.title}
                                </button>
                             </div>
                         </div>
                    ))}
                </div>
            </div>
        )}
        
        {limit && (
            <div className="text-center mt-16">
                <button 
                    onClick={() => onChangeView('services')}
                    className="border border-brand-gold text-brand-gold px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-black transition-colors duration-300"
                >
                    View Full Service Menu
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Services;
