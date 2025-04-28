import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => { 
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0"> 
            <div>
              <p className="text-sm sm:text-base">&copy; CakeMania is ready for you</p> 
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"> 
             
              <Link to="/" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">Home</Link> 
              <Link to="/about" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">About us</Link>
              <Link to="/contact" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">Review</Link>
              <Link to="/SignUp" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">Log in</Link>
            </div>
          </div>
          
        </div>
      </footer>
    </>
  );
}

export default Footer; 