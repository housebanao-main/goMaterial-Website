"use client";
import React from "react";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
/* Add this to your global CSS file or in your main CSS import */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterWrapper from "@/components/CenterWrapper";
import { IMG_PLACEHOLDER } from "@/utils/constants";

import { IoIosHeartEmpty } from "react-icons/io";
import { MainHeading } from "@/components/MainHeading";
import img1 from "@/assets/b2c/image 223.png";
import img2 from "@/assets/b2c/image 224.png";
import img3 from "@/assets/b2c/image 225.png";
import Image from "next/image";

export default function TrendingProducts() {
  const cardData = [
    {
      title: "Artize Spout Lexa ",
      description: "High-quality spout for modern bathrooms.",
      image: img1,
    },
    {
      title: "Artize OverHead Shower ",
      description: "Experience luxury with this overhead shower.",
      image: img2,
    },
    {
      title: "Artize Bib Cock Kavalier ",
      description: "Durable and stylish bib cock for your bathroom.",
      image: img3,
    },
    {
      title: "Artize Modern Faucet ",
      description: "Elegant faucet for a sophisticated look.",
      image: img1,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 ">
      <CenterWrapper>
        <MainHeading className=" font-bold text-center mb-8">
          Trending Products
        </MainHeading>
        <Slider {...settings}>
          {cardData.map((item, index) => (
            // <div key={index} className="px-4 h-80">
            <div key={index} className="p-4">
              <div className="bg-white shadow-md min-h-80 rounded-lg p-4 space-y-4 ">
                <div className="flex items-center justify-between gap-4 ">
                  {/* <div className=""> */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
                  {/* </div> */}
                  <button className=" text-xl ">
                    <IoIosHeartEmpty />
                  </button>
                </div>

                <div>
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    className="mx-auto h-72 object-cover"
                  />
                  {/* <img src={item.image}/> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </CenterWrapper>
    </div>
  );
}
