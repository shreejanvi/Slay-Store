import React, { useState, useEffect } from 'react';
import ENav from '../components/ENav';
import Banner from '../assets/9570805.jpg';
import Card from '../components/Card';
import Footer from '../components/Footer';
export default function Landing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsondata = await response.json();
        setProducts(jsondata);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ENav />
      <img src={Banner} className="img-fluid" style={{ height: '50vh', width: '100vw' }} alt="Banner" />
      <div className="products_slay container" style={{ marginTop: '40px' }}>
        {products.map(product => (
          <Card prod={product} key={product.id} />
        ))}
      </div>
     <Footer/> 
    </>
  );
}
