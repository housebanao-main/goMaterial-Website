import CenterWrapper from "@/components/CenterWrapper";
import React from "react";
import SearchProduct from "./SearchProduct";

export default function Header() {
  return (
    <CenterWrapper className="flex justify-between items-center  bg-white pt-4 pb-4">
      {/* Logo */}
      <div className="text-blue-600 font-bold text-lg">Go Material</div>

      <div className="flex flex-1 justify-center">
        <SearchProduct />
      </div>

      {/* Menu Options */}
      <div className="flex items-center space-x-6">
        <a
          href="#"
          className="text-sm font-medium text-gray-800 hover:text-blue-500"
        >
          Individual buyer
        </a>
        <a
          href="#"
          className="text-sm font-medium text-gray-800 hover:text-blue-500"
        >
          Business
        </a>

        {/* Cart Icon */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.361 1.447a2 2 0 001.964 1.553h10.35a2 2 0 001.964-1.553L19 3h2m-2 0l1.528 6.114a2 2 0 01-1.91 2.386H6.382a2 2 0 01-1.91-2.386L5 3m6 10.5a1.5 1.5 0 11-3 0m9 0a1.5 1.5 0 11-3 0"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            0
          </span>
        </div>

        {/* Sign In Button */}
        <button className="flex items-center px-4 py-2 text-sm font-medium border rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25a2.25 2.25 0 10-4.5 0V9m6 0h-7.5m7.5 0a2.25 2.25 0 01-2.25 2.25h-3a2.25 2.25 0 01-2.25-2.25m4.5 0V18m0 0a2.25 2.25 0 01-4.5 0"
            />
          </svg>
          Sign In
        </button>
      </div>
    </CenterWrapper>
  );
}
