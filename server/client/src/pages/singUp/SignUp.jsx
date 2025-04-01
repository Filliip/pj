import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Přihlášení bylo úspěšné');
        // Přejdi na jinou stránku nebo proveď další akci po úspěšném přihlášení
      } else {
        setErrorMessage('Chyba při přihlašování: ' + data.message);
      }
    } catch (error) {
      setErrorMessage('Došlo k chybě při komunikaci se serverem.');
    }
  };

  return (
<>

<a href="http://localhost:5173/" className='w-fit inline-block'>
  <div className='relative left-5 top-5 w-5'>
    <IoMdArrowBack  />
  </div>
  </a>

    <div className="flex items-center justify-center min-h-screen bg-gray-100 h-screen bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200">
      <div className="w-full max-w-sm p-8 rounded-lg shadow-2xl ">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Přihlásit se</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Uživatelské jméno</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Heslo</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:!scale-97 duration-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Přihlásit se
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
