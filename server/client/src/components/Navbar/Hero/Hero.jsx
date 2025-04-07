import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import myImage from "../../../assets/myImage.jpg";
import { FadeRight } from "../../../utility/animation";
import { FadeUp } from "../../../utility/animation";
import { FadeLeft } from "../../../utility/animation";
import { motion } from "framer-motion";
import myImage3 from "../../../assets/myImage3.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200 container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-realxed xl:leading-loose"
            >
              Yummy
              <br />
              Cake <span className="text-pink-500">Shop</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order best cakes for happy life
            </motion.p>
            <motion.p
              variants={FadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="text-gray-600"
            >
              Order best cakes for happy life, Order best cakes for happy life
              Order best cakes for happy lifeOrder best cakes for happy life
            </motion.p>
            <div className="flex justify center md:justify-start">
              <motion.button
                variants={FadeLeft(0.1)}
                initial="hidden"
                animate="visible"
                className="primary-btn flex items-center gap-2"
              >
                <span>
                  <IoBagHandleOutline />
                </span>
              <Link to={"/produkty"}>
                Order now
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-cemter py-5">
          <motion.img
            variants={FadeRight(0)}
            initial="hidden"
            animate="visible"
            src={myImage}
            alt=""
            className=" shadow-[2px_1py_1px_-2px_#de0029] hover:!scale-80  duration-300 [350px] md:w-[550px] drop-shadow rounded-full px-1 py-1 "
          />
        </div>
      </div>

      <div className="">
        <div>
        <motion.img
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 0.8 }}
        src={myImage3} alt=""
        className="relative w-60 left-20 top-20" />
        <motion.p
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 1.6 }}
        className="justify-center items-center relative mt-[-200px] left-100 grid grid-cols-3">
        V našem Cake Shopu každý dort vzniká s láskou a péčí. Používáme jen ty nejlepší suroviny, abychom vytvořili sladkosti,
         které potěší všechny vaše smysly. Každý kousek pečeme s vášní a precizností,
          abyste si mohli vychutnat dokonalou chuť a krásu v každém soustu. Ať už slavíte narozeniny,
           svatbu nebo si jen chcete dopřát něco sladkého, u nás najdete dorty, které jsou nejen chutné,
         ale i připravené srdcem. Vstupte k nám a objevte, jak chutná láska v každém kousku!
        </motion.p>
        </div>
      </div>



      <div className="relative top-20 left-140">
        <div>
        <motion.img
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 0.8 }}
        src={myImage3} alt=""
        className="relative w-60 left-20 top-20" />
        <motion.p
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 1.6 }}
        className="justify-center items-center relative mt-[-200px] left-100 grid grid-cols-3">
        V našem Cake Shopu každý dort vzniká s láskou a péčí. Používáme jen ty nejlepší suroviny, abychom vytvořili sladkosti,
         které potěší všechny vaše smysly. Každý kousek pečeme s vášní a precizností,
          abyste si mohli vychutnat dokonalou chuť a krásu v každém soustu. Ať už slavíte narozeniny,
           svatbu nebo si jen chcete dopřát něco sladkého, u nás najdete dorty, které jsou nejen chutné,
         ale i připravené srdcem. Vstupte k nám a objevte, jak chutná láska v každém kousku!
        </motion.p>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 relative top-80">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p>&copy; Cake shop je ready</p>
            </div>
            <div>
              <a href="/" className="hover:text-gray-400 px-5">
                Domů
              </a>
              <a href="/about" className="hover:text-gray-400 px-5">
                O nás
              </a>
              <a href="/contact" className="hover:text-gray-400 px-5">
                Kontakt
              </a>
              
              <a href="/SignUp" className="hover:text-gray-400 px-5">
                Registrovat
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div
              className="bg-pink-400 text-white p-6 rounded-lg cursor-pointer hover:bg-pink-600 transition"
              onClick={() => alert("Kliknul jsi na první box")}
            >
              <p className="text-center">Kontaktuj nás</p>
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

export default Hero;
