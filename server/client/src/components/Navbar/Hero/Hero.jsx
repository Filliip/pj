import React from "react";
import {IoBagHandleOutline} from "react-icons/io5";
import myImage from "../../../assets/myImage.jpg"
import { FadeRight } from "../../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <h1
           
            className="text-5xl lg:text-6xl font-bold leading-realxed xl:leading-loose">
              Yummy
              <br />
              Cake <span className="text-pink-500">Shop</span>
            </h1>
            <p className="text-2xl tracking-wide">Order best cakes for happy life</p>
            <p className="text-gray-600">
                Order best cakes for happy life, Order best cakes for happy life
                Order best cakes for happy lifeOrder best cakes for happy life
                </p>
                <div className="flex justify center md:justify-start">
                  <button className="primary-btn flex items-center gap-2">
                    <span>
                      <IoBagHandleOutline />
                    </span>
                    Objednat si dort</button>
                </div>
          </div>

        </div>
        <div className=" flex justify-center items-cemter">
          <img src={myImage}
           alt=""
            className="w[350px] md:w-[550px] drop-shadow rounded-full px-1 py-1"/>
        </div>

      </div>
    </section>
  );
};

export default Hero;
