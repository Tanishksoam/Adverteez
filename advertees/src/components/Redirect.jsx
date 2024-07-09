import React from "react";

const Redirect = () => {
  return (
    <div className="w-full  flex flex-col  justify-start items-start py-20 gap-8  text-[#212121]">
      <h4 className="text-4xl">Get Started Today</h4>
      <div className=" flex gap-6 justify-start items-start">
        <div className="w-auto rounded-full bg-[#2D4DF2] text-[#fdfdfd] font-semibold px-4 py-2">
          Contact US
        </div>
        <div className="w-auto rounded-full bg-transparent border-2 border-[#2D4DF2] text-[#2D4DF2] font-semibold px-4 py-2">
          Get Quoted
        </div>
      </div>
    </div>
  );
};

export default Redirect;
