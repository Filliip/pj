import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2025 Tvoje Firma. Všechna práva vyhrazena.</p>
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">Domů</a>
          <a href="#about" className="hover:text-gray-400">O nás</a>
          <a href="#contact" className="hover:text-gray-400">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;