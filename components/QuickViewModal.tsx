
import React from 'react';
import { Product } from '../types';
import { CloseIcon } from './icons/CloseIcon';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-brand-black bg-opacity-70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-brand-cream rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="w-full md:w-1/2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-brand-black hover:text-brand-gold transition-colors">
            <CloseIcon />
          </button>
          <h2 className="text-3xl font-serif text-brand-black mb-4">{product.name}</h2>
          <p className="text-2xl text-brand-gold font-semibold mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-brand-gold text-brand-black font-semibold py-3 px-8 rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-brand-black hover:text-brand-cream hover:shadow-lg transform hover:-translate-y-1 w-full text-sm md:text-base">
            Book Now
          </button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
    `}</style>
    </div>
  );
};

export default QuickViewModal;
