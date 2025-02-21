import CenterWrapper from "@/components/CenterWrapper";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Product from "./components/Product";
import TabSection from "./components/TabSection";

function ProductPage({ params }) {
  return (
    <Wrapper>
      <CenterWrapper>
        <Product />
        <TabSection />
      </CenterWrapper>
    </Wrapper>
  );
}

export default ProductPage;
