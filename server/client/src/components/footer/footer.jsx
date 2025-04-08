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
            <a href="/contact" className="hover:text-gray-400 px-5">Kontakt</a>
            <a href="/SignUp" className="hover:text-gray-400 px-5">Registrovat</a>
          </div>
        </div>

        

        
        
      </div>
    </footer>
    </>
  )
}