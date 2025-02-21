import React from "react";
import ProductDesc from "./ProductDesc";
import ProductCarousel from "./ProductCarousel";

function Product() {
  return (
    <div className="flex px-20 gap-7">
      <ProductCarousel />
      <ProductDesc />
    </div>
  );
}

export default Product;
