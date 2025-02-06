import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading, Paragraph, SubHeading } from "@/components/MainHeading";
import { FaRegCreditCard } from "react-icons/fa6";
import React from "react";
import { LuPiggyBank } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineVerified } from "react-icons/md";

const WhyChooseUs = () => {
  const arr = [
    {
      icon: <FaRegCreditCard />,
      heading: "Online Payments",
      description: "100% Secure",
    },
    {
      icon: <LuPiggyBank />,
      heading: "Online Payments",
      description: "100% Secure",
    },
    {
      icon: <IoIosPeople />,
      heading: "Online Payments",
      description: "100% Secure",
    },
    {
      icon: <MdOutlineVerified />,
      heading: "Online Payments",
      description: "100% Secure",
    },
  ];
  return (
    <div className="bg-[#F7F7F7] ">
      <CenterWrapper className={"space-y-8"}>
        <MainHeading className={"text-black font-bold"}>
          Why Buyers choose us?
        </MainHeading>
        <div className="flex items-center bg-[#0D68FB] rounded-full w-fit ">
          {[
            ["Buyers", false],
            ["Suppliers", true],
          ].map(([item, active], idx) => (
            <div
              key={idx}
              className={`py-2 ${
                active ? "bg- text-white" : " bg-white text-black"
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
              idx={idx}
            />
          ))}
        </div>
      </CenterWrapper>
    </div>
  );
};

const Card = ({ icon, heading, description, idx }) => {
  return (
    <div className="bg-[#FFFEFE4D] rounded-xl p-4 space-y-10 shadow-lg">
      <div
        className={`text-4xl w-fit p-8 ${
          idx == 0
            ? "bg-[#ECDAF2]"
            : idx == 1
            ? "bg-[#FFEDDE]"
            : idx == 2
            ? "bg-[#D9FCF6]"
            : "bg-[#E6F7FF]"
        } rounded-full mx-auto`}
      >
        {icon}
      </div>
      <div className="space-y-2">
        <SubHeading className={"text-center"}>{heading}</SubHeading>
        <SubHeading className={"text-center text-[#3D3D3D]"}>
          {description}
        </SubHeading>
      </div>
    </div>
  );
};

export default WhyChooseUs;
