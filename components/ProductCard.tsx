
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  return (
    <div className="group overflow-hidden rounded-lg cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-serif text-brand-black mb-2">{product.name}</h3>
        <p className="text-xl text-brand-gold font-semibold mb-4">{product.price}</p>
        <button
          onClick={() => onProductClick(product)}
          className="bg-brand-black text-brand-cream font-semibold py-2 px-6 rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-brand-gold hover:text-brand-black"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
