import ProductCard from "@/app/b2c/products/components/ProductCard";
import { MainHeading } from "@/components/MainHeading";
import React from "react";

function RelatedProducts() {
  const arr = [
    {
      id: 1,
      image: "https://picsum.photos/300/200?random=1",
      name: "Product 1",
      category: "Category 1",
      price: 100,
    },
    {
      id: 2,
      image: "https://picsum.photos/300/200?random=2",
      name: "Product 2",
      category: "Category 2",
      price: 200,
    },
    {
      id: 3,
      image: "https://picsum.photos/300/200?random=3",
      name: "Product 3",
      category: "Category 3",
      price: 300,
    },
    {
      id: 4,
      image: "https://picsum.photos/300/200?random=4",
      name: "Product 4",
      category: "Category 4",
      price: 300,
    },
  ];
  return (
    <div>
      <MainHeading className={"font-bold text-center mb-7"}>
        Related Products
      </MainHeading>
      <div className="flex gap-5 w-full justify-between">
        {arr.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
