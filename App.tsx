
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import QuickViewModal from './components/QuickViewModal';
import { Product } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-brand-cream text-brand-black font-sans">
      <Header />
      <main>
        <Hero />
        <Filters />
        <ProductGrid products={PRODUCTS} onProductClick={handleOpenModal} />
        <Newsletter />
      </main>
      <Footer />
      <FloatingButton />
      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
