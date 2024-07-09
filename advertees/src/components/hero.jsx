import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 gap-10">
      <div className=" w-2/3 flex flex-col justify-center items-start gap-4">
        <h1 className="text-6xl">Empower Communities with Every T-Shirt</h1>
        <h4 className="text-lg">
          Join our mission to provide free T-shirts to those in need, supported
          by ads from our generous sponsors.
        </h4>
        <div className="w-auto rounded-md bg-[#2D4DF2] text-[#fdfdfd] font-semibold px-4 py-2">
          Sponsor Us
        </div>
      </div>
      <div>
        <img
          className="w-96 rounded-xl"
          src="https://cdn.gamma.app/adl4ifc2p62huqk/generated-images/-Ek17MkRCs3d0w0fxGsfi.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
