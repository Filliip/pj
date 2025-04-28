import React from 'react';
import { Link } from 'react-router-dom';

const Completion = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center animate-fade-in-up">
        
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Your Order is Complete!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase! We've sent you a confirmation email with all the details.
        </p>
        <Link
          to="/"
          className="inline-block bg-pink-500 text-white text-lg px-8 py-3 rounded-full hover:bg-pink-600 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Completion;
