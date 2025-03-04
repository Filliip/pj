import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FadeRight } from "../../utility/animation";
import { FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";

export default function Shop() {
  return (
    <>
      <div className="top-0 relative">
        <Navbar />
      </div>


      <div className="font-averia text-pink-400 drop-shadow- text-4xl relative left-150 top-10">
        <p>Kategorie produktu</p>
      </div>


      <motion.div
        variants={FadeLeft(0)}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3  relative top-40 left-30"
      >
        <div
          className="text-white font-averia bg-pink-400 rounded-lg px-5 w-64 h-20 justify-center items-center grid grid-cols-3 gap-y-5
        hover:!scale-110 duration-300
        "
        >
          Naše produkty
        </div>
        <div
          className="text-white font-averia bg-pink-400 rounded-lg px-5 w-64 h-20 justify-center items-center grid grid-cols-3 gap-y-5
        hover:!scale-110 duration-300
        "
        >
          Naše produkty
        </div>
        <div
          className="text-white font-averia bg-pink-400 rounded-lg px-5 w-64 h-20 justify-center items-center grid grid-cols-3 gap-y-5
        hover:!scale-110  duration-300
        "
        >
          Naše produkty
        </div>
      </motion.div>

      <div className="relative top-180">
        <Footer />{" "}
      </div>
    </>
  );
}
