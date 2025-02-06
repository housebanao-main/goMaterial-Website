"use client";
import CenterWrapper from "@/components/CenterWrapper";
import OrangeBtn from "@/components/OrangeBtn";
import { IoSearch } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <Popup handleClose={handleClose} />}
      <CenterWrapper className={"flex items-center min-h-[50vh]"}>
        <div className=" basis-2/3 space-y-8">
          <h1 className="font-bold text-4xl ">
            Building Strong Foundations: Premium Materials for Your Construction
            Needs
          </h1>
          <div className="flex items-center w-1/2 shadow-md">
            <input
              type="text"
              placeholder="Search for TMT"
              className="outline-none border-none p-2 w-full py-3 "
            />
            <OrangeBtn className={"py-3"}>
              <IoSearch />
            </OrangeBtn>
          </div>
          <div className="flex gap-4 items-center">
            <div>Popular: </div>
            {["Raw Materials", "Cements", "Steel", "Paints", "Polymers"].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 rounded-full p-0.5 px-3 cursor-pointer"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </CenterWrapper>
    </>
  );
};

const Popup = ({ handleClose }) => {
  // const router = useRouter();

  return (
    <>
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 w-full h-full"
      ></div>
      <div className="z-[60] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute bg-[#2B64F1] p-5 rounded-2xl shadow-xl w-[80%] max-w-lg">
        <button
          className="absolute top-3 right-3 p-2 text-gray-700 hover:text-black"
          onClick={handleClose}
        >
          <AiOutlineClose color="#ffff" className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-xl text-white font-semibold mb-4 text-center">
            Tell us, are you seeking solutions for your business (B2B) or
            personal needs (B2C)?
          </h2>
          <div className="flex flex-col gap-5">
            <button
              onClick={handleClose}
              className="w-full flex items-center justify-center py-3 rounded-3xl text-lg bg-blue-200"
            >
              <span role="img" aria-label="Business">
                \ud83d\udcbc
              </span>{" "}
              Business
            </button>
            <Link href={"/b2c"}>
              <button className="w-full flex items-center justify-center py-3 rounded-3xl text-lg bg-blue-200">
                <span role="img" aria-label="Individual">
                  \ud83d\udcbc
                </span>{" "}
                Individual
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
