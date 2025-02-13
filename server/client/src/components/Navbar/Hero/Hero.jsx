import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-realxed xl:leading-loose">
              Yummy
              <br />
              Cake <span className="text-pink-500">Shop</span>
            </h1>
            <p className="text-2xl tracking-wide">Order best cakes for happy life</p>
            <p className="text-gray-400">
                Order best cakes for happy life, Order best cakes for happy life
                Order best cakes for happy lifeOrder best cakes for happy life
                </p>
                <div className="flex justify center md:justify-start">
                  <button className="text-pink-500 rounded-full hover:!scale-110 duration-300">Objednat si dort</button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
