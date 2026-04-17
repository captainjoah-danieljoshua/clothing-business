import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const products = [
    { id: 1, name: 'T-Shirt', price: 20, image: 'https://via.placeholder.com/300x200?text=T-Shirt' },
    { id: 2, name: 'Jeans', price: 50, image: 'https://via.placeholder.com/300x200?text=Jeans' },
    { id: 3, name: 'Jacket', price: 80, image: 'https://via.placeholder.com/300x200?text=Jacket' },
    { id: 4, name: 'Dress', price: 60, image: 'https://via.placeholder.com/300x200?text=Dress' },
    { id: 5, name: 'Shoes', price: 70, image: 'https://via.placeholder.com/300x200?text=Shoes' },
    { id: 6, name: 'Hat', price: 15, image: 'https://via.placeholder.com/300x200?text=Hat' },
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
}

export default App;
