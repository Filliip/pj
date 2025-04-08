import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => {
        setProducts(response.data.payload);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200 min-h-screen px-4">
        <div className="font-averia text-pink-400 drop-shadow- text-4xl text-center py-10">
          <p>Cakes to order</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-8 ">
          {products.map((product) => (
            <div
              key={product._id}
              className="p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Link to={`/detail/${product._id}`}>
                <img
                  src={product.imagePath}
                  alt="cake"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
              </Link>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold text-gray-500">{`Cena: Kč${product.price}`}</p>
            </div>
          ))}
        </div>
      </div>

<Footer />

    </>
  );
}

export default ProductPage;
