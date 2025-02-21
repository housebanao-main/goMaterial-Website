import {
  LargeHeading,
  MainHeading,
  Paragraph,
  SubHeading,
} from "@/components/MainHeading";
import Link from "next/link";
import React from "react";

const ProductDesc = () => {
  return (
    <div className="w-1/2">
      <MainHeading className="font-bold">Cutting Wheel</MainHeading>
      <MainHeading className="font-semibold mt-2">₹589.70</MainHeading>
      <p className="text-gray-600 mt-4">
        Exercitationem beatae sequi perspiciatis sit voluptatem pariatur. Atque
        est aut est neque. Cupiditate illum nam est. Et ducimus ad quia ratione
        et itaque cupiditate.
      </p>
      <div className="flex items-center mt-4 space-x-2 w-full">
        <input
          type="number"
          className="w-[10%] p-2 border rounded-md"
          defaultValue={1}
        />
        <Link href="/b2c/cart" className=" w-4/5">
          <button className="bg-black w-full text-white px-6 py-2 rounded-md">
            Add to cart
          </button>
        </Link>
        <button className="p-2 w-[10%] border rounded-md">♡</button>
      </div>
      <div className="mt-6">
        <p className="font-bold">SKU:</p>
        <p className="text-gray-600">IN0021</p>
      </div>
      <div className="mt-2">
        <p className="font-bold">Categories:</p>
        <p className="text-gray-600">
          Cutter tools, Hammer tools5, Screwdrivers, Woodwork Tools
        </p>
      </div>
      <div className="mt-2">
        <p className="font-bold">Tags:</p>
        <p className="text-gray-600">Driller, Electric Cutter, Hammer</p>
      </div>
    </div>
  );
};

export default ProductDesc;
