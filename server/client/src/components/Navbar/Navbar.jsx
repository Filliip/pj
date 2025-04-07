import React from "react";
import { SiCakephp } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import ResponsiveMenu from "./ResponsiveMenu";
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
    id: 5,
    title: "Register",
    link: "/SignUp",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="border-y-2 bg-pink-400 container flex justify-between items-center py-5 ">
          <div className="text-2xl flex items-center gap-2  uppercase">
            <Link to={"/"}>
            <p className="text-white font-averia">Cake Shop</p>
            </Link>

            <SiCakephp className="text-pink-500" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className=" py-1 px-3 hover:text-red-500 hover:shadov-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-pink-500 hover:text-white rounded-full p-2 duration-200">
                <Link to={"/kosik"}>
                  <GiShoppingCart />
                </Link>
              </button>
            </ul>
          </div>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <RiMenu4Line className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
