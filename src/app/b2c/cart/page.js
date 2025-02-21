import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading } from "@/components/MainHeading";
import Wrapper from "@/components/Wrapper";
import React from "react";
import CartItems from "./components/CartItems";
import CartTotals from "./components/CartTotals";

function CartPage() {
  return (
    <Wrapper>
      <CenterWrapper>
        <MainHeading className={"font-bold text-center"}>Your Cart</MainHeading>
        <div className="flex gap-x-10 w-full">
          <CartItems />
          <CartTotals />
        </div>
      </CenterWrapper>
    </Wrapper>
  );
}

export default CartPage;
