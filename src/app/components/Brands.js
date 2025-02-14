import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";

import img5 from "@/assets/b2b/image 286.png";
import img4 from "@/assets/b2b/image 287.png";
import img3 from "@/assets/b2b/image 288.png";
import img2 from "@/assets/b2b/image 289.png";
import img1 from "@/assets/b2b/image 290.png";
import Image from "next/image";
import React from "react";

const Brands = () => {
  const arr = [img1, img2, img3, img4, img5];
  return (
    <>
      <div className="bg-primary">
        <CenterWrapper className={"pb-4"}>
          <MainHeading className={"text-white font-bold"}>
            Shop By Brands
          </MainHeading>
        </CenterWrapper>
      </div>
      <div className="bg-gradient-to-b from-primary from-50% to-white to-50%">
        <CenterWrapper
          className={
            "grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 xl:grid-cols-5 gap-4 bg-white border rounded-xl  px-2 "
          }
        >
          {arr.map((idx) => (
            <div key={idx}>
              <Image src={idx} width={250} height={250} alt="logo" />
            </div>
          ))}
        </CenterWrapper>
      </div>
    </>
  );
};

export default Brands;
