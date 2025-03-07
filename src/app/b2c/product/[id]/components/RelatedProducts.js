import ProductCard from "@/app/b2c/products/components/ProductCard";
import { MainHeading } from "@/components/MainHeading";
import { API_URL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const relatedProducts = async (product) => {
  const response = await fetch(
    `${API_URL}/b2c/products?mainCategory=${product.prod_specs["Product Type"]}&limit=4&exclude=${product._id}`
  );
  const products = await response.json();
  return products;
};

async function RelatedProducts({ product }) {
  const { products } = await relatedProducts(product);
  // console.log(products);

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
    <div className="px-20">
      <MainHeading className={"font-bold text-center mb-7"}>
        Related Products
      </MainHeading>
      <div className="grid grid-cols-4 gap-5 w-full justify-between">
        {products?.map((item, index) => (
          <Link href={`/b2c/product/${item._id}`} key={index}>
            <ProductCard
              key={index}
              id={item?._id}
              image={item?.main_image}
              name={item?.product_name}
              category={item?.prod_specs["Product Type"]}
              price={item?.selling_price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
