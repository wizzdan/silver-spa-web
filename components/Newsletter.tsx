
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-brand-nude">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-brand-black mb-4">Join the Silver Beauty Circle</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Receive exclusive offers, styling inspiration, and be the first to know about our new collections.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-brand-cream border border-brand-gold py-3 px-4 rounded-full sm:rounded-l-full sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
          <button
            type="submit"
            className="bg-brand-gold text-brand-black font-semibold py-3 px-8 rounded-full sm:rounded-r-full sm:rounded-l-none uppercase tracking-wider transition-all duration-300 hover:bg-brand-black hover:text-brand-cream"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
