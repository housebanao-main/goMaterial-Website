import React from "react";
import CenterWrapper from "./CenterWrapper";
import { IoMdPricetags } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import OrangeBtn from "./OrangeBtn";
import { CiHeart } from "react-icons/ci";
import CartHeader from "./CartHeader";
import WishlistHeader from "./WishlistHeader";
import Link from "next/link";

const Header = () => {
  const arr = [
    {
      name: "Prices",
      icon: <IoMdPricetags />,
      link: "/",
    },
    {
      name: "Order",
      icon: <IoMdPricetags />,
      link: "/",
    },
    {
      name: "About us",
      icon: <IoMdPricetags />,
      link: "/",
    },
  ];

  return (
    <CenterWrapper className={"flex items-center justify-between pt-4 pb-4"}>
      <div className="text-primary text-xl font-bold">Go Materials</div>
      <div className="flex items-center gap-4 ">
        {arr.map(({ name, icon, link }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 hover:underline hover:underline-offset-2 cursor-pointer"
          >
            {icon}
            {name}
          </div>
        ))}
        <Link href={"/b2c/cart"}>
       <CartHeader/>
       </Link>
       <Link href={"/b2c/wishlist"}>

       <WishlistHeader/>
       </Link>
       
        <OrangeBtn>Log in</OrangeBtn>
      </div>
    </CenterWrapper>
  );
};

export default Header;
