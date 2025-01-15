import React from "react";
import CenterWrapper from "./CenterWrapper";
import { IoMdPricetags } from "react-icons/io";
import OrangeBtn from "./OrangeBtn";

const Header = () => {
  const arr = [
    {
      name: "Prices",
      icon: <IoMdPricetags />,
      link: "/",
    },
    {
      name: "Order",
      icon: <IoMdPricetags />,
      link: "/",
    },
    {
      name: "About us",
      icon: <IoMdPricetags />,
      link: "/",
    },
  ];
  return (
    <CenterWrapper className={"flex items-center justify-between pt-4 pb-4"}>
      <div className="text-primary text-xl font-bold">Go Materials</div>
      <div className="flex items-center gap-4 ">
        {arr.map(({ name, icon, link }, idx) => (
          <div key={idx} className="flex items-center gap-1.5 hover:underline hover:underline-offset-2 cursor-pointer">
{icon}{name}
          </div>
        ))}
       <OrangeBtn>Log in</OrangeBtn>
      </div>
    </CenterWrapper>
  );
};

export default Header;
