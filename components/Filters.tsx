
import React from 'react';

const Filter: React.FC = () => {
  return (
    <section className="py-12 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <select className="appearance-none bg-transparent border border-brand-gold text-brand-black py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold">
              <option>Filter by Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
          <div className="relative">
            <select className="appearance-none bg-transparent border border-brand-gold text-brand-black py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold">
              <option>Filter by Style</option>
              <option>Classic</option>
              <option>Modern</option>
              <option>Bespoke</option>
            </select>
          </div>
          <div className="relative">
            <select className="appearance-none bg-transparent border border-brand-gold text-brand-black py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold">
              <option>Filter by Location</option>
              <option>Dartford</option>
              <option>Abbey Wood</option>
              <option>Edmonton Green</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
