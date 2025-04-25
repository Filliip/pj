import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";

function Learnomore() {
  return (
    <>
      <Navbar />
      <div className="text-gray-900 py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center min-h-screen">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-6 sm:mb-8">
            Welcome to Learnomore!
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">
                Our Delicious Cakes
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Our cakes are more than just desserts – they are works of art that bring joy and unforgettable experiences to every celebration.
                Each cake is carefully crafted with love, high-quality ingredients, and attention to detail, making it the perfect addition to any occasion.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">
                A Variety for Every Occasion
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Whether you're planning a birthday, wedding, corporate event, or just a small gathering, we have a wide range of cakes for you.
                From classic chocolate and vanilla to special gluten-free and vegan options, we have a cake that will satisfy everyone.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">
                Handmade and Quality Ingredients
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                All of our cakes are handmade with a focus on freshness and quality. We use only the finest ingredients, ensuring not only exceptional taste
                but also a perfect appearance. Each cake is baked to order according to the wishes of our customers.
              </p>
            </div>

            
            <div className="p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">
                Custom Cake Designs
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Have a specific vision in mind? Our talented decorators can create custom cake designs tailored to your theme, colors, and personal preferences.
                Bring your ideas to us, and we'll turn them into a delicious reality that will be the centerpiece of your event.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Founded in 2020 by passionate bakers, our Cake Shop started as a small local bakery with a big dream: to spread happiness through delicious cakes.
                We've grown since then, but our commitment to quality, taste, and customer satisfaction remains our core mission.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">
                Easy Ordering & Delivery
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Ordering your perfect cake is easy! Browse our online selection or contact us for a custom quote.
                We offer flexible pickup options and reliable delivery services to ensure your cake arrives fresh and beautiful, right when you need it.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Learnomore;