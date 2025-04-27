import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    console.log('Uživatel se odhlásil.');
  };

  if (!user) {
    return <div>Profile loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">User profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">User name:</label>
          <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">{user.username}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">{user.email}</p>
        </div>
        
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default UserProfile;