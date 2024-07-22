import React from "react";
import Navbar from "../components/Navbar";
import Form_Contact from "../components/contactus/from";

const ContactUs = () => {
  return (
    <div className=" w-[100vw]  flex flex-col items-start justify-start font-mono ">
      <div className="w-full min-h-[100vh] flex flex-col items-start justify-start  bg-[#f3f3ff] gap-10 px-52 py-6">
        <Navbar />
        <h1 className="w-full text-4xl font-bold  text-center">Contact Us</h1>
        <Form_Contact />
      </div>
    </div>
  );
};

export default ContactUs;
