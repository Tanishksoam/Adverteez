import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center text-red ">
      <div className="w-auto text-4xl font-semibold ">AdverTeez</div>
      <div className="w-auto">
        <ul className=" list-none flex justify-start items-center gap-10">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
