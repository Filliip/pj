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

  if (loading) return <div>Načítám...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />

      <div className="p-4 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-96 bg-pink-100 h-96 object-cover rounded-lg"
          />
        </div>
        <div className="mt-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold mt-4">Poleva : {product.glaze}</p>
          <p className="text-xl font-semibold mt-4">Cena : {product.price}</p>
          <p className="text-xl font-semibold mt-4">Patra : {product.floor}</p>
          <p className="text-xl font-semibold mt-4">
            Příchuť : {product.flavor}
          </p>

          <button
            onClick={addToCart}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Přidat do košíku
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
