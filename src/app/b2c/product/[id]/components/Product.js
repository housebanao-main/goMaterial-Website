import React from "react";
import ProductDesc from "./ProductDesc";
import ProductCarousel from "./ProductCarousel";

function Product({ product }) {
  return (
    <div className="flex px-20 gap-7">
      <ProductCarousel product={product} />
      <ProductDesc product={product} />
    </div>
  );
}

export default Product;
