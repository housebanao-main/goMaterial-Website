import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaRegCommentDots } from 'react-icons/fa';

const BannerForm = () => {
  return (
    <div className="bg-[#222222] text-white p-6 flex flex-col justify-center min-h-[70svh]  right-0 max-w-[350px] ">
      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-blue-500 text-xl font-bold">Go material</h1>
      </div>

      {/* Form Section */}
      <div>
        <h2 className="text-3xl font-bold mb-2 leading-10 w-[80%]">Sign up with us as a seller</h2>
        <p className="text-gray-400 text-sm mb-6">
          Joining is quick and easy! Start selling your products in just a few simple steps.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-500 bg-transparent text-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Mobile number"
            className="w-full border border-gray-500 bg-transparent text-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full border border-gray-500 bg-transparent text-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition"
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Floating Icons */}
      <div className="fixed right-0 top-20 space-y-4">
        <button className="w-12 h-12 bg-white text-green-500 flex items-center justify-center rounded-l-xl shadow-md hover:bg-gray-100">
          <FaWhatsapp size={20} />
        </button>
        <button className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-l-xl shadow-md hover:bg-gray-100">
          <FaPhoneAlt size={20} />
        </button>
      </div>

      {/* Chat Icon */}
      <div className="fixed right-6 bottom-12 z-20">
        <button className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600">
          <FaRegCommentDots size={24} />
        </button>
      </div>
    </div>
  );
};

export default BannerForm;
