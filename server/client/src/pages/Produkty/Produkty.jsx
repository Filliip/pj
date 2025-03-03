import React from "react";
import { SiCakephp } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import { FadeRight } from "../../utility/animation";
import {motion} from "framer-motion"
import { FadeLeft } from "../../utility/animation";

export  function List() {
  const [cakes, setCakes] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCakes();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setCakes(data.payload);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cakes not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>cakes are loading...</p>
      </>
    );
  }

  return (
    <>
      
      {cakes.map((cakes, index) => (
        <ListCell key={index} {...cakes}/>
      ))} 
      <Link to={"/"} className="rounded-lg bg-purple-400 py-10 px-10 relative left-5 top-60">
        <button>Go back</button>
      </Link>
    </>
  );
}


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



    </>
  );
  
};

export default Navbar;
