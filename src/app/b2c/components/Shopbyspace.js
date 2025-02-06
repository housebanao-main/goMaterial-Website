
import CenterWrapper from "@/components/CenterWrapper";
import Image from "next/image";
import React from "react";
import { MainHeading } from "@/components/MainHeading";

const ShopBySpace = () => {
  const categories = [
    { name: "Structure material", color: "#f0e68c", link: "#", image: "https://picsum.photos/500/500?random=1" },
    { name: "Flooring and tiles", color: "#add8e6", link: "#", image: "https://picsum.photos/500/500?random=2" },
    { name: "Bathroom and sanitary", color: "#ffb6c1", link: "#", image: "https://picsum.photos/500/500?random=3" },
    { name: "Electrical and lightings", color: "#98fb98", link: "#", image: "https://picsum.photos/500/500?random=4" },
    { name: "Hardware and fittings", color: "#dda0dd", link: "#", image: "https://picsum.photos/500/500?random=5" },
    { name: "Plywood and boards", color: "#ffdab9", link: "#", image: "https://picsum.photos/500/500?random=6" },
    
  ];

  return (
    <CenterWrapper className="">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        <button className="px-6 py-3 rounded-full font-medium text-white bg-blue-600 shadow hover:bg-blue-500">
          Individual buyer
        </button>
        <button className="px-6 py-3 rounded-full font-medium text-blue-600 border border-blue-600 hover:bg-blue-100">
          Business
        </button>
      </div>

      {/* Section Title */}
      <MainHeading className={"mb-4 font-semibold"}>Shop by Space</MainHeading>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-stretch">
        <div>
        {categories.map((category, index) => (
     index==0 &&  <Card key={index} category={category} index={index}/>
        ))}
        </div>
        <div className="grid grid-cols-1 gap-3">
        {categories.map((category, index) => (
    (index>=1 && index<=2) &&   <Card key={index} category={category} index={index}/>
        ))}
        </div>
        <div className="grid grid-cols-1 gap-3">
        {categories.map((category, index) => (
    (index>=3 && index<=4) &&   <Card key={index} category={category} index={index}/>
        ))}
        </div>
        <div>
        {categories.map((category, index) => (
     index==5 &&  <Card key={index} category={category} index={index}/>
        ))}
        </div>
        {/* {categories.map((category, index) => (
       <Card category={category} index={index}/>
        ))} */}
      </div>
    </CenterWrapper>
  );
};


const Card= ({category,index})=> (
  <div
  key={index}
  className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
  style={{ backgroundColor: category.color }}
>
  {/* Placeholder Image */}
  <div className={`${index==0 || index==5 ?"h-[450px]" :"h-48"}  flex items-center justify-center `}>
    <Image src={category.image} alt="img" width={500} height={500} className="h-full object-cover"/>
  </div>

  {/* Category Name */}
  <div className="p-4 flex justify-between items-center ">
    <span className="text-sm font-medium">{category.name}</span>
    <a href={category.link}>
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
    </a>
  </div>
</div>
)

export default ShopBySpace;
