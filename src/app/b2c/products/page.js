import Navbar from '@/app/components/Navbar'
import CenterWrapper from '@/components/CenterWrapper'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import ShopProducts from './components/ShopProducts'


import { API_URL } from "@/utils/constants";

async function getData(mainCategory,subCategory) {
  try {
  let baseUrl =`${API_URL}/b2c/products?page=1&limit=9`
  if(mainCategory){
    baseUrl+=`&mainCategory=${mainCategory}`
  }
  if(subCategory){
    baseUrl+=`&subCategory=${subCategory}`
  }
  console.log("BASE URL", baseUrl);
    const response = await fetch(baseUrl, {
      next: {
        revalidate: 3600,
      },
    });
    const data = await response.json();
    console.log("TOTAL PRODUCTS", data.TotalProducts)
    return data;

  } catch (error) {
    console.log(error.message);
    return [];
  }
}


export default async function Products({searchParams}) {
  const {mainCategory, subCategory} = await searchParams;
console.log("PROPS",mainCategory, subCategory);
  const data= await getData(mainCategory,subCategory);

  return (
    <Wrapper>
        <Navbar/>
<CenterWrapper>

<ShopProducts products= {data.products} limit = {data.limit} page= {data.page} TotalPages={data.TotalPages}  mainCategory={mainCategory} subCategory={subCategory}/>
</CenterWrapper>
    </Wrapper>
  )
}
