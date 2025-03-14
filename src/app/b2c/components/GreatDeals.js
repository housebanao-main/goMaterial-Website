import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";

import { IMG_PLACEHOLDER } from "@/utils/constants";
import img1 from "@/assets/b2c/image 195.png";
import img2 from "@/assets/b2c/image 204.jpg";
import img3 from "@/assets/b2c/image 207.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function GreatDeals() {
  const data = [
    {
      title: "LED lights",
      discount: "Get 20% off",
      color: "#D9FCF6",
      textColor: "#6FB3A2",
      image: img1,
      isImageTop: true,
      link: "/b2c/products?mainCategory=WALL LIGHTS"
    },
    {
      title: "Cement",
      discount: "Get upto 40% off on bulk orders",
      color: "#FFEDDE",
      textColor: "#B38F7A",
      image: img3,
      isImageTop: false,
      link: "/b2c/products?mainCategory=CEMENT"
    },
    {
      title: "Sanitaryware & fittings",
      discount: "Get upto 20% off on bulk orders",
      color: "#ECDAF2",
      textColor: "#A87FB3",
      image: img2,
      isImageTop: true,
      link: "/b2c/products?mainCategory=BATHROOM ACCESSORY"

    },
    
  ];
  return (
    <CenterWrapper className={"space-y-8"}>
      <MainHeading className={"font-bold text-center"}>
        Great Deals, selling fast!
      </MainHeading>
      <div className="flex items-center justify-between gap-4">
        {data.map((deal, index) => (
          <Link href={deal.link} key={index}>
          <Card  data={deal} />
          </Link>
        ))}
      </div>
    </CenterWrapper>
  );
}

const Card = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: data.color,
        color: data.textColor,
      }}
      className={`  w-96 h-96 rounded-tl-[45%] flex flex-col justify-between pl-16 ${
        data.title == "LED lights" ? "flex-col-reverse pb-5" : ""
      }`}
    >
      <div className="pt-[20%]">
        <MainHeading className={"font-bold"}>{data.title} </MainHeading>
        <p className="font-semibold">{data.discount}</p>
      </div>
      <div>
        <Image
          src={data.image}
          alt="img"
          width={250}
          height={150}
          className="h-full w-full object-cover ml-5 mb-"
        />
      </div>
    </div>
  );
};
