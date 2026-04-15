import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const products = [
    { id: 1, name: 'T-Shirt', price: 20, image: 'https://source.unsplash.com/300x200/?t-shirt' },
    { id: 2, name: 'Jeans', price: 50, image: 'https://source.unsplash.com/300x200/?jeans' },
    { id: 3, name: 'Jacket', price: 80, image: 'https://source.unsplash.com/300x200/?jacket' },
    { id: 4, name: 'Dress', price: 60, image: 'https://source.unsplash.com/300x200/?dress' },
    { id: 5, name: 'Shoes', price: 70, image: 'https://source.unsplash.com/300x200/?shoes' },
    { id: 6, name: 'Hat', price: 15, image: 'https://source.unsplash.com/300x200/?hat' },
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
