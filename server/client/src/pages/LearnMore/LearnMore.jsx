import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";

function Learnomore() {
  return (
    <>
      <Navbar />
      <div className="text-gray-900 py-12 flex items-center">
        <div className="container mx-auto text-center min-h-screen">
          <h1 className="text-4xl font-bold text-pink-600 mb-6">
            Welcome to Learnomore!
          </h1>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">
                Our Delicious Cakes
              </h2>
              <p>
                Our cakes are more than just desserts – they are works of art that bring joy and unforgettable experiences to every celebration.
                Each cake is carefully crafted with love, high-quality ingredients, and attention to detail, making it the perfect addition to any occasion.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">
                A Variety for Every Occasion
              </h2>
              <p>
                Whether you're planning a birthday, wedding, corporate event, or just a small gathering, we have a wide range of cakes for you.
                From classic chocolate and vanilla to special gluten-free and vegan options, we have a cake that will satisfy everyone.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">
                Handmade and Quality Ingredients
              </h2>
              <p>
                All of our cakes are handmade with a focus on freshness and quality. We use only the finest ingredients, ensuring not only exceptional taste
                but also a perfect appearance. Each cake is baked to order according to the wishes of our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Learnomore;
