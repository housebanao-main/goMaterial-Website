import CenterWrapper from "@/components/CenterWrapper";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Product from "./components/Product";
import TabSection from "./components/TabSection";
import RelatedProducts from "./components/RelatedProducts";
import axios from "axios";
import { API_URL } from "@/utils/constants";

async function getProduct(productId) {
  try {
    const data = await fetch(`${API_URL}/b2c/product/${productId}`, {
      next: {
        revalidate: 3600,
      },
    });
    const response = await data.json();
    return { ...response.product, quantity: 1 };
  } catch (error) {
    console.error(error);
    return;
  }
}

async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  // console.log(product);

  return (
    <Wrapper>
      <CenterWrapper className={"flex flex-col gap-y-20"}>
        <Product product={product} />
        <TabSection product={product} />
        <RelatedProducts product={product}  />
      </CenterWrapper>
    </Wrapper>
  );
}

export default ProductPage;
