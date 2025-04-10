import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => {
        console.error('Chyba při načítání produktů:', err);
      });
  }, []);

  useEffect(() => {
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(totalAmount);
  }, [cart]);

  const addToCart = (item) => {
    const newCart = [...cart];
    const existingItemIndex = newCart.findIndex(product => product._id === item._id);

    if (existingItemIndex !== -1) {
      newCart[existingItemIndex].quantity += 1;
    } else {
      newCart.push({ ...item, quantity: 1 }); 
    }

    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
      saveCartToLocalStorage(newCart);
    }
  };

  return (
    <>
      <Link to={"/"} className='fixed top-2 left-2'>
        <IoMdArrowBack className='incline-block' />
      </Link>

      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">Košík</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-center text-pink-500">Produkty</h2>
            <div className="flex justify-center gap-12 flex-wrap">
              {products.map(product => (
                <div key={product._id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-72">
                  <h3 className="text-lg font-semibold text-pink-600">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="text-xl font-bold text-gray-800">{product.price} Kč</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 w-full"
                  >
                    Přidat do košíku
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">Košík je prázdný</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b pb-4">
                    <div>
                      <span className="font-semibold">{item.name}</span> - {item.price} Kč
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => decreaseQuantity(index)}
                        className="bg-gray-300 text-white py-1 px-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(index)}
                        className="bg-gray-300 text-white py-1 px-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Odstranit
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex justify-between items-center font-semibold">
              <span className="text-lg">Celková cena</span>
              <span className="text-xl text-pink-600">{total} Kč</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center text-pink-500">Dodací informace</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Adresa</label>
              <input
                type="text"
                placeholder="Vaše adresa"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <button
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300"
            >
              Dokončit objednávku
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
