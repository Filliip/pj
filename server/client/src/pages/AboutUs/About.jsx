import React from "react";
import { SiCakephp } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import { FadeRight } from "../../utility/animation";
import {motion} from "framer-motion"
import { FadeLeft } from "../../utility/animation";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";


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
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <>
    <nav>
      <div className="container flex justify-between items-center py-5 md:pt-4">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <motion.p
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
          className="text-purple-700">Cake</motion.p>
          <motion.p
          variants={FadeLeft(0.6)}
          initial="hidden"
          animate="visible"
          className="text-violet-500">Shop</motion.p>
          <SiCakephp className="text-pink-500" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-1 px-3 hover:text-red-500 hover:shadov-[0_3px_0_-1px_#ef4444] font-semibold"
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




       


<div className="bg-black opacity-45  py-25 relative mt-170 px-10 " >
        <div className="bg-slate-300 max-w-lg border-spacing-2 px-10 rounded-lg">
        
          <h1 className="text-black px-10 text-4xl font-averia">Contact </h1> <BsFillTelephoneFill className="" />
          <ul className="text-black px-10 content-center font-popins justify-center top-5 relative">
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
          </ul>
        </div>

        <div className="pt-10">
        <div className="bg-slate-300 max-w-lg border-spacing-2 px-10 rounded-lg ">
          <h1 className="text-black px-10 text-4xl font-averia">Kde nás najdete ?</h1><FaMapMarkerAlt />

          <ul className="text-black px-10 content-center font-popins justify-center top-5 relative">
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
            <li className="text-xl">aaaa</li>
          </ul>
        </div>
        </div>
      </div>
      
      <div className="pt-20 bg-white items-center">

        <div className="w-full h-full bg-white  border-red-300">

        </div>

      </div>


    </>

    

    
    

  );
};

export default Navbar;






































































































































































































































































































