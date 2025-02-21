import CenterWrapper from "@/components/CenterWrapper";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Product from "./components/Product";
import TabSection from "./components/TabSection";
import RelatedProducts from "./components/RelatedProducts";

function ProductPage({ params }) {
  return (
    <Wrapper>
      <CenterWrapper className={"flex flex-col gap-y-20"}>
        <Product />
        <TabSection />
        <RelatedProducts />
      </CenterWrapper>
    </Wrapper>
  );
}

export default ProductPage;
