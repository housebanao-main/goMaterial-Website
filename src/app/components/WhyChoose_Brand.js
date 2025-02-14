import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading, SubHeading } from "@/components/MainHeading";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiPiggyBankBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";


import React from "react";

const WhyChoose_Brand = () => {
  const arr = [
    {
      icon: <FaRegCreditCard color="#3d6ea6" />,
      heading: "Online Payments",
      description: "100% Secure",
    },
    {
      icon: <PiPiggyBankBold color="#3d6ea6" />,
      heading: "Big Savings",
      description: "Save more with us",
    },
    {
      icon: <FaPeopleGroup color="#3d6ea6" />,
      heading: "Best online support",
      description: "Hours: 12*7",
    },
    {
      icon: <MdVerified color="#3d6ea6" />,
      heading: "100% Guarantee",
      description: "Original products",
    },
  ];
  return (
    <div className="bg-primary ">
      <CenterWrapper className={"space-y-4"}>
        <MainHeading className={"text-white font-bold"}>
          Why Buyers choose us?
        </MainHeading>
        <div className="flex items-center bg-white rounded-full w-fit">
          {[
            ["Buyers", true],
            ["Suppliers", false],
          ].map(([item, active], idx) => (
            <div
              key={idx}
              className={`p-3 ${
                active ? "bg-[#002648] text-white" : " bg-white text-black"
              }  rounded-full w-24 text-center`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {arr.map(({ icon, heading, description }, idx) => (
            <Card
              key={idx}
              icon={icon}
              heading={heading}
              description={description}
            />
          ))}
        </div>
      </CenterWrapper>
    </div>
  );
};

const Card = ({ icon, heading, description }) => {
  return (
    <div className="bg-[#FFFEFE4D] rounded-xl p-4 space-y-10 ">
      <div className="text-4xl w-fit p-8 bg-white rounded-full mx-auto">
        {icon}
      </div>
      <div className="space-y-2">
        <MainHeading className={"text-center"}>{heading}</MainHeading>
        <SubHeading className={"text-center text-[#3D3D3D]"}>
          {description}
        </SubHeading>
      </div>
    </div>
  );
};

export default WhyChoose_Brand;
