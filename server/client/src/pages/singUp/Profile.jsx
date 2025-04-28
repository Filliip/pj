import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";

function UserProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/'); 
    console.log('User has logged out.');
  };

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-500 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-pink-600 text-center">User Profile</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username:</label>
          <p className="mt-2 px-4 py-2 bg-pink-100 border rounded-md text-gray-700">{user.username}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <p className="mt-2 px-4 py-2 bg-pink-100 border rounded-md text-gray-700">{user.email}</p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            className="py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            onClick={handleLogout}
          >
            Log out
          </button>
          <a 
            href="/cart"
            className="flex items-center text-pink-600 hover:text-pink-700 transition-all duration-300"
          >
            <IoMdCart className="mr-2 text-xl" />
            <Link to={"/kosik"}>Cart</Link>
          </a>
          <button
            className="bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
