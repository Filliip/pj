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
import Footer from "../../footer/Footer";

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
              Indulge in our delicious, freshly made cakes crafted with love and the finest ingredients. Whether it’s for a special occasion or just to satisfy your sweet tooth, we’ve got something perfect for you. Explore our wide variety of cakes, and let us bring a slice of happiness to your day!
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
            At our Cake Shop, every cake is created with love and care. We use only the best ingredients to create sweets that will delight all your senses. We bake each piece with passion and precision so that you can enjoy the perfect taste and beauty in every bite. Whether you are celebrating a birthday, a wedding or just want to treat yourself to something sweet, you will find cakes here that are not only delicious, but also prepared with heart.

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
Here at Team Cakes, we bake the best cakes to make every moment sweeter. From classic flavors to creative new designs, our cakes are made with passion and perfection. Whether you're celebrating a milestone or just treating yourself, we're here to add some extra sweetness to your day!

</motion.p>
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Hero;