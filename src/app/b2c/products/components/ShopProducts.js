"use client";
import React, { useEffect, useState } from "react";
import ViewProducts from "./ViewProducts";
import Filters from "./Filters";
import { Pagination } from "@mui/material";
import { API_URL } from "@/utils/constants";


export default  function ShopProducts({products, limit, page,TotalProducts}) {
  // const data = await getData();
  const [allProducts, setProducts] = useState(products);
  const [pageNumber,setPageNumber] = useState(page);
  const [limitNumber, setLimitNumber] = useState(limit);
  
  async function getData() {
    console.log("DATA");
    try {
      const response = await fetch(`${API_URL}/b2c/products?page=${pageNumber}&limit=${limitNumber}`, {
        next: {
          revalidate: 3600,
        },
      });
      const data = await response.json();
    setProducts(data.products);
    setPage(data.page);
    setLimit(data.limit);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
  
  useEffect(()=> {
    getData();
  }, [pageNumber, limitNumber]);
  return (

    <div key={1} className="flex justify-between gap-4">
      <div>
        <Filters />
      </div>
      <div>
        <ViewProducts products={allProducts} limit={limitNumber} page= {pageNumber} />
        <div className="mt-12 flex items-center justify-center">

      <Pagination onChange={(e,value)=> setPageNumber(value)} count={TotalProducts} variant="outlined"color="primary"  size="large"/>
        </div>
      </div>
    </div>
  );
}
