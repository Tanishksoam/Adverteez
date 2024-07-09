import React from "react";

const DCard = ({ index, title, description }) => {
  return (
    <div className=" w-full flex gap-4 justify-start items-start p-4 ">
      <div className="w-1/12 flex justify-center items-center ">
        <div className="border-[1px] border-[#212121] px-3 py-1 text-2xl rounded-full">
          {index}
        </div>
      </div>
      <div className="w-auto flex flex-col justify-start items-start gap-4 ">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-md font-light">{description}</p>
      </div>
    </div>
  );
};

export default DCard;
