"use client";
import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";
import img1 from "@/assets/b2c/image 286.png";
import img2 from "@/assets/b2c/image 287.png";
import img3 from "@/assets/b2c/image 288.png";
import img4 from "@/assets/b2c/image 289.png";
import img5 from "@/assets/b2c/image 290.png";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function ShopByBrands() {
  let images = [img1, img2, img3, img4, img5];
  return (
    <div className="bg-[#E1FFD9]">
      <CenterWrapper className={""}>
        <MainHeading className={"text-center font-bold mb-8"}>
          Shop By Brands
        </MainHeading>

        <Marquee autoFill>
          {/* <Image
              className="w-40 object-cover "
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkySveKIEnKvhSiQ-mWklJiIgnsCZ4bA5-w&s"
                }
                /> */}
          {images.map((image, idx) => (
            <div className="mx-8">
              <Image key={idx} className="w-40 object-cover " src={image} />
            </div>
          ))}
        </Marquee>
      </CenterWrapper>
    </div>
  );
}
