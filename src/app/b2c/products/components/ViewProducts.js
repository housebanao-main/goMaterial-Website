import React from 'react'
import ProductCard from './ProductCard';
import Link from 'next/link';

export default function ViewProducts({products, limit, page}) {
// console.log("PROPS", props);
    // const products = [
    //     { id: 1, name: 'Cutting Wheel', price: '₹589.70', image: 'https://picsum.photos/300/200?random=1', category: 'Cutter tools' },
    //     { id: 2, name: 'Driller machine', price: '₹360.00', image: 'https://picsum.photos/300/200?random=2', category: 'Cutter tools collection' },
    //     { id: 3, name: 'Electric cutter', price: '₹600.00 — ₹990.00', image: 'https://picsum.photos/300/200?random=3', category: 'Cutter tools collection' },
    //     { id: 4, name: 'Cutting Wheel', price: '₹589.70', image: 'https://picsum.photos/300/200?random=4', category: 'Cutter tools' },
    //     { id: 5, name: 'Driller machine', price: '₹360.00', image: 'https://picsum.photos/300/200?random=5', category: 'Cutter tools collection' },
    //     { id: 6, name: 'Electric cutter', price: '₹600.00 — ₹990.00', image: 'https://picsum.photos/300/200?random=6', category: 'Cutter tools collection' },
    //   ];
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <Link href={`/b2c/product/${product._id}`} key={product._id}>
      <ProductCard id={product._id} name={product.product_name} price={product.selling_price} image={product.main_image} category={product.prod_specs["Product Line"]}/>
      </Link>
    ))}



  </div>
  )
}


