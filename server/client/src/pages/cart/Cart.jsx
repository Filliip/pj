import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => {
        console.error('Chyba při načítání produktů:', err);
      });
  }, []);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  const removeFromCart = (index) => {
    
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Košík</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Produkty</h2>
        <div className="grid grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product._id} className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-xl font-bold">{product.price} Kč</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Přidat do košíku
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Items in Cart</h2>
        {cart.length === 0 ? (
          <p>Košík je prázdný</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name} - {item.price} Kč</span>
                <button
                  onClick={() => removeFromCart(index)} 
                  className="bg-red-500 text-white py-1 px-2 rounded-lg"
                >
                  Odstranit
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
