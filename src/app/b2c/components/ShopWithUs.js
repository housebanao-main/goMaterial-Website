"use client";
import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";
import { IMG_PLACEHOLDER } from "@/utils/constants";
import React, { useState } from "react";
import img1 from "@/assets/b2c/image_211.png";
import img2 from "@/assets/b2c/image_212.png";
import img4 from "@/assets/b2c/image 214.png";
import img5 from "@/assets/b2c/image 218.png";
import img6 from "@/assets/b2c/image 219.png";
import img7 from "@/assets/b2c/image 220.png";
import img8 from "@/assets/b2c/image 221.png";
import img3 from "@/assets/b2c/image_230.png";
import Image from "next/image";

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
    image: img1,
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    name: "Basin Mixer",
    category: "Kitchen accessories",
    image: img2,
    bgColor: "bg-yellow-100",
  },
  {
    id: 3,
    name: "Bath Tub",
    category: "Plumbing & Sanitary",
    image: img3,
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    name: "Stop Cock",
    category: "Faucets & showers",
    image: img4,
    bgColor: "bg-pink-100",
  },
  {
    id: 5,
    name: "Soap Dispenser",
    category: "Kitchen accessories",
    image: img5,
    bgColor: "bg-teal-100",
  },
  {
    id: 6,
    name: "Thermostatic Control",
    category: "Plumbing & Sanitary",
    image: img6,
    bgColor: "bg-orange-100",
  },
  {
    id: 7,
    name: "Health Faucet",
    category: "Faucets & showers",
    image: img7,
    bgColor: "bg-green-100",
  },
  {
    id: 8,
    name: "Shower Set",
    category: "Faucets & showers",
    image: img8,
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
      <MainHeading className={"font-bold text-center mb-6"}>
        Shop with us
      </MainHeading>

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
            <Image
              width={300}
              height={300}
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <div className="flex items-center justify-between">
              <h3 className="text ">{product.name}</h3>
              <div className=" flex justify-end">
                <button className="text-lg text-black font-bold">→</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CenterWrapper>
  );
};

export default ShopWithUs;
