import React from "react";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start  bg-[#f3f3ff] px-52 py-6">
      <Navbar />
      <form>
        <div class="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="unique-input"
          >
            Name
          </label>
          <input
            class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter your name"
            type="text"
            id="unique-input"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
