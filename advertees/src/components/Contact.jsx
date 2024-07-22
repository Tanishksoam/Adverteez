import React from "react";
import { TbTriangleFilled } from "react-icons/tb";
import { useState } from "react";

const Contact = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [toggle1, setToggle1] = useState(false);
  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  return (
    <div className="w-full rounded-2xl flex flex-col justify-center items-center gap-10 bg-[#f3f3ff] px-4 py-10">
      <h1 className="text-4xl">Flexible Advertising Packages</h1>
      <div className="w-[80%] flex flex-col justify-start items-start gap-6">
        <div
          onClick={handleToggle}
          className="w-full flex justify-start gap-4 items-start cursor-pointer"
        >
          <TbTriangleFilled
            size={20}
            className={`transform ${
              toggle ? "rotate-180" : "rotate-90"
            } duration-100`}
          />
          <h4>Tailored to Your Needs</h4>
        </div>
        {toggle && (
          <div
            className={`w-full px-2 flex justify-start items-start ${
              toggle
                ? "fade-enter fade-enter-active"
                : "fade-exit fade-exit-active"
            }`}
          >
            <div className="px-6 border-l-[1px] border-[#9c9b9b] font-thin">
              We offer flexible advertising packages that are tailored to your
              specific budget and marketing goals. Whether you need a single
              design or a full campaign, we can help you achieve your
              objectives.
            </div>
          </div>
        )}
      </div>
      <div className="w-[80%] flex flex-col justify-start items-start gap-6">
        <div
          onClick={handleToggle1}
          className="w-full flex justify-start gap-4 items-start cursor-pointer"
        >
          <TbTriangleFilled
            size={20}
            className={`transform ${
              toggle1 ? "rotate-180" : "rotate-90"
            } duration-100`}
          />
          <h4>Variety of Options</h4>
        </div>
        {toggle1 && (
          <div
            className={`w-full px-2 flex justify-start items-start ${
              toggle1
                ? "fade-enter fade-enter-active"
                : "fade-exit fade-exit-active"
            }`}
          >
            <div className="px-6 border-l-[1px] border-[#9c9b9b] font-thin">
              Custom Design Services, better advertiseing, and more.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
