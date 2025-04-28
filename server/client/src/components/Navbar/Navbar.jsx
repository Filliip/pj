import React from "react";
import { SiCakephp } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "products", link: "/produkty" },
  { id: 3, title: "About", link: "/About" },
  { id: 5, title: "Register", link: "/SignUp" },
  { id: 5, title: "Profile", link: "/profile" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-pink-400 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2 text-2xl uppercase">
            <Link to={"/"} className="flex items-center gap-2 text-white font-averia hover:text-pink-600 transition duration-300">
              <p>Cake Shop</p>
              <SiCakephp className="text-pink-600 text-3xl" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-white">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="py-1 px-3 hover:text-red-600 hover:shadow-[0_3px_0_-1px_#dc2626] font-semibold transition duration-300"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/kosik"
                  className="text-2xl text-white hover:text-red-600 rounded-full p-2  transition duration-300"
                >
                  <GiShoppingCart />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden cursor-pointer text-white" onClick={() => setOpen(!open)}>
            {open ? (
              <RiMenu4Line className="text-3xl rotate-90 transition duration-300" />
            ) : (
              <RiMenu4Line className="text-3xl transition duration-300" />
            )}
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;