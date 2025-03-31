import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/cakes')  
      .then((response) => {
        setProducts(response.data.payload);  
      })
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, []);

  return (
 
    <div className="bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200 min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-pink-400 mb-8">Naše produkty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-violet-500">{`Cena: $${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
   
  );
}

export default ProductPage;
