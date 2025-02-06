"use client";
import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";
import React, { useState } from "react";

const TellReqd = () => {
  const buyData = [
    {
      label: "Enter Product",
      input: "text",
    },
    {
      label: "Quantity",
      input: "text",
    },
    {
      label: "Company",
      input: "text",
    },
    {
      label: "Pincode",
      input: "text",
    },
    {
      label: "Email",
      input: "text",
    },
    {
      label: "Mobile Number",
      input: "text",
    },
  ];
  const [state, setState] = useState("Buy");
  return (
    <div className="bg-gradient-to-r from-[#FFEDDE] to-[#FFC9BF]">
      <CenterWrapper className={"space-y-8"}>
        <MainHeading className={"text-black font-bold"}>
          Tell us your requirement
        </MainHeading>
        <div className="bg-white py-6 px-4 rounded-xl space-y-4">
          <div className=" flex gap-4">
            {["Buy", "Sell"].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setState(item)}
                className={`flex cursor-pointer items-center gap-2 border ${
                  state == item ? "bg-green-500/20 border-green-500" : null
                } p-2 rounded-full px-4`}
              >
                {/* <input type="radio" name="buy-sell" id={item} /> */}
                <div
                  className={`w-4 h-4 border ${
                    state == item && "border-green-500"
                  }  flex items-center justify-center rounded-full`}
                >
                  <div
                    className={`w-2 h-2 ${
                      state == item && "bg-green-500 "
                    }  rounded-full`}
                  ></div>
                </div>
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
          <div className="flex gap-4 items-center justify-between flex-wrap">
            {buyData.map(({ label, input }, idx) => (
              <InputCard label={label} key={idx} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="w-32 py-2 rounded-lg bg-blue-600 text-white">
              Submit
            </button>
          </div>
        </div>
      </CenterWrapper>
    </div>
  );
};

const InputCard = ({ label }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label}>{label}</label>
      <input
        placeholder={`Select ${label}`}
        type="text"
        id={label}
        className="p-2 outline-none border-gray-400 border rounded-lg"
      />
    </div>
  );
};

export default TellReqd;
