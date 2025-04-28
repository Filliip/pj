import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


const ResponsiveMenu = ({open}) => {
  return (
   <AnimatePresence mode='wait'>
    {
        open && (
            <div
            
            className='absolute top-20 left-0 w-full h-screen z-20'>
                <div className='text-xl font-semibold uppercase bg-pink-500 text-white py-10 m-6 rounded-3xl '>
                    <ul className='flex flex-col items-center gap-10'>

                        <li> <Link to={"/"}>Home</Link></li>
                        <li> <Link to={"/produkty"}>Products</Link></li>
                        <li> <Link to={"/about"}>About us</Link></li>
                        <li> <Link to={"/SignUp"}>Register</Link></li>
                        <li> <Link to={"/profile"}>Profile</Link></li>
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
   </AnimatePresence>
  )
}

export default ResponsiveMenu