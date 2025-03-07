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
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import {
  AiOutlineShop,
  AiOutlineSync,
  AiOutlineCar,
  AiOutlineDollarCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";

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

  useEffect(() => {
    const highlights = document.querySelector(".highlights");

    if (product) {
      highlights.innerHTML = product?.highlights;
      const ul = document.querySelector(".highlights ul");
      ul.style.listStyleType = "disc";
    }
  }, []);

  const icons = [
    {
      icon: <AiOutlineShop size={20} color="#3b82f6" />,
      label: "24/7 Support",
    },
    { icon: <AiOutlineSync size={20} color="#3b82f6" />, label: "Returnable" },
    {
      icon: <AiOutlineCar size={20} color="#3b82f6" />,
      label: "GoMaterial Delivered",
    },
    {
      icon: <AiOutlineDollarCircle size={20} color="#3b82f6" />,
      label: "Delivery Charges Extra",
    },
    {
      icon: <AiOutlineDollarCircle size={20} color="#3b82f6" />,
      label: "Unloading Charges Extra",
    },
    {
      icon: <AiOutlineClockCircle size={20} color="#3b82f6" />,
      label: "Usually Ships in 24 - 72 hours",
    },
  ];

  return (
    <div className="w-1/2">
      <MainHeading className="font-bold">
        {product?.product_name.split("|")[0]}
      </MainHeading>
      <div className="mt-4 mb-6">
        <div className="flex items-center gap-4">
          <MainHeading className="font-semibold text-2xl text-black">
            ₹{product?.selling_price}
          </MainHeading>
          <MainHeading className="font-medium text-xl line-through text-gray-500">
            ₹{product?.cost_price}
          </MainHeading>
          <div className="bg-green-100 px-3 py-1 rounded-md">
            <MainHeading className="font-semibold text-lg text-green-700">
              {Math.round(
                100 - (product?.selling_price / product?.cost_price) * 100
              )}
              % OFF
            </MainHeading>
          </div>
        </div>
      </div>
      {/* <p
        className="text-gray-600 mt-4"
        dangerouslySetInnerHTML={{
          __html: product.product_details.split("<p>")[3].split("</p>")[0],
        }}
      ></p> */}
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
          {!wishlist.find((item) => item._id === product._id) ? (
            <FaRegHeart />
          ) : (
            <FaHeart />
          )}
        </button>
        {/* </Link> */}
      </div>
      {/* <div className="mt-6">
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
      </div> */}
      <div className="highlights mt-6"></div>

      <div className="mt-8 mb-4">
        <SubHeading className="font-semibold mb-3">
          Delivery & Services
        </SubHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {icons.map((icon, index) => (
            <Icon key={index} name={icon.label} icon={icon.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Icon = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-200 transition-all duration-300">
      <div className="p-2 bg-blue-50 rounded-full">{icon}</div>
      <Paragraph className="text-sm text-gray-700">{name}</Paragraph>
    </div>
  );
};

export default ProductDesc;
