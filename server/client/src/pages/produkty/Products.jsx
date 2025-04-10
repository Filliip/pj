import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FadeRight } from "../../utility/animation";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showNotification, setShowNotification] = useState(false);
  const [quantity, setQuantity] = useState(1); 

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
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
     
      updatedCart.push({ ...product, quantity });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (loading) return <div className="text-center text-2xl">Načítám...</div>;
  if (error) return <div className="text-center text-red-500 text-xl">{error}</div>;

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          
          <div className="flex justify-center md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg">
            <img
              src={product.imagePath}
              alt={product.name}
              className="rounded-lg w-full h-96 object-contain mb-4"
            />
          </div>

          <div className="mt-6 md:mt-0 md:w-1/2">
            <h1 className="text-4xl font-semibold text-gray-800">{product.name}</h1>
            <p className="text-xl text-gray-600 mt-4">
              Glaze: <span className="font-bold">{product.glaze}</span>
            </p>
            <p className="text-xl text-gray-600 mt-2">
              Price: <span className="font-bold">{product.price} Kč</span>
            </p>
            <p className="text-xl text-gray-600 mt-2">
              Floor: <span className="font-bold">{product.floor}</span>
            </p>
            <p className="text-xl text-gray-600 mt-2">
              Flavor: <span className="font-bold">{product.flavor}</span>
            </p>

            
            <div className="mt-4 text-lg text-gray-700">
              <h2 className="font-semibold">Popis produktu:</h2>
              <p>{product.description || "Tento produkt je jedinečný, ručně vyráběný dort s přírodními ingrediencemi."}</p>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={decrementQuantity}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 focus:outline-none transition"
              >
                -
              </button>
              <span className="text-2xl">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 focus:outline-none transition"
              >
                +
              </button>
            </div>

            <button
              onClick={addToCart}
              className="mt-6 w-full md:w-auto bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 focus:outline-none transition"
            >
              Přidat do košíku
            </button>
          </div>
        </div>
      </div>

      <Link to={"/kosik"}>
        {showNotification && (
          <motion.div
            variants={FadeRight(0.8)}
            initial="hidden"
            animate="visible"
            className="fixed top-23 left-1/4 transform -translate-x-1/2 bg-pink-500 text-white py-3 px-6 rounded-lg shadow-lg opacity-100 transition-opacity duration-300"
          >
            <p>{`${product.name} byl přidán do košíku`}</p>
          </motion.div>
        )}
      </Link>

      <Footer />
    </>
  );
};

export default ProductPage;
