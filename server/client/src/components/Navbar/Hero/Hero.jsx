import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import myImage from "../../../assets/myImage.jpg";
import { FadeRight } from "../../../utility/animation";
import { FadeUp } from "../../../utility/animation";
import { FadeLeft } from "../../../utility/animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pozadi1 from "../../../assets/pozadi1.png";
import I3 from "../../../assets/I3.png";

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-pink-200 to-purple-200 grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative px-4 md:px-8 lg:px-16 py-14 md:py-0">
        <div className="flex flex-col justify-center relative z-10 text-center md:text-left">
          <div className="space-y-4 sm:space-y-6 lg:max-w-[400px] mx-auto md:mx-0">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-relaxed xl:leading-loose"
            >
              Yummy
              <br />
              Cake <span className="text-pink-600">Shop</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl lg:text-2xl tracking-wide"
            >
              Order best cakes for happy life
            </motion.p>
            <motion.p
              variants={FadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base text-gray-700"
            >
              Order best cakes for happy life, Order best cakes for happy life
              Order best cakes for happy lifeOrder best cakes for happy life
            </motion.p>
            <div className="flex justify-center md:justify-start pt-4">
              <motion.button
                variants={FadeLeft(0.1)}
                initial="hidden"
                animate="visible"
                className="primary-btn flex items-center gap-2 px-6 py-3 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
              >
                <span>
                  <IoBagHandleOutline className="text-xl" />
                </span>
                <Link to={"/produkty"}>Order now</Link>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-5 md:py-0">
          <motion.img
            variants={FadeRight(0)}
            initial="hidden"
            animate="visible"
            src={myImage}
            alt="Delicious Cake"
            className="shadow-xl rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] object-cover transition-all duration-300"
          />
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={I3}
            alt="Decorative Cake Image"
            className="w-48 sm:w-64 md:w-72 lg:w-80"
          />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 sm:mt-0 text-base sm:text-lg text-center sm:text-left sm:max-w-[500px] lg:max-w-[600px] text-gray-800 leading-relaxed"
          >
            V našem Cake Shopu každý dort vzniká s láskou a péčí. Používáme jen ty nejlepší suroviny, abychom vytvořili sladkosti, které potěší všechny vaše smysly. Každý kousek pečeme s vášní a precizností, abyste si mohli vychutnat dokonalou chuť a krásu v každém soustu. Ať už slavíte narozeniny, svatbu nebo si jen chcete dopřát něco sladkého, u nás najdete dorty, které jsou nejen chutné, ale i připravené srdcem.
          </motion.p>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-8">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={pozadi1}
            alt="Background Decoration"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-lg shadow-md"
          />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-800 max-w-lg text-center sm:text-left leading-relaxed"
          >
            V našem Cake Shopu každý dort vzniká s láskou a péčí. Používáme jen ty nejlepší suroviny, abychom vytvořili sladkosti, které potěší všechny vaše smysly. Každý kousek pečeme s vášní a precizností, abyste si mohli vychutnat dokonalou chuť a krásu v každém soustu. Ať už slavíte narozeniny, svatbu nebo si jen chcete dopřát něco sladkého, u nás najdete dorty, které jsou nejen chutné, ale i připravené srdcem.
          </motion.p>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6">
            <div>
              <p className="text-sm sm:text-base">&copy; Cake Shop 2025</p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              <a href="/" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">Domů</a>
              <a href="/about" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">O nás</a>
              <a href="/contact" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">Kontakt</a>
              <a href="/SignUp" className="hover:text-gray-400 text-sm sm:text-base transition duration-300">Registrovat</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;