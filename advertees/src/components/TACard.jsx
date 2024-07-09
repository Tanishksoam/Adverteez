import React from "react";

const TACard = ({ title, description }) => {
  return (
    <div
      className={`w-1/3 py-4 px-4 rounded-md flex flex-col justify-start items-start gap-2 opacity-70`}
    >
      <h4 className="text-2xl font-bold text-white">{title}</h4>
      <p className="text-lg font-thin">{description}</p>
    </div>
  );
};

export default TACard;
