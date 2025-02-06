"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_PLACEHOLDER } from "@/utils/constants";
import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";
import toiletseat from "@/assets/b2c/image 228.png";
import img1 from "@/assets/b2c/image_211.png";
import img3 from "@/assets/b2c/image_230.png";
import img2 from "@/assets/b2c/image 195.png";
import Image from "next/image";

const ProductLaunches = () => {
  const products = [
    {
      id: 1,
      title: "Basin Mixer & Basin Faucet",
      image: img1,
      link: "/basin-mixer",
    },
    {
      id: 2,
      title: "Tankless WC",
      image: toiletseat,
      link: "/tankless-wc",
    },
    {
      id: 3,
      title: "Decorative lightings",
      image: img2,
      link: "/decorative-lightings",
    },
    {
      id: 4,
      title: "Bath Tub",
      image: img3,
      link: "/bath-tub",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bgColors = {
    0: "bg-pink-100",
    1: "bg-orange-50",
    2: "bg-purple-100",
    3: "bg-teal-50",
  };

  const starColors = {
    0: "text-red-500",
    1: "text-orange-400",
    2: "text-purple-600",
    3: "text-teal-500",
  };

  return (
    <CenterWrapper className="">
      <MainHeading className=" font-bold mb-8 text-center">
        New Launches
      </MainHeading>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={product.id} className="px-8">
            <a href={product.link} className="block">
              <div
                className={`rounded-t-full pt-20 ${
                  bgColors[index % 4]
                } relative aspect-[3/4] flex items-center `}
              >
                {/* Sparkle icons */}
                {/* <div className={`absolute top-4 right-4 ${starColors[index % 4]}`}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" />
                  </svg>
                </div> */}

                {/* Product image placeholder */}
                <div className="w-full h-52 mb-4">
                  <Image
                    width={300}
                    height={300}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product title */}
              </div>
              <h3 className="text-center text-gray-800 font-medium mt-2">
                {product.title}
              </h3>
            </a>
          </div>
        ))}
      </Slider>
    </CenterWrapper>
  );
};

export default ProductLaunches;
