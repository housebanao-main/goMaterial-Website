"use client";
import React from "react";
import { BsHandbag } from "react-icons/bs";
import { MainHeading, Paragraph, SubHeading } from "@/components/MainHeading";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";


export default function ProductCard({ id, image, name, category, price }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [iconHover, setIconHover] = React.useState(null);

  return (
    <div
      key={id}
      className="bg-white rounded-lg border overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={image} alt={name.split("|")[0]} className="w-full h-72 object-cover" />
        <div
          id="icons"
          className={`absolute bottom-0 flex w-full justify-between bg-white p-0 space-x-0  transition-all duration-300 ${
            isHovered
              ? " opacity-100"
              : " opacity-0"
          }`}
        >
          <div   onMouseEnter={() => setIconHover(1)}
      onMouseLeave={() => setIconHover(null)} className={`basis-1/3 flex items-center justify-center py-2 text-xl ${iconHover === 1 ? 'bg-black text-white' : 'text-black'}>`}>
            <CiHeart color={`${iconHover==1 ? "#eee" : "#000"}`}
 />
          </div>
          <div   onMouseEnter={() => setIconHover(2)}
      onMouseLeave={() => setIconHover(null)} className={`basis-1/3 flex items-center justify-center py-2 text-xl border-x border-black/50 ${iconHover === 2 ? 'bg-black text-white' : 'text-black'}>}`}>
            <IoEyeOutline color={`${iconHover==2 ? "#eee" : "#000"}`} />
          </div>
          <div   onMouseEnter={() => setIconHover(3)}
      onMouseLeave={() => setIconHover(null)} className={`basis-1/3 flex items-center justify-center py-2 text-xl ${iconHover === 3 ? 'bg-black text-white' : 'text-black'}>`}>
            <VscArrowSwap color={`${iconHover==3 ? "#eee" : "#000"}`} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 bg-gray-100">
        <div className="p-4 space-y-1 ">
          <Paragraph className="text-sm text-gray-500">{category}</Paragraph>
          <MainHeading className="font-semibold text-lg ">{name.split("|")[0]}</MainHeading>
          <SubHeading className="">₹ {price}</SubHeading>
        </div>
        <button className="mt-4 p-4 bg-gray-200 rounded-full text-2xl border border-gray-700 ">
          <BsHandbag className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
