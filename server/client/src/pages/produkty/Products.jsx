import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cakes/${id}`);
        if (!response.ok) {
          throw new Error("Produkt nenalezen");
        }
        const data = await response.json();
        setProduct(data.payload);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} byl přidán do košíku`);
  };

  if (loading) return <div className="text-center text-2xl">Načítám...</div>;
  if (error) return <div className="text-center text-red-500 text-xl">{error}</div>;

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
         
          <div className="flex justify-center md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full md:w-96 bg-pink-100 h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h1 className="text-4xl font-semibold text-gray-800">{product.name}</h1>
            <p className="text-xl text-gray-600 mt-4">Poleva: <span className="font-bold">{product.glaze}</span></p>
            <p className="text-xl text-gray-600 mt-2">Cena: <span className="font-bold">{product.price} Kč</span></p>
            <p className="text-xl text-gray-600 mt-2">Patra: <span className="font-bold">{product.floor}</span></p>
            <p className="text-xl text-gray-600 mt-2">Příchuť: <span className="font-bold">{product.flavor}</span></p>

            
            <button
              onClick={addToCart}
              className="mt-6 w-full md:w-auto bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 focus:outline-none transition"
            >
              Přidat do košíku
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
