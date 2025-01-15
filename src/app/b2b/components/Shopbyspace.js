import CenterWrapper from "@/components/CenterWrapper";
import Image from "next/image";
import React from "react";

const ShopBySpace = () => {
  const categories = [
    { name: "Structure material" },
    { name: "Flooring and tiles" },
    { name: "Bathroom and sanitary" },
    { name: "Electrical and lightings" },
    { name: "Hardware and fittings" },
    { name: "Plywood and boards" },
  ];

  return (
    <CenterWrapper className="">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        <button className="px-6 py-2 rounded-full font-medium text-white bg-blue-600 shadow hover:bg-blue-500">
          Individual buyer
        </button>
        <button className="px-6 py-2 rounded-full font-medium text-blue-600 border border-blue-600 hover:bg-blue-100">
          Business
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-xl font-semibold mb-4">Shop by Space</h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {/* Placeholder Image */}
            <div className="h-64 flex items-center justify-center ">
             <Image src={"https://placehold.jp/500x500.png"} alt="img" width={500} height={500} className="h-full object-cover"/>
            </div>

            {/* Category Name */}
            <div className="p-4 flex justify-between items-center ">
              <span className="text-sm font-medium">{category.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </CenterWrapper>
  );
};

export default ShopBySpace;
