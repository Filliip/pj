import React from "react";
import { SiCakephp } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Productes", link: "/produkty" },
  { id: 3, title: "About", link: "/About" },
  { id: 5, title: "Register", link: "/SignUp" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className=" bg-pink-400">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl uppercase">
            <Link to={"/"}>
              <p className="text-white font-averia">Cake Shop</p>
            </Link>
            <SiCakephp className="text-pink-500" />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/kosik"
                  className="text-2xl hover:bg-pink-500 hover:text-white rounded-full p-2 duration-200"
                >
                  <GiShoppingCart />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <RiMenu4Line className="text-4xl text-white" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
