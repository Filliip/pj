import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => {
        setProducts(response.data.payload);
        setFilteredProducts(response.data.payload);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  const handlePriceFilter = () => {
    if (minPrice > maxPrice) {
      setError("The minimum price cannot be higher than the maximum.");
      return;
    }
    setError("");
    filterProducts(minPrice, maxPrice);
  };

  const filterProducts = (min, max) => {
    const filtered = products.filter((product) => {
      return product.price >= min && product.price <= max;
    });
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200 min-h-screen px-4">
        <div className="font-averia text-pink-400 drop-shadow text-4xl text-center py-10">
          <p>Cakes to order</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative group">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              Filter by price
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-300 z-10">
              <label className="block mb-2 font-medium text-gray-700 text-center">
                Price range: {minPrice} Kč – {maxPrice} Kč
              </label>

              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">Min: {minPrice} Kč</span>
              </div>

              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">Max: {maxPrice} Kč</span>
              </div>

              <button
                onClick={handlePriceFilter}
                className="w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-500"
              >
               Use filter
              </button>

              {error && (
                <div className="text-center text-red-600 mt-2 font-medium">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-8">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <Link to={`/detail/${product._id}`}>
                  <img
                    src={product.imagePath}
                    alt="cake"
                    className="rounded-lg w-full h-48 object-contain mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="font-bold text-gray-500 text-xl">{`Cena: Kč ${product.price}`}</p>
              </div>
            ))
          ) : (
            <Link to={"/"}>
              <div className="bg-pink-200 text-gray-700 p-2 rounded-lg text-center">
                Cakes not found
              </div>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
