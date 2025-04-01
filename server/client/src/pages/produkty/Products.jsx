import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../AboutUs/About";




const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cakes/${id}`);
        if (!response.ok) {
          throw new Error("Produkt nenalezen");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Načítám...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
    
     

      <div className="p-4 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-96 bg-pink-100 h-96 object-cover rounded-lg"
          />
        </div>
        <div className="mt-6">
          <h1 className="text-3xl font-bold">{product.name} ff</h1>
          <p className="text-lg text-gray-700 mt-2">{product.glaze} poleva</p>
          <p className="text-xl font-semibold mt-4">{product.price} Kč</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
