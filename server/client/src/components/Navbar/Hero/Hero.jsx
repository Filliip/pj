import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import myImage from "../../../assets/myImage.jpg";
import { FadeRight } from "../../../utility/animation";
import { FadeUp } from "../../../utility/animation";
import { FadeLeft } from "../../../utility/animation";
import { motion } from "framer-motion";


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
                Order now
              </motion.button>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-cemter">
          <motion.img
            variants={FadeRight(0.1)}
            initial="hidden"
            animate="visible"
            src={myImage}
            alt=""
            className=" shadow-[2px_1py_1px_-2px_#de0029] hover:!scale-80 bg-pink-300 duration-300 [350px] md:w-[550px] drop-shadow rounded-full px-1 py-1"
          />
        </div>
      </div>

      

      
    </>
  );
};

export default Hero;
