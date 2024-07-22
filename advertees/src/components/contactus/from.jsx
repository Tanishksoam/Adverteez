import React from "react";

const Form_Contact = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-10 py-5 bg-white rounded-lg font-mono">
      <div className="w-full flex justify-evenly items-start gap-10">
        <div className=" w-full ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="unique-input"
          >
            Name
          </label>
          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter your name"
            type="text"
            id="unique-input"
          />
        </div>
        <div className=" w-full ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="unique-input"
          >
            Email
          </label>
          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter your email"
            type="email"
            id="unique-input"
          />
        </div>
      </div>
      <div className="w-full flex justify-evenly items-start gap-10">
        <div className=" w-full ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="unique-input"
          >
            Contact
          </label>
          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter your Mobile Number"
            type="number"
            id="unique-input"
          />
        </div>
        <div className=" w-full ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="unique-input"
          >
            Subject
          </label>
          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter subject of your message"
            type="text"
            id="unique-input"
          />
        </div>
      </div>
      <div className=" w-full ">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="unique-input"
        >
          Message
        </label>
        <textarea
          className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          placeholder="Enter your message..."
          type="email"
          id="unique-input"
        />
      </div>
      <div className="w-full flex justify-end items-end">
        <button className="relative isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-0 before:left-0 before:right-0 before:rounded-full before:bg-[#2D4DF2] before:z-[-10] before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-600 inline-flex items-center justify-center px-12 py-3 text-md font-semibold text-white border-2 border-[#2D4DF2] rounded-full shadow-sm gap-x-2 hover:text-[#2D4DF2] hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form_Contact;
