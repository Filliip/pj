import React from 'react'

export default function footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p>&copy; Cake shop je ready</p>
          </div>
          <div>
            <a href="/" className="hover:text-gray-400 px-5">Domů</a>
            <a href="/about" className="hover:text-gray-400 px-5">O nás</a>
            <a href="/" className="hover:text-gray-400 px-5">Kontakt</a>
            <a href="/" className="hover:text-gray-400 px-5">Kontakt</a>
            <a href="/SignUp" className="hover:text-gray-400 px-5">Registrovat</a>
          </div>
        </div>

        

        
        <div className="grid grid-cols-3 gap-4">
          <div
            className="bg-pink-400 text-white p-6 rounded-lg cursor-pointer hover:bg-pink-600 transition"
            onClick={() => alert("Kliknul jsi na první box")}
          >
            <p className="text-center">Kontaktuj nás</p>
          </div>

          <div
            className="bg-pink-400 text-white p-6 rounded-lg cursor-pointer hover:bg-pink-600 transition"
            onClick={() => alert("Kliknul jsi na druhý box")}
          >
            <p className="text-center">click</p>
          </div>

          <div
            className="bg-pink-400 text-white p-6 rounded-lg cursor-pointer hover:bg-pink-600 transition"
            onClick={() => alert("Kliknul jsi na třetí box")}
          >
            <p className="text-center">click</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
