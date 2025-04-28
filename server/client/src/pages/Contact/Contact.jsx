import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";

function ReviewForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      setErrorMessage('Name and review are required.');
      setSuccessMessage('');
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      message
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setMessage('');
    setErrorMessage('');
    setSuccessMessage('Thank you for your review!');
  };

  return (
    <>
      <a href="http://localhost:5173/">
        <div className='relative left-5 top-5 '>
          <IoMdArrowBack />
        </div>
      </a>

      <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200 py-10 px-4">
        <div className="w-full max-w-xl p-8 bg-white rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Write a Review</h2>

          {successMessage && <p className="text-sm text-green-600 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-sm text-red-600 mb-4">{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Review</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Submit Review
            </button>
          </form>
        </div>

        <div className="w-full max-w-xl mt-10 space-y-4">
          {reviews.length > 0 && (
            <h3 className="text-xl font-semibold text-gray-700">Displayed Reviews:</h3>
          )}
          {reviews.map((r) => (
            <div key={r.id} className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold text-pink-600">{r.name}</p>
              <p className="text-gray-700">{r.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReviewForm;
