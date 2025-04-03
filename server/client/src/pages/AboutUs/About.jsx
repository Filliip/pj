import React from "react";
import { SiCakephp } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import { FadeRight } from "../../utility/animation";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";



const NavbarMenu = [
  
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "Productes",
    link: "/produkty",
  },
  {
    id: 3,
    title: "About",
    link: "/About",
  },
  {
    id: 4,
    title: "Shop",
    link: "/shop",
  },
  {
    id: 5,
    title: "Register",
    link: "/SignUP",
  },
];

const About = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <>
    <nav className="bg-pink-400">
      <div className="container flex justify-between items-center py-5 md:pt-4">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
          className="text-white font-averia">Cake</p>
          <p
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
          className="text-white font-averia">Shop</p>
          <SiCakephp className="text-pink-500" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-1 px-3 hover:text-white hover:shadov-[0_3px_0_-1px_#ef4444] font-semibold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="text-2xl hover:bg-pink-500 hover:text-white rounded-full p-2 duration-200">
              <GiShoppingCart />
            </button>
          </ul>
        </div>
        <div className="md:hidden" onClick={() =>
            setOpen(!open)}>
          <RiMenu4Line className="text-4xl" />
        </div>
      </div>
    </nav>

<div>
  
</div>



<div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-400 p-8 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          className="text-4xl font-bold mb-4 text-balck"
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          We are passionate about bringing you the best cakes in town. Our team is dedicated to crafting delicious and beautifully designed cakes for every occasion.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center">
        <motion.img 
          src="" 
          alt="Delicious Cake"
          className="rounded-lg shadow-lg mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="space-y-4 text-black">
          <div className=" top-3 relative">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <p className="text-black-">We use only the finest ingredients to make sure every bite is as delicious as the last.</p>
          <p className="text-black-">From birthdays to weddings, we create cakes that make moments special.</p>
          </div>
          <div className="top-6 relative">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <p className="text-black-">We use only the finest ingredients to make sure every bite is as delicious as the last.</p>
          <p className="text-black-">From birthdays to weddings, we create cakes that make moments special.</p>
          </div>
         
          <button className=" relative top-6 px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition">
            <Link to={"/LearnMore"}>Learn More</Link>
          </button>

          <div className="flex justify-center py-6  relative top-8">
     
        <div className="relative w-64 h-64 cursor-pointer overflow-hidden rounded-lg">
          <img
            src={"data:image/jpeg;base64,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"}
            alt=""
            className="w-full h-full object-cover"
            
          />
        </div>
     
    </div>

        </div>
      </div>
    </div>

    
       


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

        

        
        <div className="grid grid-cols-3 gap-4">
          <div
            className="bg-pink-400 text-white p-6 rounded-lg cursor-pointer hover:bg-pink-600 transition"
            onClick={() => alert("Kliknul jsi na první box")}
          >
            <p className="text-center">Jak nás kontaktovat</p>
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

    

    
    

  );
};

export default About;






































































































































































































































































































