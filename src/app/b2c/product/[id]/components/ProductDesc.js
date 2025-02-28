"use client";
import {
  LargeHeading,
  MainHeading,
  Paragraph,
  SubHeading,
} from "@/components/MainHeading";
import useCartStore from "@/store/cart";
import useWishlistStore from "@/store/wishlist";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ProductDesc = ({ product }) => {
  const { addToB2cCart } = useCartStore();
  const { updateWishlist, wishlist } = useWishlistStore();
  const [quantity, setQuantity] = useState(1);

  const handleCart = (product) => {
    // console.log("handleCart", product);
    addToB2cCart({ ...product, quantity });
  };

  const handleWishlist = () => {
    console.log("handle", wishlist);
    updateWishlist(product);
  };

  return (
    <div className="w-1/2">
      <MainHeading className="font-bold">
        {product.product_name.split("|")[0]}
      </MainHeading>
      <MainHeading className="font-semibold mt-2">
        ₹{product.selling_price}
      </MainHeading>
      <p
        className="text-gray-600 mt-4"
        dangerouslySetInnerHTML={{
          __html: product.product_details.split("<p>")[3].split("</p>")[0],
        }}
      ></p>
      <div className="flex items-center mt-4 space-x-2 w-full">
        <input
          type="number"
          className="w-[10%] p-2 border rounded-md"
          // defaultValue={1}
          min={1}
          value={quantity}
          onChange={(e) => {
            if (e.target.value < 10) {
              setQuantity(e.target.value);
              return;
            }
          }}
        />
        <Link href="/b2c/cart" className=" w-4/5">
          <button
            className="bg-black w-full text-white px-6 py-2 rounded-md"
            onClick={() => {
              handleCart(product);
            }}
          >
            Add to cart
          </button>
        </Link>
        {/* <Link href="/b2c/wishlist" className=" w-[10%]"> */}
        <button
          onClick={handleWishlist}
          className="p-2 w-[10%] border rounded-md flex justify-center"
        >
          {!wishlist.find((item) => item.id === product.id) ? (
            <FaRegHeart />
          ) : (
            <FaHeart />
          )}
        </button>
        {/* </Link> */}
      </div>
      <div className="mt-6">
        <p className="font-bold">SKU:</p>
        <p className="text-gray-600">{product.sku_code}</p>
      </div>
      <div className="mt-2">
        <p className="font-bold">Categories:</p>
        <p className="text-gray-600">{product.prod_specs["Product Type"]}</p>
      </div>
      <div className="mt-2">
        <p className="font-bold">Model No:</p>
        <p className="text-gray-600">{product.model_no}</p>
      </div>
    </div>
  );
};

export default ProductDesc;
