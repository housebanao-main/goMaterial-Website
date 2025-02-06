"use client";
import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";
import { IMG_PLACEHOLDER } from "@/utils/constants";
import React, { useState } from "react";

const categories = [
  "All",
  "Faucets & showers",
  "Kitchen accessories",
  "Plumbing & Sanitary",
  "Wall And Floor Tiles",
  "Electrical",
];

const products = [
  {
    id: 1,
    name: "Basin Mixer",
    category: "Faucets & showers",
    image: "https://picsum.photos/200/200?random=1",
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    name: "Basin Mixer",
    category: "Kitchen accessories",
    image: "https://picsum.photos/200/200?random=2",
    bgColor: "bg-yellow-100",
  },
  {
    id: 3,
    name: "Bath Tub",
    category: "Plumbing & Sanitary",
    image: "https://picsum.photos/200/200?random=3",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    name: "Stop Cock",
    category: "Faucets & showers",
    image: "https://picsum.photos/200/200?random=4",
    bgColor: "bg-pink-100",
  },
  {
    id: 5,
    name: "Soap Dispenser",
    category: "Kitchen accessories",
    image: "https://picsum.photos/200/200?random=5",
    bgColor: "bg-teal-100",
  },
  {
    id: 6,
    name: "Thermostatic Control",
    category: "Plumbing & Sanitary",
    image: "https://picsum.photos/200/200?random=6",
    bgColor: "bg-orange-100",
  },
  {
    id: 7,
    name: "Health Faucet",
    category: "Faucets & showers",
    image: "https://picsum.photos/200/200?random=7",
    bgColor: "bg-green-100",
  },
  {
    id: 8,
    name: "Shower Set",
    category: "Faucets & showers",
    image: "https://picsum.photos/200/200?random=8",
    bgColor: "bg-indigo-100",
  },
];

const ShopWithUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
   <CenterWrapper>
      {/* Heading */}
      <MainHeading className={"font-bold text-center mb-6"}>Shop with us</MainHeading>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            } hover:bg-black hover:text-white transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`p-4 rounded-lg shadow-md ${product.bgColor}`}
          >
            <img
              src={IMG_PLACEHOLDER|| product.image}
              alt={product.name}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <div className="flex items-center justify-between">
                
            <h3 className="text ">{product.name}</h3>
            <div className=" flex justify-end">
              <button className="text-lg text-black font-bold">
                →
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
      </CenterWrapper>
  );
};

export default ShopWithUs;
