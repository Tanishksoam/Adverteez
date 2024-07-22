import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center text-red ">
      <div className="w-auto text-4xl font-semibold ">AdverTeez</div>
      <div className="w-auto">
        <ul className=" list-none flex justify-start items-center gap-10 text-[#2D4DF2] font-medium">
          <li className="border-b-2 border-[#2d4df200] hover:border-[#2d4df2] px-2 ease-in-out duration-300 cursor-pointer">
            Home
          </li>
          <li className="border-b-2 border-[#2d4df200] hover:border-[#2d4df2] px-2 ease-in-out duration-300 cursor-pointer">
            About Us
          </li>
          <button class="relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#2D4DF2] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-600 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#2D4DF2]  border-2 border-[#2D4DF2] rounded-full shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
