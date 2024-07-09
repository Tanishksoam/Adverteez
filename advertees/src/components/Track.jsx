import React from "react";
import "./Track.css";

const Track = () => {
  return (
    <div className="w-full  flex flex-col  justify-start items-start py-20 gap-8  text-[#212121]">
      <div className="w-full flex justify-start  items-center text-5xl font-medium ">
        Proven Track Record of Success
      </div>
      <div className=" w-full flex-col justify-start items-start gap-4">
        <div className=" flex items-start justify-start text-4xl align-text-bottom  text-white">
          <div className="hexagon-concave flex justify-center items-center ">
            {" "}
            1
          </div>
          <div className="hexagon-concave bg-[#018CE1] flex justify-center items-center ">
            {" "}
            2
          </div>
          <div className="hexagon-concave flex justify-center items-center ">
            {" "}
            3
          </div>
        </div>
        <div className=" flex items-start justify-start text-lg align-text-bottom gap-5">
          <div className=" w-[350px] flex flex-col justify-start items-start py-4 px-4">
            <h4 className=" w-full font-bold text-2xl py-4 ">
              Increased Brand Awareness
            </h4>
            <p>
              {" "}
              Our campaigns have helped businesses reach new customers and boost
              their brand visibility.
            </p>
          </div>
          <div className=" w-[350px] flex flex-col justify-start items-start py-4 px-4">
            <h4 className=" font-bold text-2xl py-4 ">Improved Sales</h4>
            <p>
              {" "}
              Our designs have driven conversions and generated tangible results
              for our clients.
            </p>
          </div>
          <div className=" w-[350px] flex flex-col justify-start items-start py-4 px-4">
            <h4 className=" font-bold text-2xl py-4 ">
              Positive Customer Feedback
            </h4>
            <p>
              {" "}
              We have a strong reputation for delivering high-quality designs
              and excellent customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
