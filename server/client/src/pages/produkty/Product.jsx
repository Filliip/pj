import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { FaCartPlus } from "react-icons/fa6";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProducts(value, minPrice, maxPrice);
  };

  const handlePriceFilter = () => {
    filterProducts(searchTerm, minPrice, maxPrice);
  };

  const filterProducts = (search, min, max) => {
    const filtered = products.filter((product) => {
      const nameMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const priceMatch = product.price >= min && product.price <= max;

      return nameMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200 min-h-screen px-4">
        <div className="font-averia text-pink-400 drop-shadow- text-4xl text-center py-10">
          <p>Cakes to order</p>
        </div>

        <div className="mb-6 text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by flavor or description"
            className="p-2 rounded-lg border border-gray-300 mb-4"
          />

          <div className="flex justify-center items-center space-x-4">
            <div>
              <label htmlFor="minPrice" className="mr-2">
                Min Price:{" "}
              </label>
              <input
                type="number"
                id="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="p-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="maxPrice" className="mr-2">
                Max Price:{" "}
              </label>
              <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="p-2 rounded-lg border border-gray-300"
              />
            </div>

            <button
              onClick={handlePriceFilter}
              className="bg-pink-500 text-white p-2 rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-8 ">
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
            
            <div className="bg-pink-200 text-grey p-2 rounded-lg ">Cakes not found</div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
