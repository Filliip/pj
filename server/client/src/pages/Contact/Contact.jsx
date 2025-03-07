import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";


function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!name || !email || !subject || !message) {
      setErrorMessage('Všechna pole jsou povinná.');
      return;
    }

    const formData = { name, email, subject, message };

    try {
      
      const response = await fetch('http://localhost:3000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMessage('Zpráva byla úspěšně odeslána!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMessage('Došlo k chybě při odesílání zprávy.');
      }
    } catch (error) {
      setErrorMessage('Chyba při komunikaci se serverem.');
    }
  };

  return (
    <>
    <a href="http://localhost:5173/">
  <div className='relative left-5 top-5 '>
    <IoMdArrowBack className='' />
  </div>
  </a>
    <div className="flex items-center justify-center min-h-screen  h-screen bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200">
      <div className="w-full max-w-lg p-8  rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Kontaktujte nás</h2>
        
        
        {successMessage && <p className="text-sm text-green-600 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-sm text-red-600 mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Jméno</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Předmět</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Zpráva</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-pink-400 text-white font-semibold rounded-lg hover:bg-pink-600  duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Odeslat zprávu
          </button>
        </form>
      </div>
    </div>
    </>
  );
}


export default ContactForm;
