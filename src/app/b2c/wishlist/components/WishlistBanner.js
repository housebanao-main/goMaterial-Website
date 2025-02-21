import React from "react";
import IMG from "@/assets/b2c/WishlistBanner.png";
import Image from "next/image";
import { LargeHeading, MainHeading, SubHeading } from "@/components/MainHeading";

export default function WishlistBanner({text}) {
  return (
    <div>
        <div className={"relative "}>
{/* <div className="w-full h-56 border border-black"></div> */}
      <Image  src={IMG} alt="Wishlist Banner" className={"h-[35vh] object-cover"} />
      <div className="absolute top-1/2  text-white left-1/2 -translate-x-1/2 -translate-y-1/2 ">
<LargeHeading className={"font-bold"}>{text} </LargeHeading>
{/* <SubHeading className={"mt-4 text-center"}>{"Home > "}{text}</SubHeading> */}
      </div>
        </div>
       

    </div>
  );
}
