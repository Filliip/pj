import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Chyba při načítání produktu', err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Načítání produktu...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover rounded-md" />
      <h1 className="text-3xl font-semibold text-gray-800 mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold text-gray-800 mt-4">Cena: {product.price} Kč</p>
    </div>
  );
}

export default ProductDetail;
